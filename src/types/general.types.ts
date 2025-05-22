import { PagePaths, PageTitles } from '@/constants';
import { MouseEvent } from 'react';
import { Location } from 'react-router-dom';

// data

export type StringOrNull = string | null;

export type NumberOrNull = number | null;

// events
export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// other

export interface INavLinks {
  privateNavLinks: NavLinks;
  authNavLinks: NavLinks;
}

export type NavLinks = INavLink[];

export interface INavLink {
  title: PageTitles;
  href: PagePaths;
}

export interface IRegExp {
  email: RegExp;
}

export type PageLocation = Location<any>;

export interface IPrevLocation {
  from: PageLocation;
}

export interface ILocation extends PageLocation {
  state: IPrevLocation | undefined;
}
