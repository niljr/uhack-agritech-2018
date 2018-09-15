import React from 'react';
import { Grid, Image, Header, Icon } from 'semantic-ui-react'

import Town from './Town';

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
                <Grid relaxed columns={5} mt='4'>
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
                    <Grid.Column>
                        <Town title='Tubungan'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='San miguel'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='Tapaz'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='Jamindan'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Town title='Libacao'/>
                    </Grid.Column>
                </Grid>
           </div>
        );
    }
}

export default Towns;