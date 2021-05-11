import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color, img }) => (
    <div style={{ width: '50em', height: '50em', backgroundColor: color, backgroundImage: `url(${img})` }}></div>
);

Display.propTypes = {
    color: PropTypes.string.isRequired,
}

export default Display;
