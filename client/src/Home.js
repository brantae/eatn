import { Image, Grid } from 'semantic-ui-react'
import photo1 from './images/homepage1.jpg';
import photo2 from './images/homepage2.jpg';
import photo3 from './images/homepage3.jpg';
import photo4 from './images/homepage4.jpg'; 

function Home() {
    
    
    
    return (
<div className="centered-container">
        <div className="text-div">welcome to eatn, a photo-sharing app</div>
        <div className="image-grid">
        <Grid centered columns={2}>
            <Grid.Row centered>
                <Grid.Column>
                <Image.Group size="large">
                    <Image src={photo1} className="grid-image"/>
                    <Image src={photo2} className="grid-image"/>
                </Image.Group>
                </Grid.Column>
                <Grid.Column>
                <Image.Group size="large">
                    <Image src={photo3} className="grid-image"/>
                    <Image src={photo4} className="grid-image"/>
                </Image.Group>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
        </div>
    
    )
}

export default Home