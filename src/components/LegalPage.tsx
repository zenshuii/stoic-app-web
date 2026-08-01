import logoDark from '../assets/logo/stoic-app-logo-transparent.png'
import logoLight from '../assets/logo/stoic-app-logo-transparent-white.png'

type LegalPageKind = 'privacy' | 'terms' | 'delete-account'

const effectiveDate = '1 August 2026'
const contactEmail = 'support@stoic-app.com'
const controllerName = 'Simone Melidoni, trading as Zenshuii'
const deletionRequestHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'Stoic account deletion request'
)}`

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
      <footer className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-8 text-sm text-[#777777] dark:text-[#A5A5A5]">
        <a className="hover:text-[#70BFBF]" href="/privacy">
          Privacy
        </a>
        <a className="hover:text-[#70BFBF]" href="/terms">
          Terms
        </a>
        <a className="hover:text-[#70BFBF]" href="/delete-account">
          Delete account
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

const LegalLink = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => (
  <a
    className="text-[#4D9E9E] underline underline-offset-4"
    href={href}
  >
    {children}
  </a>
)

const PrivacyPolicy = () => (
  <PageLayout title="Privacy Policy">
    <p>
      Stoic is a reflection, journalling, and Stoic-wisdom app. This policy
      explains how personal information is handled when you use the Stoic
      mobile app, visit this website, join the waitlist, or contact us.
    </p>

    <Section title="Who is responsible for your information">
      <p>
        The data controller is {controllerName}, based in the United Kingdom
        (&quot;Zenshuii&quot;, &quot;Stoic&quot;, &quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;). Privacy questions and requests can be sent to{' '}
        <LegalLink href={`mailto:${contactEmail}`}>{contactEmail}</LegalLink>.
      </p>
    </Section>

    <Section title="Information we collect">
      <p>We collect or process the following information:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Waitlist information:</strong> the email address you submit,
          submission time, and the fact that it came from the Stoic landing
          page.
        </li>
        <li>
          <strong>Account and profile information:</strong> your email address,
          Firebase account identifier, optional display name, email-verification
          status, and account creation and update times. Your password is
          handled by Firebase Authentication; we cannot view it and do not store
          it in the Stoic database.
        </li>
        <li>
          <strong>Journal information:</strong> journal text, the prompt shown
          or saved with an entry, your optional mood selection, entry date, and
          creation and update times.
        </li>
        <li>
          <strong>Saved content:</strong> identifiers for quotes you bookmark
          and the time they were bookmarked.
        </li>
        <li>
          <strong>App settings stored on your device:</strong> theme, reminder
          preferences and times, quote-notification preferences, saved-quote
          sort order, a cached daily quote, and temporary state needed to finish
          an email change. These settings are not stored in your cloud profile.
        </li>
        <li>
          <strong>App analytics and technical information:</strong> Firebase
          Analytics may automatically collect an app-instance identifier,
          Android advertising identifier or Apple vendor identifier when
          available, masked IP address and approximate location derived from it,
          device and operating-system information, app version, sessions, screen
          views, and app lifecycle events. We do not attach your journal text or
          mood selections to analytics events.
        </li>
        <li>
          <strong>Website technical information:</strong> our hosting and
          database providers may process IP address, browser and device type,
          requested page, referral information, and request date and time to
          deliver and protect the website. Stoic does not currently use web
          advertising cookies or a web analytics service.
        </li>
        <li>
          <strong>Support information:</strong> your email address and anything
          you include when you contact us. Please never send us your password.
        </li>
      </ul>
    </Section>

    <Section title="How we collect information">
      <p>
        We receive information directly when you register, update your profile,
        write a journal entry, choose a mood, save a quote, join the waitlist,
        or contact us. The app and our providers also collect the technical
        information described above automatically when the service is used.
      </p>
      <p>
        Notification permission is requested through your device. Journal and
        daily-quote reminders are scheduled locally on your device; Stoic does
        not currently collect a remote push-notification token. When you share a
        quote, the app creates a temporary quote image or text and opens your
        device&apos;s share sheet. The destination you choose then handles that
        content under its own privacy terms; Stoic does not receive details of
        where you shared it.
      </p>
    </Section>

    <Section title="Why we use information and our lawful bases">
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Provide the service and perform our contract:</strong> create
          and secure your account, authenticate you, sync your profile, store and
          retrieve journals and bookmarks, and provide account recovery and
          account-management features.
        </li>
        <li>
          <strong>Your consent:</strong> add you to the waitlist and send the
          updates you requested. You can withdraw this consent at any time by
          contacting us. Where applicable law requires consent for app analytics
          or device identifiers, consent is the applicable basis.
        </li>
        <li>
          <strong>Our legitimate interests:</strong> protect Stoic from misuse,
          diagnose service problems, understand aggregate app use, and improve
          reliability and usability. Our interest is operating a safe and useful
          service, and we limit this processing to what is proportionate.
        </li>
        <li>
          <strong>Legal obligations and legal claims:</strong> comply with law,
          respond to lawful requests, and establish, exercise, or defend legal
          rights.
        </li>
      </ul>
    </Section>

    <Section title="Journal and mood information">
      <p>
        Stoic is a general wellbeing and reflection app, not a medical service.
        A mood choice describes how you feel at that moment; we do not use it to
        diagnose you, infer a health condition, make automated decisions, or
        advertise to you. You decide what to write, and a journal entry may
        contain sensitive information, including information about mental or
        physical health. We process that content only at your direction to
        provide your private journal and apply additional protections to it.
      </p>
      <p>
        Please only enter information you are comfortable storing in the
        service, and avoid including another person&apos;s sensitive information.
        You can edit or delete individual journal entries and can request
        deletion of your account and associated journal data.
      </p>
    </Section>

    <Section title="Who receives information">
      <p>
        We do not sell personal information, use journal content for advertising,
        or make journals public. We disclose information only as described here:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Google Firebase:</strong> Firebase Authentication processes
          sign-in credentials; Cloud Firestore stores waitlist, account-profile,
          journal, and bookmark data; and Firebase Analytics processes the app
          analytics described above. See{' '}
          <LegalLink href="https://firebase.google.com/support/privacy">
            Firebase privacy and security
          </LegalLink>
          .
        </li>
        <li>
          <strong>Vercel:</strong> hosts and delivers this website and processes
          technical request and security information. See{' '}
          <LegalLink href="https://vercel.com/legal/privacy-policy">
            Vercel&apos;s privacy policy
          </LegalLink>
          .
        </li>
        <li>
          <strong>Google Fonts:</strong> delivers the Poppins font used by this
          website. When your browser requests the font, Google receives technical
          request information such as your IP address, browser information, and
          the requested font file. See{' '}
          <LegalLink href="https://developers.google.com/fonts/faq/privacy">
            Google Fonts and privacy
          </LegalLink>
          .
        </li>
        <li>
          <strong>Authorities and professional advisers:</strong> only when
          reasonably necessary to comply with law, protect people or the service,
          or establish and defend legal rights.
        </li>
        <li>
          <strong>A successor:</strong> if the service or business is reorganised,
          sold, or transferred, subject to appropriate confidentiality and notice
          where required.
        </li>
      </ul>
      <p>
        We select service providers that offer appropriate security and data
        protection commitments, restrict them to authorised purposes, and
        require protection consistent with this policy and applicable law.
      </p>
    </Section>

    <Section title="International transfers">
      <p>
        We are based in the United Kingdom. Firebase Authentication is operated
        from the United States, and Google, Firebase, and Vercel may process
        information in the United States and other countries where they or their
        subprocessors operate. Where information is transferred outside the UK
        or European Economic Area, we rely on an adequacy regulation or
        appropriate contractual safeguards, such as the UK International Data
        Transfer Addendum and approved Standard Contractual Clauses, together
        with additional safeguards where required. You may contact us for more
        information about the relevant safeguards.
      </p>
    </Section>

    <Section title="How long we keep information">
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Waitlist details are kept until you withdraw, the waitlist purpose has
          ended, or 24 months after submission, whichever comes first.
        </li>
        <li>
          Your account, profile, journal entries, and bookmarks are kept while
          your account remains open. A journal entry is removed from the active
          database when you delete it.
        </li>
        <li>
          When an account-deletion request is verified, we aim to delete the
          account and associated active data within 30 days. Residual copies in
          encrypted backups may remain for up to 90 days before being overwritten.
        </li>
        <li>
          Firebase Analytics event-level data is kept for no more than 14 months
          under our configured retention period. Aggregated statistics that no
          longer identify an app installation may be retained for longer.
        </li>
        <li>
          Security and service logs are generally kept for up to 12 months unless
          they are needed for an active security incident, legal obligation, or
          legal claim.
        </li>
        <li>
          Support correspondence is generally kept for up to 24 months after the
          request is resolved, unless we need it for an ongoing issue or legal
          obligation.
        </li>
        <li>
          Information stored only on your device remains until you clear the
          app&apos;s data or uninstall the app.
        </li>
      </ul>
    </Section>

    <Section title="Security">
      <p>
        We use reasonable technical and organisational safeguards, including
        encrypted transport, Firebase Authentication, owner-based database access
        controls, restricted administrative access, and service providers with
        security and confidentiality commitments. Passwords are processed by
        Firebase Authentication rather than stored in the Stoic database. No
        internet service can guarantee absolute security.
      </p>
    </Section>

    <Section title="Your choices and data-protection rights">
      <p>
        Depending on applicable law, you may have rights to access your personal
        information; correct it; request erasure; restrict processing; object to
        processing based on legitimate interests or to direct marketing; receive
        information you provided in a portable format; and withdraw consent at
        any time. Withdrawal does not affect processing already carried out
        lawfully. Stoic does not use your information for solely automated
        decisions with legal or similarly significant effects.
      </p>
      <p>
        You can update certain account details and delete individual journal
        entries in the app. To exercise another right or unsubscribe from the
        waitlist, email{' '}
        <LegalLink href={`mailto:${contactEmail}`}>{contactEmail}</LegalLink>.
        To delete your account, use our{' '}
        <LegalLink href="/delete-account">account deletion page</LegalLink>. We
        may need to verify your identity before completing a request and will
        normally respond within one month.
      </p>
      <p>
        If you are in the UK, you can also complain to the Information
        Commissioner&apos;s Office at{' '}
        <LegalLink href="https://ico.org.uk/make-a-complaint/data-protection-complaints/">
          ico.org.uk
        </LegalLink>
        , by telephone on 0303 123 1113, or by writing to the Information
        Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow,
        Cheshire, SK9 5AF. We would appreciate the chance to address your concern
        first.
      </p>
    </Section>

    <Section title="Children">
      <p>
        Stoic is not directed to children under 13, and we do not knowingly
        collect their personal information. If you believe a child under 13 has
        created an account, contact us so that we can investigate and delete the
        information where appropriate. Users who are not legally able to agree to
        these terms should use Stoic only with permission from a parent or legal
        guardian.
      </p>
    </Section>

    <Section title="Changes to this policy">
      <p>
        We may update this policy when Stoic, our providers, or legal requirements
        change. We will update the effective date and, for material changes, give
        reasonable notice in the app, on the website, or by email where
        appropriate. If a new use requires consent, we will ask before beginning
        that use.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        Contact {controllerName} at{' '}
        <LegalLink href={`mailto:${contactEmail}`}>{contactEmail}</LegalLink>.
      </p>
    </Section>
  </PageLayout>
)

const TermsOfService = () => (
  <PageLayout title="Terms of Service">
    <p>
      These Terms govern your use of the Stoic website and mobile app. Stoic is
      provided by {controllerName}, based in the United Kingdom
      (&quot;Zenshuii&quot;, &quot;Stoic&quot;, &quot;we&quot;, &quot;us&quot; or
      &quot;our&quot;). By creating an account or using Stoic, you agree to these
      Terms.
    </p>

    <Section title="Eligibility">
      <p>
        You must be at least 13 to create an account. If you are under the age at
        which you can enter into a binding agreement where you live, you confirm
        that a parent or legal guardian has reviewed and agreed to these Terms.
        Do not use Stoic if using it would be unlawful where you live.
      </p>
    </Section>

    <Section title="Your account">
      <p>
        You must provide accurate information, keep your login credentials
        confidential, and promptly update your email if it changes. You are
        responsible for activity through your account except where caused by our
        failure to protect the service. Tell us promptly if you believe your
        account has been accessed without permission. We may require email
        verification or recent authentication for sensitive account changes.
      </p>
    </Section>

    <Section title="Licence to use Stoic">
      <p>
        We grant you a personal, limited, non-exclusive, non-transferable,
        revocable licence to use Stoic for lawful, non-commercial reflection and
        journalling in accordance with these Terms and applicable app-store
        rules. You may not copy, sell, rent, reverse engineer, circumvent security
        controls, or exploit Stoic except where the law expressly permits it.
      </p>
    </Section>

    <Section title="Your content">
      <p>
        You keep ownership of journal entries and other content you submit. You
        give us a limited, worldwide licence to host, copy, transmit, and process
        that content solely as necessary to provide, secure, maintain, and support
        Stoic. This licence ends when the content is deleted, subject to reasonable
        backup periods and legal retention requirements described in the Privacy
        Policy.
      </p>
      <p>
        You are responsible for your content and must have the right to submit it.
        Do not enter unlawful content, content that infringes another person&apos;s
        rights, or another person&apos;s confidential or sensitive information
        without permission.
      </p>
    </Section>

    <Section title="Acceptable use">
      <p>You must not:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>use Stoic unlawfully or to harm, threaten, or deceive anyone;</li>
        <li>access or attempt to access another person&apos;s account or data;</li>
        <li>
          introduce malware, overload the service, scrape it at scale, or disrupt
          its operation;
        </li>
        <li>
          bypass authentication, access controls, usage limits, or other security
          measures; or
        </li>
        <li>
          use Stoic content, branding, or software in a way that infringes our or
          another person&apos;s intellectual-property rights.
        </li>
      </ul>
    </Section>

    <Section title="Wellbeing and emergency disclaimer">
      <p>
        Stoic provides general reflective prompts, journalling tools, quotes, and
        educational content. It is not a medical or mental-health service, does
        not provide a diagnosis or treatment, and is not a substitute for advice
        from a qualified professional. Do not rely on Stoic to make medical,
        legal, financial, or other high-impact decisions.
      </p>
      <p>
        Stoic is not an emergency or crisis service. If you or someone else may
        be in immediate danger, contact the emergency services where you are
        located (999 or 112 in the UK) or an appropriate crisis service.
      </p>
    </Section>

    <Section title="Stoic content and intellectual property">
      <p>
        The app, website, design, branding, software, and original materials are
        owned by us or licensed to us and are protected by intellectual-property
        law. Historical quotations and third-party materials remain the property
        of their respective owners where applicable. Attribution and educational
        material may contain errors or differing translations; it is provided for
        general information.
      </p>
    </Section>

    <Section title="Third-party services and app stores">
      <p>
        Stoic relies on services such as Firebase and the Apple and Google app
        stores. Their own terms may apply to your use of those services. If you
        obtained the iOS app through Apple&apos;s App Store, the{' '}
        <LegalLink href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
          Apple Standard Licensed Application End User License Agreement
        </LegalLink>{' '}
        also applies, and these Terms supplement it. Mandatory app-store terms
        prevail if there is a conflict.
      </p>
    </Section>

    <Section title="Fees">
      <p>
        Stoic currently does not offer paid subscriptions or in-app purchases. If
        we introduce paid features, we will clearly provide the price, billing,
        renewal, cancellation, and refund terms before you purchase them and will
        update these Terms where necessary.
      </p>
    </Section>

    <Section title="Availability and updates">
      <p>
        Stoic may change as we improve it. We may add, change, suspend, or remove
        features and release updates needed for security or compatibility. We do
        not promise that the service will always be available, uninterrupted, or
        error-free, but these Terms do not remove any service standard guaranteed
        to you by applicable consumer law.
      </p>
    </Section>

    <Section title="Suspension, termination, and deletion">
      <p>
        You may stop using Stoic at any time and request account deletion through
        our <LegalLink href="/delete-account">account deletion page</LegalLink>.
        We may restrict or suspend access where reasonably necessary to protect
        users or the service, investigate misuse, comply with law, or address a
        serious or repeated breach of these Terms. Where appropriate, we will
        provide notice and an opportunity to resolve the issue.
      </p>
      <p>
        We may terminate an account for a serious or unresolved breach or where
        required by law. When an account is deleted, the limited content licence
        above ends and associated data is handled as described in the Privacy
        Policy. Terms that by their nature should continue—such as ownership,
        disclaimers, and liability provisions—remain effective.
      </p>
    </Section>

    <Section title="Warranties and liability">
      <p>
        We provide Stoic using reasonable care and skill. To the extent permitted
        by law, we do not give warranties beyond those expressly stated in these
        Terms and are not responsible for losses that were not reasonably
        foreseeable when you agreed to the Terms, losses caused by events outside
        our reasonable control, or business losses arising from personal use of
        Stoic.
      </p>
      <p>
        Nothing in these Terms excludes or limits liability for death or personal
        injury caused by negligence, fraud or fraudulent misrepresentation, or
        any other liability that cannot legally be excluded. Nothing in these
        Terms affects mandatory consumer rights available to you.
      </p>
    </Section>

    <Section title="Governing law and disputes">
      <p>
        Please contact us first so we can try to resolve a concern informally. If
        you are a consumer in the UK, these Terms are governed by the law of the
        part of the UK where you live and you may bring proceedings in your local
        courts. If you live elsewhere, mandatory protections and courts available
        under your local consumer law are not affected; otherwise, the laws of
        England and Wales and the courts of England and Wales apply.
      </p>
    </Section>

    <Section title="Changes to these Terms">
      <p>
        We may update these Terms to reflect product, legal, security, or business
        changes. We will post the revised Terms and update the effective date. We
        will give reasonable advance notice of material changes in the app, on
        the website, or by email where appropriate. If you do not agree, you
        should stop using Stoic and may request account deletion before the change
        takes effect.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        Questions or concerns about these Terms can be sent to {controllerName}{' '}
        at <LegalLink href={`mailto:${contactEmail}`}>{contactEmail}</LegalLink>.
      </p>
    </Section>
  </PageLayout>
)

const AccountDeletionPage = () => (
  <PageLayout title="Delete Your Stoic Account">
    <p>
      You can request permanent deletion of your Stoic account and the personal
      information associated with it. Uninstalling the app does not delete your
      cloud account or journal data.
    </p>

    <Section title="Request account deletion">
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          Email us from the address currently connected to your Stoic account.
        </li>
        <li>
          Use the subject &quot;Stoic account deletion request&quot;. You do not need
          to include journal content, and you must never send your password.
        </li>
        <li>
          We may ask you to complete a reasonable identity-verification step to
          protect the account from an unauthorised deletion request.
        </li>
      </ol>
      <a
        className="mt-5 inline-flex rounded-lg bg-[#70BFBF] px-5 py-3 font-medium text-white transition-colors hover:bg-[#58AFAF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70BFBF] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#242424]"
        href={deletionRequestHref}
      >
        Request account deletion
      </a>
      <p>
        If the button does not open your email app, send the request directly to{' '}
        <LegalLink href={`mailto:${contactEmail}`}>{contactEmail}</LegalLink>.
      </p>
    </Section>

    <Section title="What we delete">
      <p>Once the request is verified, deletion covers:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>your Firebase Authentication account and account identifier;</li>
        <li>your account email, display name, and profile settings;</li>
        <li>your journal entries, mood selections, prompts, and timestamps;</li>
        <li>your saved-quote records and bookmark timestamps; and</li>
        <li>
          support information that is no longer needed, subject to legal or
          security retention requirements.
        </li>
      </ul>
      <p>
        Waitlist information is also deleted if you ask us to remove it. Local
        settings and cached information on your device are removed when you clear
        Stoic&apos;s app data or uninstall the app.
      </p>
    </Section>

    <Section title="Timing and limited retention">
      <p>
        We aim to complete a verified deletion request within 30 days and will
        confirm when it is complete. Residual copies may remain in encrypted
        backups for up to 90 days before being overwritten. We may retain limited
        information for longer only where required by law, necessary to prevent
        fraud or abuse, or needed to establish or defend legal claims. Any retained
        information remains protected and is not used for other purposes.
      </p>
      <p>
        Account deletion is permanent. You will lose access to your journals and
        bookmarks and would need to create a new account to use account features
        again.
      </p>
    </Section>

    <Section title="Delete an individual journal entry">
      <p>
        If you only want to remove one journal entry, open that entry in Stoic and
        use its delete option. You do not need to delete your whole account.
      </p>
    </Section>

    <Section title="Questions">
      <p>
        For questions about deletion or another privacy right, contact{' '}
        <LegalLink href={`mailto:${contactEmail}`}>{contactEmail}</LegalLink> or
        read our <LegalLink href="/privacy">Privacy Policy</LegalLink>.
      </p>
    </Section>
  </PageLayout>
)

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  if (kind === 'privacy') {
    return <PrivacyPolicy />
  }

  if (kind === 'delete-account') {
    return <AccountDeletionPage />
  }

  return <TermsOfService />
}
