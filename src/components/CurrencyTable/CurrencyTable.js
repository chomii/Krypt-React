import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CurrencyTable.css';
import { Table } from 'semantic-ui-react';
import { capitalize, numberOfPages, formatTwoDecimals } from '../../services/util/Util';
import { getTableData } from '../../services/api/api';
import CustomLoader from '../Loader/CustomLoader';
import CustomPagination from '../Pagination/CustomPagination';

const { Header, HeaderCell, Row, Body, Cell } = Table;

const TableFields = ['#', 'name', 'price', 'circulating supply', 'change(24h)'];
const elementsPerPage = 15;

class CurrencyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            isLoading : true,
            numberOfPages : 0,
            activePage : 1,
            sortType : 'id'
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    } 

    componentDidMount() {

        const { activePage, sortType } = this.state;
        console.log(this.props, 'from')
        getTableData(activePage, elementsPerPage, sortType).then(data => {
            const numPages = numberOfPages(data.metadata.num_cryptocurrencies, elementsPerPage);
            //debugger
            this.setState({
                data : Object.values(data.data), 
                isLoading : false, 
                numberOfPages : numPages
            });
        }).catch(error => {
            console.error(error);
        });
    }

    calculatePage(activePage) {
        return activePage === 1 ? 1 : ((activePage - 1) * 10 + 1);
    }

    handlePageChange(pageClicked) {
        

        this.setState({activePage : parseInt(pageClicked, 10), isLoading : true});
        
        getTableData(this.calculatePage(pageClicked), elementsPerPage).then(data => {
            this.setState({data : Object.values(data.data), isLoading : false});
        }).catch(error => {
            console.log(error);
        })
        console.log(parseInt(pageClicked, 10), 'page clicked');
        console.log(this.state, 'clicked');
    }

    handleColumnClick(e, field) {
        console.log(field);
        this.setState({sortType : field, isLoading : true});

        getTableData(this.calculatePage(this.state.activePage), elementsPerPage, field).then(data => {
            this.setState({data : Object.values(data.data), isLoading : false});
        }).catch(error => {
            console.log(error);
        })
    }

    // handleDetailsClick(e, elId) {
    //     console.log(elId);
    //     getDetailsData(elId).then(data => {
    //         console.log(data, 'handle details click');
    //         this.setState({currencyDetails : data.data})
    //     })
    // }

    calculateIndexForActivePage(index) {
        return ((elementsPerPage * (this.state.activePage - 1)) + index + 1);
    }

    // fetching details for id 

    

    renderTable() {
        return(
            <div className='tableWrapper'>
            <Table basic >
                <Header>
                    <Row>
                        {
                            TableFields.map((field, index) => {
                                let className = '';
                                switch(field) {
                                    case '#':
                                        className = 'column-header';
                                        return <HeaderCell className={className} key={index} onClick={e => this.handleColumnClick(e, 'id')}>{capitalize(field)}</HeaderCell>;
                                    case 'name':
                                        className = 'column-header';
                                        return <HeaderCell className={className} key={index} onClick={e => this.handleColumnClick(e, 'name')}>{capitalize(field)}</HeaderCell>;
                                    case 'change(24h)':
                                        className = 'column-header';
                                        return <HeaderCell className={className} key={index} onClick={e => this.handleColumnClick(e, 'percent_change_24h')}>{capitalize(field)}</HeaderCell>;
                                    default: 
                                        return <HeaderCell className={className} key={index}>{capitalize(field)}</HeaderCell>;
                                }
                            })
                        }
                    </Row>
                </Header>
                <Body>
                    {
                        this.state.data.map((el, index) => (
                                <Row key={el.id}>
                                    <Cell>{this.calculateIndexForActivePage(index)}</Cell>
                                    <Cell className='clickable'><Link to={`/details/${el.id}`}>{el.name}</Link></Cell>
                                    <Cell>{`${formatTwoDecimals(el.quotes.USD.price)} $`}</Cell>
                                    <Cell>{el.circulating_supply}</Cell>
                                    <Cell>{`${formatTwoDecimals(el.quotes.USD.percent_change_24h)} %`}</Cell>
                                </Row>
                            )
                        )
                    }
                </Body>
            </Table>
            <CustomPagination activePage={this.state.activePage} totalPages={this.state.numberOfPages} onPageChange={this.handlePageChange}/>
            </div>
        )
    }

    render() {
        console.log('render');
        return (
            <div className="dashboard">
                {this.state.isLoading ? <CustomLoader/> : this.renderTable()}
            </div>
        )
    }
}

export default CurrencyTable;