import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await axios.get('/rest_api/v1/todo/')
      console.log(`Response: ${response}`)
      // Using destructuring to get the data key from the response.json()
      const { data } = response
      console.log(`Data from Response: ${data}`)
      setTodos(data)
    }
    catch (err) {
      console.log(`Error Message: ${err}`)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  const addTodo = async newTodo => {
    try {
      console.log(`New To Do: ${newTodo}`)
      await axios.post('rest_api/v1/todo/', newTodo)
      getTodos()
    }
    catch (err) {
      console.log(`Error Message from addTodo: ${err}`)
    }
  }

  const completeTodo = async id => {
    try {
      const todo = todos.filter(todo => todo.id === id)[0]
      console.log(`Todo Check: ${todo}`)
      todo.completed = true
      await axios.put(`api/v1/todo/${id}/`, todo)
      getTodos()
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='wrapper'>
      <Container>
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h3>My Todos</h3> 
              <AddTodo addTodo={addTodo}/>

              {/* Map functions will loop throught the array itself */}
              {todos.map((todo, index) => (
                // check if the todo is completed. If it's not, show the <Todo/> element
                !todo.completed && <Todo key={index} id={todo.id} title={todo.title} description={todo.description} completeTodo={completeTodo}/>
              ))}

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
