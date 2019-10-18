import React, { useEffect, useState } from "react"
import axios from "axios"
// import Header from "./components/Header.js"
import CharacterCard from "./CharacterCard"
import { Container } from "reactstrap"

export default function CharacterList(props) {
    // TODO: Add useState to track data from useEffect
    const [chars, setChars] = useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => {
                setChars(response.data)
                // console.log(response.data)
            })
            .catch(error => {
                console.log("No bueno", error)
            })
    }, [])

    return (
        <Container>
            {chars.map(char => {
                return (
                    <CharacterCard
                        key={char.id}
                        user={char.userId}
                        body={char.body}
                        title={char.title}
                    />
                )
            })}
        </Container>
    )
}
