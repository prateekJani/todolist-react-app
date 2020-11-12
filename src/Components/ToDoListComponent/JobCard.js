import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },  
}));



export default function JobCard(props) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [jobs, setJobs] = React.useState(props.items);
  const [cName, setCName] = React.useState('');
  const [jTitle, setJTitle] = React.useState('');
  const [jDescription, setJDescription] = React.useState('');
  const [updatedJob, setUpdatedJob] = React.useState({});
  

  const deleteJob = (job) => {

    // console.log(job)

    let modifiedJobs = jobs
    // console.log(modifiedJobs)
    
    modifiedJobs = modifiedJobs.filter(function (item) {
        return (item !== job);
    });//used filter method to iterate through the list and delete the specific task that is given to the function.
     
    setJobs(modifiedJobs);

  };

  const addInformation = e =>{
    if(cName !== '' || jTitle !== '' || jDescription !== ''){
      setUpdatedJob({cName: cName, jTitle: jTitle, jDescription: jDescription})
      setCName('')
      setJTitle('')
      setJDescription('')
    }else{
      alert('Please enter all details!')
    }
    e.preventDefault();
  };

  const editCard = (
    <form onSubmit = {addInformation}>
      <div>
        <TextField
          id="outlined-textarea"
          label="Company Name"
          placeholder="Enter Company Name"
          multiline
          variant="outlined"
          onChange = {e => setCName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Job Title"
          placeholder="Enter Job Title"
          multiline
          variant="outlined"
          onChange = {e => setJTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Company Description"
          placeholder="Enter Company Description"
          multiline
          variant="outlined"
          onChange = {e => setJDescription(e.target.value)}
        />
      </div>
      <Button>
        Edit
      </Button>
    </form>
  );

  const updateJobCard = (job) => {

    let editJobs = jobs

    editJobs = editJobs.map( item => {
      if (item === job ) {
          item.companyName = 'edited'
          item.jobTitle = 'edited'
          item.jobDescription = 'edited'
          return item
      }
      return item
    })

    setJobs(editJobs)
    
    //take inputs from the user

    // let editJobs = jobs

    // editJobs = editJobs.map( item => {
    //   if (item === job ) {
    //       item.companyName = updatedJob.cName
    //       item.jobTitle = updatedJob.jTitle
    //       item.jobDescription = updatedJob.jDescription
    //       return item
    //   }
    //   return item
    // })

    // setJobs(editJobs)

  };


  const displayJobs = jobs.map((job,index) => {
      return(    
      <Card className={classes.root} key = {index}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {job.companyName}
            </Avatar>
          }
          action = {
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={() => updateJobCard(job)}
              >
                <EditIcon />
              </IconButton>

            </div>
 

          }
          title={job.jobTitle}
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {job.jobDescription}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton onClick = {() => {deleteJob(job)}}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: activeIndex === index,
            })}
            onClick={() => {setActiveIndex(activeIndex === index ? null : index)}}
            aria-expanded={activeIndex === index}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={activeIndex === index} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>

      </Card>)
  });

  return (
    <div>
      {jobs.length > 0 
        ? <ul>{displayJobs}</ul>
        : null
      }
    </div>
  );
}
