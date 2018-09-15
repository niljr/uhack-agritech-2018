import React from 'react';
import { Card, Feed, Icon, Label, Header, Image, Table } from 'semantic-ui-react'

class Town extends React.Component {
    render() {
        return (
            <Card>
                <Card.Content>
                <Card.Header>{this.props.title}</Card.Header>
                {/* <Label>as of September 16, 2018</Label> */}
                </Card.Content>
                <Card.Content>
                    <Table basic='very' celled collapsing>
                        <Table.Header>
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
                                Banana
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
                </Card.Content>
            </Card>
        );
    }
}

export default Town;