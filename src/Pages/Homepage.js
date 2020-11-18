import React from 'react'
import Grid from '@material-ui/core/Grid';
import AppliedComponent from '../Components/AppliedComponent'

function homepage() {
    return (
        <div>
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
    )
}

export default homepage


