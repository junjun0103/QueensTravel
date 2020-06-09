import React from "react"

const Subtitle = ({ subtitle }) => {
  return (
    <div className="section-subtitle">
      <h3 className="subtitle-style">{subtitle || ""}</h3>
    </div>
  )
}

export default Subtitle
