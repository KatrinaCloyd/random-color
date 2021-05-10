import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => (
    <div style={{ width: '50em', height: '50em', background: color }}></div>
);

Display.propTypes = {
    color: PropTypes.string.isRequired,
}

export default Display;
