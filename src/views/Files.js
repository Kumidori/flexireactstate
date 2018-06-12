import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card, Icon} from 'semantic-ui-react';
import loader from '../loader.gif'




const GET_FILES = gql`
query Files($key: String, $courseNodeId: String) {
    Files(courseKey: $key, courseNodeId: $courseNodeId) {
       href
       title
       size
     }
   }
`;


const Files = (props) => (
    <Query 
    query={GET_FILES}
    variables={{key: props.data.Kurs.key,courseNodeId: props.data.Folders.courseNodeId}}
>
        {({ loading, error, data }) => {
            if (loading) return (
                <div className='all-center'>
                <img width="100" height="100" className="loader" src={loader} alt="loader"/>>
                </div>
            );
            if (error) return <div>Error :(</div>;
                console.log(data);
                const fileTitle = data.Files['0'].title.split('Cross');
                const filetitle = fileTitle['1'].split('A');
                console.log(filetitle['0']);
            return (
                <div>
                    <div>
                    {data.Files.map((element)=>(
                        
                        <div>
                            
                            {  element.size ?
                                
                                element.title.includes('_')  ?
                                <div>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='file outline' className='file'/>
                                   
                                    <a target="_blank" href={element.href}>{fileTitle['0']}<br/>{filetitle['0']}<br/>{filetitle['1']}</a>
                                    
                                    <Card.Description>{element.size} Byte</Card.Description>
                                    </Card.Content>
                                </Card>
                                </div>
                                :
                                <div>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='file outline' className='file'/>
                                   
                                    <a target="_blank" href={element.href}>{element.title}</a>
                                    
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
                </div>
            )
        }}
    </Query>
);

export default Files;