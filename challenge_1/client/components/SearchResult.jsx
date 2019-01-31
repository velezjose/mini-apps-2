import React from 'react';

export default ({ result }) => (
  result.date && result.description ?
    <li>
      Date: { result.date } <br />
      Description: { result.description }
    </li>
  : <></>
);
