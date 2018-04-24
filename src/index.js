import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const client = new ApolloClient({ uri: 'https://flexigraphql.herokuapp.com/' });

const ApolloApp = AppComponent => (
    <ApolloProvider client={client}>
        <AppComponent />
    </ApolloProvider>
);

render(ApolloApp(App), document.getElementById('root'));

