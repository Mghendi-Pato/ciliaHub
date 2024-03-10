import { Stack, Typography } from "@mui/material";
import Button from "../components/CustomButton";
import Toolbar from "@mui/material/Toolbar";

const Home = () => {
  const commonTypographyStyles = {
    fontFamily: '"Roboto", sans-serif',
    color: "#fff",
  };

  return (
    <>
      <Stack
        direction="column"
        flexGrow={1}
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{
          background: "#1E1E1E",
          py: 10,
          px: { xs: 0, sm: "10vw", md: "15vw", lg: "20vw" },
        }}>
        <Toolbar />
        <Toolbar />
        <Stack
          spacing={5}
          direction="column"
          justifyContent="space-around"
          alignItems={{ xs: "center", md: "flex-start" }}>
          <Stack>
            <Typography variant="h5" sx={{ ...commonTypographyStyles }}>
              Let’s Design, Let’s Develop
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                ...commonTypographyStyles,
                width: "350px",
                textAlign: { xs: "center", md: "left" },
              }}>
              CiliaHub is committed to transforming the world through innovative
              tech ideas, in mobile and web design, and development.
            </Typography>
          </Stack>
          <Stack>
            <Button text="Contact Us" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
