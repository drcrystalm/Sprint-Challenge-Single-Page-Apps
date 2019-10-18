import React from "react"
import { Card, CardTitle, CardText, CardSubtitle } from "reactstrap"

const CharacterCard = props => {
    return (
        <Card className='card'>
            <CardTitle> {props.user} </CardTitle>
            <CardSubtitle>
                This will sub for the name: {props.title}
            </CardSubtitle>
            <CardText>{props.body}</CardText>
        </Card>
    )
}

export default CharacterCard
