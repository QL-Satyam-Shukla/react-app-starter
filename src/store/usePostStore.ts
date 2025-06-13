import { STATUS } from "../constants";
import { apis } from "../services";
import { create } from "zustand";

export const usePostStore = create((set: any) => ({
  
  getFirstPostData: async () => {
    set({ postStatus: STATUS.FETCHING });
    try {
      const resp = await apis.firstPost();
      if (resp.status === 200) {
        set({
          postStatus: STATUS.SUCCESS,
          postList: resp.data,
        });
      } else {
        set({ postStatus: STATUS.ERROR });
      }
    } catch (error) {
      set({ postStatus: STATUS.ERROR });
    }
  },
}));
