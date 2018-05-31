import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';


const Dateien = (props) => {
    
            return (
                <div>
                    <Link to={`/courses/${props.kursId}/files/${props.id}`}>
                    <Card className='dateien' centered>
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


export default Dateien;