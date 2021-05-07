import Head from 'next/head'
import Header from "../components/Header"
import styles from '../styles/Home.module.css'
import headerStyle from "../styles/Header.module.css"
import TinderCard from "../components/TinderCard"
import tcStyle from "../styles/TinderCard.module.css"
import SwipeButtons from '../components/SwipeButton'
import Sbstyle from "../styles/SwipeButtons.module.css"
import {useAuth} from "../auth"
import firebase from "firebase/app"
import "firebase/auth"
import Link from 'next/link'

export default function Home() {
  const {user} = useAuth();
  return (
    <div>
      <div>{ user ? <TinderCard className={tcStyle.card}/> :  <Link href="/login">
          <a>Please Login to view possible matches :)</a>
        </Link>} </div>
    </div>
  )

}

  
 

