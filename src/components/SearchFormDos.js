import React, { useEffect, useState } from "react"
import "./CharacterCard.css"
import { Form, FormGroup, Input } from "reactstrap"

export default function SearchFormDos(props) {
    return (
        <Form className='search-form'>
            <FormGroup>
                <Input
                    type='text'
                    onChange={props.handleInputChange}
                    title='title'
                    placeholder='search character name'
                    autoComplete='off'
                    value={props.query}
                />
            </FormGroup>
        </Form>
    )
}
