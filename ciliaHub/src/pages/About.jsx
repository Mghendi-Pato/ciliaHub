import { Stack, Typography } from "@mui/material";
import Button from "../components/CustomButton";

const About = () => {
  return (
    <>
      <Stack direction="column" alignItems="center" spacing={5} sx={{ py: 15 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: '"Roboto", sans-serif',
            color: "#1E1E1E",
          }}>
          About Us
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "5F5D5F",
            width: { xs: "95vw", md: "30vw" },
          }}>
          A dedicated Africa-based technology company with quality services
          guaranteeing satisfaction of customers' needs worldwide. With a
          vibrant team of experienced professionals, ciliaHub delivers results
          by adhering to best practices and embracing the latest technologies.
        </Typography>
        <Button text="Get In Touch" />
      </Stack>
    </>
  );
};

export default About;
