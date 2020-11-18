import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: '#2e3338',
        backgroundColor: '#ede1d4',
    },
    bar: {
      backgroundColor: '#ede1d4',
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className = {classes.bar}>
                <Toolbar>
                    <Typography variant="h2" className={classes.title}>
                        Application Tracker
                    </Typography>          
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
