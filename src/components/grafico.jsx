import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = ({ data, width, height }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);

        const radius = Math.min(width, height) / 2;

        const pie = d3.pie().value((d) => d.value);

        const arc = d3
            .arc()
            .innerRadius(radius * 0.5)
            .outerRadius(radius * 0.8);

        const arcs = pie(data);

        svg
            .selectAll('path')
            .data(arcs)
            .join('path')
            .attr('d', arc)
            .attr('fill', (d) => d.data.color);
    }, [data, height, width]);

    return (
        <center>
            <svg width={'width'} style={{margin:'0 10vh'}} height={height}>
                <g transform={`translate(${width / 2},${height / 2})`} ref={ref} />
           <h1>2</h1>
            </svg>
        </center>
    );
};

export default DonutChart;
