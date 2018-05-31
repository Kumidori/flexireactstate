import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';


const ForumKurs = (props) => {
            return (
                <div>
                    <Link to={`/courses/${props.kursId}/forum/${props.id}`}>
                    <Card className='forum' centered>
                        <Card.Content>
                        <Card.Header>{props.title}</Card.Header>
                        <div dangerouslySetInnerHTML={{ __html: props.message }}/>
                        <Card.Description></Card.Description>
                        </Card.Content>
                    </Card>
                    </Link>
                </div>
            )
        }

export default ForumKurs;