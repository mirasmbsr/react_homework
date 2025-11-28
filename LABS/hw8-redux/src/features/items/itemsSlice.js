import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as itemsService from "../../services/itemsService";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (query, { rejectWithValue }) => {
    try {
      const data = await itemsService.getAll(query);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchItemById = createAsyncThunk(
  "items/fetchItemById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await itemsService.getById(id);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  list: [],
  selectedItem: null,
  loadingList: false,
  loadingItem: false,
  errorList: null,
  errorItem: null,
  query: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ITEMS LIST
      .addCase(fetchItems.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })

      // ITEM DETAILS
      .addCase(fetchItemById.pending, (state) => {
        state.loadingItem = true;
        state.errorItem = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loadingItem = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loadingItem = false;
        state.errorItem = action.payload;
      });
  },
});

export const { setQuery } = itemsSlice.actions;
export default itemsSlice.reducer;
