import React, { PureComponent } from 'react';
import { Table, Icon, Dropdown } from 'semantic-ui-react';
import Autocomplete from './Autocomplete';
import inputs from '../json/inputs.json';

export default class SellInputs extends PureComponent {
    state = {
        value: ''
    }

    render() {
        const data = inputs.map(input => input.description);

        return (
            <Table basic='very' striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='border-top-0'>DESCRIPTION</Table.HeaderCell>
                        <Table.HeaderCell className='border-top-0'>QTY</Table.HeaderCell>
                        <Table.HeaderCell className='border-top-0'>PRICE</Table.HeaderCell>
                        <Table.HeaderCell className='border-top-0'>TOTAL</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Autocomplete
                                id='input-list'
                                // className='book-form__input'
                                type='text'
                                name='input-list'
                                placeholder='Enter input name'
                                value={this.state.value}
                                list={data} />
                        </Table.Cell>
                        <Table.Cell>Initial commit</Table.Cell>
                        <Table.Cell collapsing textAlign='right'>
                            10 hours ago
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Icon name='folder' /> node_modules
                        </Table.Cell>
                        <Table.Cell>Initial commit</Table.Cell>
                        <Table.Cell collapsing textAlign='right'>
                            10 hours ago
                        </Table.Cell>
                        <Table.Cell>
                            
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}
