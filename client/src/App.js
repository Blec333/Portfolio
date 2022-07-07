import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Home from "./components/pages/Home";
import Account from './components/pages/Account';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // console.log('token = ' + token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
console.log(client)

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col h-screen">
          <Header/>
          <div className="grid flex-1 overflow-y-auto h-screen place-items-center">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/account" element={<Account/>}/>
              <Route path="/aboutme" element={<AboutMe/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
