import Head from 'next/head'
import Header from "../components/Header"
import styles from '../styles/Home.module.css'
import headerStyle from "../styles/Header.module.css"


export default function Home() {
  return (
    <div >
      <Header className={headerStyle.header}/>

    </div>
  )
}


