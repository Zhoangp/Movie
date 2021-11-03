import React, { useState } from "react";
import Cards from "../carousel/Cards";
import { useDispatch, useSelector } from "react-redux";
import "./ListFilm.css";
import ReactPaginate from "react-paginate";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { getFilmAction } from "../../../redux/actions/filmAction";

const ListFilm = (props) => {
  const dispatch = useDispatch();
  const listFilm = useSelector((state) => state.FilmReducer.listFilm);
  const handlePageClick = (data) => {
    let number = data.selected + 1;
    const comments = getFilmAction(number);
    dispatch(comments);
  };

  const pre = () => {
    return <ArrowBack />;
  };
  const next = () => {
    return <ArrowForward />;
  };
  return (
    <div className="container cover-listFilm">
      <h2 className="content-title">Movies</h2>
      <div className="row row--grid">
      {listFilm.map((itemFilm, index) => {
          if (index < 18)
            return (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-xl-2">
                          <Cards
                  infor={itemFilm}
                  
                  contentChange="content__change"
                />
                </div>
            );
        })}
        
      </div>
      <ReactPaginate
        pageCount={5}
        previousLabel={pre()}
        nextLabel={next()}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page__item"}
      />
    </div>
  );
};

export default ListFilm;
