import { Model } from 'backbone';

export const UserModel = Model.extend({
    defaults: {
        name: '',
        email: '',
    },
});
