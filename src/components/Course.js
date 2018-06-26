import React from 'react';
import PropTypes from 'prop-types';
import {Card, Icon} from 'semantic-ui-react';

function Course(props) {

    return (
        <div>
            <Card className='course' centered {...props}>
                <Card.Content >
                    {props.children}
                </Card.Content>
            </Card>
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
