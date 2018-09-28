import React from 'react'
import { Pagination } from 'semantic-ui-react'

const CustomPagination = (props) => <Pagination defaultActivePage={props.activePage} 
                                                totalPages={props.totalPages} 
                                                onPageChange={e => {
                                                    
                                                    console.log(e.target.value)
                                                }}/>

export default CustomPagination;