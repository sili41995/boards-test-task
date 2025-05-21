import { NavLinks } from '@/types/general.types';
import PagePaths from './pagePaths';

const navLinks: NavLinks = [
  {
    title: 'Boards',
    href: PagePaths.boards,
  },
  {
    title: 'Tasks',
    href: PagePaths.tasks,
  },
];

export default navLinks;
