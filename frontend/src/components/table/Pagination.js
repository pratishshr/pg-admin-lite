/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/13/16.
 */

import React, {Component, PropTypes} from 'react';

class Pagination extends Component {
  constructor() {
    super();
    this.renderPageNumbers = this.renderPageNumbers.bind(this);
  }

  /* TODO: Refactor this method */
  renderPageNumbers() {
    let pageNumbers = [];
    let count = this.props.count;
    let limit = this.props.limit;
    let currentPage = this.props.currentPage;
    let pageDisplayCount = this.props.pageDisplayCount || 9;

    let lastPage = (count / limit) ;
    let firstPage = 1;
    let lastPageShown = lastPage;
    let midPoint = Math.floor(pageDisplayCount / 2);

    if (currentPage <= (lastPage - midPoint)) {
      if (currentPage > midPoint) {
        firstPage = currentPage - midPoint;
      }
      if (lastPage > pageDisplayCount) {
        lastPageShown = firstPage + pageDisplayCount;
      }
    } else {
      firstPage = lastPage - pageDisplayCount;
    }

    for (let i = firstPage; i < lastPageShown; i++) {
      pageNumbers.push(
        <li className={(currentPage === i)?'active':null}>
          <a href="#!">{i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  }

  render() {
    return (
      <ul className="pagination center">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        {this.renderPageNumbers()}
        <li><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    )
  }
}

Pagination.proptypes = {
  limit: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default Pagination;