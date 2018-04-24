import React from 'react';
import PropTypes from 'prop-types';

function Course(props) {
    console.log(props);
    return (
        <div>
            {props.name}
            {props.description}
        </div>
    );
}

Course.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string
};
Course.defaultProps = {
    name: "Kursname"
};

export default Course;
