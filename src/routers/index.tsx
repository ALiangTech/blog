import { RouteObject,createBrowserRouter, RouterProvider,} from 'react-router-dom'
// 批量导入pages 下面的route.ts 文件
// todo 路由顺序问题
type RouterModule = {
    default: RouteObject
}

// 批量导入
const routerModules= import.meta.glob<RouterModule>('./../pages/**/router.tsx', { eager: true });
// 构建routes
const createRoutes = () => {
    const routes:RouteObject[] = [];
    Object.values(routerModules).forEach(item => {
        routes.push(item.default)
    })
    return routes
}
export const routes = createRoutes();
console.log(routes);

// setup
export default function setupRouter() {
    // 构建路由    
    const router = createBrowserRouter(routes);
    console.log(router);
     
    return <RouterProvider router={router} />
}

