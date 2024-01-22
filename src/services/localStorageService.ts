const LOCAL_STORAGE_KEY = "Blogs";

const initLocalStorage = (): void => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ items: [] }));
  }
};

const get = <T extends TBlog>(): T[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  const parsedData = data ? JSON.parse(data) : { items: [] };

  return parsedData.items;
};

const getById = <T extends TBlog>(id: string): T | null => {
  const items = get<T>();
  const item = items.find((item) => item.id === id);
  return item || null;
};

const post = <T extends TBlog>(newItem: T): void => {
  const items = get<T>();
  items.push(newItem);
  saveData({ items });
};

const put = <T extends TBlog>(updatedItem: T): void => {
  const items = get<T>();
  const index = items.findIndex((item) => item.id === updatedItem.id);

  if (index === -1) {
    throw new Error(`Item with id ${updatedItem.id} not found`);
  }

  items[index] = updatedItem;
  saveData({ items });
};

const remove = (id: string): void => {
  const items = get<TBlog>();
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error(`Item with id ${id} not found`);
  }

  items.splice(index, 1);
  saveData({ items });
};

const saveData = (data: { items: TBlog[] }): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedData);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
};

const LocalStorageService = {
  initLocalStorage,
  get,
  getById,
  post,
  put,
  remove,
};

export default LocalStorageService;
