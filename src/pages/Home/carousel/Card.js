import React from 'react';
import { BsPlayFill } from "react-icons/bs";
import './card.css'

const Card = (props) => {
    console.log(props.infor);
    return (
        <div className="owl-item active">
     <div className="card card--big">
       <div className="card__cover">
       <img src={`https://image.tmdb.org/t/p/w500${props.infor.poster_path}`} alt style={props.imgStyle} />
         <a href="details.html" className="card__play">
           <BsPlayFill className="icon-play" />
         </a>
         <span className="card__rate card__rate--yellow">{props.infor.vote_average}</span>
       </div>
       <div className="card__content">
         <h3 className="card__title">
           <a href="details.html">{props.infor.title.length > 23 ? props.infor.title.substring(0, 22) + "..." : props.infor.title}</a>
         </h3>
         <span className="card__category">
           <a href="#">{props.infor.release_date}</a>

         </span>
       </div>
     </div>
   </div>
    );
};

export default Card;