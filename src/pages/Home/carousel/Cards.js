import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {showDetail} from "../../../redux/actions/filmAction"
import "./card.css";

const Cards = (props) => {
 
  return (
    <div className="owl-item active">
      <div className="card card--big">
        <div className="card__cover">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.infor.poster_path}`}
            alt="poster"
            style={props.imgStyle}
          />
          <NavLink to={`/detail/${props.infor.id}`} className="card__play">
            <BsPlayFill className="icon-play" />
          </NavLink>
          <span
            className={`card__rate ${
              props.infor.vote_average > 7
                ? "card__rate--green"
                : props.infor.vote_average > 6.5
                ? "card__rate--yellow"
                : "card__rate--red"
            } `}
          >
            {props.infor.vote_average}
          </span>
        </div>
        <div className={`${props.contentChange} card__content`}>
          <h3 className="card__title">
            <NavLink to={`/detail/${props.infor.id}`}>
              {props.infor.title.length > 23
                ? props.infor.title.substring(0, 22) + "..."
                : props.infor.title} 
            </NavLink>
          </h3>
          <span className="card__category">
            <NavLink to={`/detail/${props.infor.id}`}>
              {props.infor.release_date}
            </NavLink>
          </span>
        </div>
      </div>
     </div> 
     
  );
};

export default Cards;
