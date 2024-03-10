import { Stack } from "@mui/material";
import Logo from "./Logo";

function Footer() {
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
        <Logo />
      </Stack>
    </>
  );
}

export default Footer;
