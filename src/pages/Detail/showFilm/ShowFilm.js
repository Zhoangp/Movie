import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Grid, LinearProgress } from '@mui/material';
import './showFilm.css'
import { NavLink } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: '#1a191f',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: "white"
};

const ShowFilm = (props) => {
    const history = useHistory();
    const {infor} = useSelector((state) => state.UserReducer)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        if(infor)
            setOpen(true);
        else {
          alert("Vui lòng đăng nhập vào tài khoản!")
          history.push("/signin")
        }
    }
    const handleClose = () => setOpen(false);
    return (
        <div>
        <Button onClick={handleOpen} style={{color: "white"}}>BOOK TICKETS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          BHD Star Cineplex - 3/2
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
           columnSpacing={{xs: 1, sm: 2}} rowSpacing={2}> 
              <Grid className="show__time" item md={2} lg={2} ><NavLink to="/booking">2021-10-23T04:32:00</NavLink></Grid>

          </Grid>
          <hr></hr>
          </>
        </Box>
      </Modal>
        </div>
    );
};

export default ShowFilm;