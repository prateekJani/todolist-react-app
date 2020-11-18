import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from './JobCard';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: theme.spacing(1),
    },
    button: {
        backgroundColor: '#ede1d4',
        color:'#2e3338',
    },
}));

 
export default function AppliedComponent(props){

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [companyName, setCompanyName] = React.useState('');
    const [jobTitle, setJobTitle] = React.useState('');
    const [jobDescription, setJobDescription] = React.useState('');
    const [todo, setTodo] = React.useState([]) //items for the child component in JobCard
    const [modalStyle] = React.useState(getModalStyle);

    const _checkInformationValid = () => {
        if((companyName !== "" && jobTitle !== '') || jobDescription !== ''){
            return true;
        }else{
            return false;
        }
    }
 
    const addInformation = e => {
        if(_checkInformationValid() === true){
            let temp = todo;
            temp.push({companyName: companyName, jobTitle: jobTitle, jobDescription: jobDescription})
            setCompanyName('')
            setJobTitle('')
            setJobDescription('')
            setTodo(temp)
            
        }else{
            alert("Please provide all the details")
        }

        handleClose();

 
        e.target.reset(); //To go back to the default textField of the form.
        e.preventDefault(); //To Stop reloading the page as it is a form.
    }

    const body = (
        <div style = {modalStyle} className = {classes.paper}>
            <form className = {classes.root} onSubmit = {addInformation}> 
                <div>
                    <h2 id="simple-modal-title">Enter all the details</h2>
                    <TextField
                        id="outlined-textarea"
                        label="Company Name"
                        placeholder="Enter Company Name"
                        multiline
                        variant="outlined"
                        onChange = {e => setCompanyName(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Job Title"
                        placeholder="Enter Job Title"
                        multiline
                        variant="outlined"
                        onChange = {e => setJobTitle(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Job description"
                        placeholder="Enter job description"
                        multiline
                        variant="outlined"
                        onChange = {e => setJobDescription(e.target.value)}
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type = "submit"
                >
                Save
                </Button>
            </form>
        </div>
    ); 

 
    const handleOpen = () => {
        setOpen(true);
    };
 
    const handleClose = () => {
        setOpen(false);
    };

    const handleColor = () => {
        if(props.status === 'Applied'){
            return '#99ea9b';
        }else if(props.status === 'Interview'){
            return '#79e27b';
        }else if(props.status === 'Accept'){
            return '#58da5a';
        }else if(props.status === 'Reject'){
            return '#f1856a';
        }
    }
    
    return(
        <div className = "OuterBody">
            <div className = "InnerBody">
                <h1>{props.status}</h1>
                <Button className = {classes.button} variant="contained" size="medium" type = "button" onClick={handleOpen}>
                    +
                </Button>
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        animation = "false"
                >
                    {body}
                </Modal>
            </div>
            <JobCard items = {todo} gridColor = {handleColor()} setItems = {setTodo}/>
        </div>

    )
}
