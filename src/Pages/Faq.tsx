import Container from "@mui/material/Container";
import NavBar from "../Components/NavBar/NavBar";
import temp_img from "../Assets/temp_img.jpg"

const Faq = () => {
  return (
    <Container style={{ backgroundColor: "gray" }}>
      <NavBar />
      <img src={temp_img} style={{width: "100%", height:"20vh", overflow: "hidden"}}/>
      <div>FAQ</div>
    </Container>
  );
};

export default Faq;
