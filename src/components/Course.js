import React from 'react';
import PropTypes from 'prop-types';
import {Card, Icon} from 'semantic-ui-react';

function Course(props) {

    return (
        <div>
            <Card className='course' centered>
                <Card.Content>
                <Icon name='circle' color={props.color} size='small'/>
                    {props.name}
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
