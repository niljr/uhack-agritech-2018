import React from 'react';
import { Row, Col, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon, Image, Label, Menu } from 'semantic-ui-react'

import Dashboard from '../components/Dashboard';
import AddFarmer from '../components/AddFarmer';
import FarmersList from '../components/FarmersList';
import AddCrops from '../components/AddCrops';
import Towns from '../components/Towns';
import Farmer from '../components/Farmer';
import PriceList from '../components/PriceList';
import CropsList from '../components/CropsList';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/add-farmers',
        main: () => <AddFarmer />
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
        path: '/price-list',
        main: () => <PriceList />
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
                            <Link to='/'>Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/farmers-list'>Farmers</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/crops-list'>Crops</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/towns'>Towns</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/price-list'>Price List</Link>
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