import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onInputChange(e) {
    let val = e.target.value;

    this.setState({
      searchVal: val,
    });
  }

  onSearchClick() {
    if (this.state.searchVal !== '') {
      this.props.onSearchHandler(this.state.searchVal);
    }
  }

  render() {
    return (
      <div>
        <input onChange={ this.onInputChange }></input>
        <button onClick={ this.onSearchClick }>Search</button>
      </div>
    );
  }
}

export default SearchBar;
