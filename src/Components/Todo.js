import "./Todo.css"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Todo({task, isCompleted, id, handleCompleted, removeTodo}){
    return (
        <div className={`todo-container`}>
            <div className="checkbox" onClick={()=>handleCompleted(id)}>
            {isCompleted ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon />}
            </div>
            <p className={`${isCompleted && 'completed'}`}>{task}</p>
            <p onClick={()=>removeTodo(id)} className='remove-btn'>x</p>
        </div>
    )
}



export default Todo;