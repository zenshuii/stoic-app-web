import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { ArrowRight, BookOpen, Bookmark, Check, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import logoLight from '../assets/logo/stoic-app-logo.svg'
import { smoothScrollTo } from '../utils/smoothScrollTo'

import { StoicAppPreview } from './StoicAppPreview'

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

export default function LandingPage() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [inputError, setInputError] = useState('')

  const formRef = useRef<HTMLFormElement | null>(null)
  const emailInputRef = useRef<HTMLInputElement | null>(null)

  const hasEmailError = !!inputError || !!error
  const hasEmailMessage = hasEmailError || (submitted && !error)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setInputError('')
    setError('')
    if (submitted) setSubmitted(false)
  }

  const handleHeroCtaClick = () => {
    if (!formRef.current) return

    const targetY = formRef.current.getBoundingClientRect().top + window.scrollY
    void smoothScrollTo(targetY - 96).then(() =>
      emailInputRef.current?.focus({ preventScroll: true })
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
        setError(
          'Sign-ups are temporarily unavailable. Please try again later.'
        )
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
      <section className="hero-surface relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-20rem] hidden h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#70BFBF]/10 blur-[110px] sm:block" />
          <div className="absolute bottom-[-24rem] right-[-10rem] hidden h-[34rem] w-[34rem] rounded-full bg-[#2E8282]/15 blur-[100px] sm:block" />
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logoLight}
              alt=""
              aria-hidden="true"
              width="36"
              height="36"
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
          <div className="hero-enter max-w-2xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
              Daily reflection
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-[#F5F5F5] sm:text-6xl lg:text-7xl">
              Make room for a clearer mind.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#A5A5A5] sm:text-xl">
              Stoic brings daily perspective, personal journalling, and timeless
              wisdom together in a quieter practice.
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
                A calmer, more intentional daily habit.
              </p>
            </div>
          </div>

          <div className="hero-enter hero-enter-preview relative">
            <StoicAppPreview />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
        <div data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
            A daily pause
          </p>
          <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            Less noise. More perspective.
          </h2>
        </div>
        <blockquote
          className="border-l border-[#70BFBF] pl-7 sm:pl-10"
          data-reveal
          data-reveal-delay="100"
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
            <div data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#70BFBF]">
                The practice
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A home for what helps.
              </h2>
            </div>
            <p
              className="max-w-md text-base leading-7 text-[#A5A5A5]"
              data-reveal
              data-reveal-delay="80"
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
                  data-reveal
                  data-reveal-delay={index * 100}
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="rounded-[2rem] border border-[#70BFBF]/30 bg-[#222222] px-6 py-12 text-center shadow-[0_14px_32px_rgba(0,0,0,0.16)] sm:px-12 sm:shadow-[0_20px_45px_rgba(0,0,0,0.22)] lg:px-20 lg:py-16"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 100%, rgba(112, 191, 191, 0.1), transparent 62%)',
          }}
        >
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
            inert={!isHydrated}
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
            ©{' '}
            <span className="inline-block w-[4ch] tabular-nums">
              {isHydrated ? new Date().getFullYear() : null}
            </span>{' '}
            Stoic App by{' '}
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
