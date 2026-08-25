import { BatteryMedium, Moon, Signal, Sun, Wifi } from 'lucide-react'
import { useState } from 'react'

type PreviewIconName =
  | 'bookmark'
  | 'book'
  | 'cog'
  | 'flame'
  | 'home'
  | 'saved'
  | 'share'
  | 'world'

function StoicPreviewIcon({
  name,
  size = 24,
  solid = false,
}: {
  name: PreviewIconName
  size?: number
  solid?: boolean
}) {
  const iconProps = {
    'aria-hidden': true,
    fill: solid ? 'currentColor' : 'none',
    height: size,
    stroke: 'currentColor',
    strokeLinecap: 'square' as const,
    strokeLinejoin: 'miter' as const,
    strokeWidth: 2,
    viewBox: '0 0 48 48',
    width: size,
  }

  if (name === 'flame') {
    return (
      <svg {...iconProps}>
        <path d="M28.364 19.818s1.887-11.155-5.819-16c0 3.392-1.834 6.977-5.127 9.884S7.935 23.133 8 30.109c.052 5.584 3.07 12.4 10.009 14.9.027-6.64 5.719-9.4 5.99-16.009 4.185 3.937 5.969 9.578 6 15.914 5.015-1.846 9.33-6.142 9.944-13.513.6-7.171-3.491-13.334-6.014-16.4" />
      </svg>
    )
  }

  if (name === 'cog') {
    return (
      <svg {...iconProps}>
        <circle cx="24" cy="24" r="7" />
        <path d="M46 27v-6l-6.4-.534a15.89 15.89 0 0 0-2.072-4.991l4.155-4.91-4.248-4.243-4.91 4.155A15.876 15.876 0 0 0 27.534 8.4L27 2h-6l-.534 6.4a15.89 15.89 0 0 0-4.991 2.072l-4.91-4.155-4.243 4.248 4.155 4.91A15.876 15.876 0 0 0 8.4 20.466L2 21v6l6.4.534a15.89 15.89 0 0 0 2.072 4.991l-4.155 4.91 4.243 4.243 4.91-4.155a15.876 15.876 0 0 0 4.996 2.077L21 46h6l.534-6.405a15.89 15.89 0 0 0 4.991-2.072l4.91 4.155 4.243-4.243-4.155-4.91a15.876 15.876 0 0 0 2.077-4.991z" />
      </svg>
    )
  }

  if (name === 'home') {
    return solid ? (
      <svg {...iconProps} stroke="none">
        <path d="M24 6.876 6 21.6V43c0 1.657 1.343 3 3 3h10V35c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v11h10c1.657 0 3-1.343 3-3V21.6z" />
        <path d="M46 22c-.23 0-.454-.08-.632-.226L24 4.292 2.633 21.774a1 1 0 0 1-1.405-1.548l22.139-18a1 1 0 0 1 1.266 0l22 18A1 1 0 0 1 46 22" />
      </svg>
    ) : (
      <svg {...iconProps}>
        <polyline points="2 21 24 3 46 21" />
        <polyline points="19 45 19 33 29 33 29 45" />
        <path d="M7 24v17c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V24" />
      </svg>
    )
  }

  if (name === 'book') {
    return solid ? (
      <svg {...iconProps} stroke="none">
        <path d="M35 3c-4.231 0-7.87 1.223-10 3.101v34.431c0 .819.941 1.307 1.588.805C28.385 39.944 31.519 39 35 39c5.421 0 10 2.29 10 5a1 1 0 1 0 2 0V10C47 6.075 41.729 3 35 3" />
        <path d="M23 6.101C20.87 4.223 17.231 3 13 3 6.271 3 1 6.075 1 10v34a1 1 0 1 0 2 0c0-2.71 4.579-5 10-5 3.481 0 6.615.944 8.412 2.338.647.501 1.588.013 1.588-.806z" />
      </svg>
    ) : (
      <svg {...iconProps}>
        <line x1="24" x2="24" y1="8" y2="42" />
        <path d="M35 4c-6.1 0-11 2.7-11 6 0-3.3-4.9-6-11-6S2 6.7 2 10v34c0-3.3 4.9-6 11-6s11 2.7 11 6c0-3.3 4.9-6 11-6s11 2.7 11 6V10c0-3.3-4.9-6-11-6" />
      </svg>
    )
  }

  if (name === 'saved') {
    return (
      <svg {...iconProps}>
        <path d="M37 4h3a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h3" />
        <path d="m32 24-8-6-8 6V4h16z" />
      </svg>
    )
  }

  if (name === 'world') {
    return (
      <svg {...iconProps}>
        <circle cx="24" cy="24" r="22" />
        <path d="M11.39 5.971a10.382 10.382 0 0 1 2.453 3.634 4.739 4.739 0 0 1 1.574 1.895 5.221 5.221 0 0 1 .021 2.506S16.5 17.125 16 18s-2.625 1.438-2.625 1.438a4.1 4.1 0 0 1-2.688 1.938A2.517 2.517 0 0 0 8.312 24c0 1.688 1.688 4.438 1.688 4.438s1.75.856 2 1.481A9.523 9.523 0 0 1 12.335 32s1.665 2.938.727 4.625c-.3.538-1.688.938-1.688.938l-1.947 2.92" />
        <path d="M41.362 10.487a35.691 35.691 0 0 1-5.836 1.867s-2.713 3.02-4.5 2.77-3.594-2.25-3.594-2.25.13-3.686-.432-3.874-2.062.812-3 .062S23.6 6.2 23.6 6.2s-2.041-.636-2.291-1.324.743-2.219.932-2.806" />
        <path d="M40.125 25.438c.5 1.188-.939 4.22-2.125 4.812a8.054 8.054 0 0 0-3.08 2.456c-.438.688-1.013 3.524-2.45 4.087s-4.845 3.77-6.657 3.27-1.813-4.813-.563-6.751c.746-1.157-.125-3.688-.188-4.562s-2.687-2.5-2.688-3.375c0-1.375 3-5 3-5a10.673 10.673 0 0 1 3.208-.625 11.346 11.346 0 0 1 2.167 1.062 15.05 15.05 0 0 1 3.875.812l1.438 1.312s3.563 1.313 4.063 2.501" />
      </svg>
    )
  }

  if (name === 'share') {
    return (
      <svg {...iconProps}>
        <line x1="24" x2="24" y1="3" y2="31" />
        <polyline points="15 12 24 3 33 12" />
        <path d="M32 20h6a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4h6" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <path d="m41 45-17-10L7 45V6a4 4 0 0 1 4-4h26a4 4 0 0 1 4 4z" />
    </svg>
  )
}

export function StoicAppPreview() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark')
  const isDark = themeMode === 'dark'
  const accent = isDark ? '#70BFBF' : '#2E8282'

  return (
    <section
      className="relative mx-auto w-full max-w-[25rem]"
      aria-label="Stoic app preview"
    >
      <div className="absolute -inset-12 rounded-full bg-[#70BFBF]/20 blur-[90px] motion-reduce:hidden" />
      <div className="relative mb-4 flex justify-center">
        <div
          role="group"
          className="inline-flex rounded-full border border-white/10 bg-[#2B2B2B] p-1 shadow-lg"
          aria-label="Preview theme"
        >
          <button
            type="button"
            onClick={() => setThemeMode('light')}
            aria-pressed={!isDark}
            className={`flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] ${
              !isDark
                ? 'bg-[#F5F5F5] text-[#333333]'
                : 'text-[#A5A5A5] hover:text-[#F5F5F5]'
            }`}
          >
            <Sun aria-hidden="true" size={14} />
            Light
          </button>
          <button
            type="button"
            onClick={() => setThemeMode('dark')}
            aria-pressed={isDark}
            className={`flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] ${
              isDark
                ? 'bg-[#444444] text-[#F5F5F5]'
                : 'text-[#A5A5A5] hover:text-[#F5F5F5]'
            }`}
          >
            <Moon aria-hidden="true" size={14} />
            Dark
          </button>
        </div>
      </div>
      <div
        className={`relative overflow-hidden rounded-[2.8rem] border p-2 shadow-[0_32px_90px_rgba(0,0,0,0.55)] transition-colors duration-300 ${
          isDark
            ? 'border-white/15 bg-[#101010]'
            : 'border-[#D6D6D6] bg-[#E9E9E9]'
        }`}
      >
        <div
          className={`overflow-hidden rounded-[2.25rem] px-5 pb-4 pt-4 transition-colors duration-300 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-[#FFFFFF]'
          }`}
        >
          <div className="mx-auto mb-4 h-5 w-28 rounded-full bg-black" />
          <div
            className={`mb-6 flex items-center justify-between text-[0.625rem] font-medium ${
              isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'
            }`}
          >
            <span>22:22</span>
            <div className="flex items-center gap-1.5">
              <Signal aria-hidden="true" size={13} strokeWidth={2.2} />
              <Wifi aria-hidden="true" size={13} strokeWidth={2.2} />
              <BatteryMedium aria-hidden="true" size={15} strokeWidth={2.2} />
            </div>
          </div>

          <div className="mb-7 flex items-center justify-between">
            <p
              className={`text-xl font-bold tracking-[-0.04em] ${
                isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
              }`}
            >
              Stoic
            </p>
            <div
              className={`flex items-center gap-4 ${
                isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
              }`}
            >
              <StoicPreviewIcon name="flame" size={21} />
              <StoicPreviewIcon name="cog" size={21} />
            </div>
          </div>

          <div className="mb-6">
            <p
              className={`text-[1.55rem] font-bold leading-tight tracking-[-0.045em] ${
                isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
              }`}
            >
              Good evening.
            </p>
            <p
              className={`mt-2 text-sm ${
                isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'
              }`}
            >
              Begin with what is in your control.
            </p>
          </div>

          <div
            className={`rounded-3xl p-5 transition-colors duration-300 ${
              isDark
                ? 'bg-[#2B2B2B]'
                : 'bg-[#ECECEC] shadow-[0_12px_30px_rgba(0,0,0,0.06)]'
            }`}
          >
            <div
              className={`flex items-center justify-between text-[0.61rem] font-medium uppercase tracking-[0.15em] ${
                isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'
              }`}
            >
              <span style={{ color: accent }}>Today&apos;s insight</span>
              <span>Next in 5h 51m</span>
            </div>
            <p
              className={`mt-6 text-[1.1rem] font-semibold leading-7 tracking-[-0.025em] ${
                isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
              }`}
            >
              “The happiness of your life depends upon the quality of your
              thoughts.”
            </p>
            <p
              className="mt-5 text-right text-sm font-semibold"
              style={{ color: accent }}
            >
              — Marcus Aurelius
            </p>
          </div>

          <div
            className={`mx-auto my-4 flex w-fit items-center gap-6 rounded-2xl px-6 py-4 shadow-sm ${
              isDark ? 'bg-[#2B2B2B]' : 'bg-[#ECECEC]'
            } ${isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'}`}
          >
            <StoicPreviewIcon name="bookmark" size={20} />
            <StoicPreviewIcon name="share" size={20} />
          </div>

          <div
            className={`rounded-3xl p-5 transition-colors duration-300 ${
              isDark
                ? 'bg-[#2B2B2B]'
                : 'bg-[#ECECEC] shadow-[0_12px_30px_rgba(0,0,0,0.06)]'
            }`}
          >
            <p
              className="text-[0.65rem] font-medium uppercase tracking-[0.16em]"
              style={{ color: accent }}
            >
              Journal
            </p>
            <p
              className={`mt-5 text-base font-semibold tracking-[-0.025em] ${
                isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
              }`}
            >
              Today · 25th July
            </p>
            <p
              className={`mt-7 text-[0.61rem] font-medium uppercase tracking-[0.14em] ${
                isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'
              }`}
            >
              Today&apos;s prompt
            </p>
            <p
              className={`mt-3 text-[0.95rem] leading-6 ${
                isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
              }`}
            >
              Where did you notice yourself seeking control?
            </p>
            <div
              className={`mt-6 rounded-xl py-3 text-center text-sm font-semibold ${
                isDark
                  ? 'bg-[#70BFBF] text-[#1C1C1C]'
                  : 'bg-[#2E8282] text-white'
              }`}
            >
              Open Journal
            </div>
          </div>

          <div
            className={`relative mt-6 -mx-5 -mb-4 flex items-center justify-around border-t pb-4 pt-4 text-[0.58rem] ${
              isDark
                ? 'border-white/10 text-[#A5A5A5]'
                : 'border-[#DDDDDD] text-[#666666]'
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute left-0 -top-px h-0.5"
              style={{ backgroundColor: accent, width: '25%' }}
            />
            <div
              className="flex flex-col items-center gap-1"
              style={{ color: accent }}
            >
              <StoicPreviewIcon name="home" size={17} solid />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <StoicPreviewIcon name="book" size={17} />
              <span>Journal</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <StoicPreviewIcon name="saved" size={17} />
              <span>Saved</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <StoicPreviewIcon name="world" size={17} />
              <span>Discover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
