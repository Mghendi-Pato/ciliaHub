import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Button1 = (props) => {
  const { text, width } = props;
  return (
    <>
      <Button
        variant="contained"
        {...props}
        sx={{
          textTransform: "none",
          borderRadius: 0,
          background: "#C6171E",
          width: width ? width : { xs: "90vw", sm: "10rem" },
          fontSize: {
            xs: "0.8rem",
            sm: "0.875rem",
          },
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { md: 10, lg: 12 },
            color: "#fff",
          }}>
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default Button1;
