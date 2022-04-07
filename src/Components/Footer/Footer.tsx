import logo from "../../Assets/afelogo-black-nobg.png"
import "./Footer.css"
import { useState, useEffect } from "react"

function Footer() {
  const [width, setWindowWidth] = useState(0)

  useEffect(() => { 

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => 
      window.removeEventListener('resize',updateDimensions);
   }, [])

const updateDimensions = () => {
  const width = window.innerWidth
  setWindowWidth(width)
}

const logoImage = () => {
  if (width > 425) {
    return <img src={logo} alt="afe-logo" className="logo" />
  }
}

  return (
    <footer className="footer">
    Copyright ©2022 Art for environment NFT. All Right Reserved
      {logoImage()}
  </footer>
)
}

export default Footer;