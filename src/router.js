import m from 'mithril';
import { Router, history } from 'backbone';
import { HomeView, TodoView, UserView } from './views';

const root = document.body;

export const AppRouter = Router.extend({
    routes: {
        '': 'routeToHome',
        todo: 'routeToTodo',
        user: 'routeToUser',
    },
    initialize(context) {
        console.log('Initialized AppRouter');
        this.context = context;
    },
    routeToHome() {
        const homeView = new HomeView(this.context);
        m.mount(root, homeView);
    },
    routeToUser() {
        const userView = new UserView(this.context);
        m.mount(root, userView);
    },
    routeToTodo() {
        const todoView = new TodoView(this.context);
        m.mount(root, todoView);
    },
    startHistory() {
        history.start();
    },
});
