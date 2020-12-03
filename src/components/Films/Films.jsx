import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchFilms } from "../../store/actions";
import styles from './Films.module.css';

function Films({ match, fetchFilms, films }) {
  useEffect(() => {
    const ids = decodeURIComponent(match.params.ids)
    fetchFilms(ids.split(","));
  }, [fetchFilms, match]);

  return (
    <div>
      <table className={styles.gridTable}>
        <tbody>
          {films.map(film => (
            <tr key={film.url}>
              <td>{`${film.title} (episode: ${film.episode_id})`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Films.propTypes = {
  fetchFilms: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired
}

Films.defaultProps = {
  films: []
}

const mapStateToProps = ({ films: { films } }) => {
  return { films }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: (ids) => dispatch(fetchFilms(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Films);