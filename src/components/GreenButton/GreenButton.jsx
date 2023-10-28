/* eslint-disable react/prop-types */
import styles from './GreenButton.module.css';


export default function GreenButton(props) {
  let{content}=props
  return <button className={styles.button}>{content}</button>;
}
