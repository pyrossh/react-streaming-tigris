import { Suspense } from 'react';
import Timer from '@/components/Timer/Timer';
import Counter from '@/components/Counter/Counter';
import TodoList from '@/components/TodoList/TodoList';
import css from "./index.module.css";

export function Page() {
  return (
    <div className={css.container}>
      <h1>To-do List</h1>
      <Timer />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
      <Counter />
    </div>
  )
}



