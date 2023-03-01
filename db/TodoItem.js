import { TigrisDataTypes, Generated, Order } from "@tigrisdata/core";
import PropTypes from 'prop-types';
import tigrisDB from "./index.js";

export const TodoItemSchema = {
  id: {
    type: TigrisDataTypes.STRING,
    default: Generated.CUID,
    primary_key: { order: 1 }
  },
  text: { type: TigrisDataTypes.STRING },
  completed: { type: TigrisDataTypes.BOOLEAN }
};


export const TodoPropType = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date),
};

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