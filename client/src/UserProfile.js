import React, { useContext } from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { UserContext } from './context/UserContext'

function UserProfile() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return (
      <Container text style={{ marginTop: '2em' }}>
        <Header as="h2" icon textAlign="center">
          <Icon name="user circle" circular />
          <Header.Content>user profile</Header.Content>
        </Header>
        <Segment>
          <p>please log in to view your profile</p>
        </Segment>
      </Container>
    );
  }

  return (
    <Container text style={{ marginTop: '2em' }}>
      <Header as="h2" icon textAlign="center">
        <Icon name="user circle" circular />
        <Header.Content>User Profile</Header.Content>
      </Header>
      <Segment.Group>
        <Segment>
          <Header as="h3">username</Header>
          <p>{currentUser.username}</p>
        </Segment>
        <Segment>
          <Header as="h3">email</Header>
          <p>{currentUser.email}</p>
        </Segment>
      </Segment.Group>
    </Container>
  );
}

export default UserProfile