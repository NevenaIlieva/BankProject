import { useState } from 'react'
import './SettingsWheel.css'

type Theme = 'dark' | 'light'

type SettingsWheelProps = {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

function SettingsWheel({
  theme,
  onThemeChange,
}: SettingsWheelProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="settings-wheel">
      <button
        className="settings-button"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Open settings"
        aria-expanded={isOpen}
      >
        ⚙
      </button>

      {isOpen && (
        <div className="settings-menu">
          <span className="settings-title">Appearance</span>

          <button
            type="button"
            className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => {
              onThemeChange('dark')
              setIsOpen(false)
            }}
          >
            <span>☾</span>
            Dark mode
            {theme === 'dark' && <span className="theme-check">✓</span>}
          </button>

          <button
            type="button"
            className={`theme-option ${theme === 'light' ? 'active' : ''}`}
            onClick={() => {
              onThemeChange('light')
              setIsOpen(false)
            }}
          >
            <span>☀</span>
            Light mode
            {theme === 'light' && <span className="theme-check">✓</span>}
          </button>
        </div>
      )}
    </div>
  )
}

export default SettingsWheel
