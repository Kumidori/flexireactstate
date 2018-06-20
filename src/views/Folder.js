import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Icon, Card} from 'semantic-ui-react';
import loader from '../loader.gif'
import {Message} from 'semantic-ui-react';



const GET_FILES_BY_HREF = gql`
query Files($href: String) {
    Files(href: $href) {
      href
      title
      size
    }
  }
  
`;


const Folder = (props) => (
    <Query 
    query={GET_FILES_BY_HREF}
    variables={{href: props.location.state.href}}
>
        {({ loading, error, data }) => {
            if (loading) return (
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                </div>
            );
            if (error) return (<Message>
                <p>Zu diesem Kurs sind keine Dateien vorhanden</p>
                </Message>);
                console.log(data);
            return (
                    <div>
                    {data.Files.map((element)=>(
                        <div>
                            
                            {
                                element.size ?
                                <div>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='file outline' className='file'/>
                                    
                                    <a target="_self" href={element.href}>{element.title}</a>
                                   
                                    <Card.Description>{element.size} Byte</Card.Description>
                                    </Card.Content>
                                </Card>
                                </div>
                                :
                                <Link to={{
                                    pathname:`/courses/${props.data.Kurs.key}/folder`,
                                    state:{
                                        href:element.href
                                    }
                                    }}>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='folder outline' className='folder'/>
                                    {element.title}
                                    </Card.Content>
                                </Card>
                                </Link>
                            }
                            
                        </div>
                    ))}
                    </div>
            )
        }}
    </Query>
);

export default Folder;