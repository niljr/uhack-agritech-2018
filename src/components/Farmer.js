import React, { PureComponent } from 'react';
import { Tab } from 'semantic-ui-react'

import FarmerDetails from './FarmerDetails';

const panes = [
    { menuItem: 'Farmer Details', render: () => <Tab.Pane attached={false}><FarmerDetails /></Tab.Pane> },
    { menuItem: 'Sell Crops', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Buy Inputs', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  ]

const Farmer = () => <Tab menu={{ pointing: true }} panes={panes} />

  export default Farmer