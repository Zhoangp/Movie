import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Grid } from '@mui/material';
import './showFilm.css'
import { NavLink } from 'react-router-dom';
import { getShowTime } from '../../../redux/actions/showTime';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  height: "80%",
  bgcolor: '#1a191f',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: "white",
  overflow: "scroll"
};

const ShowFilm = (props) => {
  const listShowTime = useSelector(state => state.ShowTimeReducer.listShowTime) || null
  const dispatch = useDispatch();
    const history = useHistory();
    const {infor} = useSelector((state) => state.UserReducer)
    const [open, setOpen] = React.useState(false);
    const params = useParams();
    const handleOpen = () => {
        if(infor) {
            dispatch(getShowTime(params.id))
            setOpen(true);

        }
        else {
          alert("Vui lòng đăng nhập vào tài khoản!")
          history.push("/signin")
        }
    }
    const handleClose = () => setOpen(false);
    return (
        <div >
        <Button onClick={handleOpen} style={{color: "white", width: "235px"}}>BOOK TICKETS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          { listShowTime.length !== 0 ?
          listShowTime.map(item => {
            return <>
            <Typography id="modal-modal-title" className="theater__cluster__name" variant="h4" component="h1">
            {item.tenHeThongRap}
            </Typography>
            {item.cumRapChieu.map(item => {
                return <>
                   <Typography id="modal-modal-title" className="theater__name" variant="h6" component="h2">
                    {item.tenCumRap}
                  </Typography> 
                  <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
             spacing={2}> 
             {item.lichChieuPhim.map((item, index)=> {
                      return <Grid className="show__time" item xs={6} sm={4}  md={3} lg={2} >
                        <NavLink to={`/booking/${item.maLichChieu}`}>
                          <p>{item.ngayChieuGioChieu.substring(0,10)}</p>
                          <p>{item.ngayChieuGioChieu.substring(11,19)}</p>
                          </NavLink>
                        </Grid>
             } )}
            </Grid>
                </>
            })}
            
            <hr></hr>
            </>
          }) :
                <h2>Sorry, there are currently no showings!</h2> 
        }
          
        </Box>
      </Modal>
        </div>
    );
};

export default ShowFilm;