import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(this.props)
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const { id, year, title, poster_m, poster_l, genres, summary } = location.state;
            return (
                <div className="detail_container">
                    <div className='detail'>
                        <a href={poster_l}><img src={poster_m} alt={title} title={title}></img></a>
                        <div className='detail_text'>
                            <div className='title'>{title}</div>
                            <div className='year'>{year}</div>
                            {genres.map((g, index) => (
                                <span key={index} className='genres'>✔ {g} &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            ))}
                            <p className='summary'>—— {summary}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;