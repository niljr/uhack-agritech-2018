import React, { PureComponent } from 'react';
import { Header, Input, Table, Icon, Dropdown } from 'semantic-ui-react';
import Autocomplete from './Autocomplete';
import Invoice from './Invoice';
import priceList from '../json/priceList.json';

export default class BuyProduce extends PureComponent {
    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    Buy Produce
                </Header>
                <Invoice
                    type='buy'
                    data={priceList}/>
            </div>
        );
    }
}
