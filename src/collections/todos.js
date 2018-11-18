import { Collection } from 'backbone';
import { LocalStorage } from 'backbone.localstorage';
import { TodoModel } from '../models/todo';

export const TodoCollection = Collection.extend({
    model: TodoModel,
    localStorage: new LocalStorage('todo'),
});
