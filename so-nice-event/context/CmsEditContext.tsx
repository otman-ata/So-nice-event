import React from 'react';

export const CmsEditContext = React.createContext(false);

export function CmsEditProvider({
  value,
  children,
}: {
  value: boolean;
  children: React.ReactNode;
}) {
  return <CmsEditContext.Provider value={value}>{children}</CmsEditContext.Provider>;
}

export function useCmsEditMode(): boolean {
  return React.useContext(CmsEditContext);
}
