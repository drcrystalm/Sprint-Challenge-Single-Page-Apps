import React, { useEffect, useState } from "react"
import axios from "axios"

export default function SearchFormDos(props) {
    return (
        <form className='search-form'>
            <input
                type='text'
                onChange={props.handleInputChange}
                title='title'
                placeholder='search character name'
                autoComplete='off'
                value={props.query}
            />
        </form>
    )
}
