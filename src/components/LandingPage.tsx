import { FaInstagram, FaYoutube } from 'react-icons/fa'
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  Flame,
  Heart,
  Quote,
  Sparkles,
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
      'Make space to untangle a thought, notice a feeling, and keep moving.',
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

function AppPreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-[25rem]"
      aria-label="Preview of the Stoic app"
      role="img"
    >
      <div className="absolute -inset-12 rounded-full bg-[#70BFBF]/20 blur-[90px] motion-reduce:hidden" />
      <div className="relative overflow-hidden rounded-[2.8rem] border border-white/15 bg-[#101010] p-2 shadow-[0_32px_90px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#1C1C1C] px-5 pb-4 pt-4">
          <div className="mx-auto mb-4 h-5 w-28 rounded-full bg-black" />
          <div className="mb-7 flex items-center justify-between text-[0.625rem] font-medium text-[#A5A5A5]">
            <span>9:00</span>
            <span className="tracking-[0.18em]">STOIC</span>
            <span>•••</span>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#70BFBF]">
                Daily reflection
              </p>
              <p className="mt-1 text-lg font-semibold text-[#F5F5F5]">
                Good evening
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#70BFBF]/40 bg-[#70BFBF]/10 text-[#70BFBF]">
              <Flame aria-hidden="true" size={17} strokeWidth={1.8} />
            </div>
          </div>

          <div className="mb-4 rounded-3xl border border-white/10 bg-[#2B2B2B] p-5">
            <Quote
              aria-hidden="true"
              size={18}
              className="mb-3 text-[#70BFBF]"
            />
            <p className="text-[1.06rem] font-medium leading-7 text-[#F5F5F5]">
              “You have power over your mind — not outside events.”
            </p>
            <p className="mt-3 text-xs text-[#A5A5A5]">Marcus Aurelius</p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs text-[#A5A5A5]">
                Today&apos;s thought
              </span>
              <Bookmark
                aria-hidden="true"
                size={16}
                className="text-[#70BFBF]"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-[#70BFBF]/35 bg-[#70BFBF]/10 p-4">
            <div className="mb-3 flex items-center gap-2 text-[#70BFBF]">
              <BookOpen aria-hidden="true" size={15} />
              <span className="text-xs font-medium">Journal</span>
            </div>
            <p className="text-sm leading-6 text-[#F5F5F5]">
              What is within your control today?
            </p>
            <div className="mt-4 h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>

          <div className="mt-5 flex items-center justify-around border-t border-white/10 pt-4 text-[#A5A5A5]">
            <BookOpen aria-hidden="true" size={17} className="text-[#70BFBF]" />
            <Bookmark aria-hidden="true" size={17} />
            <Heart aria-hidden="true" size={17} />
          </div>
        </div>
      </div>
      <div className="absolute -left-10 bottom-14 hidden rounded-2xl border border-white/10 bg-[#2B2B2B]/95 px-4 py-3 shadow-xl backdrop-blur md:block">
        <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#70BFBF]">
          Your practice
        </p>
        <p className="mt-1 text-sm font-medium text-[#F5F5F5]">
          One day at a time
        </p>
      </div>
    </div>
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
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Stoic home"
          >
            <img
              src={logoLight}
              alt=""
              aria-hidden="true"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-[-0.03em]">
              Stoic
            </span>
          </a>
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
            “You have power over your mind — not outside events. Realise this,
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
