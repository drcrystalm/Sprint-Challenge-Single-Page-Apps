import React, { useEffect, useState } from "react"
import axios from "axios"
import CharacterCard from "./CharacterCard"
import Header from "./Header"
import SearchForm from "./SearchForm"

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(`https://rickandmortyapi.com/api/character`)
            .then(response => {
                setCharacterList(response.data.results)
                console.log(response.data.results)
            })
            .catch(error => {
                console.log("No good, fool!", error)
            })
    }, [])

    return (
        <>
            <Header />
            <SearchForm />

            <section className='character-list'>
                <h2>Rick and Morty Characters</h2>
                {characterList.map(character => {
                    return (
                        <CharacterCard
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            image={character.image}
                        />
                    )
                })}
            </section>
        </>
    )
}
