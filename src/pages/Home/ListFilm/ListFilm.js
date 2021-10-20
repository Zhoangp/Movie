import React, { useState } from 'react';
import Card from "../carousel/Card";
import { useDispatch, useSelector } from 'react-redux';
import './ListFilm.css'
import { Grid } from '@mui/material';
import ReactPaginate from 'react-paginate';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import axios from 'axios'


const ListFilm = (props) => {
  const dispatch = useDispatch();
    const imgStyle={
        width: '188px',
        height: '279px'
    }
    const [items, setItems] = useState([])
    const fetchData = async (number) => {
      try {
        const result = await axios({
          url: `https://api.themoviedb.org/3/movie/popular?api_key=17d2b8ee0ce95cae017c6fe95cfcaa6b&language=en-US&page=${number}`,
          method: "GET"
        })
        dispatch({type: 'GET_FILM', payload: result.data})
      } catch(error) {
        console.log(error);
      }
  }
    const listFilm = useSelector(state => state.FilmReducer.listFilm) || 0;
    const handlePageClick = (data) => {
      let number = data.selected +1;
      const comments = fetchData(number);
      setItems(comments);
      console.log(data.selected)
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