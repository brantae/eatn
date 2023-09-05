import React, { useContext, useState, useEffect } from 'react'
import { Modal, Button, Form, Icon } from 'semantic-ui-react'
import { useFlairContext } from './context/FlairContext'
import { PostContext } from './context/PostContext'

function EditPost({ post, open, onEdit, onClose }) {

    const { existingFlairs, setExistingFlairs} = useFlairContext()
    const { posts, setPosts } = useContext(PostContext)
    const [caption, setCaption] = useState(post.caption)
    const [selectedFlairs, setSelectedFlairs] = useState(post.flairs_ids)

    console.log('selectedFlairs:', selectedFlairs)
    console.log('post.flairs:', post.flairs)


    const handleSubmit = () => {
        const updatedPost = {
            ...post,
            caption,
            flair_ids: selectedFlairs,
            }

            console.log('Updated Post:', updatedPost)

            fetch(`/posts/${post.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post: updatedPost }),
            })
                .then((response) => {
                if (response.ok) {
                    
                    onEdit(updatedPost);
                    
                    
                    onClose()
                } else {
                
                    return response.json().then((errorData) => {
                    console.error('Error updating post:', errorData)
                    
                    })
                }
                })
                .catch((error) => {
                console.error('Error updating post:', error)
                })

    }

    const handleChange = (_, { value }) => {
        setSelectedFlairs(value)
        }

        const handleClose = () => {
            onClose()
        }

        const flairOptions = existingFlairs.map((flair) => ({
            key: flair.id,
            value: flair.id,
            text: flair.name,
        }))

    return (
        <>
        <Modal open={open} onClose={handleClose}>
            <Modal.Header>
                edit your eat
                <Icon name="window close outline" onClick={handleClose} style={{ float: 'right', cursor: 'pointer' }} />
                </Modal.Header>
            <Modal.Content>
            <Form onSubmit={handleSubmit}>
                <Form.TextArea
                label="caption"
                placeholder="edit caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <Form.Dropdown
                label="flair"
                placeholder="edit flair"
                fluid
                multiple
                selection
                options={flairOptions}
                value={selectedFlairs}
                onChange={handleChange}
                />
            
                <Button type="submit">save changes</Button>
            </Form>
            </Modal.Content>
        </Modal>
        </>
    )
    }

export default EditPost;