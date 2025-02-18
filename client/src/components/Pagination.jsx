//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success


import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';


export function Pagination({ itemsPerPage, items , updatePage}) {

  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  function handlePageClick(event) {
    updatePage(event.selected)
  };

  return (
    <ReactPaginate
      breakLabel="..."
      containerClassName='pagination'
      activeClassName={'activePagination'}
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
  );
}
