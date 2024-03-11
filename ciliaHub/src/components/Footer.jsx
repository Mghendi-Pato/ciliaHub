import { Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        flexGrow={1}
        alignItems={{ xs: "left", md: "flex-start" }}
        justifyContent="space-between"
        sx={{
          background: "#1E1E1E",
          py: 10,
          px: { xs: 5, sm: "10vw", md: "15vw", lg: "20vw" },
        }}>
        <Stack spacing={2} sx={{ mb: 5 }}>
          <Logo />
          <Typography sx={{ color: "#fff" }}>
            2024@ciliaHub. All rights reserved.
          </Typography>
          <Typography sx={{ color: "#fff" }}>Designed by ciliaHub. </Typography>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" sx={{ pt: 1 }}>
            <MailOutlineIcon sx={{ color: "#fff", fontSize: 30 }} />
            <Typography sx={{ ml: 2, color: "#fff" }}>
              support@juliahub.com
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <WhatsAppIcon sx={{ color: "#fff", fontSize: 30 }} />
            <Typography sx={{ ml: 2, color: "#fff" }}>+254101965659</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <FacebookOutlinedIcon sx={{ color: "#fff", fontSize: 30 }} />
            <XIcon sx={{ color: "#fff", fontSize: 30 }} />
            <InstagramIcon sx={{ color: "#fff", fontSize: 30 }} />
            <LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Footer;
