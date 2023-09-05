import { useState, useContext, useEffect } from 'react'
import { Modal, Button, Form, Icon, Dropdown, Label } from 'semantic-ui-react'
import { PostContext } from './context/PostContext'
import { useFlairContext } from './context/FlairContext'

export default function PostModal({isOpen, togglePostModal}) {

    const {posts, setPosts} = useContext(PostContext)
    const {existingFlairs, setExistingFlairs} = useFlairContext()

    const [imageFile, setImageFile] = useState(null)
    // const [existingFlairs, setExistingFlairs] = useState([])
    const [selectedFlairs, setSelectedFlairs] = useState([])
    const [errors, setErrors] = useState([])

    // useEffect(() => {
        
    //     fetch('/flairs')
    //         .then((response) => response.json())
    //         .then((data) => {
    //         console.log(data)
    //         setExistingFlairs(data)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching existing flairs:', error)
    //         })
    //     }, [])


    const handleClose = () => {
        togglePostModal()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setImageFile(file)
    }

    const handleSelectFlair = (_, { value }) => {
        console.log(value)
        setSelectedFlairs(value)
        console.log(selectedFlairs)
      }
      

    function handleSubmit(e) { 
        e.preventDefault()
        
        const data = new FormData()
        data.append("post[caption]", e.target.caption.value)
        data.append("post[image]", imageFile)
        selectedFlairs.forEach((flairId) => {
            data.append("post[flair_ids][]", flairId)
        })
        
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
                            options={existingFlairs.map((flair) => ({
                                key: flair.id,
                                value: flair.id,
                                text: flair.name,
                            }))}
                            onChange={handleSelectFlair}
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