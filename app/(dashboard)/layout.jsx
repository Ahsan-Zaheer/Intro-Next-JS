import NewTodoForm from '../../components/NewTodoForm'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        layout
        <div><NewTodoForm/></div>
        <div>{children}</div>

    </div>
  )
}
