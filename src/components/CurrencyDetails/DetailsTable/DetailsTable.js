import React from 'react';
import './DetailsTable.css';
import { Table } from 'semantic-ui-react';
import { formatTwoDecimals } from '../../../services/util/Util';

const DetailsTable = (props) => {
    const { columns, data } = props;
    const { Header, HeaderCell, Row, Body, Cell } = Table;

    return <Table basic >
        <Header>
            <Row>
                {
                    columns.map(el => {
                        return <HeaderCell className='table-header' key={el}>{el}</HeaderCell>
                    })
                }
            </Row>
        </Header>
        <Body>
            <Row>
                <Cell>{data.quotes.USD.market_cap}</Cell>
                <Cell>{formatTwoDecimals(data.quotes.USD.volume_24h)}</Cell>
                <Cell>{data.circulating_supply}</Cell>
                <Cell>{data.max_supply !== null ? data.max_supply : 'unavailable'}</Cell>
            </Row>
        </Body>
    </Table>
}

export default DetailsTable;