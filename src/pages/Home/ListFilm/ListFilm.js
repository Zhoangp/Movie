import React from 'react';
import Card from "../carousel/Card";
import { useSelector } from 'react-redux';
import './ListFilm.css'
import { Grid } from '@mui/material';

const ListFilm = (props) => {
    const imgStyle={
        width: '188px',
        height: '279px'
    }
    const listFilm = useSelector(state => state.FilmReducer.listFilm) || 0;

    return (
        <div className="container cover-listFilm">
            <h2 class="content-title">Movies</h2>
            <Grid container spacing={2}>
            {listFilm.map((item) => {
                return  <Grid xs={2}>
                 <Card infor={item} imgStyle={imgStyle} />
                 </Grid>
            })}
            </Grid>
        </div>
      /*   <Grid container spacing={2}>
  <Grid  xs={2}>
    <div>xs=8</div>
  </Grid>
  <Grid  xs={2}>
    <div>xs=4</div>
  </Grid>
  <Grid  xs={2}>
    <div>xs=4</div>
  </Grid>
  <Grid  xs={2}>
    <div>xs=8</div>
  </Grid>
</Grid> */
    );
};

export default ListFilm;