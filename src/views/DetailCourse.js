import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import { Link } from 'react-router-dom';
import SubNavi from '../components/SubNavi';
import Dateien from '../components/Dateien';
import ForumKurs from '../components/ForumKurs';
import Info from '../components/Info';


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
                    <HeaderBlock title={data.Kurs.displayName}/>
                    <SubNavi activeItem="dateien"/>
                    <Dateien title={data.Folders.detailsName} id={data.Folders.courseNodeId} name={data.Folders.name} kursId={data.Kurs.key}/>
                    <ForumKurs id={data.Forum.courseNodeId} title={data.Forum.detailsName} sub={data.Forum.subscribed} kursId={data.Kurs.key}/>
                    <Info title={data.Kurs.displayName} author={data.Kurs.authors} description={data.Kurs.description}/>
                    <TabNaviBottom/>
                </div>
            )
        }}
    </Query>
);

export default DetailCourse;