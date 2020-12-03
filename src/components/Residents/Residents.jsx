import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchResidents } from "../../store/actions";
import styles from './Residents.module.css';

function Residents({match, fetchResidents, residents = []}) {
  useEffect(() => {
    const ids = decodeURIComponent(match.params.ids)
    fetchResidents(ids.split(","));
  }, [fetchResidents, match]);

  return(
    <div>
      <table className={styles.gridTable}>
        <tbody>
          {residents.map(resident => (
            <tr key={resident.url}>
              <td>{`${resident.name}`}</td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  )
}

const mapStateToProps = ({residents:{residents}}) => {
  return { residents }
}

const mapDispatchToProps = (dispatch) => ({
  fetchResidents: (ids) => dispatch(fetchResidents(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Residents);