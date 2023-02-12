import { FormEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";

import { useStyles } from "./styles";
import SectionContainer from "components/layout/SectionContainer";
import Heading from "components/common/Heading";

function postFormData(formData: FormData) {
  return fetch("/contact_form.php", {
    method: "POST",
    body: formData,
  });
}

const ContactSection = () => {
  const { classes } = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    postFormData(formData)
      .then(() => {
        console.info("Form data sent successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SectionContainer id="contact">
      <div className={classes.container}>
        <div className={classes.contentLeft}>
          <div className={classes.description}>
            <Heading text="Contact" />
            <Typography
              variant="body1"
              style={{ fontSize: "1.3rem", color: "#ffffff" }}
            >
              Get in touch so we can discuss building your web app today!
            </Typography>
            <div className={classes.emailContainer}>
              <MailIcon />
              <a
                href={`mailto:trev.cavill@outlook.com?subject=New%20Website%20Enquiry`}
                target="_blank"
                className={classes.emailText}
              >
                <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                  trev.cavill@outlook.com
                </Typography>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.contentRight}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              variant="outlined"
              type="text"
              label="Name"
              fullWidth
              value={name}
              className={classes.textField}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              fullWidth
              value={email}
              className={classes.textField}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
