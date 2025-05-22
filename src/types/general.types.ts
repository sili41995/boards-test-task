import { PagePaths } from '@/constants';
import { MouseEvent } from 'react';

// data

export type StringOrNull = string | null;

export type NumberOrNull = number | null;

// events
export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

// other

export type NavLinks = INavLink[];

export interface INavLink {
  title: string;
  href: PagePaths;
}
