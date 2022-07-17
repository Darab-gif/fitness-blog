import style from "./headcategory.module.css";

const HeadCategory = ({ title }) => {
  return (
    <section className={style.container}>
      <h2>{title}</h2>
      <p>See More</p>
    </section>
  );
};

export default HeadCategory;
