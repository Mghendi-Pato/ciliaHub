import { Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
const Services = () => {
  return (
    <>
      <Stack
        flexGrow={1}
        sx={{
          background: "#D9D9D9",
          px: { xs: 5, sm: "10vw", md: "15vw", lg: "20vw" },
          py: 12,
        }}>
        <Stack direction="row" justifyContent="center">
          <Typography
            variant="h4"
            sx={{
              my: 3,
              fontWeight: "bold",
              fontFamily: '"Roboto", sans-serif',
              color: "#1E1E1E",
            }}>
            Services
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center">
          <Stack
            direction="column"
            spacing={2}
            alignItems="flex-start"
            sx={{ width: "200px", border: "solid 2px #C4C4C4", p: 2 }}>
            <AdbIcon sx={{ fontSize: 50, color: "#C6171E" }} />
            <Typography>UI/UX Design</Typography>
            <Typography sx={{ color: "#6F6F6F" }}>
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            alignItems="flex-start"
            sx={{ width: "200px", border: "solid 2px #C4C4C4", p: 2 }}>
            <AdbIcon sx={{ fontSize: 50, color: "#C6171E" }} />
            <Typography>UI/UX Design</Typography>
            <Typography sx={{ color: "#6F6F6F" }}>
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            alignItems="flex-start"
            sx={{ width: "200px", border: "solid 2px #C4C4C4", p: 2 }}>
            <AdbIcon sx={{ fontSize: 50, color: "#C6171E" }} />
            <Typography>UI/UX Design</Typography>
            <Typography sx={{ color: "#6F6F6F" }}>
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Services;
