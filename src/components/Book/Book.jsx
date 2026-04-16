import PropTypes from "prop-types";


function Book(props) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Book;