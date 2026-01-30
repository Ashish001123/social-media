// import { create } from 'zustand';
// import axiosInstance from "../config/axios.js";

// const usePostsStore = create((set) => ({
//     posts: [],
//     isPending: false,
//     isError: null,
//     createPost: async (post) => {
//        try {
//            set({ isPending: true , isError: null });
//            const res = await axiosInstance.post("/posts/createPost", post);
//            if (res.status === 201) {
//                set((state) => ({ posts: [...state.posts, res.data], isPending: false }));
//            }
//        } catch (error) {
//            console.error("Error creating post:", error);
//            set({ error: error.message, isPending: false });
//        }
//     },
//     deletePost: async (postId) => {
//         try {
//             set({ isPending: true, isError: null });
//             const res = await axiosInstance.delete(`/posts/${postId}`);
//             if (res.status === 200) {
//                 set((state) => ({
//                     posts: state.posts.filter((post) => post._id !== postId),
//                     isPending: false
//                 }));
//             }
//         } catch (error) {
//             console.error("Error deleting post:", error);
//             set({ error: error.message, isPending: false });
//         }
//     },
//     commentPost: async (postId, comment) => {
//         try {
//             set({ isPending: true, isError: null });
//             const res = await axiosInstance.post(`/posts/${postId}/comments`, { text: comment });
//             if (res.status === 201) {
//                 set((state) => {
//                     const updatedPosts = state.posts.map((post) => {
//                         if (post._id === postId) {
//                             return { ...post, comments: [...post.comments, res.data] };
//                         }
//                         return post;
//                     });
//                     return { posts: updatedPosts, isPending: false };
//                 });
//             }
//         } catch (error) {
//             console.error("Error commenting on post:", error);
//             set({ error: error.message, isPending: false });
//         }
//     }
// }));



// export default usePostsStore;







import { create } from "zustand";
import axiosInstance from "../config/axios.js";

const usePostsStore = create((set) => ({
  posts: [],
  isPending: false,
  error: null,

  // CREATE POST
  createPost: async (post) => {
    try {
      set({ isPending: true, error: null });

      const res = await axiosInstance.post("/posts/createPost", post);

      set((state) => ({
        posts: [res.data.post, ...state.posts],
        isPending: false,
      }));
    } catch (err) {
      set({ error: err.message, isPending: false });
    }
  },

  // DELETE POST
  deletePost: async (postId) => {
    try {
      set({ isPending: true, error: null });

      await axiosInstance.delete(`/posts/${postId}`);

      set((state) => ({
        posts: state.posts.filter((p) => p._id !== postId),
        isPending: false,
      }));
    } catch (err) {
      set({ error: err.message, isPending: false });
    }
  },

  // COMMENT POST
  commentPost: async (postId, text) => {
    try {
      set({ isPending: true, error: null });

      const res = await axiosInstance.post(
        `/posts/${postId}/comments`,
        { text }
      );

      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === postId
            ? {
                ...post,
                comments: [...post.comments, res.data.comment],
              }
            : post
        ),
        isPending: false,
      }));
    } catch (err) {
      set({ error: err.message, isPending: false });
    }
  },
}));

export default usePostsStore;
