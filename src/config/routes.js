import React from 'react';
import Dashboard from '../components/Dashboard';
import AddFarmer from '../components/AddFarmer';
import FarmersList from '../components/FarmersList';
import AddCrops from '../components/AddCrops';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid } from 'semantic-ui-react';

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
    }
];

export default function getRoutes(isAuthed, dispatch, location) {
    return (
        <Router>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link to='/'>Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/add-farmers'>Add Farmer</Link>
                            </li>
                            <li>
                                <Link to='/farmers-list'>Farmers' List</Link>
                            </li>
                            <li>
                                <Link to='/Add-crops'>Add Crops</Link>
                            </li>
                            <li>
                                <Link to='/'>Crops List</Link>
                            </li>
                            <li>
                                <Link to='/'>Products Inventory</Link>
                            </li>
                        </ul>

                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </Grid.Column>

                    <Grid.Column width={13}>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
}