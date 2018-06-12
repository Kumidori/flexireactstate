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
import Files from "../views/Files";
import Folder from "../views/Folder";
import Post from "../views/Post";
import Forum from "../views/Forum";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loader from '../loader.gif'




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
                    <div className='all-center'>
                    <img width="100" height="100" className="loader" src={loader} alt="loader"/>>
                    </div>
                    <TabNaviBottom/>
                </div>
            );
            if (error) return <div>DetailCourse Error :(</div>;
            return (
                <div>
                    <HeaderBlock title={data.Kurs.displayName}/>
                    <SubNavi courseKey={data.Kurs.key} activeItem="dateien"/>
                    <Switch>
                    <Route
                    exact path="/courses/:id/dateien"
                    render={(props) => <Files {...props} data={data} />}
                    />
                    <Route
                    exact path="/courses/:id/folder"
                    render={(props) => <Folder {...props} data={data} />}
                    />
                    <Route
                    exact path="/courses/:id"
                    render={(props) => <Files {...props} data={data} />}
                    />
                    <Route
                    exact path="/courses/:id/forum" 
                    render={(props) => <Forum {...props} data={data} />}
                    />
                    <Route
                    exact path="/courses/:id/post" 
                    render={(props) => <Post {...props} data={data} />}
                    />
                    <Route
                    exact path="/courses/:id/info"
                    render={(props) => <Info {...props} data={data} />}
                    />
                    </Switch>
                    <TabNaviBottom/>
                </div>
            )
        }}
    </Query>
);

export default DetailCourse;