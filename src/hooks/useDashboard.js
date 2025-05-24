import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "../store/stats/action";
import { useDate } from "./useDate";

export function useDashboard() {
  const {
    totalTransactions,
    chiffreAffaire,
    totalInfluencers,
    actifInfluencers,
    panierMoyen,
    bestDevice,
    bestColor,
    bestCategory,
    bestProduct,
    bestDay,
    bestPartOfDay,
    taux,
    bestInfluencer,
    bestCountry,
    loading,
    error,
  } = useSelector((state) => state.statsReducer);

  const {
    options,
    selectedView,
    handleSelectChange,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    getFormattedDate,
  } = useDate();

  const dispatch = useDispatch();

  // ✅ Memoize the formatted date to avoid re-renders
  const date = useMemo(
    () => getFormattedDate(),
    [startDate, endDate, selectedView]
  );

  // ✅ Fetch all stats when date changes
  const fetchData = useCallback(() => {
    if (!date) return;
    dispatch(getTotalTransaction(date));
    dispatch(getCA(date));
    dispatch(getTotalInfluencers(date));
    dispatch(getActifInfluencers(date));
    dispatch(getPanierMoyen(date));
    dispatch(getBestDeviceUsed(date));
    dispatch(getBestSellingColor(date));
    dispatch(getBestCategoryFromOffers(date));
    dispatch(getBestSellingProduct(date));
    dispatch(getBestDayOfWeek(date));
    dispatch(getBestPartOfDay(date));
    dispatch(getAverageSalesRateByInfluencer(date));
    dispatch(getBestInfluencerBySales(date));
    dispatch(getBestCountryBySales(date));
  }, [dispatch, date]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    totalTransactions,
    chiffreAffaire,
    totalInfluencers,
    actifInfluencers,
    panierMoyen,
    bestDevice,
    bestColor,
    bestCategory,
    bestProduct,
    bestDay,
    bestPartOfDay,
    taux,
    bestInfluencer,
    bestCountry,
    loading,
    error,
    options,
    selectedView,
    handleSelectChange,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };
}
