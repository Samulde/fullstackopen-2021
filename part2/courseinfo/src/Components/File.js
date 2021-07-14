import React from 'react';

const File = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    );
};

export default File