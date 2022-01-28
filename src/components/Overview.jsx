import React from 'react';
import {AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts";

const Overview = () => {
    const data = [
        {
            data1:4000,
            data2: 2400,
        },
        {
            data1:3000,
            data2: 1398,
        },
        {
            data1:2780,
            data2: 3908,
        },
        {
            data1:1890,
            data2: 4800,
        },
        {
            data1:2390,
            data2: 3800,
        },
        {
            data1:3490,
            data2: 4300,
        }
    ];

    return (
        <div className="overview">
            <div className="overview__title">
                <h3>Overview</h3>
                <div className="title__buttons">
                    <button>Month</button>
                    <button>Year</button>
                </div>
            </div>
            <div className="overview__info">
                <div className="outer">
                    <div className="info__out">
                        <h4>Total balance</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;