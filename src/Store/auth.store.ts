import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AuthStoreProps } from "./types";

const useAuthStore = create<AuthStoreProps>()(
  persist(
    immer(
      devtools((set) => ({
        userData: {},

        // Methods
        userLogIn: (data: any) => {
          set({ userData: data }, false, "auth_user_login");
        },
        userLogOut: () => {
          set({ userData: {} });
        },
      }))
    ),
    {
      name: `${process.env.REACT_APP_USER_STORE_KEY || ""}`,
    }
  )
);
export default useAuthStore;
