import React, { useState } from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

function EditPost({ post, open, onEdit, onClose }) {
  const [caption, setCaption] = useState(post.caption);
  const [selectedFlairs, setSelectedFlairs] = useState(post.flairs);

  const handleSubmit = () => {
    // Make an API request to update the post with the edited data
    // Ensure you pass the updated post data to the API endpoint

    // After a successful update, call onEdit to update the post in your UI
    // For example, onEdit(updatedPost);

    // Close the modal
    onClose();
  };

  const handleClose = () => {
    // Close the modal when needed
    onClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
            edit your eat
            <Icon name="window close outline" onClick={handleClose} style={{ float: 'right', cursor: 'pointer' }} />
            </Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.TextArea
              label="Caption"
              placeholder="Edit caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            {/* Create a dropdown or multi-select input for flair selection */}
            {/* Example:
            <Form.Dropdown
              label="Flair"
              placeholder="Select flair"
              fluid
              multiple
              selection
              options={flairOptions}
              value={selectedFlairs}
              onChange={(_, { value }) => setSelectedFlairs(value)}
            />
            */}
            <Button type="submit">Save Changes</Button>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default EditPost;