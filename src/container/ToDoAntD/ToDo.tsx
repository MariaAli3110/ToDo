import React, { useState, useRef } from "react";
import 'antd/dist/antd.css';
import style from './ToDo.module.scss'
import { Input, Form, Button, List, Layout} from "antd";

const ToDo = (props:any) => {
  const { Header, Footer, Sider, Content } = Layout;
  const inputValue:any = useRef('');
  const [TasksArray, setTaskArray] = useState([
    "Wake Up",
    "Eat Breakfast",
    "Study",
    "Sleep",
  ]);
  const [showForm, setShowForm] = useState(false)
  const enterNewTaskHandler = () => {     
    setTaskArray([
      ...TasksArray,
      inputValue.current.input.value
    ])
    document.getElementsByTagName('input')[0].value =''
    setShowForm(false)
    }
  const removeTaskHandler = (event:any) => {
    const removeElementId = event.target.id
    let updatedTask = [...TasksArray]
    updatedTask = updatedTask.filter(task => {
      return task !== removeElementId
    })   
    setTaskArray(updatedTask)
  }
  const newTaskForm = () => {
    setShowForm(true)
  }
  
  return (
    <Layout>
      <Header style={{font: 'white'}}>To-Do Task App</Header>
      <Content>
       {showForm ? <Form
      name='NewTaskForm'
      initialValues={{remember: true}}      
      autoComplete='off'
      >
        <Form.Item>        
          <h2>Enter New Task</h2>
        </Form.Item>
        <Form.Item
        rules={[{required: true, message: 'Please Enter New Task' }]}>
          <Input
          ref={inputValue}
          placeholder='Enter New Task'
          status=''/>
        </Form.Item>
        <Form.Item>
          <Button
          type='primary'
          onClick={enterNewTaskHandler}>
            Enter
          </Button>
        </Form.Item>
      </Form>: 
      
        <div className={style.ToDo}>
          <h1>To-Do App</h1>
          
          <Button
          type="primary" 
          onClick={newTaskForm}>Enter New Task</Button>
           <List
          dataSource={TasksArray}
          renderItem={(item) => (
            <List.Item
            onClick={(event) =>removeTaskHandler(event)}
            id={item}>
              {item}
            </List.Item>
          )}
          />   
      </div>
      
    }
      </Content>
      <Footer>Maria Ali</Footer>      
      </Layout> 
  );
}

export default ToDo

{/* <Input
          ref={inputValue}
          placeholder='Enter New Task'
          status=''/> */}