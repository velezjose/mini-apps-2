import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar.jsx';
import SearchResultList from './SearchResultList.jsx';
import Pagination from './Pagination.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedResults: [],
      pageNum: 1,
      pageNums: 1,
      searchVal: '',
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.populateSearchResults = this.populateSearchResults.bind(this);
    this.onPaginationClickHandler = this.onPaginationClickHandler.bind(this);
  }

  populateSearchResults(data, pageNums, pageNum, searchVal = this.state.searchVal) {
    this.setState({
      displayedResults: data,
      pageNums,
      pageNum,
      searchVal,
    });
  }

  getMaxPages(response) {
    return Math.ceil(Number(response.headers['x-total-count']) / 10);
  }

  onSearchHandler(searchVal, pageNum = 1) {
    axios(`/events/?q=${ searchVal }&_page=${ pageNum }`)
    .then((response) => {
      this.populateSearchResults(response.data, this.getMaxPages(response), pageNum, searchVal);
    })
    .catch(() => console.error('COULDN\'T FIND SEARCH RESULTS'));
  }

  onPaginationClickHandler({ selected }) {
    this.onSearchHandler(this.state.searchVal, selected + 1);
  }

  render() {
    return (
      <>
        <h1> Sup pham </h1>
        <SearchBar onSearchHandler={ this.onSearchHandler } />
        <SearchResultList results={ this.state.displayedResults } />
        { 
          this.state.displayedResults.length > 0 ? 
            <Pagination pageNums={ this.state.pageNums } onPaginationClickHandler={ this.onPaginationClickHandler } />
          : null
        }
      </>
    );
  }
}

export default App;