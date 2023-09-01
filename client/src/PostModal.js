import { useState } from 'react'
import { Modal, Button, Form, Icon } from 'semantic-ui-react'

export default function PostModal({isOpen, togglePostModal, posts, setPosts}) {
    
    const [caption, setCaption] = useState('')
    const [imageFile, setImageFile] = useState(null)

    const handleClose = () => {
        togglePostModal()
      }

      const handleImageChange = (event) => {
        const file = event.target.files[0]
        setImageFile(file)
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('post[caption]', caption);
        formData.append('post[image]', imageFile);

    fetch('/posts', {
        method: 'POST',
        body: formData,
        })
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            
        })
        .then((newPost) => {
            // Handle the newly created post, add it to your posts state
            // For example, if 'posts' is your state variable containing existing posts:
            setPosts((prevPosts) => [...prevPosts, newPost]);
            // Close the modal
            togglePostModal();
        })
        .catch((error) => {
            // Handle any errors here
            console.error('Error creating a new post:', error);
        });
            
        }

    return (
        <>
        <Modal open= {isOpen} >
            <Modal.Header>
                post your eat
            <Icon name="window close outline" onClick={handleClose} style={{ float: 'right', cursor: 'pointer' }} />
            </Modal.Header>
            <Modal.Content>
            <Form>
                <Form.TextArea
                label="caption"
                placeholder="enter your post caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                />
                <Form.Input type="file" label="image" accept="image/*" onChange={handleImageChange} />
            </Form>
            </Modal.Content>
            <Modal.Actions>
            <Button color='grey' onClick={handleSubmit}>
                post
            </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
    }