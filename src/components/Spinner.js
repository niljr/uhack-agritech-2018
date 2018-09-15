// import PropTypes from 'prop-types';
import React from 'react';
import '../styles/spinner.css';

// Spinner.propTypes = {
//     color: PropTypes.string,
//     size: PropTypes.number,
//     className: PropTypes.string
// };

Spinner.defaultProps = {
    color: '#2358b8',
    size: 50
};

export default function Spinner(props) {
    return (
        <span className={`${props.className} text-center`}>
            <svg
                className='spinner'
                width={`${props.size}px`}
                height={`${props.size}px`}
                viewBox='0 0 66 66'
                xmlns='http://www.w3.org/2000/svg'>
                <circle
                    className='path'
                    fill='none'
                    stroke={props.color}
                    strokeWidth='6'
                    strokeLinecap='round'
                    cx='33'
                    cy='33'
                    r='30' />
            </svg>
        </span>
    );
}
