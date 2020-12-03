import './Grid.css';

function Grid({data: {header = [], values = [], actions = []}}) {
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
          <tr key={row.url}>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
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
