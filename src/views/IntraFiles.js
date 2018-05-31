import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card, Icon} from 'semantic-ui-react';




const GET_INTRAFILES = gql`
query IntranetFiles($id: String) {
    IntranetFiles(id: $id) {
      title
      link
      size
      uploadInfo
      description
    }
  }  
`;


const IntraFiles = (props) => (
    <Query 
    query={GET_INTRAFILES}
    variables={{id: props.data.Veranstaltungsdetails.id}}
>
        {({ loading, error, data }) => {
            if (loading) return (

                <div>
                    Dateien werden geladen...
                </div>
            );
            if (error) return <div>Error :(</div>;
                console.log(data);
            return (
                <div>
                    <div>
                    {data.IntranetFiles.map((element)=>(                            
                        <Card className='datei' centered>
                            <Card.Content>
                            <Icon name='file outline' className='file'/>
                            <Card.Header>
                            <a download href={element.link}>{element.title}</a>
                            </Card.Header>
                            <Card.Description>{element.size} Byte</Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                    </div>
                </div>
            )
        }}
    </Query>
);

export default IntraFiles;