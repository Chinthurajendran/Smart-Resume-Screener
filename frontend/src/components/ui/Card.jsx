import React from "react"

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 backdrop-blur-xl bg-white/60 shadow-xl ${className}`}>
    {children}
  </div>
)

export default Card
