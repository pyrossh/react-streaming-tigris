import tigrisDB from "./db.js";

/** @type { import("@tigrisdata/core").Collection<typeof TodoPropType> } */
export const todosCollection = tigrisDB.getCollection("todoItems");

export const getTodos = async () => {
  const cursor = todosCollection.findMany({
    // sort: [
    //   {
    //     field: "text",
    //     order: Order.ASC,
    //   }
    // ]
  });
  const items = await cursor.toArray();
  return items;
}

/** @param {typeof TodoPropType} item  */
export const createTodo = async (item) => {
  const inserted = await todosCollection.insertOne(item);
  return inserted;
}

/** @param {number} id */
export const getTodo = async (id) => {
  const item = await todosCollection.findOne({
    filter: { id },
  });
  return item;
}

/** @param {typeof TodoPropType} item */
export const updateTodo = async (item) => {
  const updated = await todosCollection.insertOrReplaceOne(item);
  return updated;
}

/** @param {number} id */
export const deleteTodo = async (id) => {
  const res = await todosCollection.deleteOne({
    filter: { id },
  });
  return res;
}