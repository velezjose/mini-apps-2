import React from 'react';
import SearchBar from './SearchBar.jsx';
import Chart from './Chart.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
      responseData: null,
      isLoading: false,
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  onSearchHandler(searchVal = '') {
    this.setState({
      isLoading: true,
    });

    axios.get(`/currency/${searchVal}`)
    .then(({ data }) => {
      if (data.success) {
        this.setState({
          searchVal,
          responseData: data.data,
          isLoading: false,
        });

      } else {
        this.setState({
          isLoading: false,
        });
      }
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        responseData: null,
      });
      console.error(`Unable to fetch ${ searchVal } from Coindesk.`)
    })
  }

  getData() {
    let datePriceKVs = this.state.responseData[this.state.searchVal];
    // return datePriceKVs;
    return Object.keys(datePriceKVs).map((date) => [date, datePriceKVs[date]]);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <section>
        <h3>Cryptocurrency Charting Tool</h3>
        <SearchBar onSearchHandler={ this.onSearchHandler } />
        {
          this.state.responseData ?
            Chart({ data: this.getData(), disclaimer: this.state.responseData.disclaimer, label: this.state.searchVal })
          : null
        }
      </section>
    );
  }
}

export default App;
