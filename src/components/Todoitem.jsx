import './Todoitem.css'

function Todoitem (props) {
    let { id, completed, label } = props

    return (
        <li className="todo-item">
            <label>{ label }</label>
            <input
                checked={ completed }
                onChange={ () => { 
                    props.toggleTaskCompleted(id) 
                } }
                type="checkbox" />
        </li>
    )
}

export default Todoitem