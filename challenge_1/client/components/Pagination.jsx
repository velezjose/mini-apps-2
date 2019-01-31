import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNums, onPaginationClickHandler }) => (
  <ReactPaginate 
    previousLabel={ 'previous' }
    nextLabel={ 'next' }
    breakLabel={ '...' }
    marginPagesDisplayed={ 2 }
    pageRangeDisplayed={ 5 }
    pageCount={ pageNums }
    onPageChange={ onPaginationClickHandler }
  />
);
  
export default Pagination;
