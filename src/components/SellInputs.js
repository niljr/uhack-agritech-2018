import React, { PureComponent } from 'react';
import { Input, Table, Icon, Dropdown } from 'semantic-ui-react';
import Autocomplete from './Autocomplete';
import inputs from '../json/inputs.json';

export default class SellInputs extends PureComponent {
    state = {
        value: '',
        newInput: {},
        qty: 1,
        inputs: [],
        price: 0
    }

    handleChange = (value) => {
        const newInput = inputs.find(input => value === input.description);

        this.setState({
            newInput: newInput ? newInput : {},
            price: newInput ? newInput.price : 0,
            value
        });
    }

    handleQtyChange = (e) => {
        const value = e.target.value;
        const { newInput } = this.state;

        if (value > newInput.availableQty) {
            return;
        }

        this.setState({
            qty: value ? value : 1,
            price: value ? value * newInput.price : newInput.price * 1
        });
    }

    add = async () => {
        const { newInput, qty, price } = this.state;

        if (Object.keys(newInput).length > 0) {
            let inputs = this.state.inputs;
            const input = {
                id: inputs.length + 1,
                description: newInput.description,
                qty,
                price: newInput.price,
                total: price
            }
            
            inputs.push(input);
            await this.setState({
                inputs: [...inputs],
                newInput: {},
                value: '',
                qty: 1
            })
        }
    }

    render() {
        const data = inputs.map(input => input.description);
        const { newInput, qty } = this.state;
        const isNewInput = Object.keys(newInput).length > 0;
        let total = 0;
        this.state.inputs.forEach(input => total = total + input.total);

        return (
            <Table basic='very' striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='border-top-0'>QTY</Table.HeaderCell>
                        <Table.HeaderCell className='border-top-0'>DESCRIPTION</Table.HeaderCell>
                        <Table.HeaderCell className='border-top-0'>PRICE</Table.HeaderCell>
                        <Table.HeaderCell className='border-top-0'>TOTAL</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Input
                                label={{ basic: true, content: isNewInput ? newInput.unit : '0.00' }}
                                disabled={!isNewInput}
                                type='number'
                                labelPosition='right'
                                placeholder='Enter qty...'
                                name='quantity'
                                value={this.state.qty}
                                min='1'
                                max={isNewInput ? `${newInput.availableQty}` : '1'}
                                onChange={this.handleQtyChange}
                            />
                        </Table.Cell>
                        <Table.Cell className='w-50'>
                            <Autocomplete
                                id='input-list'
                                type='text'
                                name='input-list'
                                placeholder='Enter input name'
                                value={this.state.value}
                                onSelectItem={this.handleChange}
                                list={data} />
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            {isNewInput ? newInput.price : '0.00'}
                        </Table.Cell>
                        <Table.Cell className='d-flex justify-conten-between'>
                            <p className='w-75'>{isNewInput ? this.state.price.toFixed(2) : '0.00'}</p>
                            <div onClick={this.add}>
                                <Icon disabled={!isNewInput} name='add circle' size='large'/>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    {this.state.inputs.map(input => 
                        <Table.Row key={input.id}>
                            <Table.Cell textAlign='center'>
                                {input.qty}
                            </Table.Cell>
                            <Table.Cell className='w-50'>{input.description}</Table.Cell>
                            <Table.Cell textAlign='right'>
                                {input.price}
                            </Table.Cell>
                            <Table.Cell className='d-flex justify-conten-between'>
                                <p className='w-75'>{input.total}</p>
                            </Table.Cell>
                        </Table.Row>
                    )}

                    <Table.Row>
                        <Table.Cell colSpan='3' textAlign='right'>
                            TOTAL
                        </Table.Cell>
                        <Table.Cell colSpan='4'>
                            ₱{total.toFixed(2)}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}
