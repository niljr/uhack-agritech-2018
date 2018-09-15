import React from 'react';
import { ButtonGroup } from 'reactstrap';
import { Button, Form, Card, Image, Icon, Table } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Spinner from './Spinner';
import data from '../json/data.json';

class FarmDetails extends React.Component {
    state = {
        isLoading: true,
        farmer: {}
    }

    componentDidMount() {
        const farmer = data.find(d => d._id === this.props.match.params.id);

        this.setState({
            farmer,
            isLoading: false
        });
    }

    render() {
        const { farmer } = this.state;

        return this.state.isLoading
            ? <Spinner />
            : <div className='d-flex'>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>{farmer.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero lectus, viverra in accumsan nec, fringilla id nulla. Praesent sed metus felis.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='star' color='yellow'/>
                            <Icon name='star' color='yellow'/>
                            <Icon name='star' color='yellow'/>
                            <Icon name='star' color='yellow'/>
                            <Icon name='star half' color='yellow'/>
                        </a>
                    </Card.Content>
                </Card>

                <Table celled striped className='mt-0 ml-4'>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Gender
                            </Table.Cell>
                            <Table.Cell>{farmer.gender}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Age
                            </Table.Cell>
                            <Table.Cell>{farmer.age}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Phone Number
                            </Table.Cell>
                            <Table.Cell>{farmer.phone}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Address
                            </Table.Cell>
                            <Table.Cell>{farmer.address}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Farm Area
                            </Table.Cell>
                            <Table.Cell>{farmer.farmArea}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell collapsing>
                                Crops
                            </Table.Cell>
                            <Table.Cell>
                                {farmer.crops.map(crop =>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            {crop.name}
                                        </Table.Cell>
                                        <Table.Cell>{crop.quantity}kg</Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
    }
}

export default withRouter(FarmDetails);
