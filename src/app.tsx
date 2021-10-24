import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/layout/layout';
import './main.global.css';
import { Header } from './shared/header/header';
import { Content } from './shared/content/content';

function AppComponent() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        content
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);