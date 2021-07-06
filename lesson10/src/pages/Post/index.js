import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getNames } from "../../api";

import styles from "./Post.module.css";

function Post() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    getNames(`${id}`)
      .then((data) => setInfo(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {info && (
        <div className="character-info">
          <span>
            <h4>Name:</h4> {info.name}
          </span>
          <span>
            <h4>Height:</h4> {info.height}
          </span>
          <span>
            <h4>Mass:</h4> {info.mass}
          </span>
          <span>
            <h4>Hair Color:</h4> {info.hair_color}
          </span>
          <span>
            <h4>Eye Color:</h4> {info.eye_color}
          </span>
          <span>
            <h4>Skin Color:</h4> {info.skin_color}
          </span>
          <span>
            <h4>Birth Year:</h4> {info.birth_year}
          </span>
          <span>
            <h4>Gender:</h4> {info.gender}
          </span>
          <span>
            <h4>Created:</h4> {info.created}
          </span>
          <span>
            <h4>Edited:</h4> {info.edited}
          </span>
        </div>
      )}
      <Link to="/" exact>
        <button className={styles.btn}>Back</button>
      </Link>
    </div>
  );
}

export default Post;
