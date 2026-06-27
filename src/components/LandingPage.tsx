import { FaInstagram, FaYoutube } from 'react-icons/fa'
import logoLight from '../assets/logo/stoic-app-logo-transparent-white.png'
import logoDark from '../assets/logo/stoic-app-logo-transparent.png'
import { ScrollText, Bookmark, NotebookPen } from 'lucide-react'
import { useRef, useState } from 'react'
import { smoothScrollTo } from '../utils/smoothScrollTo'

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setInputError('')
    setError('')
    if (submitted) setSubmitted(false)
  }

  const handleHeroCtaClick = () => {
    if (!formRef.current) return

    const targetY = formRef.current.getBoundingClientRect().top + window.scrollY
    smoothScrollTo(targetY, 1500)

    window.setTimeout(
      () => emailInputRef.current?.focus({ preventScroll: true }),
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    } catch (err: unknown) {
      const errorCode =
        typeof err === 'object' && err !== null && 'code' in err
          ? (err as { code?: string }).code
          : undefined

      if (errorCode === 'permission-denied') {
        setError('This email may already be on the waitlist.')
      } else {
        setError('Something went wrong. Please try again.')
      }
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#FFFEFC] text-[#333333] dark:bg-[#1C1C1C] dark:text-[#F5F5F5] font-[Poppins] transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div>
          <img
            src={logoDark}
            alt=""
            aria-hidden="true"
            className="block dark:hidden h-20 md:h-28 lg:h-32 mb-6"
          />
          <img
            src={logoLight}
            alt=""
            aria-hidden="true"
            className="hidden dark:block h-20 md:h-28 lg:h-32 mb-6"
          />
        </div>
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          data-aos="fade-up"
        >
          Stoic
        </h1>
        <p
          className="text-lg md:text-xl text-[#666666] dark:text-[#A5A5A5] max-w-2xl mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          A calm space for daily reflection, private journalling, and Stoic
          wisdom worth returning to.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <button
            className="px-5 py-2.5 bg-[#70BFBF] text-white text-base font-medium rounded-lg shadow-sm transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#58AFAF] hover:shadow-[0_0_0_3px_rgba(112,191,191,0.12),0_10px_24px_rgba(112,191,191,0.24)] active:bg-[#4F9F9F] active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFEFC] motion-reduce:transition-none dark:focus-visible:ring-offset-[#1C1C1C] cursor-pointer"
            onClick={handleHeroCtaClick}
          >
            Join the waitlist
          </button>
        </div>
      </section>

      {/* Quote Preview Section */}
      <section className="bg-[#F7EFD8] dark:bg-[#EFD6A3] px-6 py-16 transition-colors duration-300">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <blockquote className="italic text-xl md:text-2xl text-[#333333] dark:text-[#1C1C1C]">
            "You have power over your mind – not outside events. Realise this,
            and you will find strength."
          </blockquote>
          <cite
            className="block mt-4 text-[#666666] dark:text-[#3A3327]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            – Marcus Aurelius
          </cite>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 py-24 bg-[#F7F7F4] dark:bg-[#2B2B2B] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-[#A5A5A5] text-center mb-2">
            Features
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Why Stoic?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Daily reflection',
                description:
                  'Begin each day with a short Stoic quote and reflection.',
                icon: (
                  <ScrollText
                    aria-hidden="true"
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
              {
                title: 'Saved wisdom',
                description:
                  'Save the quotes that resonate and return to them when needed.',
                icon: (
                  <Bookmark
                    aria-hidden="true"
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
              {
                title: 'Private journalling',
                description:
                  'Write privately, reflect clearly, and build perspective over time.',
                icon: (
                  <NotebookPen
                    aria-hidden="true"
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
            ].map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="flex transform-gpu flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:md:hover:-translate-y-1.5 motion-safe:md:hover:shadow-[0_22px_55px_rgba(0,0,0,0.13)] motion-reduce:transition-none dark:bg-[#1C1C1C] dark:motion-safe:md:hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)]"
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-offset="120"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[#666666] dark:text-[#A5A5A5]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 pt-16 pb-8 md:pb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Make reflection part of your day
        </h2>
        <p className="text-[#666666] dark:text-[#A5A5A5] mb-6">
          Join the waitlist for early access.
        </p>

        <form
          ref={formRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={handleSubmit}
          noValidate
          aria-busy={isSubmitting}
        >
          <input
            ref={emailInputRef}
            aria-label="Email address"
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
            className="px-4 py-2 rounded-lg bg-[#FAFAF8] dark:bg-[#2A2A2A] border border-[#DADAD4] dark:border-[#444444] w-full max-w-sm focus:outline-none focus:border-[#70BFBF] focus:ring-2 focus:ring-[#70BFBF]/25 disabled:cursor-not-allowed disabled:opacity-70 transition-[border-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          />
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className="px-5 py-2.5 bg-[#70BFBF] text-white text-base font-medium rounded-lg shadow-sm transition-[background-color,box-shadow,opacity] duration-300 ease-out hover:bg-[#58AFAF] hover:shadow-[0_0_0_3px_rgba(112,191,191,0.12),0_10px_24px_rgba(112,191,191,0.24)] active:bg-[#4F9F9F] active:shadow-sm disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-[#70BFBF] disabled:hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFEFC] motion-reduce:transition-none dark:focus-visible:ring-offset-[#1C1C1C] cursor-pointer"
          >
            {isSubmitting
              ? 'Joining...'
              : submitted
                ? 'Submitted'
                : 'Notify me'}
          </button>
        </form>

        <div
          id="email-messages"
          className="min-h-[1.25rem] mt-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {inputError && !submitted && (
            <p className="text-sm text-center text-[#70BFBF]" role="alert">
              {inputError}
            </p>
          )}
          {error && (
            <p
              className="text-sm text-center text-[#FF4C4C] dark:text-[#FF6B6B]"
              role="alert"
            >
              {error}
            </p>
          )}
          {submitted && !error && (
            <p
              className="text-sm text-center text-[#4CAF6A] dark:text-[#B2E1C2]"
              role="status"
            >
              You're on the waitlist.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-6 pb-10 md:pt-8 md:pb-12 text-center text-sm text-[#A5A5A5] dark:text-[#666666] border-t border-black/10 dark:border-white/10">
        <p className="mb-4">
          © {new Date().getFullYear()} Stoic App by{' '}
          <a
            href="https://zenshuii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit underline underline-offset-4 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#70BFBF]"
            aria-label="Zenshuii website"
          >
            Zenshuii
          </a>
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/zenshuii/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Zenshuii on Instagram"
          >
            <FaInstagram
              aria-hidden="true"
              focusable="false"
              className="w-5 h-5 text-[#A5A5A5] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#70BFBF] dark:text-[#666666]"
            />
          </a>
          <a
            href="https://www.youtube.com/@zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Zenshuii on YouTube"
          >
            <FaYoutube
              aria-hidden="true"
              focusable="false"
              className="w-5 h-5 text-[#A5A5A5] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#70BFBF] dark:text-[#666666]"
            />
          </a>
        </div>
      </footer>
    </main>
  )
}
