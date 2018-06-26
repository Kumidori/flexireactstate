import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import loader from '../loader.gif';
import {Message} from 'semantic-ui-react';

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

let style = {
    color: "grey"
}

const Courses = () => (
    <Query query={GET_COURSES}>
        {({ loading, error, data }) => {
            if (loading) return (
            <div>
                <HeaderBlock title="Kurse" headerIcon='university'/>
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                </div>
                <TabNaviBottom activeItem="courses"/>
            </div>
            );
            if (error) return (
                <div>
                    <HeaderBlock title="Kurse" headerIcon='university'/>
                    <Message className='main'>
                        <p>Kurse konnten nicht geladen werden, haben sie ihre Login-Daten korrekt eingegeben?</p>
                    </Message>
                    <Link to={`/`}><button class="ui button">Zurück zum Login</button></Link>
                    <TabNaviBottom activeItem="courses"/>
                </div>
            );
            return (
                <div>
                    <HeaderBlock title="Kurse" headerIcon='university'/>
                    <div className="main2">
                    {data.Veranstaltungen.map((element)=>(
                        <Link key={element.id} to={`/intracourses/${element.id}/`}>
                        <Course className='intranet'>
                        {element.name}
                        </Course>
                        </Link>
                    ))}
                    <br/>
                    {data.Kurse.map((element)=>(
                        <Link key={element.key} to={`/courses/${element.key}/`}>
                        <Course style={style} description={element.description} className='felix'>
                        <strong>{element.displayName}</strong>
                        <em> // Felix Testuser</em>
                        </Course>
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