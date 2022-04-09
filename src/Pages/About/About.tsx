import Typography from "@mui/material/Typography";
import NavBar from "../../Components/NavBar/NavBar";
import translation from "../../Locals/en.json";
import style from "./About.module.css";
import whiteLogo from "../../Assets/afelogo-left-white-nobg.png";

const About = () => {
  const trans = translation.AboutPage;

  return (
    <div>
      <NavBar />
      <Typography
        variant="h1"
        align="center"
        component="div"
        gutterBottom
        className={style.header}
      >
        {trans.title}
      </Typography>
      <div style={{ padding: "0vw 5vw" }}>
        <div
          style={{
            width: "30%",
            height: "10vw",
            margin: "auto",
            marginTop: "10vw",
          }}
        >
          <img src={whiteLogo} style={{ width: "100%", height: "100%" }}></img>
        </div>
        <div
          style={{
            width: "60%",
            height: "10vw",
            margin: "auto",
          }}
        >
        </div>
        <div
          style={{
            margin: "auto",
            marginTop: "10vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{ width: "22%", height: "25vw", backgroundColor: "white" }}
          >
            <Typography variant="h4" align="left" component="div" gutterBottom>
              Jorn
            </Typography>
          </div>
          <div
            style={{ width: "22%", height: "25vw", backgroundColor: "white" }}
          ></div>
          <div
            style={{ width: "22%", height: "25vw", backgroundColor: "white" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
