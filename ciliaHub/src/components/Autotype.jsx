import { useEffect, useRef } from "react";
import Typed from "typed.js";
import useMediaQuery from "@mui/material/useMediaQuery";

function Autotype() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Let’s Design, Let’s Develop",
        "Crafting Digital Solutions, One Line of Code at a Time",
        "Transforming Ideas into Code, Empowering Your Vision",
        "Code with Purpose, Create with Passion",
        "Building Digital Dreams, Line by Line",
        "From Concept to Code: Bringing Your Ideas to Life",
        "Where Innovation Meets Implementation: Let's Code Your Success",
        "Empowering Innovation Through Expert Codecraft",
        "Coding Excellence, Delivering Beyond Expectations",
        "Architecting Tomorrow's Technology, Today",
      ],

      smartBackspace: true,
      loop: true,
      typeSpeed: 60,
      backSpeed: 10,
      shuffle: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        color: "#fff",
        fontWeight: "bold",
        fontSize: isSmallScreen ? "1.8em" : "2em",
        textAlign: isSmallScreen ? "center" : "left",
      }}>
      <span ref={el} />
    </div>
  );
}

export default Autotype;
