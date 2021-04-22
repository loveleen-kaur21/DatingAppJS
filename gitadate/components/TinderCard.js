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
    const [people, setPeople]= useState([
        { 
        name: "Andy ",
        url: "https://scontent.fjan1-1.fna.fbcdn.net/v/t1.6435-9/150180372_258549145840383_9022810183650804089_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nubBEcicVx4AX-XEZjl&_nc_ht=scontent.fjan1-1.fna&oh=600cc908cf5c94a6524446cbdd973688&oe=60A7E451"
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
>>>>>>> 74541e3e0eca964fd1a7c4d5725bf351102ab669
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