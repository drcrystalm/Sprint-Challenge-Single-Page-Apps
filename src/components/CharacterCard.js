import React from "react"
import { Card, CardTitle, CardText } from "reactstrap"

const CharacterCard = props => {
    return (
        <Card className='card'>
            <CardTitle> {props.user} </CardTitle>
            <CardText>{props.body}</CardText>
        </Card>
    )
}

export default CharacterCard
