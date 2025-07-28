import React from "react"

const Progress = ({ value = 0, className = "" }) => (
  <div className={`relative h-2 w-full rounded-full bg-slate-200/50 overflow-hidden ${className}`}>
    <div
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)

export default Progress

