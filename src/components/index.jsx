import React from 'react'
import Hader from './Hader';
import NavBar from './NavBar';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core';
import { Fragment } from 'react';

const useStyles = makeStyles({
    particles: {
        opacity: 0.3
    }
}) 
function Home() {
    const part = useStyles();
    return (
        <Fragment>
            <NavBar/>
            <Hader/>
            <Particles
                className = {part.particles}
                params={{
                    "particles": {
                        "number": {
                            "value": 60
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                    "opacity":{
                        "value": 1,
                        "random":true
                    }
                }}
            />
        </Fragment>
    )
}

export default Home;