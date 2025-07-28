import React from "react"

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`min-h-[120px] w-full rounded-xl border border-slate-200/50 bg-white/70 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all ${className}`}
    {...props}
  />
)

export default Textarea
