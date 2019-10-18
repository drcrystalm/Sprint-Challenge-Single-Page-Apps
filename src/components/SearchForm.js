import React, { useState, useEffect } from "react"
import axios from "axios"

export default function SearchForm(props) {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/posts/`)
    //         .then(response => {
    //             const data = response.data.filter(character =>
    //                 character.title.includes(query)
    //             )
    //             setData(data)
    //         })
    // }, [query])

    return (
        <form className='search-form'>
            <input
                type='text'
                onChange={props.handleInputChange}
                title='title'
                placeholder='search for random text'
                autoComplete='off'
                value={props.query}
            />
        </form>
    )
}
