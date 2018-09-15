import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

import Town from './Town';

class Towns extends React.Component {
    render() {
        return (
           <div>
                <Grid relaxed columns={4}>
                    <Grid.Column>
                        <Town title='Alimodian'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='Capiz'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='Lambonao'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='Antique'/>
                    </Grid.Column>
                </Grid>
           </div>
        );
    }
}

export default Towns;