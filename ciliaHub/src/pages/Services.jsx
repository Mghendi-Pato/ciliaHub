import { Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import services from "../data/services.json";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
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
          alignItems={{ xs: "center", md: "flex-start" }}>
          {services.map((service, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={2}
              alignItems="flex-start"
              sx={{
                width: "310px",
                height: "520px",
                border: "solid 2px #C4C4C4",
                p: 2,
              }}>
              <AdbIcon sx={{ fontSize: 50, color: "#C6171E" }} />
              <Typography>{service.name}</Typography>
              <ul style={{ color: "#6F6F6F", paddingLeft: 20 }}>
                {service.data.map((item, index) => (
                  <li key={index} style={{ listStyleType: "disc" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Services;
