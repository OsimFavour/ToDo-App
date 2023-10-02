import React from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

const Todo = ({ id, title, description, completeTodo, deleteTodo }) => {
    return (
        <>
            <Row className='border-bottom pt-3'>
                <Col md={1}>
                    <Form>
                        <Form.Check 
                        type='checkbox'
                        onChange={() => completeTodo(id)}/>
                    </Form>
                </Col>

                <Col>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </Col>

                <Col md={2}>
                    <Form>
                        <Button variant="info" className='my-2 btn-block'>
                            Edit
                        </Button>
                    </Form>

                    <Form>
                        <Button variant="danger" className='my-2 btn-block' onClick={() => deleteTodo(id)}>
                            Delete
                        </Button>
                    </Form>
                </Col>
            </Row> 
        </>
        
    )
}

export default Todo