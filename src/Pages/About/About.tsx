import { Avatar } from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";
import translation from "../../Locals/en.json";
import Container from "@mui/material/Container";
import "./About.css";
import whiteLogo from "../../Assets/afelogo-left-white-nobg.png";

const About = () => {
  const trans = translation.AboutPage;

  return (
    <div className="about-wrapper" id="about">
      <Container>
        <div className="logo-wrapper">
          <img src={whiteLogo} style={{ width: "40%" }} />
        </div>
        <div className="desc">{trans.desc}</div>
        <div className="team-wrapper">
          <div className="team-container">
            <div className="avatar-wrapper">
              <Avatar
                alt="John"
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/62258414_10211713225986000_6669460804774920192_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aLp_66-brwIAX-SJ8QC&_nc_oc=AQldvh8KcRW6Hqx9f9s3zgFut17WL4VhItN5oS_8_AisLWl91Xg3D-QwTZZm_pfDh8Y&tn=2oXorfxf-rXozr-d&_nc_ht=scontent.fbkk12-3.fna&oh=00_AT8-g5YFUq_fH-bTd13a3UE_2iyYWbDY0xiB-nJ-jMKzOQ&oe=628186E0"
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <div className="name">{trans.john}</div>
            <div className="team-desc">{trans.johnDesc}&#x2122;</div>
          </div>
          <div className="team-container">
            <div className="avatar-wrapper">
              <Avatar
                alt="derek"
                src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/241380678_10159612365443670_5475116588923327052_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7crZjMZ0IaoAX-Z_bT5&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_37MaVHQKkJHHGAglHSVTBMCWxKGEEqfZTHDUmNt1hYw&oe=626188EB"
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <div className="name">{trans.derek}</div>
            <div className="team-desc">{trans.derekDesc}</div>
          </div>
          <div className="team-container">
            <div className="avatar-wrapper">
              <Avatar
                alt="John"
                src="https://mildspace.files.wordpress.com/2022/04/jn2_0022.jpg?resize=214%2C214"
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <div className="name">{trans.supanat}</div>
            <div className="team-desc">{trans.johnDesc}&#x2122;</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
