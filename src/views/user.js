import m from 'mithril';
import { View } from 'backbone';
import { NavComp, UserComp } from '../components';

export const UserView = View.extend({
    initialize(context) {
        this.context = context;
        this.user = {
            imgUrl:
                'https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2017/08/warcraft-lich-king.jpg?resize=1080%2C600&quality=80&ssl=1',
            name: 'Arthas Menethil',
            email: 'frostmourne@lordaeron.com',
        };
    },
    view() {
        return m('section', { id: 'user', class: 'section' }, [
            m('h1', 'User'),
            m(NavComp),
            m(UserComp, {
                imgUrl: this.user.imgUrl,
                email: this.user.email,
                name: this.user.name,
            }),
        ]);
    },
});
