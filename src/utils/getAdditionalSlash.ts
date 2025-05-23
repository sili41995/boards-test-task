import { Symbols } from '@/constants';

const getAdditionalSlash = (pathname: string): string => {
  const isTrailingSlash = pathname.endsWith(Symbols.slash);
  const additionalSlash = isTrailingSlash ? Symbols.emptyString : Symbols.slash;

  return additionalSlash;
};

export default getAdditionalSlash;
