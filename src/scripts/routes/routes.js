import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import List from '../views/pages/list';
import Review from '../views/pages/review';

const routes = {
    '/': List, // default page
    '/list': List,
    '/detail/:id': Detail,
    '/favorite': Favorite,
    '/review/:id': Review,
};

export default routes;
