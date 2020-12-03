import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPlanetDetails } from "../../store/actions";

import './PlanetDetails.css';

function PlanetDetails(props) {
  const { match, fetchPlanetDetails, planet } = props;

  useEffect(() => {
    fetchPlanetDetails(match.params.id);
  }, [fetchPlanetDetails, match]);

  return(
    <div>{`Planet details ${match.params.id} ${JSON.stringify(planet)}`}</div>
  )
}

const mapStateToProps = ({planets:{planet}}) => {
  return { planet }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetDetails: (id) => dispatch(fetchPlanetDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);