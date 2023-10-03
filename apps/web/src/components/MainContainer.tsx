import React, { ReactNode } from 'react'

export default function MainContainer({ children }: { children: ReactNode | any }) {
  return (
    <React.Fragment>
      <div className="min-w-[280px] min-h-[250px] bg-zinc-50 w-full h-full">
        {children}
      </div>
    </React.Fragment>
  );
}
