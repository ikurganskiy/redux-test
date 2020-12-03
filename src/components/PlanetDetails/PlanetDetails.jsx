import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPlanetDetails } from "../../store/actions";

import styles from './PlanetDetails.module.css';

const keys = [
  'name',
  'population',
  'diameter',
  'gravity',
  'orbital_period',
  'rotation_period',
  'terrain',
  'climate',
  'surface_water',
]

const makeTitle = str => {
  const parts = str.replace('_', ' ')
  return parts.charAt(0).toUpperCase() + parts.slice(1);
}

function PlanetDetails({ match, fetchPlanetDetails, planet }) {

  useEffect(() => {
    fetchPlanetDetails(match.params.id);
  }, [fetchPlanetDetails, match]);

  return(
    <div>
      <table className={styles.gridTable}>
        <colgroup>
          <col style={{"width":"20%"}}/>
          <col style={{"width":"80%"}}/>
        </colgroup>  
        <tbody>
          {keys.map(key => (
            <tr key={key}>
              <td>{makeTitle(key)}</td>
              <td>{planet ? planet[key] : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  )
}

const mapStateToProps = ({planets:{planet}}) => {
  return { planet }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetDetails: (id) => dispatch(fetchPlanetDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);