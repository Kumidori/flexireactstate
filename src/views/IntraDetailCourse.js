import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';
import { Link } from 'react-router-dom';
import SubNavi from '../components/SubNavi';
import IntraInfo from '../components/IntraInfo';
import IntraFiles from "../views/IntraFiles";
import IntraForum from "../views/IntraForum";
import IntraPost from "../views/IntraPost";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loader from '../loader.gif'


const GET_SINGLE_INTRACOURSE = gql`
query VeranstaltungsDetails($id: String) {
    Veranstaltungsdetails(id: $id) {
      name
      short
      vinfo
      id
      block
    }
  }
`;


const IntraDetailCourse = (props) => (
    <Query 
        query={GET_SINGLE_INTRACOURSE}
        variables={{id: props.match.params.id}}
    >
        {({ loading, error, data }) => {
            if (loading) return (
                <div>
                    <HeaderBlock title="Kurse" headerIcon='university'/>
                    <div className='all-center'>
                    <img width="100" height="100" className="loader" src={loader} alt="loader"/>
                    </div>
                    <TabNaviBottom/>
                </div>
            );
            if (error) return <div>DetailCourse Error :(</div>;
            return (
                <div>
                    <HeaderBlock title={data.Veranstaltungsdetails.name} headerIcon='university'/>
                    <SubNavi courseKey={data.Veranstaltungsdetails.id} activeItem="dateien" intranet={true}/>
                    <Switch>
                    <Route
                    exact path="/intracourses/:id/dateien"
                    render={(props) => <IntraFiles {...props} data={data} />}
                    />
                    <Route
                    exact path="/intracourses/:id"
                    render={(props) => <IntraFiles {...props} data={data} />}
                    />
                    <Route
                    exact path="/intracourses/:id/info"
                    render={(props) => <IntraInfo {...props} data={data} />}
                    />
                     <Route
                    exact path="/intracourses/:id/forum"
                    render={(props) => <IntraForum {...props} data={data} />}
                    />
                     <Route
                    exact path="/intracourses/:id/post" 
                    render={(props) => <IntraPost {...props} data={data} />}
                    />
                    </Switch>
                    <TabNaviBottom/>
                </div>
            )
        }}
    </Query>
);

export default IntraDetailCourse;