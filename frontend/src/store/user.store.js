import { create } from "zustand";
import axiosInstance from "../config/axios.js";

const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  isFollowLoading: false,
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
  },
  followUnfollowUser: async (userId) => {
    set({ isFollowLoading: true });
    try {
       await axiosInstance.post(`/users/follow/${userId}`);
      set({isFollowLoading: false });
      const suggestedUsers = await axiosInstance.get("/users/suggested");
      set({ suggestedUsers: suggestedUsers.data });
    } catch (error) {
      set({ error: error.message, isFollowLoading: false });
    }
  },
  fetchNotifications: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/notifications");
      set({ notifications: res.data, isLoading: false });
      
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
}));
export default useUserStore;
