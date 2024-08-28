
import { newTodo } from "../utils/actions"


export default function NewTodoForm( {onChange}) {
 
  return (
    <div>
        <form action={newTodo} >
            <input type="text" name="content" id="name" className="border border-black/25 me-3" />
            <button type="submit" >New Todo</button>
        </form>
    </div>
  )
}
