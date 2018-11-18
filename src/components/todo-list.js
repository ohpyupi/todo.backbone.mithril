import m from 'mithril';
import { TodoComp } from './todo';

export const TodoListComp = {
    view({ attrs }) {
        const { todos, removeTodo, updateTodo } = attrs;
        return m('div', { class: 'todo-list' }, [
            ...todos.map(todo => m(TodoComp, { todo, removeTodo, updateTodo })),
        ]);
    },
};
