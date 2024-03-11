import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: "2.3rem",
          color: "#fff",
        }}>
        cilia<span style={{ color: "#C6171E" }}>h</span>ub
      </Typography>
    </>
  );
};

export default Logo;
