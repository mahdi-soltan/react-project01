import Button from "../button";
import styles from "../card/card.module.scss";
import Description from "../description";
import ImageContainer from "../imgContainer";
const Card = () => {
  const dis =
    " Hello Omid Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta alias commodi. Veritatis ut optio sapiente dolores cum nihil in, qui delectus odio eligendi autem minima totam. Distinctio, expedita dolorum.";
  return (
    <>
      <div className={styles.container}>
        <ImageContainer imgUrl="/react-project01/image/car.jpg" />
        <Description dis={dis} title={"nostalgic Car is best"} />
        <div className={styles.btnContainer}>
          <Button issue={"SHARE"} />
          <Button issue={"LEARN MORE"} />
        </div>
      </div>
    </>
  );
};

export default Card;
