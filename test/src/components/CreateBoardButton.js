import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CreateBoardButton() {
    const createBoardHandler = () => {
        fetch('/api/createBoardd/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
  return (
    <Link to="/updateBoard/">
    <Button onClick= {createBoardHandler}>
        Create Board
    </Button>
    </Link>
  )
}

export default CreateBoardButton
