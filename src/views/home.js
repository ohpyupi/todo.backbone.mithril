import m from 'mithril';
import { View } from 'backbone';
import { NavComp } from '../components';

export const HomeView = View.extend({
    initialize(context) {
        this.context = context;
    },
    view() {
        return m('section', { id: 'home', class: 'section' }, [
            m('h1', 'Home - powered by Backbone + Mithril'),
            m(NavComp),
            m('div', [
                m(
                    'p',
                    'This app is developed to demonstrate what can be achieved from the mixture of Backbone.js, Mithril.js, and ES6'
                ),
                m('ol', [
                    m(
                        'li',
                        'Usage of virtual DOM brings the high perfomance on the DOM rendering by using Mithril.js.'
                    ),
                    m(
                        'li',
                        'Taking advantage on the well-structured model/collection data structure from Backbone.js.'
                    ),
                    m('li', 'Component-driven application.'),
                    m(
                        'li',
                        'Lighter application dropping jQuery dependency out by using Mithril.js and ES6.'
                    ),
                ]),
            ]),
        ]);
    },
});
