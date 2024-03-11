import { Stack, Typography } from "@mui/material";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../components/CustomButton";

const Contact = () => {
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
      console.log(values);
      // Your submit logic goes here
    },
  });

  return (
    <>
      <Stack
        flexGrow={1}
        sx={{
          px: { xs: 2, sm: "10vw", md: "15vw", lg: "20vw" },
          py: 12,
        }}>
        <Stack justifyContent="center" alignItems="center">
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
              <Button text="Send Message" />
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;
