import React from "react"

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-emerald-200/50 text-emerald-900",
    secondary: "bg-amber-200/50 text-amber-900",
    destructive: "bg-rose-200/50 text-rose-900",
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium shadow-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
