import React from 'react';
import './toy-cover.css';

export const ToyCover = ({image = ''}) => {
    return (
        <div className='toy-cover' style={{ backgroundImage: `url(${image})` }}>
        </div>
    );
};

