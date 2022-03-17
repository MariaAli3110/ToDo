import { makeAutoObservable } from "mobx";

class TaskStore {
    Tasks = [
        {
            text: 'Wake Up',
            completed: false
        },
        {
            text: 'Eat Breakfast',
            completed: false
        },
        {
            text: 'Sleep',
            completed: false
        }
    ];
    showForm = false;

    constructor(){
        makeAutoObservable(this)
    }
    setShowForm = showForm => this.showForm = showForm;
    setTasks = Tasks => this.Tasks = Tasks
}
export default new TaskStore();