import React, { useEffect, useState } from "react"
import axios from "axios"
import CharacterCard from "./CharacterCard"
import Header from "./Header"
import SearchFormDos from "./SearchFormDos"
import "./CharacterCard.css"

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [characterList, setCharacterList] = useState([])
    const [query, setQuery] = useState("")

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

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    return (
        <>
            <Header />
            <SearchFormDos
                handleInputChange={handleInputChange}
                query={query}
            />

            <section className='character-list'>
                <h2 id='RM'>Rick and Morty Characters</h2>
                {characterList
                    .filter(character =>
                        character.name
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    )
                    .map(character => {
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
