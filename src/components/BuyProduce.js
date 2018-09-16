import React, { PureComponent } from 'react';
import { Header, Input, Table, Icon, Dropdown } from 'semantic-ui-react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete';
import Invoice from './Invoice';
import priceList from '../json/priceList.json';

export default class BuyProduce extends PureComponent {
    state = {
        isOpen: false, 
        isPayment: false,
        total: 0,
        amount: ''
    }

    handleSumbit = async (total) => {
        await this.setState({
            total: total.toFixed(2)
        });

        this.handleToggle();
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handlePayment = (isPayment = true) => {
        isPayment && this.handleToggle();

        this.setState({
            isPayment
        });
    }

    successPayment = async () => {
        if (this.state.total) {
            try {
                const { state } = await fetch('https://api-uat.unionbankph.com/partners/sb/online/v1/transfers/single', {
                    'method': 'post',
                    'headers': {
                        'Authorization': 'Bearer AAEkYTczZjQ1MjYtOWU0ZC00OGU0LTk5ZmItMjQ2YTQ4MmNlMTA2q3jkHovFaY_x7JCg9GxgNzWNZ-fqXOTyhXnscnnmN5jj6XvLeXHaFOArPIa59R44O38lUEeZMrdbfZ5RwWDkc84aS-5wg8SKYpzAB5SjzmnqOI8_3wvaXY-7OgayYpQryNDXCaubyWtQ_PsLJOIr8CFlr89OtTCakS7YGkmqNLf74X1H9VMtcx3nd9tLIe0HH6YiD033ii-79KSJ2FYZZUD06k0uJCjg2GZaze3Zhfq5RrxS9EnXYWKEU9fZ6FbhGYJj5IS4uD0QwVRIZDJKtR-81SWO-X-N8C0DHWcRXP4qd1lXuGTsVFbrLTsU5fiG8o4qQMRJFfs04uoNvgUBSQ',
                        'Content-Type': 'application/json',
                        'x-ibm-client-id': 'a73f4526-9e4d-48e4-99fb-246a482ce106',
                        'x-ibm-client-secret': 'B1hN5rE7tR0gY1fU7rO8xN6oK4sP3mV7qB6qL3hA3hU3wI8kD5',
                        'x-partner-id': '5dff2cdf-ef15-48fb-a87b-375ebff415bb',
                    },
                    'body': JSON.stringify({
                        "senderTransferId": "00001",
                        "transferRequestDate": "2017-10-10T12:11:50Z",
                        "accountNo": "107897014642",
                        "amount": {
                          "currency": "PHP",
                          "value": this.state.total
                        },
                        "remarks": "Transfer remarks",
                        "particulars": "Transfer particulars",
                        "info": [
                          {
                            "index": 1,
                            "name": "Recipient",
                            "value": "Juan Dela Cruz"
                          },
                          {
                            "index": 2,
                            "name": "Message",
                            "value": "Happy Birthday"
                          }
                        ]
                    })
                }).then(resp => resp.json())
    
                await this.setState({
                    isPayment: false
                })
                
                alert(`Successfully transferred ₱${this.state.total}`);
            }
            catch (err) {
                console.log('err', err);
            }
        }
    }

    handleAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    Buy Produce
                </Header>
                <Invoice
                    type='buy'
                    data={priceList}
                    onSubmit={this.handleSumbit}/>

                <Modal
                    centered
                    isOpen={this.state.isOpen} toggle={this.handleToggle} className={this.props.className}>
                    <ModalHeader toggle={this.handleToggle}>Process Peyment</ModalHeader>
                    <ModalBody>
                        Would you like to transfer funds now?
                        <br />
                        <div className='d-flex justify-content-around pt-4 pb-2'>
                            <Button className='w-50 mr-3' color="primary" onClick={this.handlePayment}>Yes</Button>
                            <Button className='w-50 ml-3' color="secondary" onClick={this.handleToggle}>Cancel</Button>{' '}
                        </div>
                    </ModalBody>
                </Modal>

                <Modal
                    centered
                    isOpen={this.state.isPayment} className={this.props.className}>
                    <ModalHeader>Transfer Payment</ModalHeader>
                    <ModalBody>
                        <Input className='w-100' placeholder='Enter amount' value={`₱${this.state.total}`}/>
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
