export type SetState<T> = (data: Partial<T>) => void;

export type SetStateFunc<T> = (
  partial: Partial<T>,
  replaceState?: boolean,
  actionName?: string
) => void;

export type GetStateFunc<T> = () => T;

export interface ISetStateProps<T> {
  set: SetStateFunc<T>;
  name: string;
}
