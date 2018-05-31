import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card} from 'semantic-ui-react';



const GET_SINGLE_POST = gql`
query Post($courseKey: String, $courseNodeId: String, $key: String) {
    Postings(courseKey: $courseKey, courseNodeId: $courseNodeId, key: $key) {
        key
        title
        body
        author
      }
   }
`;


const Post = (props) => (
    <Query 
    query={GET_SINGLE_POST}
    variables={{
        courseKey: props.location.state.courseKey,
        courseNodeId: props.location.state.courseNodeId,
        key: props.location.state.key
    }}
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
                    {data.Postings.map((element)=>(
                        <div>
                        <Card className='post' centered>
                            <Card.Content>
                            <Card.Header>{element.title}</Card.Header>
                            <div dangerouslySetInnerHTML={{ __html: element.body }}/>
                            <Card.Description>Autor: {element.author}</Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                    ))}
                    </div>
                    <TabNaviBottom activeItem="courses"/>
                </div>
            )
        }}
    </Query>
);

export default Post;