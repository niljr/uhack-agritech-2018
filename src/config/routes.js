import React from 'react';
import Dashboard from '../components/Dashboard';
import AddFarmer from '../components/AddFarmer';
import FarmersList from '../components/FarmersList';
import AddCrops from '../components/AddCrops';
import FarmerDetails from '../components/FarmerDetails';
import Towns from '../components/Towns';
import Farmer from '../components/Farmer';
import { Row, Col, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        main: () => <FarmerDetails />
    }
];

export default function getRoutes(isAuthed, dispatch, location) {
    return (
        <Router>
            <Row className='h-100'>
                <Col lg={3} className='border-right'>
                    <Nav vertical className='p-5'>
                        <NavItem>
                            <Link to='/'>Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/add-farmers'>Add Farmer</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/farmers-list'>Farmers' List</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/Add-crops'>Add Crops</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/'>Crops List</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/towns'>Towns</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/farm-details'>Farm Details</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/'>Products Inventory</Link>
                        </NavItem>
                    </Nav>

                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </Col>

                <Col lg={9} className='dashboard__content p-5'>
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