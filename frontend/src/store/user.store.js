import { create } from "zustand";
import axiosInstance from "../config/axios.js";

const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  suggestedUsers: [],

  fetchSuggestedUsers: async () => {
    set({ isLoading: true });
    try {
        const res = await axiosInstance.get("/users/suggested");
        set({ suggestedUsers: res.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

export default useUserStore;
