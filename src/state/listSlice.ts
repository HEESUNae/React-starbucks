import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { listType } from '../@type/coffee';
import { coffeeList } from '../api/coffee';

interface listState {
  list: listType[];
  favoriteList: listType[];
}

const initialState: listState = {
  list: coffeeList,
  favoriteList: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getFavoriteList: (state, action: PayloadAction<listType>) => {
      const hasList = state.favoriteList.some((item) => item.name === action.payload.name);
      if (hasList) {
        state.favoriteList = state.favoriteList.filter((item) => item.name !== action.payload.name);
      } else {
        state.favoriteList = [...state.favoriteList, action.payload];
      }
    },
  },
});

export const { getFavoriteList } = listSlice.actions;

export default listSlice.reducer;
