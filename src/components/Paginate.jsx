import React from 'react'
import { Pagination } from 'react-bootstrap';

const Paginate = ({ limitOnPage, totalLimit, paginate, currentPage }) => {
    let active = currentPage;

    let pageNumber = [];
    for (let number = 1; number <= (Math.ceil(totalLimit / limitOnPage)); number++) {
        pageNumber.push(

            <Pagination.Item key={number} active={number === active}
                onClick={() => paginate(number)}
            >
                {number}
            </Pagination.Item>

        );
    }
    return (
        <div className="pagination">
            <Pagination>{pageNumber}</Pagination>
        </div>
    )
}

export default Paginate;