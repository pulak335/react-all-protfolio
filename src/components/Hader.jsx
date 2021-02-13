import React from 'react';
import {Typography, Box, Avatar, Grid} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../avatar.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    profile: {
        width: "10rem",
        height: "10rem",
        margin: "0.5rem"
    },
    profileTitle: {
        color: "tomato"
    },
    profileSubTitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typeContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%",
        textAlign: "center",
        zIndex: 1
    }
}));
const Hader = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.typeContainer}>
                <Grid container justify="center">
                    <Avatar className={classes.profile}  src={avatar} alt='Arafat Islam'/>
                </Grid>
                <Typography className={classes.profileTitle}  variant="h4" >
                <Typed
                    strings={['Arafat Islam...']}
                    typeSpeed={40}
                />
                </Typography>
                <br></br>
                <Typography variant="h5" className={classes.profileSubTitle}>
                <Typed
                strings={[
                    'Front End Devlopment...',
                    'Back End Development...',
                    'MERN Stack...']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
                </Typography>

            </Box>
        </>
    )
}

export default Hader;

