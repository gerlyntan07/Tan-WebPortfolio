import React, { useState } from 'react'

function Button({ btn_text, onClick, icon, className = '' }) {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressStart = () => setIsPressed(true)
  const handlePressEnd = () => setIsPressed(false)

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1 rounded-full bg-accent text-white transition-all duration-100 cursor-pointer ${isPressed ? 'translate-y-[4px] shadow-none' : 'button-shadow'} ${className}`}
      onClick={onClick}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressEnd}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handlePressStart()
        }
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handlePressEnd()
        }
      }}
    >
      {icon && <span>{icon}</span>}
      {btn_text}
    </button>
  )
}

export default Button