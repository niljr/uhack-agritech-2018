import React, { PureComponent } from 'react';
import { Col, Row, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { Header, Icon } from 'semantic-ui-react';
import farmers from '../json/data.json';

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
                <Header as='h2'>
                    <Icon name='users' />
                    <Header.Content>
                    Farmers
                    <Header.Subheader>as of September 16, 2018</Header.Subheader>
                    </Header.Content>
                </Header>
            
                <div className='d-flex flex-column align-items-center'>
                    
                    {this.state.isLoading
                        ? <Spinner />
                        : <Row>
                            {farmers.map(farmer => 
                                <Col className='col-6 px-2'>
                                    <Link to={`/farmer/${farmer._id}`}>
                                        <Card key={farmer._id} className='m-2 p-3'>
                                            <CardBody className='p-0'>
                                                <Row>
                                                    <Col>
                                                        <CardTitle>{farmer.name}</CardTitle>
                                                        <CardSubtitle>{farmer.phone}</CardSubtitle>
                                                        <CardText>{farmer.address}</CardText>
                                                        <CardText>
                                                            <p>
                                                                {farmer.crops.map((crop, i) => `${crop.name}${farmer.crops.length - 1 !== i ? ',' : ''} `)}
                                                            </p>
                                                        </CardText>
                                                    </Col>
                                                    <Col className='col-3 text-right'>
                                                        <img src={farmer.picture} alt={farmer.name} className='h-100' />
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
