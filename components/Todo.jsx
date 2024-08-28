'use client'

import React, {useTransition} from 'react'

import {completeTodo} from '../utils/actions'

export default function Todo( { todo } ) {
  const [isPending, startTransition] = useTransition();
  return (
    <div onClick={()=>startTransition(()=>completeTodo(todo.id))}
          style={{textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer'}}
    >
        {todo.content}
    </div>
  )
}
