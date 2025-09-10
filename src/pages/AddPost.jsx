import React from 'react'
import Container from '../components/Container'
import PostForm from '../components/Post-Form/PostForm'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost