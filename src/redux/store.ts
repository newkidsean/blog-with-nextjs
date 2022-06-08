import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import mainImageReducer from './mainImageSlice';
import mainArticleReducer from './mainArticleSlice';

const store = configureStore({
  reducer: {
    mainImage: mainImageReducer,
    mainArticle: mainArticleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
