import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import {Facebook,Twitter,LinkedIn} from '@material-ui/icons'
import { Fragment } from 'react';

const useStyle = makeStyles({
    root:{
        "&.MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth: 250,
        },
        "&.MuiSvgIcon:root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})
function Footer() {
    const classes = useStyle();
    return (
        <Fragment>
            <BottomNavigation className={classes.root} width="auto" style={{ background: "#222" }}>
                <BottomNavigationAction style={{ padding: 0 }} icon={<Facebook />} />
                <BottomNavigationAction style={{ padding: 0 }} icon={<Twitter />} />
                <BottomNavigationAction style={{ padding: 0 }} icon={<LinkedIn />} />
            </BottomNavigation>
            <Typography variant="body3" style={{ backgroundColor: "#222", color: "white", fontSize: "12px", textAlign: "center" }}>
                Developer Credit Arafat Islam
            </Typography>
        </Fragment>
    );
}

export default Footer;
