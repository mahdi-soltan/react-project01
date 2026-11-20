import Button from "../button";
import styles from "../card/card.module.scss";
import Description from "../description";
import ImageContainer from "../imgContainer";
const Card = () => {
  const dis = " ";
  return (
    <>
      <div className={styles.container}>
        <ImageContainer imgUrl="/react-project01/image/car.jpg" />
        <Description
          dis=" Some things never lose their beauty… 🍂🚘

               An old car, an autumn street, and a thousand memories hidden in every fallen leaf. Sometimes, the past feels more beautiful than the present.

               **Nostalgia is the best ride.** 🤎"
          title={"nostalgic Car is best"}
        />
        <div className={styles.btnContainer}>
          <Button issue={"SHARE"} />
          <Button issue={"LEARN MORE"} />
        </div>
      </div>
    </>
  );
};

export default Card;
