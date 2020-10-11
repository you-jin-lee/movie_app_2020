import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster_m, poster_l, genres }) {
    return (
        <Link style={{ textDecoration: 'none' }} to={{
            pathname: `/movie/${id}`,
            state: {
                id, year, title, poster_m, genres, summary, poster_l
            }
        }}>
            <div className="movie">
                <img src={poster_m} alt={title} title={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <h5 className="genres">
                        {genres && genres.map((genre, index) => (<p key={index} className="genres__genre">✔ {genre}</p>))}
                    </h5>

                </div>
            </div>
        </Link>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster_m: PropTypes.string.isRequired,
    poster_l: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;