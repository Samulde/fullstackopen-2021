import React from 'react';
import File from './File'

const Content = ({ content }) => {
    const total = content.reduce( (sum, part) => sum + part.exercises, 0)
    
    return ( 
        <div>
            {content.map(x => <File part={x} />)}
            <b>total of {total} exercises</b>
        </div>
    );
};

export default Content