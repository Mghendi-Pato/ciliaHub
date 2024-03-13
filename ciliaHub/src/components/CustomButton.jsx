import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Button1 = (props) => {
  const { text, scrollToSection, sectionId, width, ...rest } = props;

  const handleClick = () => {
    if (scrollToSection && sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <>
      <Button
        {...rest}
        variant="contained"
        onClick={handleClick}
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
            fontSize: { md: 12, lg: 16 },
            color: "#fff",
          }}>
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default Button1;
