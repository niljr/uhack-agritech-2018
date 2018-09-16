import React, { PureComponent } from 'react';
import { Col, Row, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { Header, Icon, Label, Image, Button } from 'semantic-ui-react';
import farmers from '../json/data.json';
import '../styles/common.css';

export default class FarmersList extends PureComponent {
    state = {
        isLoading: true
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent:'space-between' }}>
                    <Header as='h2'>
                        <Icon name='users' />
                        <Header.Content>
                        Farmers
                        </Header.Content>
                    </Header>
                    <Link to={`/add-farmer`}><Button content='ADD FARMER' style={{ backgroundColor:'#515689', color: '#fff' }} /></Link>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    
                    {this.state.isLoading
                        ? <Spinner />
                        : <Row>
                            {farmers.map(farmer => 
                                <Col className='col-6 px-2'>
                                    <Link to={`/farmer/${farmer._id}`}>
                                        <Card key={farmer._id} className='m-2 p-3 farmers-list-card' >
                                            <CardBody className='p-0' className='shadow'>
                                                <Row>
                                                    <Col>
                                                        <CardTitle style={{ color: '#6697a7' }}>{farmer.name}</CardTitle>
                                                        <CardSubtitle><Icon name='phone' />{farmer.phone}</CardSubtitle>
                                                        <CardText><Icon name='map marker alternate' />{farmer.address}</CardText>
                                                        <CardText>
                                                            <p style={{ color: '#8ccdc2' }}>
                                                                {farmer.crops.map((crop, i) => `${crop.name}${farmer.crops.length - 1 !== i ? ',' : ''} `)}
                                                            </p>
                                                        </CardText>
                                                    </Col>
                                                    <Col className='col-3 text-right'>
                                                        <Image src={farmer.picture} alt={farmer.name}  size='small' circular/>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </Col>
                            )}
                        </Row>
                    }
                </div>
            </div>
        );
    }
}
