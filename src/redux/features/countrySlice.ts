import { createAsyncThunk, createSlice,  type PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import type { CounterState, Country } from '../../types/common.interface';


export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<Country[]>(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      );
      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(null);
    }
  }
);
const initialState: CounterState = {
  countryList: [],
  loading: false,
  error: null,
  selectedRegion: 'all',
  currentPageCount:10,
  
}
export const countrySlice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
    },
    setPageCount: (state) => {
      state.currentPageCount += 10;
    },
    resetPageCount: (state) => {
      state.currentPageCount = 10;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.loading = false;
          state.countryList = action.payload;
        }
      )
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export const { setRegion ,setPageCount,resetPageCount} = countrySlice.actions


export default countrySlice.reducer