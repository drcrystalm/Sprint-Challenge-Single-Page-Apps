import React from "react"
import { Card, CardTitle, CardSubtitle, CardImg } from "reactstrap"
import "./CharacterCard.css"

export default function CharacterCard(props) {
    return (
        <div className='container'>
            <Card className='characterCard'>
                <CardImg src={props.image} alt='character' />
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.status}</CardSubtitle>
                <CardSubtitle>{props.species}</CardSubtitle>
            </Card>
        </div>
    )
}
