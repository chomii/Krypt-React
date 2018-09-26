import React from 'react';
import { Table } from 'semantic-ui-react';

const { Header, HeaderCell, Row } = Table;

const TableFields = ['#', 'name', 'market cap', 'price', 'circulating supply', 'change(24h)'];

const Dashboard = (props) => {
    return (
        <div classname="dashboard">
            <Table basic>
                <Header>
                    <Row>
                        {
                            TableFields.map(field => (
                                <HeaderCell>{field}</HeaderCell>
                            ))
                        }
                    </Row>
                </Header>
            </Table>
        </div>
    )
}

export default Dashboard;