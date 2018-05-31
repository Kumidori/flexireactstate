import React from 'react';
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Course from '../components/Course'
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import SubNavi from '../components/SubNavi';
import {Card, Icon} from 'semantic-ui-react';




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
                <SubNavi activeItem="dateien"/>
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
                    <SubNavi activeItem="dateien"/>
                    <div>
                    {data.Files.map((element)=>(
                        <div>
                            
                            {
                                element.size ?
                                <div>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='file outline' className='file'/>
                                    <Card.Header>
                                    <a download href={element.href}>{element.title}</a>
                                    </Card.Header>
                                    <Card.Description>{element.size} Byte</Card.Description>
                                    </Card.Content>
                                </Card>
                                </div>
                                :
                                <Link to={{
                                    pathname:"/Folder",
                                    state:{
                                        href:element.href
                                    }
                                    }}>
                                <Card className='datei' centered>
                                    <Card.Content>
                                    <Icon name='folder outline' className='folder'/>
                                    <Card.Header>{element.title}</Card.Header>
                                    </Card.Content>
                                </Card>
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