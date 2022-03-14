import styles from '../styles/Home.module.css'

import { projectText } from '../const/homeText'

export default function Work() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>项目经历</h2>
      <ul>
        {projectText.map((item, index) => {
          return (
            <li key={index}>
              <p className={styles['work-name']}>{item.name}</p>
              <p className={styles.tech}>{item.technology}</p>
              <p>{item.desc}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
