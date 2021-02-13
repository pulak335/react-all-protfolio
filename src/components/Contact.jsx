import React, { Fragment } from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Button, Grid, TextField, Typography} from '@material-ui/core';
import Typed from 'react-typed';
import SendIcon from '@material-ui/icons/Send' 
import NavBar from './NavBar';
import { Translate } from '@material-ui/icons';

// const Inputfield = withStyles({
//     root:{
//         "& label.Mui-focused":{
//             color:"tomato",
//         },
//         "& label":{
//             color:"tan"
//         }
//     }
// })(TextField);


const useStyles = makeStyles( {
    root: {
      '& > *': {
        width: '20rem',
        color:"white",
    },
    "& label.Mui-focused":{
            color:"tomato",
        },
    "& label":{
        color:"tan"
    },
    "& .MuiOutlinedInput-root":{
        "& fieldset":{
            borderColor:"tan"
        },
        "&:hover fieldset":{
            borderColor:"tomato"
        },
        "&.Mui-focused fieldset":{
            borderColor:"tomato"
        }        
    }
    },
    form: {
        top: "50%",
        left:"50%",
        transform: "Translate(-50%, -50%)",
        position: "absolute"
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    }
});



const Contact = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <NavBar/>
            <Box component="div">
                <Grid container justify="center">
                    <Box component="form" className={classes.form} >
                        <Typography variant="h5" style={{ color: "tomato", textAlign:"center", textTransform:"uppercase" }}>
                            Hire or Contact me
                        </Typography>
                        <TextField fullWidth={true} label="Name" variant="outlined" className={classes.root} margin="dense" size="medium"/> <br></br>
                        <TextField fullWidth={true} label="Email" variant="outlined" className={classes.root} margin="dense" size="medium"/><br></br>
                        <TextField fullWidth={true} label="Company Name" variant="outlined" className={classes.root} margin="dense" size="medium"/><br></br>
                        <Button variant="outlined" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>
                            Contact Me
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Contact;

