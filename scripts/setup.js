import tigrisDB from "../db/index.js";
import { TodoItemSchema } from "../db/TodoItem.js";

try {
  await tigrisDB.initializeBranch();
  await tigrisDB.createOrUpdateCollection(
    "todoItems",
    TodoItemSchema
  );
  console.log("Setup complete ...");
  process.exit(0);

} catch (err) {
  console.error(err);
  process.exit(1);
}