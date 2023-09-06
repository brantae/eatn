import { useState, useEffect, useContext } from 'react'
import { PostContext } from './context/PostContext'
import { Modal, Icon, Input, Button, Divider, Message } from 'semantic-ui-react'

export default function CommentModal({ postId, onClose }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [error, setError] = useState(null)

  const { posts, setPosts } = useContext(PostContext)

  console.log(posts)

  useEffect(() => {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      setComments(post.comments);
    }
  }, [postId, posts])


  const handleSubmit = () => {

    setError(null)

    fetch(`/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newComment }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            setError(data.errors.join(', '))
          })
        }
        return response.json();
      })
      .then((newComment) => {
        if (newComment) {
          setComments([...comments, newComment]);
          setNewComment('')
        }
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      })
  }

  return (
    <Modal open onClose={onClose}>
      <Modal.Header>
        comments
        <Icon name="window close outline" style={{ float: 'right', cursor: 'pointer' }} onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        {comments.length === 0 ? (
          <p>be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={comment.id} className="comment">
              {comment.content}
              {index < comments.length - 1 && <Divider />}
            </div>
          ))
        )}
      </Modal.Content>
      <Modal.Actions>
        <div>
          <Input
            fluid
            placeholder="add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            action={
              <Button color="pink" onClick={handleSubmit}>
                Send
              </Button>
            }
          />
        </div>
        {error && (
          <Message warning compact >
            {error}
          </Message>
        )}
      </Modal.Actions>
          </Modal>
        )
}