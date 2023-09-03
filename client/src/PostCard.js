import { Card, Image } from 'semantic-ui-react';

export default function PostCard({ image, caption, author, flair }) {



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
        </Card.Content>
        </Card>
    );
}





