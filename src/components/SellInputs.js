import React, { PureComponent } from 'react';
import { Header, Input, Table, Icon, Dropdown } from 'semantic-ui-react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete';
import Invoice from './Invoice';
import inputs from '../json/inputs.json';

export default class SellInputs extends PureComponent {
    state = {
        isOpen: false, 
        isPayment: false,
        total: 0
    }

    handleSumbit = async (total) => {
        await this.setState({
            total
        });

        this.handleToggle();
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleReceivePayment = (type, isPayment = true) => {
        isPayment && this.handleToggle();

        this.setState({
            isPayment,
            type
        });
    }

    successPayment = async () => {
        await this.setState({
            isPayment: false
        })
        
        alert("Successfully Paid!");
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    Sell Inputs
                </Header>
                <Invoice
                    type='sell'
                    data={inputs}
                    onSumbit={this.handleSumbit}/>
                
                <Modal
                    centered
                    isOpen={this.state.isOpen} toggle={this.handleToggle} className={this.props.className}>
                    <ModalHeader toggle={this.handleToggle}>Receive Peyment</ModalHeader>
                    <ModalBody>
                        What mode of payment to use?
                        <br />
                        <div className='d-flex justify-content-around pt-4 pb-2'>
                            <Button className='w-50 mr-3' color="primary" onClick={() => this.handleReceivePayment('online')}>Online Payment</Button>
                            <Button className='w-50 ml-3' color="secondary" onClick={() => this.handleReceivePayment('cash')}>Cash</Button>{' '}
                        </div>
                    </ModalBody>
                </Modal>

                <Modal
                    centered
                    isOpen={this.state.isPayment} className={this.props.className}>
                    <ModalHeader>Receive Peyment</ModalHeader>
                    <ModalBody>
                        <Input className='w-100' placeholder={this.state.type ==='online' ? 'Enter transaction number' : 'Enter payment'} />
                        <br />
                        <Link to='/farmers-list' className='d-flex justify-content-around pt-4 pb-2'>
                            <Button className='w-100' color="primary" onClick={this.successPayment}>Submit</Button>
                        </Link>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
