import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';


const cache = new InMemoryCache({});

persistCache({
  cache,
  storage: window.localStorage,
  debug:true
});


const client = new ApolloClient({
    uri: 'https://flexigraphql2.herokuapp.com/graphql', cache,
    request: async (operation) => {
        const username = "weingaen";
        const intrapassword = "978c447b32798766c3f1d79b3c75cd1c"
        operation.setContext({
        headers: {
            username: sessionStorage.getItem('username'),
            intrapassword: sessionStorage.getItem('intrapassword'),
            newslink: localStorage.getItem('newslink')
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
registerServiceWorker();
