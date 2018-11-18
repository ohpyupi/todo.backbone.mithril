import { Map } from 'immutable';
import { AppRouter } from './router';

const bootstrap = () => {
    const context = Map({
        version: 'v1.0.0',
    });
    const appRouter = new AppRouter(context);
    appRouter.startHistory();
};

bootstrap();
