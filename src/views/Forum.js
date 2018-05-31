import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';





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
                            <div>{element.title}</div>
                            <div>{element.key}</div>
                            <div dangerouslySetInnerHTML={{ __html: element.body }}/>
                            <div>{element.author}</div>
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