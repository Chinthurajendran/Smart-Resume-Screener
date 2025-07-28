import React from "react"

const Button = ({
  children,
  disabled = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/30 disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
