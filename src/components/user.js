import m from 'mithril';

const imageStyle = {
    width: '16rem',
};

export const UserComp = {
    view({ attrs }) {
        const { imgUrl, email, name } = attrs;
        return m('div', { class: 'user' }, [
            m('div', { class: 'img-con' }, [
                m('img', { src: imgUrl, style: imageStyle }),
            ]),
            m('p', { class: 'name' }, name),
            m('a', { class: 'email', href: `mailto:${email}` }, email),
        ]);
    },
};
