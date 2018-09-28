import React, { Component } from 'react';
import './CurrencyTable.css';
import { Table } from 'semantic-ui-react';
import { capitalize, numberOfPages } from '../../Utility';
import { getTableData } from '../../services/api/api';
import CustomLoader from '../Loader/CustomLoader';
import CustomPagination from '../Pagination/CustomPagination';

const { Header, HeaderCell, Row, Body, Cell } = Table;

const TableFields = ['#', 'name', 'price', 'circulating supply', 'change(24h)'];
const elementsPerPage = 10;

class CurrencyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            isLoading: true,
            numberOfPages: 0
        }
    } 

    componentDidMount() {

        getTableData(2, elementsPerPage).then((data) => {

            let numPages = numberOfPages(data.metadata.num_cryptocurrencies, elementsPerPage);
            //console.log(numPages);
            this.setState({data : Object.values(data.data), isLoading : false, numberOfPages : numPages})
            
            console.log('componentDidMount', this.state);
        }).catch((error) => {
            console.error(error);
        });
        
    }
    renderLoader() {
        return <CustomLoader/>
    }

    handlePageChange(event) {
        console.log(event);
    }

    renderTable() {
        return(
            <div className='tableWrapper'>
            <Table basic >
                <Header>
                    <Row>
                        {
                            TableFields.map((field, index) => (
                                <HeaderCell key={index}>{capitalize(field)}</HeaderCell>
                            ))
                        }
                    </Row>
                </Header>
                <Body>
                    {
                        this.state.data.map((el, index) => {
                            
                            return(
                                <Row key={index}>
                                    <Cell>{el.id}</Cell>
                                    <Cell>{el.name}</Cell>
                                    <Cell>{el.quotes.USD.price.toFixed(2) + ' $'}</Cell>
                                    <Cell>{el.circulating_supply}</Cell>
                                    <Cell>{el.quotes.USD.percent_change_24h.toFixed(2) + ' %'}</Cell>
                                    
                                </Row>
                            )
                        })
                    }
                </Body>
            </Table>
            <CustomPagination activePage={5} totalPages={this.state.numberOfPages} onPageChange={this.handlePageChange}/>
            </div>
        )
    }

    render() {
        console.log('render');
        return (
            <div className="dashboard">
                {this.state.isLoading ? this.renderLoader() : this.renderTable()}
            </div>
        )
    }
}

export default CurrencyTable;