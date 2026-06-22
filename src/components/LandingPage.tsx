import { FaInstagram, FaYoutube } from 'react-icons/fa'
import logoLight from '../assets/logo/stoic-app-logo-transparent-white.png'
import logoDark from '../assets/logo/stoic-app-logo-transparent.png'
import { ScrollText, Bookmark, NotebookPen } from 'lucide-react'
import { useRef, useState } from 'react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { smoothScrollTo } from '../utils/smoothScrollTo'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [showInputError, setShowInputError] = useState(false)

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email.trim()) {
      setShowInputError(true)
      return
    } else {
      setShowInputError(false)
    }
    try {
      const lowerEmail = email.toLowerCase()
      await setDoc(doc(db, 'waitlistSignups', lowerEmail), {
        email: lowerEmail,
        createdAt: serverTimestamp(),
        source: 'landing-page',
      })
      setSubmitted(true)
      setEmail('')
    } catch (err: unknown) {
      if (
        typeof err === 'object' &&
        err !== null &&
        'code' in err &&
        (err as { code?: string }).code === 'permission-denied'
      ) {
        setError('This email is already registered.')
      } else {
        setError('Something went wrong. Please try again.')
      }
      console.error(err)
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#333333] dark:bg-[#1C1C1C] dark:text-[#F5F5F5] font-[Poppins] transition-colors">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-32"
        data-aos="fade-up"
      >
        <div>
          <img
            src={logoDark}
            alt="Stoic App logo dark"
            className="block dark:hidden h-20 md:h-28 lg:h-32 mb-6"
            data-aos="zoom-in"
          />
          <img
            src={logoLight}
            alt="Stoic App logo light"
            className="hidden dark:block h-20 md:h-28 lg:h-32 mb-6"
            data-aos="zoom-in"
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
          data-aos-delay="200"
        >
          A calm space for daily reflection, private journalling, and Stoic
          wisdom worth returning to.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <button
            aria-label="Join the Waitlist"
            className="px-5 py-2.5 bg-[#70BFBF] text-white text-base font-medium rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] active:shadow-inner transition-transform duration-200 ease-in-out focus:outline-none focus-visible:ring-0 cursor-pointer"
            onClick={() => {
              if (formRef.current) {
                const targetY =
                  formRef.current.getBoundingClientRect().top + window.scrollY
                smoothScrollTo(targetY, 1500)
                setShowInputError(!email.trim())
              }
            }}
          >
            Join the waitlist
          </button>
        </div>
      </section>

      {/* Quote Preview Section */}
      <section className="bg-[#FAF3D4] dark:bg-[#FFDFA5] px-6 py-16">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <blockquote className="italic text-xl md:text-2xl text-[#333333] dark:text-[#1C1C1C]">
            "You have power over your mind – not outside events. Realise this,
            and you will find strength."
          </blockquote>
          <cite
            className="block mt-4 text-[#666666] dark:text-[#2B2B2B]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            – Marcus Aurelius
          </cite>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 py-24 bg-[#F5F5F5] dark:bg-[#2B2B2B]">
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
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
            ].map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset="120"
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {icon}
                </div>
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
        >
          <input
            aria-label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            aria-invalid={showInputError || !!error ? true : undefined}
            aria-describedby={
              showInputError || !!error || (submitted && !error)
                ? 'email-messages'
                : undefined
            }
            className="px-4 py-2 rounded-lg bg-[#F9F9F9] dark:bg-[#2A2A2A] border border-[#DDDDDD] dark:border-[#444444] w-full max-w-sm focus:outline-none"
          />
          <button
            aria-label="Notify me"
            type="submit"
            className="px-5 py-2.5 bg-[#70BFBF] text-white text-base font-medium rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] active:shadow-inner transition-transform duration-200 ease-in-out focus:outline-none focus-visible:ring-0 cursor-pointer"
          >
            {submitted ? 'Submitted' : 'Notify me'}
          </button>
        </form>

        <div
          id="email-messages"
          className="min-h-[1.25rem] mt-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {showInputError && !submitted && (
            <p className="text-sm text-center text-[#70BFBF]" role="alert">
              Enter an email address to join the waitlist.
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
              className="text-sm text-center text-[#4CAF6A] dark:text-[#B2E1C2] animate-fade-in-out"
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
            className="text-inherit underline underline-offset-4 hover:text-[#70BFBF] transition-colors"
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
            className="transition-transform duration-200 hover:scale-110"
            aria-label="Zenshuii on Instagram"
          >
            <FaInstagram className="w-5 h-5 text-[#A5A5A5] dark:text-[#666666] hover:text-[#70BFBF] transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
            aria-label="Zenshuii on YouTube"
          >
            <FaYoutube className="w-5 h-5 text-[#A5A5A5] dark:text-[#666666] hover:text-[#70BFBF] transition-colors" />
          </a>
        </div>
      </footer>
    </main>
  )
}
