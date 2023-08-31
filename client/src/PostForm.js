import React, { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

export default function PostForm({ isOpen, onClose, onSubmit }) {
    const [caption, setCaption] = useState('')

    const handleSubmit = () => {
        
        onSubmit(caption)
        onClose()
    }

    return (
        <Modal open={isOpen} onClose={onClose}>
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
    )
    }