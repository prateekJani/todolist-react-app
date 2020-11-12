import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import AppliedComponent from './Components/ToDoListComponent/AppliedComponent'


function App() {
  
  return (
    <div className = "Outerbody">
      <h1>Application Tracker</h1>
      <Grid container spacing={6}>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#99ea9b'}} >
          <AppliedComponent  gridName = 'Applied'/>
        </Grid>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#79e27b'}}>
          <AppliedComponent  gridName = 'Interview'/>
        </Grid>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#58da5a'}}>
          <AppliedComponent  gridName = 'Accept'/>
        </Grid>
        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#f1856a'}}>
          <AppliedComponent  gridName = 'Reject'/>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
