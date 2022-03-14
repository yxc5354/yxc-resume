import styles from '../styles/Home.module.css'

import { skillText } from '../const/homeText'

export default function Skill() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>技能</h2>
      <ul>
        {skillText.map((item, index) => {
          return (
            <li key={index}>
              <p>{item}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
