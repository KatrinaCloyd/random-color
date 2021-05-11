import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color, img }) => (
    <div style={{ width: '290px', height: '290px', backgroundColor: color, margin: '10px', backgroundImage: `url(${img})`, backgroundPosition: 'center' }}></div>
);

Display.propTypes = {
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default Display;
