import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';





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
                    <div className="main">
                    {data.Postings.map((element)=>(
                        <div>
                            <div>{element.title}</div>
                            <div>{element.key}</div>
                            <div dangerouslySetInnerHTML={{ __html: element.body }}/>
                            <div>{element.author}</div>
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