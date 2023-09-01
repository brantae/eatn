import { useState } from 'react';
import { Card, Image, Icon, Modal, Button } from 'semantic-ui-react';

export default function PostCard({ image, caption, author, flair, canEdit, onDeleteClick, onEditClick }) {



    return (
        <Card centered>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{author}</Card.Header>
            <Card.Meta>
            <span className="date">{flair}</span>
            </Card.Meta>
            <Card.Description>{caption}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
        </Card>
    );
}





