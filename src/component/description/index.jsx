import styles from "../description/description.module.scss";

const Description = ({ dis,title }) => {
  return (
    <>
      <h1>{title}</h1>
      <p className={styles.dis}>
        {dis}
      </p>
    </>
  );
};

export default Description;
