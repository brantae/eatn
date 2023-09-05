import { Card, Image, Button, Icon } from 'semantic-ui-react'
import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext';
import EditPost from './EditPost';
import DeletePostModal from './DeletePostModal';
import { PostContext } from './context/PostContext';


export default function PostCard({ image, caption, author, flair, post, updatePosts }) {

    const [editModalOpen, setEditModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const { currentUser } = useContext(UserContext)
    const { posts, setPosts } = useContext(PostContext)
    console.log(posts)
    const isCurrentUserPost = currentUser && currentUser.name === author

    const handleEditClick = () => {
        setEditModalOpen(true)
    }

    const handleDeleteClick = () => {
        setDeleteModalOpen(true)
    }

    const handleDeleteConfirmed = () => {
        fetch(`/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                if (response.ok) {
                  // Close the modal
                  setDeleteModalOpen(false);
                  // Filter out the deleted post from the posts state
                  const updatedPosts = posts.filter((p) => p.id !== post.id);
                  setPosts(updatedPosts);
                  console.log('Post deleted successfully.');
                } else {
                  // Handle errors or display error messages
                  return response.json().then((errorData) => {
                    console.error('Error deleting post:', errorData);
                    // You can display error messages to the user here if needed
                  });
                }
              })
              .catch((error) => {
                console.error('Error deleting post:', error);
              });
          };

    return (
        <Card centered>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{author}</Card.Header>
            <Card.Meta>
            {flair.map((individualFlair, index) => (
                        <span className='flair' key={index}>
                            {individualFlair}
                        </span>
                    ))}
            </Card.Meta>
            <Card.Description>{caption}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        {isCurrentUserPost && (
            <>
                <Button floated='right' size='mini' onClick={handleEditClick}>
                <Icon name="edit outline" />
                </Button>
                <Button floated="right" icon
                    size="mini"
                    color="pink"
                    onClick={handleDeleteClick}>
                <Icon name="trash alternate" />
                </Button>
                <EditPost
                    post={post}
                    open={editModalOpen} 
                    onEdit={(updatedPost) => {
                        updatePosts(updatedPost)
                        setEditModalOpen(false)
                    }}
                    onClose={() => setEditModalOpen(false)}
                    updatePosts={updatePosts}
                />
                <DeletePostModal
                    open={deleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onDelete={handleDeleteConfirmed}
        />
            </>
            )}
        </Card.Content>
        </Card>
    )
}



















