import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import HeaderBlock from '../components/Header';
import TabNaviBottom from '../components/TabNaviBottom';

const Courses = () => {
    return (
        <div>
            <HeaderBlock title="Profile"/>
            <TabNaviBottom activeItem="profile"/>
        </div>
    )
};

export default Courses;