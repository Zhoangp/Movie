import React, { useState } from 'react';
import Card from "../carousel/Card";
import { useDispatch, useSelector } from 'react-redux';
import './ListFilm.css'
import { Grid } from '@mui/material';
import ReactPaginate from 'react-paginate';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import axios from 'axios'
import { getFilmAction } from '../../../redux/actions/filmAction';


const ListFilm = (props) => {
  const dispatch = useDispatch();
    const imgStyle={
        width: '188px',
        height: '279px'
    }   
    const listFilm = useSelector(state => state.FilmReducer.listFilm);
    const handlePageClick = (data) => {
      let number = data.selected +1;
      const comments = getFilmAction(number);
      dispatch(comments);
    }

    const pre = () => {
      return <ArrowBack/ >
    }
    const next = () => {
      return <ArrowForward/>
    }
    return (
        <div className="container cover-listFilm">
            <h2 class="content-title">Movies</h2>
            <ReactPaginate  pageCount={7} previousLabel={pre()} nextLabel={next()} onPageChange={handlePageClick} containerClassName={'pagination'} pageClassName={'page__item'}/>
            <Grid container spacing={{ xs: 2, md: 1 }} >
            {listFilm.map((item, index) => {
              if(index < 18)
                return  <Grid xs={12} sm={4} md={4} lg={2}>
                 <Card infor={item} imgStyle={imgStyle} contentChange="content__change" />
                 </Grid>
            })}
            </Grid>
        </div>
    );
};

export default ListFilm;