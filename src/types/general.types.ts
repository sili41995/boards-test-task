import { PagePaths } from '@/constants';
import { MouseEvent } from 'react';

// events
export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

// other

export type NavLinks = INavLink[];

export interface INavLink {
  title: string;
  href: PagePaths;
}
