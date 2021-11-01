import { Button, Grid, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React, { Fragment } from 'react';
import './listOfSeats.css'
const Index = () => {
    return (
        <div className="cover__seats container">
          
        <div className="seats__left">
        <Grid item container spacing={2}>
            {Array.from(Array(100)).map((item, index) => {
                return <Fragment>
                        <Grid item xs={2} sm={2} md={1} lg={1}> 
                        <Button  className="seats-empty" variant="contained">
                            {index+1}
                        </Button>
                        </Grid>
                    
                </Fragment>
            }) }
        </Grid>
        </div>
        <div className="seats__right">
                <Typography variant="h2" component="h1">0</Typography>
                <hr />
                <Typography variant="h4" component="h4">Sai Gon Center</Typography>
                <Typography variant="h6" component="h5">Địa điểm: <span>318/3 Phan Van Tri - Rạp 1</span></Typography>
                <Typography variant="h6" component="h5">Ngày chiếu: <span>20/11/2021</span></Typography>
                <hr />

                <Typography className="total__seats" variant="h5" component="h4">
                    <span>Ghế</span>
                    <span>0</span>
                    </Typography>
        </div>

        </div>
    );
};

export default Index;