import tigrisDB from "../services/db.js";
import { TodoItemSchema } from "../services/todo.js";

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