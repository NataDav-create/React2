import s from "./Footer.module.css";
import Logo from "../Components/Logo";

const name = "Natalia Davydova";

const Footer = () => {
  const footerLogoStyle = {
    marginLeft: `16px`,
  };
  return (
    <footer>
      <div className={s.footer}>
        <Logo style={footerLogoStyle} />
        <div className={s.footerCompany}>
          {" "}
          <span>©2020 XXXcompany. Все права защищены.</span>
        </div>
        <a href="tel:888" className={s.footerPhone}>
          {" "}
        </a>{" "}
        <div className={s.footerWebsurfer}>
          {" "}
          <span className={s.footerWebsurferBuild}> Сделано </span>{" "}
          <a href="#"> {name} </a>
        </div>
        <div className={s.footerPhonelink}>
          {" "}
          <a href="tel:888"> +7(962) 556 - 1234 </a>
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
