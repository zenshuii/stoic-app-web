import { FaInstagram, FaYoutube } from 'react-icons/fa'
import {
  ArrowRight,
  BatteryMedium,
  BookOpen,
  Bookmark,
  Check,
  Moon,
  Signal,
  Sparkles,
  Sun,
  Wifi,
} from 'lucide-react'
import { useRef, useState } from 'react'

import logoLight from '../assets/logo/stoic-app-logo-transparent-white.png'
import { smoothScrollTo } from '../utils/smoothScrollTo'

const features = [
  {
    number: '01',
    title: 'Begin with perspective',
    description:
      'A considered Stoic thought gives each day a calmer starting point.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Write for yourself',
    description:
      'A space to reflect, capture what matters, and make sense of the days as they unfold.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Keep what matters',
    description:
      'Return to the quotes and reflections that continue to meet you where you are.',
    icon: Bookmark,
  },
]

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

function AppPreview() {
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
            <span>18:08</span>
            <div className="flex items-center gap-1.5">
              <Signal aria-hidden="true" size={13} strokeWidth={2.2} />
              <Wifi aria-hidden="true" size={13} strokeWidth={2.2} />
              <BatteryMedium aria-hidden="true" size={15} strokeWidth={2.2} />
            </div>
          </div>

          <div className="mb-7 flex items-center justify-between">
            <div>
              <p
                className={`text-xl font-bold tracking-[-0.04em] ${
                  isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'
                }`}
              >
                Stoic
              </p>
            </div>
            <div
              className={`flex items-center gap-4 ${isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'}`}
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
              className={`mt-2 text-sm ${isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'}`}
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
              className={`flex items-center justify-between text-[0.61rem] font-medium uppercase tracking-[0.15em] ${isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'}`}
            >
              <span style={{ color: accent }}>Today&apos;s insight</span>
              <span>Next in 5h 51m</span>
            </div>
            <p
              className={`mt-6 text-[1.1rem] font-semibold leading-7 tracking-[-0.025em] ${isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'}`}
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
              className={`mt-5 text-base font-semibold tracking-[-0.025em] ${isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'}`}
            >
              Today · Tuesday, 25th August
            </p>
            <p
              className={`mt-7 text-[0.61rem] font-medium uppercase tracking-[0.14em] ${isDark ? 'text-[#A5A5A5]' : 'text-[#666666]'}`}
            >
              Today&apos;s prompt
            </p>
            <p
              className={`mt-3 text-[0.95rem] leading-6 ${isDark ? 'text-[#F5F5F5]' : 'text-[#333333]'}`}
            >
              Where did you notice yourself seeking control?
            </p>
            <div
              className={`mt-6 rounded-xl py-3 text-center text-sm font-semibold ${isDark ? 'bg-[#70BFBF] text-[#1C1C1C]' : 'bg-[#2E8282] text-white'}`}
            >
              Open Journal
            </div>
          </div>

          <div
            className={`relative mt-6 -mx-5 -mb-4 flex items-center justify-around border-t pb-4 pt-4 text-[0.58rem] ${isDark ? 'border-white/10 text-[#A5A5A5]' : 'border-[#DDDDDD] text-[#666666]'}`}
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

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [inputError, setInputError] = useState('')

  const formRef = useRef<HTMLFormElement | null>(null)
  const emailInputRef = useRef<HTMLInputElement | null>(null)

  const hasEmailError = !!inputError || !!error
  const hasEmailMessage = hasEmailError || (submitted && !error)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setInputError('')
    setError('')
    if (submitted) setSubmitted(false)
  }

  const handleHeroCtaClick = () => {
    if (!formRef.current) return

    const targetY = formRef.current.getBoundingClientRect().top + window.scrollY
    smoothScrollTo(targetY - 96, 1000)

    window.setTimeout(
      () => emailInputRef.current?.focus({ preventScroll: true }),
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 700
    )
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (isSubmitting) return

    const trimmedEmail = email.trim()
    setError('')
    setInputError('')
    setSubmitted(false)

    if (!trimmedEmail) {
      setInputError('Enter an email address to join the waitlist.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setInputError('Enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    try {
      const { submitWaitlistEmail } = await import('../lib/waitlist')
      await submitWaitlistEmail(trimmedEmail)
      setSubmitted(true)
      setEmail('')
    } catch (submitError: unknown) {
      const errorCode =
        typeof submitError === 'object' &&
        submitError !== null &&
        'code' in submitError
          ? (submitError as { code?: string }).code
          : undefined

      if (errorCode === 'permission-denied') {
        setError('This email may already be on the waitlist.')
      } else {
        setError('Something went wrong. Please try again.')
      }
      console.error(submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="overflow-hidden bg-[#1C1C1C] text-[#F5F5F5]">
      <section className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-20rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#70BFBF]/10 blur-[110px]" />
          <div className="absolute bottom-[-24rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#2E8282]/15 blur-[100px]" />
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logoLight}
              alt=""
              aria-hidden="true"
              className="h-9 w-9"
            />
            <span className="text-xl font-semibold tracking-[-0.03em]">
              Stoic
            </span>
          </div>
          <button
            type="button"
            onClick={handleHeroCtaClick}
            className="rounded-full border border-[#70BFBF]/45 bg-[#70BFBF]/10 px-4 py-2 text-sm font-medium text-[#F5F5F5] transition hover:border-[#70BFBF] hover:bg-[#70BFBF] hover:text-[#1C1C1C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1C]"
          >
            Join the waitlist
          </button>
        </header>

        <div
          id="top"
          className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-28 lg:pt-24"
        >
          <div className="max-w-2xl" data-aos="fade-up">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
              Daily reflection
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-[#F5F5F5] sm:text-6xl lg:text-7xl">
              Make room for a clearer mind.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#A5A5A5] sm:text-xl">
              Stoic brings daily perspective, personal journalling, and the
              wisdom worth returning to into one quieter practice.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={handleHeroCtaClick}
                className="group inline-flex items-center gap-2 rounded-full bg-[#70BFBF] px-6 py-3.5 text-base font-semibold text-[#1C1C1C] transition hover:bg-[#8bcece] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1C]"
              >
                Join the waitlist
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <p className="text-sm text-[#A5A5A5]">
                A slower, more intentional daily habit.
              </p>
            </div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="120">
            <AppPreview />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
        <div data-aos="fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
            A daily pause
          </p>
          <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            Less noise. More perspective.
          </h2>
        </div>
        <blockquote
          className="border-l border-[#70BFBF] pl-7 sm:pl-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="max-w-3xl text-2xl font-medium leading-[1.35] tracking-[-0.03em] text-[#F5F5F5] sm:text-3xl lg:text-4xl">
            “You have power over your mind – not outside events. Realise this,
            and you will find strength.”
          </p>
          <cite className="mt-6 block text-sm not-italic text-[#A5A5A5]">
            Marcus Aurelius
          </cite>
        </blockquote>
      </section>

      <section className="border-y border-white/10 bg-[#2B2B2B]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div data-aos="fade-up">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
                The practice
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A home for what helps.
              </h2>
            </div>
            <p
              className="max-w-md text-base leading-7 text-[#A5A5A5]"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Small rituals become more meaningful when they are easy to return
              to.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {features.map(
              ({ number, title, description, icon: Icon }, index) => (
                <article
                  key={number}
                  className="group bg-[#2B2B2B] p-7 transition-colors hover:bg-[#363636] sm:p-9"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-[#70BFBF]">
                      {number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#A5A5A5] transition-colors group-hover:text-[#70BFBF]"
                    />
                  </div>
                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.025em] text-[#F5F5F5]">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-xs leading-7 text-[#A5A5A5]">
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-x-6 inset-y-12 -z-10 rounded-[2rem] bg-[#70BFBF]/10 blur-3xl lg:inset-x-8" />
        <div className="rounded-[2rem] border border-[#70BFBF]/30 bg-[#222222] px-6 py-12 text-center shadow-2xl sm:px-12 lg:px-20 lg:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
            Early access
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#F5F5F5] sm:text-5xl">
            Make reflection part of your day.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#A5A5A5]">
            Join the waitlist and be first to know when Stoic is ready.
          </p>

          <form
            ref={formRef}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
            noValidate
            aria-busy={isSubmitting}
          >
            <label className="sr-only" htmlFor="waitlist-email">
              Email address
            </label>
            <input
              ref={emailInputRef}
              id="waitlist-email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="you@example.com"
              autoComplete="email"
              autoCapitalize="none"
              inputMode="email"
              enterKeyHint="send"
              spellCheck={false}
              required
              disabled={isSubmitting}
              aria-invalid={hasEmailError ? true : undefined}
              aria-describedby={hasEmailMessage ? 'email-messages' : undefined}
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-[#1C1C1C] px-5 py-3.5 text-[#F5F5F5] outline-none placeholder:text-[#777] focus:border-[#70BFBF] focus:ring-2 focus:ring-[#70BFBF]/30 disabled:cursor-not-allowed disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#70BFBF] px-6 py-3.5 font-semibold text-[#1C1C1C] transition hover:bg-[#8bcece] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
            >
              {isSubmitting ? (
                'Joining...'
              ) : submitted ? (
                <>
                  <Check aria-hidden="true" size={17} /> Joined
                </>
              ) : (
                'Notify me'
              )}
            </button>
          </form>

          <div
            id="email-messages"
            className="mt-3 min-h-5"
            aria-live="polite"
            aria-atomic="true"
          >
            {inputError && !submitted && (
              <p className="text-sm text-[#E3B341]" role="alert">
                {inputError}
              </p>
            )}
            {error && (
              <p className="text-sm text-[#EC6F6F]" role="alert">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="text-sm text-[#72CEA7]" role="status">
                You&apos;re on the waitlist.
              </p>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-[#777] sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Stoic App by{' '}
            <a
              href="https://zenshuii.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#70BFBF]"
            >
              Zenshuii
            </a>
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/zenshuii/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#70BFBF]"
              aria-label="Zenshuii on Instagram"
            >
              <FaInstagram
                aria-hidden="true"
                focusable="false"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://www.youtube.com/@zenshuiistudios"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#70BFBF]"
              aria-label="Zenshuii on YouTube"
            >
              <FaYoutube
                aria-hidden="true"
                focusable="false"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
