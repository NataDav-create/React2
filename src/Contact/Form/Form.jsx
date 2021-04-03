import s from "./Form.module.css";
import Input from "../Input";

const Form = () => {
  return (
    <div>
      <form action="../mailer.smart.php" className={s.contactForm}>
        <Input type="text" placeholder="Ваше имя" />
        <Input type="tel" placeholder="Телефон" />
        <Input type="email" placeholder="E-mail" />
        <button className={s.btn + " " + s.contactBtn}>
          <span> Позвоните мне </span>
        </button>{" "}
      </form>
    </div>
  );
};

export default Form;
