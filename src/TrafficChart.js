import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const TrafficChart = () => {
    useEffect(() => {
        const chartDom = document.getElementById('trafficChart');
        const trafficChart = echarts.init(chartDom);

        const options = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }]
        };

        trafficChart.setOption(options);

        // Cleanup on unmount
        return () => {
            trafficChart.dispose();
        };
    }, []);

    return (
        <div id="trafficChart" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default TrafficChart;
