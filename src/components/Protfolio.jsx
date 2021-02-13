import React, { Fragment } from 'react';
import NavBar from './NavBar';
import {Typography, Card, CardActionArea, CardContent, CardMedia, Grid, CardActions, Button} from '@material-ui/core';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/html-css-javascript.jpg';
import project3 from '../images/javascript-fullstack.jpg';
import project4 from '../images/mern-stack.jpg';
import project5 from '../images/react-redux.jpg';
import project6 from '../images/react.png';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
        mainContainer:{
            background:"#233",
            height: "100%",
            paddingTop: "2rem"
        },
        cardContainer:{
            maxWidth: 345,
            margin: "3rem ",
            margin:"5rem auto"
        },
        header:{
            position: "absolute",
            color: "tan",
            padding:"1rem"
        }, 
        cardBody:{
            marginTop: "3rem"
        }
}) 
const Protfolio = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <NavBar />
            <Grid container justify="center" className={classes.mainContainer}>
                <Typography variant="h2" className={classes.header}>
                    ALL PROJECT
                </Typography>


                {/*project 1*/}
                <Grid item xs={12} sm={8} md={6} className={classes.cardBody}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 1" height="140" image={project1} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 1
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>


                {/*Project 2*/}
                <Grid item xs={12} sm={8} md={6} className={classes.cardBody}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project2} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 2
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>


                {/*Project 3*/}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 3" height="140" image={project3} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 3
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>

                {/*Project 4*/}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 4" height="140" image={project4} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 4
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>

                {/*Project 5*/}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 5" height="140" image={project5} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 5
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>

                {/*Project 6*/}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 6" height="140" image={project6} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 6
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Earum, fugiat dignissimos? Qui illo adipisci possimus!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>


            </Grid>
        </Fragment>
    )
}

export default Protfolio;
