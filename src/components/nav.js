import m from 'mithril';

export const NavComp = {
    view() {
        return m('nav', [
            m(
                'a',
                {
                    href: '#',
                },
                'Home'
            ),
            m(
                'a',
                {
                    href: '#todo',
                },
                'Todo'
            ),
            m(
                'a',
                {
                    href: '/#user',
                },
                'User'
            ),
        ]);
    },
};
