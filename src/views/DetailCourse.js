import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import { Link } from 'react-router-dom'


const GET_SINGLE_COURSE = gql`
query KursDetails($key:String){
    Kurs(key:$key) {
      displayName,
      authors,
      description,
      key
    }
    Folders(courseKey:$key){
      detailsName,
      courseNodeId,
      name
    }
    Forum(courseKey: $key) {
      courseNodeId,
      detailsName,
      subscribed
    }
  }
`;


const DetailCourse = (props) => (
    <Query 
        query={GET_SINGLE_COURSE}
        variables={{key: props.match.params.id}}
    >
        {({ loading, error, data }) => {
            if (loading) return (
                <div>
                    <HeaderBlock title="Kurse"/>
                    <div>
                        Kurse werden geladen...
                    </div>
                    <TabNaviBottom/>
                </div>
            );
            if (error) return <div>Error :(</div>;
            return (
                <div>
                    <HeaderBlock/>
                    <h1>Info</h1>
                    <div>{data.Kurs.displayName}</div>
                    <div>{data.Kurs.authors}</div>
                    <div>{data.Kurs.description}</div>
                    <h1>Dateien</h1>
                    <Link to={`/courses/${props.match.params.id}/files/${data.Folders.courseNodeId}`}>
                    <div>{data.Folders.detailsName}</div>
                    <div>{data.Folders.courseNodeId}</div>
                    <div>{data.Folders.name}</div>
                    </Link>
                    <h1>Forum</h1>
                    <Link to={`/courses/${props.match.params.id}/forum/${data.Forum.courseNodeId}`}>
                    <div>{data.Forum.detailsName}</div>
                    <div>{data.Forum.courseNodeId}</div>
                    <div>{data.Forum.subscribed}</div>
                    </Link>
                    <TabNaviBottom/>
                </div>
            )
        }}
    </Query>
);

export default DetailCourse;