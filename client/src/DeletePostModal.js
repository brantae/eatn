import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

    function DeletePostModal({ open, onClose, onDelete }) {
    return (
        <Modal open={open} onClose={onClose} size="mini">
        <Modal.Header>delete eat</Modal.Header>
        <Modal.Content>
            <p>are you sure you want to trash your food?</p>
        </Modal.Content>
        <Modal.Actions>
            <Button positive onClick={onClose}>
            keep
            </Button>
            <Button negative onClick={onDelete}>
            trash
            </Button>
        </Modal.Actions>
        </Modal>
    );
    }

    export default DeletePostModal;