import s from "./Header.module.css";
import Logo from "../Components/Logo";

const Header = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.header}>
          <a href="#">
            <Logo />
          </a>
          <a href="tel:888" className={s.headerPhone}></a>
          <div className={s.headerPhonelink}>
            <a href="tel:7(962)556-1234"> +7(962) 556 - 1234 </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
