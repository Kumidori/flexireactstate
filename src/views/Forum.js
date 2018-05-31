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
    variables={{courseKey: props.match.params.id,courseNodeId: props.match.params.courseNodeId}}
>
        {({ loading, error, data }) => {
            if (loading) return (
            <div>
                <HeaderBlock title="Forum"/>
                <SubNavi activeItem="forum"/>
                <div>
                    Forumseinträge werden geladen...
                </div>
                <TabNaviBottom activeItem="courses"/>
            </div>
            );
            if (error) return <div>Error :(</div>;
                console.log(data);
            return (
                <div>
                    <HeaderBlock title="Forum"/>
                    <SubNavi activeItem="forum"/>
                    <div>
                    {data.Posts.map((element)=>(
                         <Link to={{
                            pathname:"/Post",
                            state:{
                                courseKey: props.match.params.id,
                                courseNodeId: props.match.params.courseNodeId,
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
                    <TabNaviBottom activeItem="courses"/>
                </div>
            )
        }}
    </Query>
);

export default Forum;