import React, { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

export default function PostModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [caption, setCaption] = useState('')

    const toggleModal = () => {
        setIsOpen(!isOpen)
    };

    const handleSubmit = () => {
        toggleModal()
    }

    return (
        <>
        <Button primary onClick={toggleModal}>
            Create Post
        </Button>
        <Modal open={isOpen} onClose={toggleModal}>
            <Modal.Header>Create a New Post</Modal.Header>
            <Modal.Content>
            <Form>
                <Form.TextArea
                label="Caption"
                placeholder="Enter your post caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                />
            </Form>
            </Modal.Content>
            <Modal.Actions>
            <Button primary onClick={handleSubmit}>
                Create
            </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
    }