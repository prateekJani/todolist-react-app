import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import AppliedComponent from './Components/ToDoListComponent/AppliedComponent'

function App() {
  return (
    <div className = "Outerbody">
      <h1>Application Tracker</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <AppliedComponent gridName = 'Applied'/>
        </Grid>
        <Grid item xs={3}>
          <AppliedComponent gridName = 'Interview'/>
        </Grid>
        <Grid item xs={3}>
          <AppliedComponent gridName = 'Accept'/>
        </Grid>
        <Grid item xs={3}>
          <AppliedComponent gridName = 'Reject'/>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
