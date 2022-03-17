import React, {useRef } from "react";
import 'antd/dist/antd.css';
import style from './ToDo.module.scss'
import { Input, Form, Button, List, Layout, Checkbox} from "antd";
import { observer } from "mobx-react";
import store from '../../store/TaskStore'
const ToDo = observer(() => {
  const {
    Tasks,
    showForm,
    setShowForm,
    setTasks
  } = store

  const { Header, Footer, Sider, Content } = Layout;
  const inputValue:any = useRef('');

  
  
  const enterNewTaskHandler = () => {     
    setTasks([
      ...Tasks,
      {
        text: inputValue.current.input.value,
        completed: false
      }
    ])
    document.getElementsByTagName('input')[0].value =''
    setShowForm(false)
    }
  const removeTaskHandler = (event:any) => {
    const removeElementId = event.target.id
    let updatedTask = [...Tasks]
    updatedTask = updatedTask.filter(task => {
      if(task.text !== removeElementId){
        return task;
      }  
    })   
     setTasks(updatedTask)
  }

  const newTaskForm = () => {
    setShowForm(true)
  }

  const taskCompleteHandler = (event: any) => {
    const completeElementId = event.target.id
    let updatedTask = [...Tasks]
    updatedTask.forEach(task => {
      if(task.text === completeElementId){
        task.completed = event.target.checked       
        }
    })  
    setTasks(updatedTask) 
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
          dataSource={Tasks}
          renderItem={(item) => (
            <List.Item>
              <Checkbox id={item.text}              
              checked={item.completed}
              onChange={taskCompleteHandler}
              >{item.text}</Checkbox>
              <Button
              id={item.text}
              type='primary'
              size='small'
              onClick={(event) =>removeTaskHandler(event)}>X</Button>
            </List.Item>
          )}
          />   
      </div>
      
    }
      </Content>
      <Footer>Maria Ali</Footer>      
      </Layout> 
  );
})

export default ToDo