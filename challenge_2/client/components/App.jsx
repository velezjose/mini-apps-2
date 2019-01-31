import React from 'react';
import SearchBar from './SearchBar.jsx';
import Chart from './Chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3>Cryptocurrency Charting Tool</h3>
        <SearchBar />
        <Chart />
      </>
    );
  }
}

export default App;
