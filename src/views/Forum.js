import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card} from 'semantic-ui-react';




const GET_POSTS = gql`
query Posts($courseKey: String, $courseNodeId: String) {
    Posts(courseKey: $courseKey, courseNodeId: $courseNodeId) {
       key,
       title,
       body,
       author
     }
   }
`;


const Forum = (props) => (
    <Query 
    query={GET_POSTS}
    variables={{courseKey: props.data.Kurs.key,courseNodeId: props.data.Forum.courseNodeId}}
>
        {({ loading, error, data }) => {
            if (loading) return (
                <div>
                    Forumseinträge werden geladen...
                </div>
            );
        
            if (error) {
                console.log(props.route.data);
                console.log("test");
            return <div>Forum Error :(</div>;
            }
            return (
                <div>
                    <div>
                    {data.Posts.map((element)=>(
                         <Link to={{
                            pathname:`/courses/${props.data.Kurs.key}/post`,
                            state:{
                                courseKey: props.match.params.id,
                                courseNodeId: props.data.Forum.courseNodeId,
                                key: element.key
                            }
                            }}>
                        <div>
                        <Card className='forum' centered>
                            <Card.Content>
                            <Card.Header>{element.title}</Card.Header>
                            <div dangerouslySetInnerHTML={{ __html: element.body }}/>
                            <Card.Description>Autor: {element.author}</Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
            )
        }}
    </Query>
);

export default Forum;