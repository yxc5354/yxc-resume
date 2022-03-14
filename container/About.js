import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>关于我</h2>
      {/* <p className={styles.introduce}>
        三年工作经验，主要从事前端开发工作，对后端亦有一定程度的涉猎。前端开发主要接触Vue相关的开发，React、小程序的开发亦有参与。
      </p> */}
      {/* 联系方式 */}
      <h3 className={styles['small-title']}>联系方式</h3>
      <ul>
        <li>
          <p>电话：+8615622281238</p>
        </li>
        <li>
          <p>邮箱：565294508@qq.com</p>
        </li>
        <li>
          <p>QQ：565294508</p>
        </li>
      </ul>
      {/* 教育经历 */}
      <h3 className={styles['small-title']}>教育经历</h3>
      <ul>
        <li>
          <span>广州大学华软软件学院</span>
          <span className={styles.teach}>
            软件工程&nbsp;&nbsp;本科&nbsp;&nbsp;2018届
          </span>
        </li>
      </ul>
    </div>
  )
}
