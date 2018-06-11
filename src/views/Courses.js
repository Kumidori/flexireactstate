import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';

const GET_COURSES = gql`
query{
    Kurse(userId:"77725698") {
    displayName,
    authors,
    description,
    key
  }
 Veranstaltungen{
  name
  short
  id
}
}
`;


const Courses = () => (
    <Query query={GET_COURSES}>
        {({ loading, error, data }) => {
            if (loading) return (
            <div>
                <HeaderBlock title="Kurse"/>
                <div>
                    Kurse werden geladen...
                </div>
                <TabNaviBottom activeItem="courses"/>
            </div>
            );
            if (error) return (
                <div>
                    <HeaderBlock title="Kurse" headerIcon='rss'/>
                    <div className="main">
                        Kurse konnten nicht geladen werden, haben sie ihre Login-Daten korrekt eingegeben?
                    </div>
                    <Link to={`/`}>zurück zum Login</Link>
                    <TabNaviBottom activeItem="courses"/>
                </div>
            );
            return (
                <div>
                    <HeaderBlock title="Kurse"/>
                    <div className="main">
                    {data.Kurse.map((element)=>(
                        <Link key={element.key} to={`/courses/${element.key}/`}>
                        <Course name={element.displayName} description={element.description} color="blue"/>
                        </Link>
                    ))}

                    {data.Veranstaltungen.map((element)=>(
                        <Link key={element.id} to={`/intracourses/${element.id}/`}>
                        <Course name={element.name} color="green"/>
                        </Link>
                    ))}
                    </div>
                    <TabNaviBottom activeItem="courses"/>
                </div>
            )
        }}
    </Query>
);

export default Courses;