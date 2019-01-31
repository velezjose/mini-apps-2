import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    };
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }

  onSearchButtonClick() {
    this.props.onSearchHandler(this.state.searchVal);
  }

  onInputValueChange(e) {
    let val = e.target.value;
    this.setState({
      searchVal: val,
    });
  }

  render() {
    return (
      <>
        <input onChange={ this.onInputValueChange }></input>
        <button onClick={ this.onSearchButtonClick }>Search</button>
      </>
    );
  }
}

export default SearchBar;
