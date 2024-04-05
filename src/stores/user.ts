import { IUser } from "@/@types/user";
import { create } from "zustand";

type IUserStore = {
  user: IUser;
  setUser: (user: IUser) => void;
  clearUser: () => void;
};

const useUserStore = create<IUserStore>((set) => ({
  user: {} as IUser,
  setUser: (user: IUser) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: {} as IUser })),
}));

const useUser = () => useUserStore(({ user }) => user);
const useSetUser = () => useUserStore(({ setUser }) => setUser);
const useClearUser = () => useUserStore(({ clearUser }) => clearUser);

export { useUserStore, useUser, useSetUser, useClearUser };
