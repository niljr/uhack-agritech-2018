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
            total
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
        if (this.state.amount) {

            try {
                const { state } = await fetch('https://api-uat.unionbankph.com/partners/sb/online/v1/transfers/single', {
                    'method': 'post',
                    'headers': {
                        'Authorization': 'Bearer AAEkYTczZjQ1MjYtOWU0ZC00OGU0LTk5ZmItMjQ2YTQ4MmNlMTA2zzYgKvuXBrcXoZ4ZaNjm2bgKpQi-TKCifqFACNvcMw_FbDMSmooAwrn1NgJIQM-XO4a7_ze3CCOHus01E2RlhTe6j8kqggLA1vCYvs15rkSHKD9TlCurxFk_eof_DKcakuw9mQ1ZnncFL23qvKgq06qrFmwHj91ra1qZuzF9EdcXBxu_Wm50cOBi9mnNItr9XuRC6lslkPV4RskusZ_SO0U6mQ-wdkIdvhSIJYVqQhLRmEs83yOMkCht5hPxK8BI0alGeNnBFGmuuC5hXLrpfUvkcLv_Oov349LLzNJu7erDPZfeFN1MuHx8aVqA9K09y0WX6SaaC_LaqSp6ZzipKw',
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
                          "value": this.state.amount
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
                
                alert(state);
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
                        <Input className='w-100' placeholder='Enter amount' value={this.state.amount} onChange={this.handleAmount}/>
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
