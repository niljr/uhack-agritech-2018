import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';

import Statistics from './Statistics';
import priceList from '../json/priceList';

export default class Dashboard extends PureComponent {


    render() {
        const labels2 = priceList.map(produce => {
            return produce.description
        });
        const qty = priceList.map(produce => {
            return produce.availableQty
        });
        console.log()
        const labels = ["Rice", "Corn", "Broccoli", "Cauliflower", "Carrots", "Lettuce", "Baguio Beans", "Squash", 
        "Ampalaya", 'Okra', 'Sitao', 'Eggplant', 'Tomato', 'Onion', 'Garlic'];
        console.log(qty)
        return (
            <div>
                <Statistics />
                <Bar
                    data={{
                        labels: labels,
                        datasets: [{
                            label: 'Quantity',
                                data: [
                                    qty[0],
                                    qty[1],
                                    qty[2],
                                    qty[3],
                                    qty[4],
                                    qty[5],
                                    qty[6],
                                    qty[7],
                                    qty[8],
                                    qty[9],
                                    qty[10],
                                    qty[11],
                                    qty[12],
                                    qty[13],
                                    qty[14],
                                    0
                                ],
                            backgroundColor: [
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                            ],
                            borderColor: [
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                            ],
                            borderWidth: 1


                        }]
                    }}
                    options={{
                        title: {
                            display: true,
                            text: 'Quantity of Crops',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}
