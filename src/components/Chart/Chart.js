import React from "react";
import CharBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointvalues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointvalues);
    
    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
            <CharBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                max={totalMaximum}
                label={dataPoint.label}
            />
        )}
    </div>
};

export default Chart;