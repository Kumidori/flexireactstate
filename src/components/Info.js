import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';


const Info = (props) => {
            return (
                <div>
                    <Card className='dateien' centered>
                        <Card.Content>
                        <Card.Header>{props.data.Kurs.displayName}</Card.Header>
                        <div dangerouslySetInnerHTML={{ __html: props.data.Kurs.authors }}/>
                        <Card.Description>
                        <div dangerouslySetInnerHTML={{ __html: props.data.Kurs.description }}/>
                        </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            )
        }

export default Info;