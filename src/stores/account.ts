import { IAccounts } from "@/@types/accounts";
import { create } from "zustand";

type IAccountsStore = {
  account: IAccounts;
  setAccount: (Account: IAccounts) => void;
  clearAccount: () => void;
};

const useAccountStore = create<IAccountsStore>((set) => ({
  account: {} as IAccounts,
  setAccount: (account: IAccounts) => set(() => ({ account })),
  clearAccount: () => set(() => ({ account: {} as IAccounts })),
}));

const useAccount = () => useAccountStore(({ account }) => account);
const useSetAccount = () => useAccountStore(({ setAccount }) => setAccount);
const useClearAccount = () =>
  useAccountStore(({ clearAccount }) => clearAccount);

export { useAccountStore, useAccount, useSetAccount, useClearAccount };
