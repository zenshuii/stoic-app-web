import logoDark from '../assets/logo/stoic-app-logo-transparent.png'
import logoLight from '../assets/logo/stoic-app-logo-transparent-white.png'

type LegalPageKind = 'privacy' | 'terms'

const effectiveDate = '29 July 2026'
const contactEmail = 'support@stoic-app.com'

const PageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => (
  <main className="min-h-screen bg-[#FFFEFC] px-6 py-12 text-[#333333] dark:bg-[#1C1C1C] dark:text-[#F5F5F5] md:py-20">
    <div className="mx-auto max-w-3xl">
      <a
        href="/"
        className="inline-flex items-center gap-3 text-sm font-medium text-[#666666] transition-colors hover:text-[#70BFBF] dark:text-[#A5A5A5]"
      >
        <img
          src={logoDark}
          alt=""
          aria-hidden="true"
          className="h-8 w-auto dark:hidden"
        />
        <img
          src={logoLight}
          alt=""
          aria-hidden="true"
          className="hidden h-8 w-auto dark:block"
        />
        Back to Stoic
      </a>
      <article className="mt-12 rounded-2xl bg-white px-6 py-8 shadow-sm dark:bg-[#242424] sm:px-10 sm:py-12">
        <p className="text-sm font-medium uppercase tracking-wide text-[#70BFBF]">
          Stoic App by Zenshuii
        </p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-[#666666] dark:text-[#A5A5A5]">
          Effective date: {effectiveDate}
        </p>
        <div className="mt-10 space-y-8 text-[15px] leading-7 text-[#555555] dark:text-[#C9C9C9]">
          {children}
        </div>
      </article>
      <footer className="flex justify-center gap-5 pt-8 text-sm text-[#777777] dark:text-[#A5A5A5]">
        <a className="hover:text-[#70BFBF]" href="/privacy">
          Privacy
        </a>
        <a className="hover:text-[#70BFBF]" href="/terms">
          Terms
        </a>
      </footer>
    </div>
  </main>
)

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => (
  <section>
    <h2 className="text-xl font-semibold text-[#333333] dark:text-[#F5F5F5]">
      {title}
    </h2>
    <div className="mt-3 space-y-3">{children}</div>
  </section>
)

const PrivacyPolicy = () => (
  <PageLayout title="Privacy Policy">
    <p>
      Stoic is a daily reflection and journalling app. This policy explains how
      Stoic App by Zenshuii collects and uses personal information when you use
      our website or app.
    </p>

    <Section title="Information we collect">
      <ul className="list-disc space-y-2 pl-5">
        <li>Waitlist email addresses submitted through this website.</li>
        <li>
          Account information, such as your email address and account identifier,
          when you create or sign in to an account.
        </li>
        <li>
          Journal entries, prompts, mood selections, saved quotes, and app
          preferences that you choose to store in Stoic.
        </li>
        <li>
          Basic technical and usage information needed to operate, secure, and
          improve the service.
        </li>
      </ul>
    </Section>

    <Section title="How we use information">
      <p>
        We use your information to provide the app, maintain your account and
        journal, send the waitlist updates you request, keep the service secure,
        and improve Stoic. We do not sell your personal information or use your
        journal entries for advertising.
      </p>
    </Section>

    <Section title="Service providers">
      <p>
        Stoic uses Firebase, provided by Google, to operate features including
        authentication and cloud data storage. These providers process data on
        our behalf to deliver the service and may process data in countries other
        than your own. If you choose Google sign-in, we receive the basic account
        information that Google provides for authentication.
      </p>
    </Section>

    <Section title="Retention and security">
      <p>
        We keep personal information only for as long as needed to provide Stoic,
        meet legal obligations, resolve disputes, and enforce agreements. We use
        reasonable technical and organisational measures to protect information,
        but no online service can guarantee absolute security.
      </p>
      <p>
        Journal entries are private to your Stoic account and are not visible to
        other users. Authorised Stoic personnel may access journal data only when
        necessary to operate, secure, or support the service.
      </p>
    </Section>

    <Section title="Your choices and rights">
      <p>
        You can ask to access, correct, delete, or receive a copy of your personal
        information, or object to certain processing, by contacting us. You can
        unsubscribe from waitlist messages at any time. Depending on where you
        live, you may also have the right to complain to your local data
        protection authority.
      </p>
    </Section>

    <Section title="Children and changes">
      <p>
        Stoic is not intended for children under 13. We may update this policy as
        the service changes; the effective date above shows when it was last
        revised.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        For privacy questions or requests, email{' '}
        <a
          className="text-[#4D9E9E] underline underline-offset-4"
          href={`mailto:${contactEmail}`}
        >
          {contactEmail}
        </a>
        .
      </p>
    </Section>
  </PageLayout>
)

const TermsOfService = () => (
  <PageLayout title="Terms of Service">
    <p>
      These Terms govern your use of Stoic, including the website and mobile app.
      By using Stoic, you agree to these Terms.
    </p>

    <Section title="Using Stoic">
      <p>
        You may use Stoic for your personal, non-commercial reflection and
        journalling. You are responsible for keeping your account credentials
        secure and for the information you add to the service. Do not use Stoic
        unlawfully, interfere with its operation, or attempt to access another
        person&apos;s account or data.
      </p>
    </Section>

    <Section title="Your content">
      <p>
        You retain ownership of the journal entries and other content you submit.
        You give us permission to store and process that content only as needed to
        provide and maintain Stoic. Please avoid entering information that you do
        not have the right to share.
      </p>
    </Section>

    <Section title="Wellbeing disclaimer">
      <p>
        Stoic provides reflective prompts and educational content. It is not a
        medical, mental-health, legal, or financial service, and it is not a
        substitute for professional advice or emergency support.
      </p>
    </Section>

    <Section title="Availability and changes">
      <p>
        We may change, suspend, or discontinue parts of Stoic as the service
        evolves. We aim to keep it available and reliable, but do not guarantee
        uninterrupted or error-free operation.
      </p>
    </Section>

    <Section title="Liability">
      <p>
        To the extent permitted by law, Stoic App by Zenshuii is not liable for
        indirect, incidental, special, consequential, or punitive damages arising
        from your use of Stoic. Nothing in these Terms limits liability where it
        cannot lawfully be limited.
      </p>
    </Section>

    <Section title="Changes and contact">
      <p>
        We may update these Terms from time to time. Continued use after an update
        means you accept the revised Terms. Questions about these Terms can be
        sent to{' '}
        <a
          className="text-[#4D9E9E] underline underline-offset-4"
          href={`mailto:${contactEmail}`}
        >
          {contactEmail}
        </a>
        .
      </p>
    </Section>
  </PageLayout>
)

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  return kind === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />
}
