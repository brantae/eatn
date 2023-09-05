import { useState, useEffect } from 'react'

export default function CommentModal({ postId, onClose }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const fetchComments = () => {

  }

  useEffect(() => {
    fetchComments();
  }, [postId])

  const handleSubmit = () => {

  }

  return (
    <div>

    </div>
    // Your modal layout with comments, input field, and submit button
    // Iterate over the comments state to display existing comments
  )
}