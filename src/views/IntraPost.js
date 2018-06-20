import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

var contentStyle = {
    borderLeft: '2px solid #3e3e3e',
};
var replyStyle = {
    paddingLeft: '8%'
};
var headline = {
    fontWeight: 500
};

const IntraPost = (props) => (
(
    <div id='postings'>
        {props.location.state.content.map((element, counter = 0) => (
            <div>
                {
                counter < 1 ?
                <div>
                    <Card className='post' centered>
                        <Card.Content style={contentStyle}>
                            <Icon name='comment outline' className='comment' />
                            <Card.Header>{element.authorB}</Card.Header>
                            <div dangerouslySetInnerHTML={{ __html: element.body }} />
                            <Card.Description>{element.dateB}</Card.Description>
                        </Card.Content>
                    </Card>
                </div>
                :
                <div>
                <Card className='post' centered>
                    <Card.Content style={replyStyle}>
                        <Icon name='comment outline' className='comment' />
                        <Card.Header>{element.authorB}</Card.Header>
                        <div dangerouslySetInnerHTML={{ __html: element.body }} />
                        <Card.Description>{element.dateB}</Card.Description>
                    </Card.Content>
                </Card>
            </div>
                }


            </div>
        ))}
    </div>
)
);

export default IntraPost;