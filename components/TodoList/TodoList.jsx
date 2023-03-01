import React, { useState } from 'react'
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { onNewTodo, onLoad } from './TodoList.telefunc.js';
import { useQuery, useMutation } from '../../hooks/loader.js';
import css from "./TodoList.module.css";

export default function TodoList() {
  const { data, isRefetching, refetch } = useQuery(onLoad);
  const { mutate, isMutating } = useMutation(onNewTodo);
  const [draft, setDraft] = useState('')
  const onSubmit = async () => {
    await mutate({ text: draft })
    setDraft('')
    await refetch();
  }
  return (
    <div>
      <ul>
        {data.map((todoItem, i) => (
          <li key={i}>{todoItem.text}</li>
        ))}
      </ul>
      <FormGroup
        helperText="Please enter todo text"
        label="Text"
        labelFor="text"
        labelInfo="(required)"
      >
        <InputGroup id="text" placeholder="Enter..." onChange={(ev) => setDraft(ev.target.value)} value={draft} autoComplete="false" />
        <Button className={css.addButton} intent="success" loading={isMutating || isRefetching} onClick={onSubmit}>Add Todo</Button>
      </FormGroup>
    </div>
  )
}