import ExampleComponent from "../components/ExampleComponent";
import OrdersLayout from "../views/orders/Layout";
import OrdersIndex from "../views/orders/Index";
import OrdersCreate from "../views/orders/Create";
const Home = { template: '<div>Hello Home</div>' }

export default [

  {
    path: '/orders',
    component: OrdersLayout,
    name:'orders' ,
    redirect: {
      name: 'orders.create'
    },
    children: [
      {
        path: '',
        component: OrdersIndex,
        name:'orders' ,
      },
      {
        path: 'new',
        component: OrdersCreate,
        name:'orders.create',
      }
    ]
  },
  { path: '/home', component: Home, name:'home' },
  { path: '/example1', component: ExampleComponent, name:'example1' },
  { path: '/example2/:id', component: ExampleComponent, name:'example2', props: true },
]