import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
    uri: 'https://flexigraphql2.herokuapp.com/graphql',
    request: async (operation) => {
        const username = "weingaen";
        const intrapassword = "978c447b32798766c3f1d79b3c75cd1c"
        operation.setContext({
        headers: {
            username: sessionStorage.getItem('username'),
            intrapassword: sessionStorage.getItem('intrapassword'),
            newslink: sessionStorage.getItem('newslink')
        }
        });
    },
    });

const ApolloApp = AppComponent => (
    <ApolloProvider client={client}>
        <AppComponent />
    </ApolloProvider>
);

render(ApolloApp(App), document.getElementById('root'));

