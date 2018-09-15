import React from 'react';
import { Table, Icon, Header, Button, Form, Message } from 'semantic-ui-react'

import '../styles/common.css';
import Town from './Town';
import priceList from '../json/priceList.json';
import Spinner from './Spinner';
import BroadcastPriceList from './BroadcastPriceList';

class PriceList extends React.Component {

    state = {
        isLoading: true,
        isSent: false
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    postData = (e) => {
        const data = {
            "to": "+639993405799",
            "text":e.target.content.value,
            "platform":"web"
        }
    // Default options are marked with *
        return fetch('https://api.checkmobi.com/v1/sms/send', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "B4050E5D-FA34-4C18-A792-BB7EB13F23FC"
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // parses response to JSON
        .then(()=> this.setState({ isSent: true }))
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent:'space-between' }}>
                    <Header as='h2'>
                        <Icon name='users' />
                        <Header.Content>
                           Broadcast
                        </Header.Content>
                    </Header>
                </div>
                    <Form warning className='mt-4' onSubmit={this.postData}>
                        <Form.TextArea name='content' label='Content' placeholder='test' />
                        {this.state.isSent 
                            ?
                            <Message
                                success
                                header='Message Sent!'
                            />
                            :
                            null
                        }
                       
                        <Button>Submit</Button>
                    </Form>
            </div>
        );
    }
}

export default PriceList;