import { FormEvent, ChangeEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import TickIcon from "@mui/icons-material/CheckCircle";
import emailjs from "@emailjs/browser";

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";
import Heading from "components/common/Heading";

enum EmailStatus {
  IDLE = "IDLE",
  SENDING = "SENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

async function sendEmail(content: {
  user_name: string;
  user_email: string;
  message: string;
}) {
  try {
    await emailjs.send(
      "service_vyaue89",
      "template_ukrlwym",
      content,
      "neD53ahLvKudXA8iz"
    );
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = "Failed to send email! Please try again later.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
}

const ContactSection = () => {
  const { classes } = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState<EmailStatus>(EmailStatus.IDLE);

  const handleInputUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => {
    const newValue = e.target.value;
    const updatedValidationErrors = {
      name: "",
      email: "",
      message: "",
    };

    switch (type) {
      case "name": {
        if (!newValue) updatedValidationErrors.name = "Please enter your name";
        setName(newValue);
        break;
      }
      case "email": {
        if (
          !newValue ||
          !newValue.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        ) {
          updatedValidationErrors.email = "Please enter a valid email address";
        }
        setEmail(newValue);
        break;
      }
      case "message": {
        if (!newValue)
          updatedValidationErrors.message = "Please enter a message";
        setMessage(newValue);
        break;
      }
      default:
        break;
    }

    setValidationErrors(updatedValidationErrors);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedValidationErrors = { ...validationErrors };

    if (!name) {
      updatedValidationErrors.name = "Please enter your name";
    }

    if (
      !email ||
      !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      updatedValidationErrors.email = "Please enter a valid email address";
    }

    if (!message) {
      updatedValidationErrors.message = "Please enter a message";
    }

    setValidationErrors(updatedValidationErrors);
    if (Object.values(updatedValidationErrors).every((error) => !error)) {
      setEmailStatus(EmailStatus.SENDING);
      sendEmail({
        user_name: name,
        user_email: email,
        message,
      })
        .then(() => {
          setEmailStatus(EmailStatus.SUCCESS);
        })
        .catch(() => {
          setEmailStatus(EmailStatus.ERROR);
        });
    }
  };

  return (
    <SectionContainer id="contact">
      <div className={classes.container}>
        <div className={classes.contentLeft}>
          <div className={classes.description}>
            <Heading text="Contact" />
            {[EmailStatus.SENDING, EmailStatus.SUCCESS].some(
              (status) => status === emailStatus
            ) ? (
              <div className={classes.messageSent}>
                {emailStatus === EmailStatus.SUCCESS ? (
                  <>
                    <Typography variant="body1">
                      Thank you for your message, I will get back to you
                      promptly!
                    </Typography>
                    <TickIcon className={classes.messageSentIcon} />
                  </>
                ) : (
                  <Typography variant="body1">Sending...</Typography>
                )}
              </div>
            ) : (
              <>
                {emailStatus === EmailStatus.ERROR && (
                  <Typography variant="body1" color="error">
                    Failed to send email. Please try again!
                  </Typography>
                )}
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  Get in touch so we can discuss building your web app today!
                </Typography>
                <div className={classes.emailContainer}>
                  <MailIcon />
                  <a
                    href={`mailto:trev.cavill@outlook.com?subject=New%20Website%20Enquiry`}
                    target="_blank"
                    className={classes.emailText}
                  >
                    <Typography variant="body1">
                      trev.cavill@outlook.com
                    </Typography>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
        {[EmailStatus.IDLE, EmailStatus.ERROR].some(
          (status) => status === emailStatus
        ) && (
          <div className={classes.contentRight}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                fullWidth
                value={name}
                className={classes.textField}
                onChange={(e) => handleInputUpdate(e, "name")}
                error={!!validationErrors.name}
                helperText={validationErrors.name}
              />
              <TextField
                variant="outlined"
                type="email"
                label="Email"
                fullWidth
                value={email}
                className={classes.textField}
                onChange={(e) => handleInputUpdate(e, "email")}
                error={!!validationErrors.email}
                helperText={validationErrors.email}
              />
              <TextField
                variant="outlined"
                type="text"
                label="Message"
                multiline
                minRows={10}
                fullWidth
                value={message}
                className={classes.textField}
                onChange={(e) => handleInputUpdate(e, "message")}
                error={!!validationErrors.message}
                helperText={validationErrors.message}
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.submitButton}
              >
                Submit
              </Button>
            </form>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
