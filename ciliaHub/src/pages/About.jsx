import { Stack, Typography } from "@mui/material";
import Button from "../components/CustomButton";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const About = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="about">
      <Stack
        direction="column"
        alignItems="center"
        spacing={5}
        sx={{ py: 15, mx: 5 }}>
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
            textAlign: { xs: "center", md: "left" },
            color: "5F5D5F",
            width: { xs: "95vw", md: "50vw" },
          }}>
          Welcome to ciliaHub Technologies – a distinguished Africa-based
          technology company dedicated to delivering top-notch services that
          meet the diverse needs of clients across the globe. Our vibrant team
          of seasoned professionals is committed to providing exceptional
          solutions by adhering to industry best practices and embracing the
          latest technologies.
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            color: "5F5D5F",
            width: { xs: "95vw", md: "50vw" },
          }}>
          At ciliaHub, we take pride in our innovative approach, creative
          solutions, and unwavering commitment to customer satisfaction. Our
          experienced professionals ensure the highest quality results,
          positioning ciliaHub as a trusted partner for businesses seeking
          cutting-edge UI/UX design, robust frontend development, and powerful
          backend solutions.
        </Typography>
        <Typography
          sx={{
            color: "5F5D5F",
            width: { xs: "95vw", md: "50vw" },
            fontWeight: "bold",
          }}>
          Why Choose ciliaHub Technologies?
        </Typography>
        <Stack
          component="ul"
          spacing={1}
          sx={{
            color: "#5F5D5F",
            width: { xs: "95vw", md: "50vw" },
            listStyleType: "none",
            paddingLeft: 0,
          }}>
          <li>
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatshotIcon sx={{ color: "#C6171E" }} />
              <Typography>
                Comprehensive technology solutions tailored to your
                requirements.
              </Typography>
            </Stack>
          </li>
          <li>
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatshotIcon sx={{ color: "#C6171E" }} />
              <Typography>
                A dedicated team of experienced professionals.
              </Typography>
            </Stack>
          </li>
          <li>
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatshotIcon sx={{ color: "#C6171E" }} />
              <Typography>
                Adherence to industry best practices and the latest
                technologies.
              </Typography>
            </Stack>
          </li>
          <li>
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatshotIcon sx={{ color: "#C6171E" }} />
              <Typography>
                Commitment to innovation, creativity, and excellence.
              </Typography>
            </Stack>
          </li>
        </Stack>

        <Button
          text="Get in touch"
          scrollToSection={scrollToSection}
          sectionId="contact"
        />
      </Stack>
    </div>
  );
};

export default About;
