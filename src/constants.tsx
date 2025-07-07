import { Icon } from '@iconify/react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Create',
    path: '/create',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];