import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Book',
    path: '/book',
    icon: <Icon icon="lucide:car" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/book' },
      { title: 'Reviews', path: '/book/reviews' },
    ],
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <Icon icon="lucide:phone" width="24" height="24" />,
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: <Icon icon="lucide:camera" width="24" height="24" />,
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];