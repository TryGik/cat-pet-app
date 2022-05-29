import React from 'react'
import { Pagination } from 'react-bootstrap';

const Paginate = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div className="pagination">
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default Paginate