import React from 'react';
import PropTypes from 'prop-types';
import {Card, Icon} from 'semantic-ui-react';



function SingleNews(props) {
    return (
        <div>
            {
                props.message.includes('_') ?
                <div>
                
            </div>
                
            :
            <div>
            <Card className='course' centered>
                <Card.Content>
                    <Card.Header>{props.title}</Card.Header>
                    <div dangerouslySetInnerHTML={{ __html: props.message }}/>
                    <Card.Description>{props.date}</Card.Description>
                </Card.Content>

            </Card>
            </div>
            }
        </div>
    );
}

SingleNews.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string
};
SingleNews.defaultProps = {
    title: "News Title",
    message: "News Message"
};

export default SingleNews;
