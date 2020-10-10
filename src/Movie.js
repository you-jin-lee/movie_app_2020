import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({year, title, summary, poster, genres }){
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <h5 className="genres">
                {genres && genres.map((genre, index) => (<p key={index} className="genres__genre">✔ {genre}</p>))}
            </h5>
            
        </div>
            
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;