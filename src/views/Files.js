import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';





const GET_FILES = gql`
query Files($key: String, $courseNodeId: String) {
    Files(courseKey: $key, courseNodeId: $courseNodeId) {
       href
       title
       size
     }
   }
`;


const Courses = (props) => (
    <Query 
    query={GET_FILES}
    variables={{key: props.match.params.id,courseNodeId: props.match.params.courseNodeId}}
>
        {({ loading, error, data }) => {
            if (loading) return (
            <div>
                <HeaderBlock title="Dateien"/>
                <div>
                    Kurse werden geladen...
                </div>
                <TabNaviBottom activeItem="courses"/>
            </div>
            );
            if (error) return <div>Error :(</div>;
                console.log(data);
            return (
                <div>
                    <HeaderBlock title="Dateien"/>
                    <div className="main">
                    {data.Files.map((element)=>(
                        <div>
                            {
                                element.size ?
                                <a download href={element.href}>{element.title}</a>
                                :
                                <Link to={{
                                    pathname:"/Folder",
                                    state:{
                                        href:element.href
                                    }
                                    }}>
                                <div>{element.title}</div>
                                </Link>
                            }
                        </div>
                    ))}
                    </div>
                    <TabNaviBottom activeItem="courses"/>
                </div>
            )
        }}
    </Query>
);

export default Courses;