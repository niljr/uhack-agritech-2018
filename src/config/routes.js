import React from 'react';
import { Row, Col, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon, Image, Label, Menu } from 'semantic-ui-react'

import Dashboard from '../components/Dashboard';
import AddFarmer from '../components/AddFarmer';
import FarmersList from '../components/FarmersList';
import AddCrop from '../components/AddCrop';
import Towns from '../components/Towns';
import Farmer from '../components/Farmer';
import Broadcast from '../components/Broadcast';
import CropsList from '../components/CropsList';
import Rental from '../components/Rental';
import '../styles/common.css';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/add-farmer',
        main: () => <AddFarmer />
    },
    {
        path: '/add-crop',
        main: () => <AddCrop />
    },
    {
        path: '/farmers-list',
        main: () => <FarmersList />
    },
    {
        path: '/towns',
        main: () => <Towns />
    },
    {
        path: '/farmer/:id',
        main: () => <Farmer />
    },
    {
        path: '/broadcast',
        main: () => <Broadcast />
    },
    {
        path: '/rental',
        main: () => <Rental />
    },
    {
        path: '/crops-list',
        main: () => <CropsList />
    }
];

export default function getRoutes(isAuthed, dispatch, location) {
    return (
        <Router>
            <Row className='h-100'>
                <Col md={2} className='border-right' style={{ backgroundColor: '#f5f7f9' }}>
                {/* <Image src='/images/logo.jpg' size='small' /> */}
                <Icon name='leaf' size='massive' color='teal' className='logo'/>
                    <Nav vertical className='p-5'>
                        <NavItem>
                            <Link to='/'><Icon name='chart bar' />Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/farmers-list'><Icon name='users' /> Farmers</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/crops-list'><Icon name='theme' />Crops</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/towns'><Icon name='warehouse' /> Centers</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/rental'><Icon name='truck' /> Rentals</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/broadcast'><Icon name='mobile' />Broadcast</Link>
                        </NavItem>
                    </Nav>
                    {/* <Menu fluid vertical tabular>
                        <Menu.Item name='bio' active={'bio'} />
                        <Menu.Item name='farmers' />
                        <Menu.Item name='crops' />
                        <Menu.Item name='towns' />
                        <Menu.Item name='price list' />
                    </Menu> */}
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </Col>

                <Col md={10} className='dashboard__content p-5'>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </Col>
            </Row>
        </Router>
    );
}