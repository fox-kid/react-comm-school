import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharName({ name, id }) {
  return (
    <Link to={`/post/${id}`}>
      <span className="name-holder">{name}</span>
    </Link>
  );
}

CharName.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CharName;
