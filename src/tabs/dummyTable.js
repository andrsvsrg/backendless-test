import React from 'react'

function DummyTable() {
  return (
    <div className="dummy-wrapper">
      <div className="dummy-header">
        <h2>Dummy Table</h2>
      </div>
      <table className="dummy-table">
        <thead>
          <tr>
            <th>dummy header 1</th>
            <th>dummy header 2</th>
            <th>dummy header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dummy 1</td>
            <td>dummy 2</td>
            <td>dummy 3</td>
          </tr>
          <tr>
            <td>dummy 4</td>
            <td>dummy 5</td>
            <td>dummy 6</td>
          </tr>
          <tr>
            <td>dummy 7</td>
            <td>dummy 8</td>
            <td>dummy 9</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DummyTable
