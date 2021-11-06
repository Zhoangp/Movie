import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetail } from '../../redux/actions/filmAction';

import "./detail.css"
import ShowFilm from './showFilm/ShowFilm';

const Index = (props) => {
  const {title, poster_path, vote_average, release_date, overview, backdrop_path, production_countries, production_companies, genres, runtime} = useSelector((state) => state.FilmReducer.detailFilm) || {}
  const {key} = useSelector((state) => state.FilmReducer.filmVideo) || {}  

    const dispatch = useDispatch()
    const {id} = useParams()
      useEffect(() => {
        dispatch(getDetail(id))
      }  
      , []);
     
    return (
      <div style={{position: "relative", paddingTop: "30px", marginBottom: "80px"}} >
        <div className="bg__detail" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`}}></div>
        <div className="container">
     <div className="row">
    <div className="col-12">
      <h1 className="section__title section__title--mb">{title}</h1>
    </div>
    <div className="col-12 col-xl-6">
      <div className="card card--details">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-5">
            <div className="card__cover">
              <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt />
              <span className={` card__rate ${vote_average > 7  ? "card__rate--green" : vote_average > 6 ? "card__rate--yellow" : "card__rate--red"}`}>{vote_average}</span>
            </div>
            <p className="card__trailer"><ShowFilm/></p>
          </div>
          <div className="col-12 col-md-8 col-lg-9 col-xl-7">
            <div className="card__content">
              <ul className="card__meta">
                <li><span>Director:</span> Vince Gilligan</li>
                <li><span>Production companies:</span>{production_companies ? production_companies.map(item => {
                  return <a href="#">{item.name}</a>
                }) : <></>} </li>
                <li><span>Genre:</span> {genres !== undefined ? genres.map(item => {
                  return <a href="#">{item.name}</a>
                }) : <></>} 
                  </li>
                <li><span>Release date:</span>{release_date}</li>
                <li><span>Running time:</span>{runtime} mins</li>
                <li><span>Country:</span> {production_countries ? production_countries.map(item => {
                  return <a href="#">{item.iso_3166_1}</a>
                }) : <></> } </li>
              </ul>
              <div className="card__description mCustomScrollbar _mCS_2" style={{position: 'relative', overflow: 'scroll'}}>
                <div id="mCSB_2" className="mCustomScrollBox mCS-custom-bar3 mCSB_vertical mCSB_outside" tabIndex={0} style={{maxHeight: 'none'}}>
                  <div id="mCSB_2_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
                    {overview}
                  </div>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className="col-12 col-xl-6">
<iframe  src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  </div>

</div>
</div>

    );
};

export default Index;