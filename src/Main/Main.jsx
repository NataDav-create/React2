import s from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={s.wrapper}>
        <div className={s.main}>
          <h1 className={s.mainHead}>
            {" "}
            Заголовок c уникальным торговым предложение по системе 4 U{" "}
          </h1>{" "}
          <div className={s.mainSmall}>
            {" "}
            Описания предлжения компании.Сайт рыбатекст поможет дизайнеру,
            верстальщику, вебмастеру сгенерировать несколько абзацев более.{" "}
          </div>{" "}
          <button className={s.btn + " " + s.mainBtn}>
            {" "}
            <span> Подробнее </span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default Main;
