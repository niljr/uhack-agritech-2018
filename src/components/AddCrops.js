import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class AddCrops extends React.Component {
    render() {
        return (
           <div>
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label='Name' placeholder='Name' />
                        <Form.Input label='Price' placeholder='Price' />
                    </Form.Group>
                    <Button type='submit'>SAVE</Button>
                </Form>
           </div>
        );
    }
}

export default AddCrops;