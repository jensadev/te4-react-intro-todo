function Todonewitem (props) {
    return (
        <>
        <input id="newTodo" type="text" placeholder="Skriv in en sak att göra" />
        <button onClick={() => { props.addTodo(document.getElementById('newTodo').value) }}>Lägg till</button>
        </>
    )
}

export default Todonewitem