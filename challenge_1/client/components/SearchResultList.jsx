import React from 'react';
import SearchResult from './SearchResult.jsx';

export default ({ results }) => (
  <ul>
    { results.map((result, i) => <SearchResult key={i} result={ result } />) }
  </ul>
);
