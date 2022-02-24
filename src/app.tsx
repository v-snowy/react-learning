import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './main.global.css';
import { CardsList } from './shared/cards-list';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { setToken } from './shared/store/actions';
import { rootReducer } from './shared/store/reducers';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  useEffect(() => {
    const token: string = localStorage.getItem('token') || window.__token__;
    store.dispatch(setToken(token));
  }, []);
  
  return (
    <Provider store={ store }>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);