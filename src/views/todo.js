import m from 'mithril';
import { View } from 'backbone';
import { TodoCollection } from '../collections';
import { TodoListComp, TodoAddComp, NavComp } from '../components';

export const TodoView = View.extend({
    initialize(context) {
        this.context = context;
        this.todoCollection = new TodoCollection();
        this.todoCollection.fetch();
        this.todos = this.todoCollection.toJSON();
        this.listenAddTodoCollection();
        this.listenDestroyTodoCollection();
        this.listenChangeTodoCollection();
    },
    listenAddTodoCollection() {
        this.todoCollection.on('add', () => {
            this.todos = this.todoCollection.toJSON();
        });
    },
    listenDestroyTodoCollection() {
        this.todoCollection.on('destroy', () => {
            this.todos = this.todoCollection.toJSON();
        });
    },
    listenChangeTodoCollection() {
        this.todoCollection.on('change', () => {
            this.todos = this.todoCollection.toJSON();
        });
    },
    handleAddTodo(e) {
        const button = e.target;
        const input = button.parentElement.children[0];
        const { value } = input;
        if (!value.trim()) {
            return;
        }
        const todo = {
            title: value.trim(),
        };
        this.addTodo(todo);
        input.value = '';
    },
    addTodo(todo) {
        const todoModel = this.todoCollection.add(todo);
        todoModel.save();
    },
    removeTodo(id) {
        const todo = this.todoCollection.where({ id })[0];
        todo.destroy();
    },
    updateTodo(todo) {
        const updated = Object.assign({}, todo);
        const todoModel = this.todoCollection.get(updated.id);
        todoModel.set(updated);
        todoModel.save();
    },
    view() {
        return m('section', { id: 'todo', class: 'section' }, [
            m('h1', 'Todo App'),
            m(NavComp, {}),
            m(TodoAddComp, {
                addTodo: todo => this.addTodo(todo),
            }),
            m(TodoListComp, {
                todos: this.todos,
                removeTodo: id => this.removeTodo(id),
                updateTodo: todo => this.updateTodo(todo),
            }),
        ]);
    },
});
