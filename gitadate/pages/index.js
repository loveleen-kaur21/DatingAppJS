import Head from 'next/head'
import Header from "../components/Header"
import styles from '../styles/Home.module.css'
import headerStyle from "../styles/Header.module.css"
import TinderCard from "../components/TinderCard"
import tcStyle from "../styles/TinderCard.module.css"
import SwipeButtons from '../components/SwipeButton'
import Sbstyle from "../styles/SwipeButtons.module.css"

export default function Home() {
  return (
    <div >
      <TinderCard className={tcStyle.card}/>
      <SwipeButtons className={Sbstyle.SwipeButtons}/>
    </div>
  )
}


