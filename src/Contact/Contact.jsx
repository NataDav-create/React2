import s from "./Contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      {" "}
      <section className={s.contact}>
        {" "}
        <div className="wrapper">
          {" "}
          <div className={s.contactWrapper}>
            {" "}
            <h2 className={s.contactTitle}> Остались вопросы ? </h2>{" "}
            <div className={s.contactDescription}>
              {" "}
              Оставьте номер телефона, и мы перезвоним вам{" "}
            </div>{" "}
            <Form />{" "}
            <div className={s.contactPersonal}>
              {" "}
              Я даю своё <a href="#"> согласие </a> на обработку моих
              персональных данных.{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};

export default Contact;
