export type LocalStorageKey = "AUTH_TOKEN" | "user";
export const useLocalStorage = <T extends LocalStorageKey>(key: T) => {
 
  const getItem = () => localStorage.getItem(key);
  const setItem = (value: string) => localStorage.setItem(key, value);
  const clearStorage = () => localStorage.clear();
  const removeItem = () => localStorage.removeItem(key);
  return {
    item: getItem(),
    setItem,
    clearStorage,
    removeItem,
  };
};
