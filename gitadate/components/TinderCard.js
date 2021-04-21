import { StylesProvider } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import tcStyle from "../styles/TinderCard.module.css"
import database from '../services/firebase'

export default function TinderCards() {
    const [people, setPeople]= useState([
        { 
        name: "Loveleen Kaur",
        url: "https://media.istockphoto.com/photos/newborn-baby-girl-sleeping-in-bowl-picture-id636253690?k=6&m=636253690&s=612x612&w=0&h=JnniQUFMJe7NoXAFtJMnJQ5yuCwkbz4CHKO_G3zbsTc="
    },
    {
        name:"Billy ",
        url: "https://static.wikia.nocookie.net/villains/images/6/65/Billy-Hargrove-Season-3.png/revision/latest?cb=20190704212848"
    }
    ]);
    

    // useEffect(() => {
    //     // runs once and never again
    //     database.collection('people').onSnapshot(snapshot => {
    //         setPeople(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])
    return (
        <div className={tcStyle.tinderCards_cardContainer}>
            <h1>No More Matches Avaliable!</h1>
            {people.map(person =>(
                <TinderCard 
                className={tcStyle.swipe}
                key={person.name} 
                preventSwipe={["up", "down"]}>
                    <div style={{backgroundImage: `url(${person.url})`}} className={tcStyle.card}>
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}