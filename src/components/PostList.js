import React, { useState, useEffect } from "react"
import axios from "axios"
import PostCard from "./PostCard"
import SearchForm from "./SearchForm"

function PostList() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log("No GO!", error)
            })
    }, [])

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    // const data = response.data.filter(char => char.title.includes(query))

    return (
        <>
            <SearchForm handleInputChange={handleInputChange} query={query} />
            <div className='postCard-container'>
                {data
                    .filter(char => char.title.includes(query))
                    .map(post => {
                        return (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        )
                    })}
            </div>
        </>
    )
}

export default PostList
