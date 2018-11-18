import { Model } from 'backbone';

export const TodoModel = Model.extend({
    defaults: {
        title: '',
        completed: false,
    },
});
