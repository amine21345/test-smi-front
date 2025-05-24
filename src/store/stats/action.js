import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const BACKEND_URL = process.env.BACKEND_URL;

const postData = async (endpoint, date, rejectWithValue) => {
  try {
    const response = await axios.post(
      `https://test-smi-backend.onrender.com${endpoint}`,
      date,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const getTotalTransaction = createAsyncThunk(
  "GET-TOTAL-TRANSACTIONS",
  (date, { rejectWithValue }) =>
    postData("/api/stats/total-transaction", date, rejectWithValue)
);

export const getCA = createAsyncThunk("GET-CA", (date, { rejectWithValue }) =>
  postData("/api/stats/chiffre-affaire", date, rejectWithValue)
);

export const getTotalInfluencers = createAsyncThunk(
  "GET-TOTAL-INFLUENCERS",
  (date, { rejectWithValue }) =>
    postData("/api/stats/total-influencers", date, rejectWithValue)
);

export const getActifInfluencers = createAsyncThunk(
  "GET-ACTIF-INFLUENCERS",
  (date, { rejectWithValue }) =>
    postData("/api/stats/actif-influencers", date, rejectWithValue)
);

export const getPanierMoyen = createAsyncThunk(
  "GET-PANIER-MOYEN",
  (date, { rejectWithValue }) =>
    postData("/api/stats/panier-moyen", date, rejectWithValue)
);

export const getBestDeviceUsed = createAsyncThunk(
  "GET-BEST-DEVICE",
  (date, { rejectWithValue }) =>
    postData("/api/stats/device", date, rejectWithValue)
);

export const getBestSellingColor = createAsyncThunk(
  "GET-BEST-COLOR",
  (date, { rejectWithValue }) =>
    postData("/api/stats/color", date, rejectWithValue)
);

export const getBestCategoryFromOffers = createAsyncThunk(
  "GET-BEST-CATEGORIE",
  (date, { rejectWithValue }) =>
    postData("/api/stats/categorie", date, rejectWithValue)
);

export const getBestSellingProduct = createAsyncThunk(
  "GET-BEST-PRODUCT",
  (date, { rejectWithValue }) =>
    postData("/api/stats/product", date, rejectWithValue)
);

export const getBestDayOfWeek = createAsyncThunk(
  "GET-BEST-DAY",
  (date, { rejectWithValue }) =>
    postData("/api/stats/best-day", date, rejectWithValue)
);

export const getBestPartOfDay = createAsyncThunk(
  "GET-BEST-PART-OF-DAY",
  (date, { rejectWithValue }) =>
    postData("/api/stats/best-part-day", date, rejectWithValue)
);

export const getAverageSalesRateByInfluencer = createAsyncThunk(
  "GET-TAUX",
  (date, { rejectWithValue }) =>
    postData("/api/stats/taux", date, rejectWithValue)
);

export const getBestInfluencerBySales = createAsyncThunk(
  "GET-BEST-INFLUENCER",
  (date, { rejectWithValue }) =>
    postData("/api/stats/best-influencer", date, rejectWithValue)
);

export const getBestCountryBySales = createAsyncThunk(
  "GET-BEST-COUNTRY",
  (date, { rejectWithValue }) =>
    postData("/api/stats/best-country", date, rejectWithValue)
);
