import React from 'react';
import { Table } from 'semantic-ui-react';
import { capitalize } from '../../Utility';
const { Header, HeaderCell, Row } = Table;

const TableFields = ['#', 'name', 'market cap', 'price', 'circulating supply', 'change(24h)'];

const CurrencyTable = (props) => {
    return (
        <div className="dashboard">
            <Table basic>
                <Header>
                    <Row>
                        {
                            TableFields.map((field, index) => (
                                <HeaderCell key={index}>{capitalize(field)}</HeaderCell>
                            ))
                        }
                    </Row>
                </Header>
            </Table>
        </div>
    )
}

export default CurrencyTable;