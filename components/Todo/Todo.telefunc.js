import { shield } from 'telefunc';
import { updateTodo, deleteTodo } from '../../services/todo';

const t = shield.type;

shield(onUpdate, [{ id: t.string, text: t.string, completed: t.boolean }])
export async function onUpdate(data) {
  return await updateTodo(data);
}

shield(onDelete, [t.string])
export async function onDelete(id) {
  return await deleteTodo(id);
}