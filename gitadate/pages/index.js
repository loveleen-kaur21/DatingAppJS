import React from "react"
import Link from "next/link"
import {useAuth} from "../auth"
import style from "../styles/Home.module.css"
import firebase from "firebase/app"
import "firebase/auth"

export default function Home() {
  const {user} = useAuth();

  return (
    <div className={style.container}>
      <h1 > Welcome to Git A Date</h1>
      <p>{`${user ? user.uid : "Please Login or Sign up to get started!"}`}</p>
      <button disabled={!user}><Link href="/login"><a> Login</a></Link> </button>
      <button disabled={!user}><Link href="/authenticated"><a> Go to authenticated</a></Link> </button>
    </div>
  )
}


