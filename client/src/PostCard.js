import { Card, Image, Button } from 'semantic-ui-react'
import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext';
import EditPost from './EditPost';


export default function PostCard({ image, caption, author, flair, post }) {

    const [editModalOpen, setEditModalOpen] = useState(false)
    const { currentUser } = useContext(UserContext)

    const isCurrentUserPost = currentUser && currentUser.name === author

    const handleEditClick = () => {
        console.log('Edit button clicked')
        setEditModalOpen(true);
      }

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
            <Button floated='right' onClick={handleEditClick}>
              Edit
            </Button>
            <EditPost
              post={post}
              open={editModalOpen} 
              onEdit={() => setEditModalOpen(false)}
              onClose={() => setEditModalOpen(false)}
            />
          </>
        )}
      </Card.Content>
    </Card>
  );
}



















