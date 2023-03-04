import { useState } from 'react'
import { FormGroup, InputGroup, Button, Spinner } from "@blueprintjs/core";
import useQuery from '@/hooks/useQuery';
import useMutation from '@/hooks/useMutation';
import Todo from "../Todo/Todo";
import { onNewTodo, onLoad } from './TodoList.telefunc';
import css from "./TodoList.module.css";

export default function TodoList() {
  const { data, isRefetching, refetch } = useQuery(onLoad);
  const { mutate, isMutating } = useMutation(onNewTodo);
  const [draft, setDraft] = useState('');
  const onSubmit = async () => {
    await mutate({ text: draft })
    await refetch();
    setDraft('');
  }
  return (
    <div>
      <ul>
        {data.map((item, i) => (
          <Todo key={i} todo={item} refetch={refetch} />
        ))}
      </ul>
      {isRefetching && <Spinner />}
      <FormGroup
        helperText="Please enter todo text"
        label="Text"
        labelFor="text"
        labelInfo="(required)"
      >
        <InputGroup id="text" placeholder="Enter..." onChange={(ev) => setDraft(ev.target.value)} value={draft} autoComplete="false" />
        <Button className={css.addButton} intent="success" loading={isMutating} onClick={onSubmit}>Add Todo</Button>
      </FormGroup>
    </div>
  )
}