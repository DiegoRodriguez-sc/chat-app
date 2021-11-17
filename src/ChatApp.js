import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './router/AppRouter';
import { SocketProvider } from './context/SocketContext';

const ChatApp = () => {
 return (
   <Provider store={store}>
     <SocketProvider>
      <AppRouter />
     </SocketProvider>
   </Provider>
   )
}

export default ChatApp
