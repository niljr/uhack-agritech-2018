import React, { PureComponent } from 'react';
import { Tab } from 'semantic-ui-react'

import FarmerDetails from './FarmerDetails';
import SellInputs from './SellInputs';
import BuyProduce from './BuyProduce';
import Rental from './Rental';

const panes = [
    { menuItem: 'Farmer Details', render: () => <Tab.Pane attached={false}><FarmerDetails /></Tab.Pane> },
    { menuItem: 'Sell Inputs', render: () => <Tab.Pane attached={false}><SellInputs /></Tab.Pane> },
    { menuItem: 'Buy Produce', render: () => <Tab.Pane attached={false}><BuyProduce /></Tab.Pane> },
    { menuItem: 'Rentals', render: () => <Tab.Pane attached={false}><Rental /></Tab.Pane> }
  ]

const Farmer = () => <Tab menu={{ pointing: true }} panes={panes} />

export default Farmer