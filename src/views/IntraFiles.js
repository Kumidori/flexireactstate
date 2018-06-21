import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card, Icon} from 'semantic-ui-react';
import loader from '../loader.gif';
import {Message} from 'semantic-ui-react';




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
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                </div>
            );
            if (error) return( 
            <Message>
            <p>Zu diesem Kurs sind keine Dateien vorhanden</p>
            </Message>);
                console.log(data);
            return (
                <div className='main'>
                    <div >
                    {data.IntranetFiles.map((element)=>(                            
                        <Card className='datei' centered>
                            <Card.Content>
                            <Icon name='file outline' className='file'/>
                            <Card.Header>
                            <a target="_blank" href={element.link}>{element.title}</a>
                            </Card.Header>
                            <Card.Description>{element.size}</Card.Description>
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