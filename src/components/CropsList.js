import React from 'react';
import { Table, Icon, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import '../styles/common.css';
import Town from './Town';
import priceList from '../json/priceList.json';
import Spinner from './Spinner';
import BroadcastPriceList from './BroadcastPriceList';

class CropsList extends React.Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoading 
                ? <Spinner />
                :
                    <React.Fragment>
                        <div style={{ display: 'flex', justifyContent:'space-between' }}>
                            <Header as='h2'>
                                <Icon name='theme' />
                                <Header.Content>
                                    Crops List
                                <Header.Subheader>as of September 16, 2018</Header.Subheader>
                                </Header.Content>
                            </Header>
                            <Link to='/add-crop'><Button content='ADD CROP' style={{ backgroundColor:'#515689', color: '#fff' }} /></Link>
                        </div>
                        <Table singleLine celled structured className='mt-4' className='shadow'>
                            <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell rowSpan='2' >Item</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2' >Quantity</Table.HeaderCell>
                                <Table.HeaderCell colSpan='2' textAlign='center'>Price</Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>Retail</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>Wholesale</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {priceList.map(item => 
                                    <Table.Row key={item.key} className='tableRow'>
                                        <Table.Cell>{item.description}</Table.Cell>
                                        <Table.Cell>{item.availableQty} {item.unit}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                        P {50 - item.price}
                                        {/* <Icon color='green' name='checkmark' size='large' /> */}
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>P {item.price}</Table.Cell>
                                    </Table.Row>
                                )}
                            
                            </Table.Body>
                        </Table>
                </React.Fragment>
                }
            </div>
        );
    }
}

export default CropsList;