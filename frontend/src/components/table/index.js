/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component, PropTypes} from 'react';

// Components 
import TableList from './TableList';
import Spinner from '../commons/spinner/Spinner';
import Pagination from './Pagination';

class Table extends Component {
  render() {
    let props = this.props;
    return (
      <div>
        {/* Show a spinner when it is fetching any tables */}
        {(!props.isFetching) ?
          <div>
            <TableList columns={props.columns} resultSet={props.resultSet}/>
            <Pagination count={100}
                        limit={10}
                        currentPage={1}
                        onPageChange=""
                        />
          </div>
          :
          <div className="row center-align">
            <Spinner/>
          </div>
        }
      </div>
    )
  }
}

Table.propTypes = {
  isFetching: PropTypes.bool,
  columns: PropTypes.array,
  resultSet: PropTypes.array
};

export default Table;