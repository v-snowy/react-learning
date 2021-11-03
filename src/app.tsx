import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import './main.global.css';
import { Header } from './shared/header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/cards-list';

function AppComponent() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <CardsList></CardsList>
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);