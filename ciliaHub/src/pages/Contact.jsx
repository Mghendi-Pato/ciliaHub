import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "../components/CustomButton";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const Contact = () => {
  const [alert, setAlert] = useState(null);

  const validationSchema = yup.object({
    lastName: yup.string().required("Last Name is required"),
    firstName: yup.string().required("First Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    message: yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Email.js setup
      const serviceId = "service_aanz72k";
      const templateId = "template_1gxenke";
      const publicKey = "BDNfTWBd-AHB-OapL";

      const templateParams = {
        from_name: `${values.lastName} ${values.firstName}`,
        from_email: values.email,
        to_name: "ciliahub",
        message: values.message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          setAlert({
            variant: "outlined",
            severity: "success",
            message: "Message sent successfully",
            details: response.message,
          });

          setTimeout(() => {
            formik.handleReset();
            setAlert(null);
          }, 5000);
        })
        .catch((error) => {
          setAlert({
            variant: "outlined",
            severity: "error",
            message: "Message sending failed",
            details: error.message,
          });

          setTimeout(() => {
            setAlert(null);
          }, 5000);
        });
    },
  });

  return (
    <div id="contact">
      <Stack
        flexGrow={1}
        sx={{
          px: { xs: 2, sm: "10vw", md: "15vw", lg: "20vw" },
          py: 12,
        }}>
        <Stack justifyContent="center" alignItems="center">
          <img
            src="contact.svg"
            alt="Home svg"
            title="Home svg"
            style={{ width: "200px" }}
          />
          <Typography
            variant="h4"
            sx={{
              my: 3,
              fontWeight: "bold",
              fontFamily: '"Roboto", sans-serif',
              color: "#1E1E1E",
            }}>
            Get in Touch
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "5F5D5F",
              width: { xs: "95vw", md: "30vw" },
            }}>
            Get in touch, leave a message and our vibrant team will get back to
            you within the shortest time possible through the email you provide.
          </Typography>
        </Stack>
        {alert && (
          <Slide
            direction="left"
            in={Boolean(alert)}
            mountOnEnter
            unmountOnExit>
            <Alert variant={alert.variant} severity={alert.severity}>
              {alert.message}
            </Alert>
          </Slide>
        )}
        <Stack sx={{ my: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <Typography>
                Last Name <span style={{ color: "#C6171E" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                id="lastName"
                name="lastName"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                autoComplete="off"
                fullWidth
              />

              <Typography>
                First Name <span style={{ color: "#C6171E" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                id="firstName"
                name="firstName"
                type="text"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                autoComplete="off"
                fullWidth
              />

              <Typography>
                Email <span style={{ color: "#C6171E" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autoComplete="off"
                fullWidth
              />

              <Typography>
                Message <span style={{ color: "#C6171E" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
                multiline
                rows={4}
                id="message"
                name="message"
                type="text"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                autoComplete="off"
                fullWidth
              />
              <Typography sx={{ color: "#5F5D5F" }}>
                By sending this message, you consent to ciliaHub sending you
                emails.
              </Typography>
              <Button text="Send Message" type="submit" />
            </Stack>
          </form>
        </Stack>
      </Stack>
    </div>
  );
};

export default Contact;
