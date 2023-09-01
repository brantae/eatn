import { useState } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

export default function PostModal({isOpen, togglePostModal}) {
    
    const [caption, setCaption] = useState('')



    const handleSubmit = () => {
        //onClose()
    }

    return (
        <>
        <Modal open= {isOpen} >
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
            <Button primary onClick={togglePostModal}>
                Create
            </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
    }