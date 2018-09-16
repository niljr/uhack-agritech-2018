import React from 'react';
import { Card, Feed, Icon, Label, Header, Image, Table } from 'semantic-ui-react'
import '../styles/common.css';

class Town extends React.Component {
    render() {
        return (
            <Table color={this.props.color} className='shadow'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'><Image src={`/images/${this.props.imageTitle}.jpg`} avatar/>{this.props.title}<span className='contact'>Contact No.: {this.props.contact}</span></Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Crops</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Header.Content>
                                    Broccoli
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>99</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Header.Content>
                                    Palay
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>99</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Header.Content>
                                Banana
                                </Header.Content>
                            </Header>
                            </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>99</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default Town;