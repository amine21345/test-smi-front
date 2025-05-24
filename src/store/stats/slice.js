import { createSlice } from "@reduxjs/toolkit";
import {
  getActifInfluencers,
  getAverageSalesRateByInfluencer,
  getBestCategoryFromOffers,
  getBestCountryBySales,
  getBestDayOfWeek,
  getBestDeviceUsed,
  getBestInfluencerBySales,
  getBestPartOfDay,
  getBestSellingColor,
  getBestSellingProduct,
  getCA,
  getPanierMoyen,
  getTotalInfluencers,
  getTotalTransaction,
} from "./action";

const initialState = {
  totalTransactions: {},
  chiffreAffaire: {},
  totalInfluencers: {},
  actifInfluencers: {},
  panierMoyen: {},
  bestDevice: {},
  bestColor: {},
  bestCategory: {},
  bestProduct: {},
  bestDay: {},
  bestPartOfDay: {},
  taux: {},
  bestInfluencer: {},
  bestCountry: {},
  loading: false,
  error: undefined,
};

const statsReducer = createSlice({
  name: "stats",
  initialState,
  extraReducers: (builder) => {
    const addAsyncCases = (thunk, key) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.loading = true;
          state.error = undefined;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state[key] = action.payload;
          state.loading = false;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    };

    addAsyncCases(getTotalTransaction, "totalTransactions");
    addAsyncCases(getCA, "chiffreAffaire");
    addAsyncCases(getTotalInfluencers, "totalInfluencers");
    addAsyncCases(getActifInfluencers, "actifInfluencers");
    addAsyncCases(getPanierMoyen, "panierMoyen");
    addAsyncCases(getBestDeviceUsed, "bestDevice");
    addAsyncCases(getBestSellingColor, "bestColor");
    addAsyncCases(getBestCategoryFromOffers, "bestCategory");
    addAsyncCases(getBestSellingProduct, "bestProduct");
    addAsyncCases(getBestDayOfWeek, "bestDay");
    addAsyncCases(getBestPartOfDay, "bestPartOfDay");
    addAsyncCases(getAverageSalesRateByInfluencer, "taux");
    addAsyncCases(getBestInfluencerBySales, "bestInfluencer");
    addAsyncCases(getBestCountryBySales, "bestCountry");
  },
});

export default statsReducer.reducer;
