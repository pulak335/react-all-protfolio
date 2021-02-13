import React, { Fragment } from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Typography} from '@material-ui/core';
import NavBar from './NavBar';

const useStyles= makeStyles ({
    mainContainer:{
        background:"#233"
    },
    timeLine:{
        position: 'relative',
        padding: "1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position: "absolute",
            height: "100%",
            border:"1px solid tan",
            right: "48px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fronsize:"1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before":{
            display:"none"
        }

    },
    timeLineItem:{
        padding: "1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 1rem 1rem 1rem",
        clear:"both",
        color:"tomato"
        // "&:after":{
        //     content:"''",
        //     position:"absolute"
        // },
        // "&:before":{
        //     content:"''",
        //     position:"absolute",
        //     right:"-0.625rem",
        //     top:"cale(50% -50%)",
        //     borderstyle:"solid",
        //     borderColor: "tomato tomato transparent",
        //     borderWidth: "0.625rem",
        //     transform: "rotate(450deg)"
        // }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        textTransform: 'uppercase'
    },
    subheading:{
        color:"white",
        padding:0,
        textTransform: "uppercase"
    }

    
});

const Resume = () => {
    const classes= useStyles();
    return (
        <Fragment>
            <NavBar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Work Experience
                </Typography>
                <Box component="div" className={`${classes.timeLine} ${classes.timeLineItem}`}>
                    <Typography variant="h2" className={classes.timeLineYear}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subheading}>
                            Front End Development
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color:"tomato", fontSize:"3rem"}}>
                            Google
                        </Typography>
                        <Typography variant="subtilte1" align="center" style={{ color:"tan" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                        </Typography>
                    </Box>
                </Box>


            {/* new experiance */}
            <Box component="div" className={`${classes.timeLine} ${classes.timeLineItem}`}>
                    <Typography variant="h2" className={classes.timeLineYear}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subheading}>
                            Back End development
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color:"tomato", fontSize:"3rem"}}>
                            IBM
                        </Typography>
                        <Typography variant="subtilte1" align="center" style={{ color:"tan" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                        </Typography>
                    </Box>
                </Box>


                {/* anathoer one */}
                <Box component="div" className={`${classes.timeLine} ${classes.timeLineItem}`}>
                    <Typography variant="h2" className={classes.timeLineYear}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subheading}>
                            MERN JAVASCRIPT FULL STACK Development
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color:"tomato", fontSize:"3rem"}}>
                            FACEBOOK
                        </Typography>
                        <Typography variant="subtilte1" align="center" style={{ color:"tan" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fugiat earum consequatur voluptates eligendi et, 
                            veniam tempora asperiores iusto quisquam. Blanditiis.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Resume;
