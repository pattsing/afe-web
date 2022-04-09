import Typography from "@mui/material/Typography";
import NavBar from "../../Components/NavBar/NavBar";
import translation from "../../Locals/en.json";
import style from "./About.module.css";

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
            backgroundColor: "white",
            margin: "auto",
            marginTop: "10vw",
          }}
        >
          LOGO
        </div>
        <div style={{margin: "auto", marginTop:"10vw"}}>
          <div style={{width:"25%", height:"25vw", backgroundColor: "white"}}></div>
          <div style={{width:"25%", height:"25vw", backgroundColor: "white"}}></div>
          <div style={{width:"25%", height:"25vw", backgroundColor: "white"}}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
