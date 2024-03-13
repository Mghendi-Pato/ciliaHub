import { Stack, Typography } from "@mui/material";
import Button from "../components/CustomButton";
import Toolbar from "@mui/material/Toolbar";
import Autotype from "../components/Autotype";

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
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ width: "100%" }}>
          <Stack sx={{ height: { xs: "120px", md: "auto" } }}>
            <Autotype />
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
          <Stack
            flexGrow={1}
            direction="row"
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            sx={{ width: "100%" }}>
            <Button text="Contact Us" />

            <Stack sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                src="Home_image.svg"
                alt="Home svg"
                title="Home svg"
                style={{ width: "200px" }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
