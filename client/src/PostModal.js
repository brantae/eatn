import { useState, useContext, useEffect } from 'react'
import { Modal, Button, Form, Icon, Dropdown, Label } from 'semantic-ui-react'
import { PostContext } from './context/PostContext'

export default function PostModal({isOpen, togglePostModal}) {

    const {posts, setPosts} = useContext(PostContext)

    const [imageFile, setImageFile] = useState(null)
    // const [existingFlairs, setExistingFlairs] = useState([])
    // const [selectedFlair, setSelectedFlair] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        
        fetch('/flairs')
            .then((response) => response.json())
            .then((data) => {
            console.log(data)
            })
            .catch((error) => {
                console.error('Error fetching existing flairs:', error)
            })
        }, [])


    const handleClose = () => {
        togglePostModal()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setImageFile(file)
    }

    const handleSelectFlair = (_, { value }) => {

      }
      
    const handleRemoveFlair = (flairToRemove) => {

        }

    function handleSubmit(e) { 
        e.preventDefault()
        
        const data = new FormData()
        data.append("posts[caption]", e.target.caption.value)
        data.append("posts[image]", imageFile)
        // data.append('post[flair_ids][]', selectedFlair)
        
        fetch('/posts', {
            method: "POST",
            body: data
        })
        .then((res) => {
            if (res.status === 200) {
                setErrors([]);
                return res.json();
            } else {
                return res.json().then((data) => Promise.reject(data.errors));
            }
        })
        .then(data => {
            setPosts([...posts, data])
            togglePostModal()
        })
        .catch(errors => {
            console.error('Validation errors:', errors)
            setErrors(errors)
            
        })
    }

    function flairOptions() {

    }


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
                        <Dropdown
                            placeholder="add some flair!"
                            fluid
                            selection
                            options={null}
                            onChange={null}
                            multiple={true}
                                    />
                        <Form.Input type="file" label="image" accept="image/*" name="image" onChange={handleImageChange} />
                        <Button color='grey' type="submit">
                            post
                        </Button>
                    </Form>
                    {errors.length > 0 && (
                        <div className="ui error message">
                        <ul className="list">
                            {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                </Modal.Content>
            </Modal>
        </>
    )
    }