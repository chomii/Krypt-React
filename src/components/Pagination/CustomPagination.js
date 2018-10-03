import React from 'react'
import { Pagination } from 'semantic-ui-react'

const CustomPagination = (props) => (
    <Pagination defaultActivePage={props.activePage}
        totalPages={props.totalPages} 
        onPageChange={e => props.onPageChange(e.target.text)}
    />
)

export default CustomPagination;