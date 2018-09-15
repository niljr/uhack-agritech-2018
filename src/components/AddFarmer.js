import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class AddFarmer extends React.Component {
    render() {
        return (
           <div>
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='First name' placeholder='First name' />
                        <Form.Input label='Last name' placeholder='Last name' />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Address' placeholder='Address' />
                        <Form.Input label='Phone' placeholder='Phone' />
                    </Form.Group>
                        <Form.Input label='Account Number' placeholder='#' />
                    <Button type='submit'>SAVE</Button>
                </Form>
           </div>
        );
    }
}

export default AddFarmer;