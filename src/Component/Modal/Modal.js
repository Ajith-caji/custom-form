import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
export default function AlertDialog({open, handleClose }) {
  const navigate = useNavigate();

  const handleCreate = () => {
    handleClose(); 
    navigate('/main'); 
  };
 
  return (
    <React.Fragment>
    
      <div   className='flex justify-center items-center'>

      <Dialog
   
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Create Feedback
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='border-b-2'>
           Generic Website Rating
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreate}>Create</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </React.Fragment>
  );
}