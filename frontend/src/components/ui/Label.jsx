import React from "react"

const Label = ({ children, className = "", htmlFor }) => (
  <label htmlFor={htmlFor} className={`text-sm font-medium text-slate-700 ${className}`}>
    {children}
  </label>
)

export default Label

