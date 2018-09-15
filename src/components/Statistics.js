import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const Statistics = () => (
  <Statistic.Group widths='four'>
    <Statistic>
      <Statistic.Value>15</Statistic.Value>
      <Statistic.Label>Crops</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Three
        <br />Thousand
      </Statistic.Value>
      <Statistic.Label>Signups</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='warehouse' />
        7
      </Statistic.Value>
      <Statistic.Label>Centers</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image src='/images/berna.png' className='circular inline' />
        7
      </Statistic.Value>
      <Statistic.Label>Farmers</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default Statistics