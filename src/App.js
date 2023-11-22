import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  // Импортируйте Provider
import { postApi } from './modules/postApi';
import { configureStore } from '@reduxjs/toolkit';
import PostList from './modules/PostList';
import PostDetails from './modules/PsotDetails';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:postId" element={<PostDetails />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;