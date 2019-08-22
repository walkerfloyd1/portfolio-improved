import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { SocialIcon } from 'react-social-icons';

import Image from 'react-image-resizer';

import Grid from '@material-ui/core/Grid';

import Skull from '../images/skull.jpg';

import Bamazon from '../images/bamazon.png';

import Books from '../images/books.jpg';

import Friends from '../images/friends.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
        <Grid container
  spacing={2}
  direction="row"
  alignItems="center"
  justify="center"
  style={{ 
    minHeight: '100vh',
    paddingLeft: "15%",
    paddingBottom: "30px",
    fontFamily: "Raleway, sans-serif" }}>
    <Grid item xs={6}>
    <Card className={classes.card}
              style={{
                backgroundColor: "#004d99",
                color: "white",
              }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Skull}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Try Not To Die
          </Typography>
          <Typography variant="body2" component="p">
          Try Not To Die is a health app that encourages healthy habits. It matches users with workout buddies, healthy recipes, and information about preventative services.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
      <SocialIcon url="https://github.com/funkadelic83/try-not-to-die" />
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card className={classes.card}
    style={{
      backgroundColor: "#004d99",
      color: "white"
    }}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={Bamazon}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Bamazon
        </Typography>
        <Typography variant="body2" component="p">
        This is an Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
    <SocialIcon url="https://github.com/walkerfloyd1/amazon-mysql" />
    </CardActions>
  </Card>
  </Grid>
  <Grid item xs={6}>
  <Card className={classes.card}
  style={{
    backgroundColor: "#004d99",
    color: "white",
  }}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={Books}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          StoryTime
        </Typography>
        <Typography variant="body2" component="p">
        This is an app that allows users to create and add on to existing stories in the database.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
    <SocialIcon url="https://github.com/Jokatsu/StoryTime" />
    </CardActions>
  </Card>
  </Grid>
  <Grid item xs={6}>
  <Card className={classes.card}
  style={{
    backgroundColor: "#004d99",
    color: "white"
  }}
  >
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={Friends}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          FriendFinder
        </Typography>
        <Typography variant="body2" component="p">
        This is an app that recommends friends to users based on their answers to a short questionnaire.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
    <SocialIcon url="https://github.com/walkerfloyd1/friendfinderapp" />
    <SocialIcon url="https://ancient-meadow-89678.herokuapp.com/" />
    </CardActions>
  </Card>
  </Grid>
  </Grid>
  
  </div>
  );
}