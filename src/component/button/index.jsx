import styles from "../button/button.module.scss"
const Button = ({issue}) => {
  return (
    <>
    <button className={styles.btn}>{issue}</button>
    </>
  )
}

export default Button