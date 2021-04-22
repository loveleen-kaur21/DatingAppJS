import React from "react"
import Link from "next/link"
import {useAuth} from "../auth"


export default function Home() {
  const {user} = useAuth();

  return (
    <div >
      <h1> Welcome to Git A Date</h1>
      <p>{`User ID : ${user ? user.uid : "No user signed in"}`}</p>
      <button disabled={!user}><Link href="/authenticated"><a> Go to authenticated</a></Link> </button>
      <button disabled={!user}><Link href="/login"><a> Login</a></Link> </button>
    </div>
  )
}


