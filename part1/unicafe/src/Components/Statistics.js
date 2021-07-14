import React from 'react';
import Statistic from './Statistic'

const Statistics = ({ statistics }) => {
    
    if (!statistics.length) {
        return (
        <>
        <div>No feedback given</div>
        </>
        );
    } 
    
    return (

        <table>
            <tbody>
                {statistics.map((stat, index) => <Statistic key={index} text={stat.text} value={stat.value} /> )}
            </tbody>
        </table>
        
    );
};

export default Statistics