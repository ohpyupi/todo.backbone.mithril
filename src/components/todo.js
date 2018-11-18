import m from 'mithril';

export const TodoComp = {
    oninit() {
        this.isEdit = false;
    },
    handleClickChkbox(todo, updateTodo = () => {}) {
        const updated = {
            ...todo,
            completed: !todo.completed,
        };
        updateTodo(updated);
    },
    handleClickEditBtn() {
        this.isEdit = true;
    },
    handleClickSaveBtn(e, todo, updateTodo = () => {}) {
        this.isEdit = false;
        const { target: button } = e;
        const input = button.parentElement.querySelector('.edit');
        const title = input.value;
        const updated = {
            ...todo,
            title,
        };
        if (!updated.title.trim()) {
            return;
        }
        updateTodo(updated);
    },
    view({ attrs }) {
        const { todo, removeTodo, updateTodo } = attrs;
        return m('div', { class: 'todo' }, [
            m('input', {
                class: 'toggle',
                type: 'checkbox',
                checked: todo.completed,
                onclick: () => this.handleClickChkbox(todo, updateTodo),
            }),
            m(
                'label',
                {
                    style: { display: this.isEdit ? 'none' : '' },
                },
                todo.title
            ),
            m('input', {
                class: 'edit',
                value: todo.title,
                style: { display: !this.isEdit ? 'none' : '' },
            }),
            m(
                'button',
                {
                    class: 'edit-btn',
                    style: { display: this.isEdit ? 'none' : '' },
                    onclick: () => this.handleClickEditBtn(),
                },
                'edit'
            ),
            m(
                'button',
                {
                    class: 'save-btn',
                    style: { display: !this.isEdit ? 'none' : '' },
                    onclick: e => this.handleClickSaveBtn(e, todo, updateTodo),
                },
                'save'
            ),
            m(
                'button',
                {
                    class: 'remove-btn',
                    onclick: () => removeTodo(todo.id),
                },
                'remove'
            ),
        ]);
    },
};
