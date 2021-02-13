import React,{useState} from 'react';
import {AppBar, ListItem, Avatar, Box, Divider, IconButton, List, Toolbar, Typography, ListItemIcon, ListItemText} from '@material-ui/core';
import {ArrowBack, Home, AssignmentInd, Apps, ContactMail} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMeunSlider from '@material-ui/core/Drawer';
import avatar from '../avatar.png';
import Footer from './Footer';

// make style 

const useStyle = makeStyles(theme=>({
    manuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        height: theme.spacing(13),
        width: theme.spacing(13)
    },
    listItem:{
        color:"tan"
    },
    listText:{
        color: "tan"
    }
    
}));

const menuItems = [
    {
        liIstIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        liIstIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        liIstIcon: <Apps/>,
        listText: "Protfolio",
        listPath: "/protfolio"
    },
    {
        liIstIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contact"
    }
]

const NavBar = () => {
    const [state,setState] = useState({
        right: false
    })
    const taggleSlider = ((slider, open) => () =>{
        setState({ ...state, [slider]: open})
    });


    const classes = useStyle();
    const sideList = slider =>(
        <Box component='div' onClick={taggleSlider(slider,false)} className={classes.manuSliderContainer}>
            <Avatar className={classes.avatar} src={avatar} alt="Arafat Islam"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.liIstIcon}</ListItemIcon>
                        <ListItemText className={classes.listText} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    
    return (
        <>
        <Box component="nav">
            <AppBar position='static' style={{ background: "#222" }}>
                <Toolbar>
                    <IconButton onClick={taggleSlider("right", true)}>
                        <ArrowBack style={{ color: "tomato" }}/>
                    </IconButton>
                    <Typography variant="h5" style={{ color: 'tan' }}>
                        Arafat Islam
                    </Typography>
                    <MobilRightMeunSlider onClose={taggleSlider("right", false)} anchor="right" open={state.right}>
                        {sideList("right")}
                        <Footer/>
                    </MobilRightMeunSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar;
