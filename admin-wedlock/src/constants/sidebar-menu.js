import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/addEvent',
        title: 'Add Events',
    },
   {
        id: 3,
        icon: ShippingIcon,
        path: '/eventList',
        title: 'Event List',
    },
    {
        id: 4,
        icon: ShippingIcon,
        path: '/manageEvent',
        title: 'Manage Event Galary',
    },
    {
        id: 5,
        icon: UserIcon,
        path: '/booking',
        title: 'Booking Request',
    }
]

export default sidebar_menu;