import m from 'mithril';

export const TodoAddComp = {
    handleAddTodo(e, addTodo = () => {}) {
        const button = e.target;
        const input = button.parentElement.children[0];
        const { value } = input;
        if (!value.trim()) {
            return;
        }
        const todo = {
            title: value.trim(),
        };
        addTodo(todo);
        input.value = '';
    },
    view({ attrs }) {
        const { addTodo } = attrs;
        return m('div', { class: 'add-todo' }, [
            m('input', {
                class: 'add-todo-input',
                placeholder: 'What needs to be done?',
            }),
            m(
                'button',
                {
                    class: 'add-togo-btn',
                    onclick: e => this.handleAddTodo(e, addTodo),
                },
                'add'
            ),
        ]);
    },
};
