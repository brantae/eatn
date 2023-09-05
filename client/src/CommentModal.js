import { useState, useEffect } from 'react';

export default function CommentModal({ postId, onClose }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = () => {
    // Fetch comments for the given postId and set them in the state
    // You can use the postId to make a GET request to your Rails API
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleSubmit = () => {
    // Handle comment submission
    // Send a POST request to create a new comment
    // Update the comments state with the newly created comment
    // Clear the input field
  };

  return (
    <div>
        
    </div>
    // Your modal layout with comments, input field, and submit button
    // Iterate over the comments state to display existing comments
  );
}