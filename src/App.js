import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import AppliedComponent from './Components/ToDoListComponent/AppliedComponent'
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


function App() {
  const classes = useStyles();
  
  return (
    <div className = "Outerbody">
      <div>
        <AppBar className = {classes.bar}>
          <Toolbar>
            <Typography variant="h2" className={classes.title}>
                Application Tracker
            </Typography>          
          </Toolbar>
        </AppBar>
      </div>
      {/* <h1>Application Tracker</h1> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#f8f8f8'}} >
          <AppliedComponent  gridName = 'Applied'/>
        </Grid>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#f8f8f8'}}>
          <AppliedComponent  gridName = 'Interview'/>
        </Grid>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#f8f8f8'}}>
          <AppliedComponent  gridName = 'Accept'/>
        </Grid>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#f8f8f8'}}>
          <AppliedComponent  gridName = 'Reject'/>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
