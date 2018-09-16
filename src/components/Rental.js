import React from 'react'
import { Form, Input, TextArea, Button, Header, Icon, Dropdown } from 'semantic-ui-react'

const stateOptions = [
    {
        key: 'HD',
        value: 'hand-tractor',
        text:'Hand Tractor',
       
    },
    {
        key: 'cul',
        value: 'cultivator',
        text:'Cultivator',
    }
]
const Rental = () => (
    <div>
        <Header as='h2'>
            <Icon name='truck' />
            <Header.Content>
                Rental
            </Header.Content>
        </Header>
  <Form>
    <Form.Group widths='equal'>
      <Dropdown placeholder='Tractor' search selection options={stateOptions} />
      <Input placeholder='From' />
      <Input placeholder='To' />
      <Button content='Rent'/>
    </Form.Group>
  </Form>
  </div>

)

export default Rental