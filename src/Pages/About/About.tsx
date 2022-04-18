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
            marginBottom: "5vw"
          }}
        >
          <img src={whiteLogo} style={{ width: "100%", height: "100%" }}></img>
        </div>
        <Typography
        variant="h3"
        align="center"
        component="div"
        gutterBottom
      >
        Established in 2022, AFE-NFT brings quality environmental artworks to the public and ensures their
secure ownership on the blockchain. The project also donates 20% of all proceeds from the sale of its
NFTs to reputable environmental charities and a significant proportion to the respective creators of the
works.
      </Typography>
        <div
          style={{
            width: "60%",
            height: "10vw",
            margin: "auto",
          }}
        ></div>
        <div
          style={{
            margin: "auto",
            marginTop: "10vw",
            marginBottom: "5vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "22%" }}>
            <Typography variant="h4" align="left" component="div" gutterBottom className={style.detail}>
              Jorn
            </Typography>
            <Typography variant="h4" align="right" component="div" gutterBottom className={style.detail}>
              Middelborg
            </Typography>
            <img width="100%" src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.6435-9/62258414_10211713225986000_6669460804774920192_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aLp_66-brwIAX-SJ8QC&_nc_oc=AQldvh8KcRW6Hqx9f9s3zgFut17WL4VhItN5oS_8_AisLWl91Xg3D-QwTZZm_pfDh8Y&tn=2oXorfxf-rXozr-d&_nc_ht=scontent.fbkk12-3.fna&oh=00_AT8-g5YFUq_fH-bTd13a3UE_2iyYWbDY0xiB-nJ-jMKzOQ&oe=628186E0"/>
            <Typography
              variant="body1"
              align="center"
              component="div"
              gutterBottom
              className={style.detail}
            >
              With over 20 years of experience dealing in modern and
              contemporary art across Southeast Asia, Jorn stands at the helm of
              the AFE-NFT project. He gained his unparalleled expertise in the
              industry first as the Founder and Managing Director of THAVIBU
              Gallery, and later as the Founder and CEO of THAVIBU Art Advisory.
              He also currently serves as a jury member of the NFT Creative
              Awards&#x2122;
            </Typography>
          </div>
          <div style={{ width: "22%", height: "25vw" }}>
            <Typography variant="h4" align="left" component="div" gutterBottom className={style.detail}>
              Yauvapa ("Derek")
            </Typography>
            <Typography variant="h4" align="right" component="div" gutterBottom className={style.detail}>
              Siriwattasit
            </Typography>
            <img width="100%" src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/241380678_10159612365443670_5475116588923327052_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7crZjMZ0IaoAX-Z_bT5&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT_37MaVHQKkJHHGAglHSVTBMCWxKGEEqfZTHDUmNt1hYw&oe=626188EB"/>
            <Typography
              variant="body1"
              align="center"
              component="div"
              gutterBottom
              className={style.detail}
            >
              Derek is a Patent Consultant at one of the most prominent
              international law firms in Bangkok. Equipped with a keen interest
              in all things blockchain and crypto, alongside their supporting
              legal framework, he takes charge of regulatory compliance at
              AFE-NFT. Exciting? For him, it definitely is. He further ensures
              that all NFT-related transactions performed on and through this
              website remain legal, above board and in line with existing
              privacy laws.
            </Typography>
          </div>
          <div style={{ width: "22%", height: "25vw" }}>
            <Typography variant="h4" align="left" component="div" gutterBottom className={style.detail}>
              Supanat
            </Typography>
            <Typography variant="h4" align="right" component="div" gutterBottom className={style.detail}>
              Wanroj
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
