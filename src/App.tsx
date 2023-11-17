import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DetailPage, FavoritePage, MainPage } from './const/lazy';
import { store } from './state/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Suspense>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/detail" element={<DetailPage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
