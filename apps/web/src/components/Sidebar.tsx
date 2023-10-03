import React from 'react'

export default function Sidebar() {
  return (
    <div className="border-r border-t w-[260px] hidden lg:flex flex-col flex-shrink-0 pt-3 pb-4 bg-zinc-100  h-full overflow-hidden space-y-4" style={{ height: 'initial' }}>
      <div className="w-full px-3">
        <a href="/" className="inline-flex items-center gap-1 w-full px-2.5 text-sm h-8 transition-all font-medium bg-zinc-50 border rounded-md border-zinc-300 hover:bg-zinc-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4 stroke-2 stroke-zinc-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
          </svg>New Chat
        </a>
      </div>
      <div className="flex-1 px-3 space-y-4 overflow-auto">
        <div className="flex flex-col items-center w-full h-full text-zinc-500">
          <button className="w-full px-2 py-1.5 text-sm font-medium rounded-md text-center transition-all cursor-pointer hover:bg-zinc-200">Sign
            in to save your playgrounds
          </button>
        </div>
      </div>
    </div>
  )
}
