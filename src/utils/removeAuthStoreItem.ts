const removeAuthStoreItem = (name: string): void => {
  localStorage.removeItem(name);
};

export default removeAuthStoreItem;

