import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      displayedResults: [],
      resultsPage: 1,
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {

  }

  render() {
    return (
      <>
        <SearchBar />
        <SearchResults />
      </>
    );
  }
}

export default App;