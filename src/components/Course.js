import React from 'react';
import PropTypes from 'prop-types';
import {Card, Icon} from 'semantic-ui-react';

function Course(props) {
    console.log(props);
    const items = [
        {
          header: props.name,
          description: props.description,
          meta: '',
        }
    ]
    
    return (
        <div>
            <Card className='course' centered>
                <Card.Content>
                <Icon name='circle' color='blue' size='small'/>
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
