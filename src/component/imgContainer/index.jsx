import styles from "../imgContainer/imgContainer.module.scss"
const ImageContainer = ({imgUrl}) => {
  return (
    <>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={imgUrl} alt="image" />
        </div>
    </>
  )
}

export default ImageContainer