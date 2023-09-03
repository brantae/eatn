import { useState, useContext, useEffect } from 'react'
import { Modal, Button, Form, Icon, Dropdown, Label } from 'semantic-ui-react'
import { PostContext } from './context/PostContext'

export default function PostModal({isOpen, togglePostModal}) {

    const {posts, setPosts} = useContext(PostContext)
    
    // const [caption, setCaption] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [flairInput, setFlairInput] = useState('')
    const [existingFlairs, setExistingFlairs] = useState([])
    const [selectedFlair, setSelectedFlair] = useState('')

    useEffect(() => {
        // Fetch existing flair options when the component mounts
        fetch('/flairs')
            .then((response) => response.json())
            .then((data) => {
            setExistingFlairs(data);
            })
            .catch((error) => {
                console.error('Error fetching existing flairs:', error);
            });
        }, []);


    const handleClose = () => {
        togglePostModal()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setImageFile(file)
    }

    const handleSelectFlair = (_, { value }) => {
        // Update selected flairs
        setSelectedFlair([...selectedFlair, value]);
      }

      const handleRemoveFlair = (flairToRemove) => {
        // Remove the selected flair
        setSelectedFlair(selectedFlair.filter((flair) => flair !== flairToRemove));
      }

    function handleSubmit(e) { 
        e.preventDefault()
        
        const data = new FormData()
        data.append("posts[caption]", e.target.caption.value)
        data.append("posts[image]", e.target.image.files[0])
        data.append('post[flair]', selectedFlair.join(','))
        
        fetch('/posts', {
            method: "POST",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            setPosts([...posts, data])
            togglePostModal()
        })
    }

    const flairOptions = existingFlairs.map((flair) => ({
        key: flair.name,
        text: flair.name,
        value: flair.name,
      }))


    return (
        <>
<Modal open={isOpen}>
                <Modal.Header>
                    post your eat
                    <Icon name="window close outline" onClick={handleClose} style={{ float: 'right', cursor: 'pointer' }} />
                </Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleSubmit}> 
                        <Form.TextArea
                            label="caption"
                            placeholder="enter your post caption..."
                            name="caption"
                        />
                        {selectedFlair.length > 0 && (
                        <div>
                            {selectedFlair.map((flair) => (
                            <Label key={flair}>
                                {flair}
                                <Icon name="delete" onClick={() => handleRemoveFlair(flair)} />
                            </Label>
                            ))}
                        </div>
                        )}
                        <Dropdown
                            placeholder="Select a flair"
                            fluid
                            selection
                            options={flairOptions}
                            onChange={handleSelectFlair}
                            value={selectedFlair}
                                    />
                        <Form.Input type="file" label="image" accept="image/*" name="image" onChange={handleImageChange} />
                        <Button color='grey' type="submit">
                            post
                        </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </>
    )
    }