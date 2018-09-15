import React from 'react';
import { Grid, Image, Header, Icon } from 'semantic-ui-react'

import Town from './Town';

const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
]

class Towns extends React.Component {
    render() {
        return (
           <div>
               <Header as='h2'>
                    <Icon name='warehouse' />
                        <Header.Content>
                        Centers
                        <Header.Subheader>as of September 16, 2018</Header.Subheader>
                    </Header.Content>
                </Header>
                <Town title='Alimodian' color={colors[0]}/>
                <Town title='Capiz' color={colors[1]}/>
                <Town title='Lambonao' color={colors[2]}/>
                <Town title='Antique' color={colors[3]}/>
                <Town title='Tubungan' color={colors[4]}/>
                <Town title='San miguel' color={colors[5]}/>
                <Town title='Tapaz' color={colors[6]}/>
                <Town title='Jamindan' color={colors[7]}/>
                <Town title='Libacao' color={colors[7]}/>
           </div>
        );
    }
}

export default Towns;