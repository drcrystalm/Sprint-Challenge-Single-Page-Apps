import React, { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "reactstrap"
export default function SearchForm(props) {
    const [value, setValue] = useState("")
    const [result, setResult] = useState([])

    const searchAPI = "https://rickandmortyapi.com/api/character/?name="

    const onInputChange = event => {
        setValue(event.target.value)
    }

    const callSearchFunction = e => {
        e.preventDefault()

        axios
            .get(searchAPI + value)
            .then(response => {
                console.log(response, "This is response on SearchForm")
                setResult(result.concat(response.data.results))
            })
            .catch(error => {
                console.log(error, "this error is from Search")
            })
    }

    return (
        <>
            <form className='search-form'>
                <input
                    type='text'
                    onChange={props.handleInputChange}
                    title='name'
                    placeholder='search character name'
                    autoComplete='off'
                    onChange={onInputChange}
                />
                <Button onClick={callSearchFunction}>Search Name</Button>
            </form>
            <div>
                {result.map(char => {
                    return <h2>{char.name}</h2>
                })}
            </div>
        </>
    )
}
