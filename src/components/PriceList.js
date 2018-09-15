import React from 'react';
import { Table, Icon, Header } from 'semantic-ui-react'

import Town from './Town';

class PriceList extends React.Component {
    render() {
        return (
            <div>
                 <Header as='h2'>
                    <Icon name='clipboard list' />
                    <Header.Content>
                    Price List
                    <Header.Subheader>as of September 16, 2018</Header.Subheader>
                    </Header.Content>
                </Header>
                <Table celled structured className='mt-4'>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan='2'>Item</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2'>Quantity</Table.HeaderCell>
                        <Table.HeaderCell colSpan='2' textAlign='center'>Price</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>Wholesale</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>retail</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Palay</Table.Cell>
                        <Table.Cell>800 Sacks</Table.Cell>
                        <Table.Cell textAlign='center'>
                        P 1,900.00
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>P 2,200.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Palay</Table.Cell>
                        <Table.Cell>800 Sacks</Table.Cell>
                        <Table.Cell textAlign='center'>
                        P 1,900.00
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>P 2,200.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Palay</Table.Cell>
                        <Table.Cell>800 Sacks</Table.Cell>
                        <Table.Cell textAlign='center'>
                        P 1,900.00
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>P 2,200.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Palay</Table.Cell>
                        <Table.Cell>800 Sacks</Table.Cell>
                        <Table.Cell textAlign='center'>
                        P 1,900.00
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>P 2,200.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Palay</Table.Cell>
                        <Table.Cell>800 Sacks</Table.Cell>
                        <Table.Cell textAlign='center'>
                        P 1,900.00
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>P 2,200.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Palay</Table.Cell>
                        <Table.Cell>800 Sacks</Table.Cell>
                        <Table.Cell textAlign='center'>
                        P 1,900.00
                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                        </Table.Cell>
                        <Table.Cell textAlign='center'>P 2,200.00</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default PriceList;