import React from "react";
import StarRater from './StarRater';

const ListOfMovies = ({ listOfMovies }) => {
    return (
        <>
            {
                Object.values(listOfMovies).map((movie) => (
                    <div className="card">
                        <img src="https://img.pngio.com/video-camera-outline-free-cinema-icons-video-camera-icon-png-1200_630.png" alt="Avatar" />
                        <div className="container">
                            <h4>
                                <b>{movie.name}</b>
                            </h4>
                            <StarRater
                                numberOfStarts={movie.rating}
                            />
                        </div>
                    </div>
                ))
            };
        </>
    );
};

export default ListOfMovies;
