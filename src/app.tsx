import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useToken } from './hooks/useToken';
import './main.global.css';
import { CardsList, ICardsListProps } from './shared/cards-list';
import { Content } from './shared/Content';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { rootReducer } from './shared/store/reducers';

const cardsList: ICardsListProps = {
  list: [
    {
      card: {
        id: 'id1',
        user: {
          name: 'Dmitriy Grishin',
          avatarImgSrc: 'https://cdn.dribbble.com/users/6047818/avatars/mini/84b15dbafef241b1493507776816d4b0.jpg?1600202707',
        },
        publishedDate: '22/11/2020',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsum delectus accusantium! Recusandae, voluptas qui?',
        image: {
          src: 'https://cdn.dribbble.com/users/2198432/screenshots/16759013/media/9dd90492a13c60c0bd56e2a161dff4f1.png?compress=1&resize=800x600'
        },
        karmaValue: 42,
        commentsCount: 13
      }
    },
    {
      card: {
        id: 'id2',
        user: {
          name: 'Ivan Krasnov',
          avatarImgSrc: 'https://cdn.dribbble.com/users/6567474/avatars/mini/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416',
        },
        publishedDate: '17/11/2020',
        postDescription: '',
        image: {
          src: 'https://cdn.dribbble.com/users/5485242/screenshots/16801174/media/34469e16f1e98c0e5d5b69f95bcc2860.jpg?compress=1&resize=800x600'
        },
        karmaValue: 54,
        commentsCount: 9
      }
    }
  ]
}

export const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  const TokenProvider = tokenContext.Provider;

  return (
    <Provider store={ store }>
      <TokenProvider value={ token }>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList list={ cardsList.list } />
            </Content>
          </Layout>
        </UserContextProvider>
      </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);