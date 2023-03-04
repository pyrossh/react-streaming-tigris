import { useState } from "react";
import PropTypes from 'prop-types';
import { Button, InputGroup } from "@blueprintjs/core";
import useMutation from '@/hooks/useMutation';
import { onUpdate, onDelete } from './Todo.telefunc';
// import { TodoPropType } from '@/models/Todo';
import css from "./Todo.module.css";

const propTypes = {
  // todo: PropTypes.shape(TodoPropType).isRequired,
  refetch: PropTypes.func.isRequired,
}

/**
 * @type {import("React").FC<import("prop-types").InferProps<propTypes>>}
 **/
const Todo = ({ todo, refetch }) => {
  const [state, setState] = useState({ text: todo.text, editing: false });
  const updateMutation = useMutation(async (data) => {
    await onUpdate({ ...todo, ...data });
    await refetch();
  });
  const deleteMutation = useMutation(async () => {
    await onDelete(todo.id);
    await refetch();
  })
  return (
    <li className={css.item} key={todo.id}>
      {!state.editing && (
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => updateMutation.mutate({ completed: e.target.checked })}
          />{" "}
          <span className={todo.completed ? css.done : undefined}>{todo.text}</span>{" "}
        </label>
      )}

      {state.editing && (
        <InputGroup
          autoFocus
          value={state.text}
          onChange={(e) => setState({ text: e.target.value, editing: true })}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              await updateMutation.mutate({ text: state.text });
              setState({ text: todo.text, editing: false });
            } else if (e.key === "Escape") {
              setState({ text: todo.text, editing: false });
            }
          }}
        />
      )}

      <span>
        {!todo.completed && !state.editing && (
          <Button
            onClick={() => setState({ text: todo.text, editing: true })}
          >
            Edit
          </Button>
        )}

        {todo.completed && (
          <Button loading={deleteMutation.isMutating} onClick={deleteMutation.mutate}>
            Delete
          </Button>
        )}

        {state.editing && state.text !== todo.text && (
          <Button
            loading={updateMutation.isMutating}
            onClick={async () => {
              await updateMutation.mutate({ text: state.text });
              setState({ text: todo.text, editing: false });
            }}
          >
            Save
          </Button>
        )}

        {state.editing && (
          <Button
            onClick={() => setState({ text: todo.text, editing: false })}
          >
            Cancel
          </Button>
        )}
      </span>
    </li>
  );
};

Todo.propTypes = propTypes;

export default Todo;
