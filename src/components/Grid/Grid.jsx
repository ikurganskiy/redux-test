import './Grid.css';

function Grid({data: {header = [], values = [], actions = []}, onEditDetails}) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row) => (
          <tr key={row.url} onClick={(e) => onEditDetails(row)}>
            {header.map((colName) => {
              let value = row[colName];
              if (colName === 'residents' || colName === 'films') {
                value = value.length;
              }
              return <td key={colName}>{value}</td>
            })}
            {!!actions.length && 
              <td className='gridActions'>
                {actions.map(({label, action}, index) => <button key={`${row.url})_${index}`} onClick={() => action(row)}>{label}</button>)}
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
