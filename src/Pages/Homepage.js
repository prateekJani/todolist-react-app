import React from 'react'
import Grid from '@material-ui/core/Grid';
import AppliedComponent from '../Components/AppliedComponent'

const statuses = [
    {
        status: 'Applied',
        cardColor: '#99ea9b'
    },
    {
        status: 'Interview',
        cardColor: '#99ea9b'
    },
    {
        status: 'Accept',
        cardColor: '#99ea9b'
    },
    {
        status: 'Reject',
        cardColor: '#99ea9b'
    },    
]



function homepage() {

    return (
        <div>
            <Grid container spacing={2}>
                {statuses.map(s =>{
                    return (
                        <Grid item xs={3} style={{height: '100vh', boxShadow: "1px 3px 1px #9E9E9E", padding: '6px', backgroundColor: '#f8f8f8'}} >
                            <AppliedComponent  status = {s.status} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default homepage


