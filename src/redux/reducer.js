import { catalogReducer } from './catalog/slice';
import { favoriteReducer } from './favorite/slice';
import { persistReducer } from 'redux-persist';
import { modalReducer } from './modal/slice';
import { filterReducer } from './filter/slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
};

const favoritePersistReducer = persistReducer(persistConfig, favoriteReducer);

export const reducer = {
  catalog: catalogReducer,
  favorite: favoritePersistReducer,
  modal: modalReducer,
  filter: filterReducer,
};
