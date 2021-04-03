import s from "./Features.module.css";
import FeaturesSlider from "./FeaturesSlider";

const Features = () => {
  return (
    <section className={s.features}>
      <div className={s.wrapper}>
        <div className={s.featuresWrapper}>
          <h2 className={s.featuresHead}>
            {" "}
            Уникальный заголовок для преимущества компании{" "}
          </h2>{" "}
          <div className={s.featuresSubhead}> О нас </div>{" "}
          <div className={s.featuresDescription}>
            {" "}
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить.{" "}
          </div>{" "}
          <FeaturesSlider />
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Features;
