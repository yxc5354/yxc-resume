import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Skill from '../container/Skill'
import Work from '../container/Work'
import Project from '../container/Project'
import About from '../container/About'
// import { MailOutlined } from '@ant-design/icons'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>叶肇才个人简历</title>
        {/* <meta name='description' content='叶肇才前端开发个人简历' /> */}
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main>
        <h1 className={styles.name}>叶肇才</h1>
        <div className={styles.info}>前端开发</div>
        <About />
        <Skill />
        <Work />
        <Project />
      </main>

      <footer className={styles.footer}>{/* Copyright © 2021 */}</footer>
    </div>
  )
}
