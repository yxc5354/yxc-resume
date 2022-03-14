import styles from '../styles/Home.module.css'

import { workText } from '../const/homeText'

export default function Work() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>工作经历</h2>
      <ul>
        {workText.map((item, index) => {
          return (
            <li key={index}>
              <p className={styles['work-name']}>
                {item.compony}&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.datetime}>{item.dateTime}</span>
              </p>
              {/* <p className={styles.datetime}></p> */}
              <p>{item.desc}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
