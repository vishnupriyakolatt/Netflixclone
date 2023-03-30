import React, { useEffect, useState } from "react";
import "./RowPost.css";
import Youtube from "react-youtube";
import { imageUrl, API_KEY, alertMessage } from "../../Constants/constants";
import axios from "../../axios";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https:'developers.google.com/youtube/player_parameters',
      autoplay: 0,
    },
  };
  const handlwMovie = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response)
        if (response.data.results.length != 0) {
          console.log(response.data.results[0].key)
          seturlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handlwMovie(obj.id)}
            className={props.issmall ? "smallposter" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            key={obj.id}
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;