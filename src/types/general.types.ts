import { MouseEvent } from 'react';
import { Location } from 'react-router-dom';
import { PagePaths, PageTitles } from '@/constants';

// data
export type StringOrNull = string | null;

export type NumberOrNull = number | null;

// events
export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// functions
export type Func = () => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

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
