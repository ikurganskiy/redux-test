import React from "react";
import PropTypes from 'prop-types';

import { makeTitle } from '../../utils';
import styles from './Grid.module.css';

function Grid({ data: { header = [], values = [], actions = [] }, onEditDetails }) {
  return (
    <table className={styles.gridTable}>
      <thead>
        <tr>
          {header.map(({ name }) => <th key={name}>{makeTitle(name)}</th>)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {values.map((row) => (
          <tr key={row.url} onClick={(e) => onEditDetails(row)}>
            {header.map(({ name, type }) => {
              let value = row[name];
              if (name === 'residents' || name === 'films') {
                value = value.length;
              }
              return <td key={name} className={type === 'number' ? styles.rightAligned : undefined}>{value}</td>
            })}
            <td className={styles.gridActions}>
              {actions.reduce((acc, { label, action }, index) => {
                if (index === 1 && row.films == 0) {
                  return acc;
                }
                else if (index === 2 && row.residents == 0) {
                  return acc;
                }

                return [...acc, <button key={`${row.url})_${index}`} onClick={() => action(row)}>{label}</button>]
              }, [])}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string
    })),
    values: PropTypes.any,
    actions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func
    }))
  }).isRequired,
  onEditDetails: PropTypes.func.isRequired
}

export default Grid;
