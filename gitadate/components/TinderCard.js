import { StylesProvider } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import tcStyle from "../styles/TinderCard.module.css"
import database from '../services/firebase'

export default function TinderCards() {
    const [people, setPeople]= useState([]);
    useEffect(() => {
        // runs once and never again
        database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
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