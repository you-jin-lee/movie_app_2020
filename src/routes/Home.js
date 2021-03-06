import React from "react";
import axios from "axios";
import Movie from '../components/Movie';
import "./Home.css";
import "./orange.jpg"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false }) //this.setState({movies: movies})
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (<section className="movie_list">
            {isLoading
                ? <div className="loader">Loading...</div>
                : (<div className="main">
                    <div className="header">
                        <p className="header__title">Wanna Find <strong>High Rating</strong> Movies?</p>
                        <p className="header__subtitle">Here is what you want..</p>
                    </div>
                    <div className="movies">
                        {
                            movies.map(movie => {
                                return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster_m={movie.medium_cover_image} poster_l={movie.large_cover_image} genres={movie.genres} />
                            })
                        }
                    </div>
                </div>
                )
            }</section>);
    }
}

export default App
