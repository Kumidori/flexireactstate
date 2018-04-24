import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'

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
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;
            console.log(data);
            return (
                <div>
                    {data.Kurse.map((element)=>(
                        <Course key={element.key} name={element.displayName} description={element.description}/>
                    ))}

                    {data.Veranstaltungen.map((element)=>(
                        <Course key={element.id} name={element.name}/>
                    ))}
                </div>
            )
        }}
    </Query>
);

export default Courses;