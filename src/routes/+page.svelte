<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <title>Re:Me — mindful phone companion</title>
  <meta
    name="description"
    content="Reclaim time away from your phone with Re:Me. Start mindful commitments, hush distractions with Apple’s Screen Time APIs, and grow a serene tree as you celebrate achievements and streaks."
  />
  <meta property="og:title" content="Re:Me — mindful phone companion" />
  <meta
    property="og:description"
    content="Start a commitment, stay present, and let Re:Me handle distractions with gentle Screen Time shielding. Achievements, streaks, and a growing tree celebrate every reclaimed minute."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://reme.elmen.dev" />
  <meta property="og:image" content="https://reme.elmen.dev/social-card.svg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Re:Me — mindful phone companion" />
  <meta
    name="twitter:description"
    content="Take intentional breaks from your phone. Re:Me blends Screen Time shielding, mindful reflections, and celebratory achievements."
  />
  <meta name="twitter:image" content="https://reme.elmen.dev/social-card.svg" />
  <link rel="canonical" href="https://reme.elmen.dev" />
</svelte:head>

<main class="page">
  <section class="hero container">
    <div class="intro">
      <span class="eyebrow">Mindful phone time</span>
      <h1>Re:Me</h1>
      <p class="lead">
        Re:Me helps you take intentional breaks from your phone. Start a commitment, hush distracting apps with Apple&rsquo;s Screen Time APIs, and watch your tree and streaks grow as you reclaim time.
      </p>
      <div class="cta">
        <a class="store-badge" href="https://apps.apple.com/app/idYOUR_APP_ID" rel="noopener" target="_blank">
          <span class="icon" aria-hidden="true"></span>
          <span>
            <span class="badge-label">Download on the</span>
            <span class="badge-text">App Store</span>
          </span>
        </a>
        <a class="ghost" href="/privacy">Privacy-first design</a>
      </div>
    </div>
    <aside class="glass" aria-label="Re:Me session preview">
      <div class="glass-header">
        <span class="pill">Next commitment</span>
        <span class="time">45 min</span>
      </div>
      <h2>Deep Work</h2>
      <p>Settle in, breathe, and tap start. Re:Me keeps distractions away while your tree unfurls new leaves.</p>
      <ul>
        <li>Screen Time shielding: on</li>
        <li>Press &amp; hold 3s to end early</li>
        <li>Live Activity pinned to your Lock Screen</li>
        <li>Tree progress: +12 leaves this week</li>
      </ul>
    </aside>
  </section>

  <section class="container feature-grid" aria-label="Key features">
    <article class="card">
      <h3>Intentional commitments</h3>
      <p>Choose from gentle presets like Deep Work, Reset, or your own minutes. Every session starts with mindful copy drawn from the app’s refreshed Home view.</p>
      <ul>
        <li>Durations adjustable in 5-minute steps (5–120 minutes)</li>
        <li>Tap-and-hold guard mirrors the in-app session sheet</li>
  <li>Calm olive gradients and rounded cards echo SwiftUI styling</li>
      </ul>
    </article>

    <article class="card">
      <h3>Gentle Screen Time shielding</h3>
      <p>Re:Me uses Apple’s Family Controls APIs to hush the specific apps you choose. You stay in control—permissions live inside Screen Time, and you can revoke them anytime.</p>
      <ul>
        <li>ShieldService only activates during active commitments</li>
        <li>No usage analytics or personal data ever leave your device</li>
        <li>Ending early still requires a mindful three-second hold</li>
      </ul>
    </article>

    <article class="card">
      <h3>Celebrate reclaimed time</h3>
      <p>Weekly streak cards, the serenity tree, and animated achievements celebrate steady progress. Charts highlight every mindful minute you earn.</p>
      <ul>
        <li>Weekly streak + monthly calendar overview</li>
        <li>Achievements unlock with trophy highlights and confetti</li>
        <li>Tree growth mirrors session points to mark your journey</li>
      </ul>
    </article>
  </section>

  <section class="container">
    <h2 class="section-title">Mindful details that keep you present</h2>
    <p class="section-lead">
      From the Live Activity countdown to gentle reflection prompts, every part of Re:Me is built to keep your attention where you want it—off the phone, on the moment.
    </p>
    <div class="stat-grid">
      <article class="stat-card">
        <h4>Hold to finish</h4>
        <p>Ending a session mirrors the app’s Active Session view with a three-second hold. It’s a calm pause that helps you confirm the intention you set.</p>
      </article>
      <article class="stat-card">
        <h4>Reflect &amp; reset</h4>
        <p>Prompted reflections appear after finishing a commitment. Jot a note, log how you feel, or jump straight into another intention.</p>
      </article>
      <article class="stat-card">
        <h4>Live Activity &amp; widgets</h4>
        <p>Keep the timer visible on your Lock Screen and Dynamic Island. iOS 17 widgets and Live Activities stay in sync with every second you reclaim.</p>
      </article>
    </div>
  </section>

  <section class="container">
    <div class="card surface-secondary">
      <h2 class="section-title">Local-first, by design</h2>
      <p class="section-lead">Re:Me keeps your information on-device by default. Optional iCloud syncing is yours to enable, and it lives in your own private container.</p>
      <ul>
        <li>Session history, streaks, and achievements are stored locally with SwiftData.</li>
        <li>You can opt into iCloud backups; the developer never sees your records.</li>
        <li>No ads, tracking SDKs, or analytics libraries—just mindful phone-free time.</li>
      </ul>
      <p class="section-lead" style="margin-top:24px;">Read the full <a href="/privacy">privacy policy</a> for details.</p>
    </div>
  </section>

  <section class="container">
    <h2 class="section-title">Built for the moments that matter</h2>
  <p class="section-lead">Re:Me runs on iOS 17 and newer, embraces system fonts, and matches Apple’s design language with gentle gradients, serene olive highlights, and rounded corners you already use in the app.</p>
    <div class="stat-grid">
      <article class="card">
        <h3>SwiftUI on the inside</h3>
  <p>The landing page follows the same Serene palette as Theme.swift: olive primary (#647254), sage accent (#A4B071), soft cream backgrounds (#FFFCF8 light / #171B18 dark), and calm neutral foregrounds (#1F2326 / #FFFCF8).</p>
      </article>
      <article class="card">
        <h3>Accessibility ready</h3>
        <p>Large, legible typography mirrors the in-app scale (titles at 24–32 px, body at 16 px) with sufficient contrast in both light and dark modes.</p>
      </article>
      <article class="card">
        <h3>Made to share</h3>
  <p>Open Graph and Twitter cards describe Re:Me as a mindful phone companion, complete with a serene olive gradient social preview.</p>
      </article>
    </div>
  </section>

  <section class="cta-section container">
    <span class="eyebrow">Ready when you are</span>
    <h2 class="section-title">Start your next phone-free commitment</h2>
    <p class="section-lead">Reclaim time for presence, creativity, and rest. Re:Me is free of ads and tracking, and it takes just a moment to make your first commitment.</p>
    <div class="cta-actions">
      <a class="store-badge" href="https://apps.apple.com/app/idYOUR_APP_ID" rel="noopener" target="_blank">
        <span class="icon" aria-hidden="true"></span>
        <span>
          <span class="badge-label">Download on the</span>
          <span class="badge-text">App Store</span>
        </span>
      </a>
      <a class="ghost" href="mailto:pierre@elmen.dev">Say hello</a>
    </div>
  </section>
</main>

<footer class="footer">
  <span>&copy; {currentYear} Re:Me. Built with calm intention by Pierre Elmen.</span>
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="mailto:pierre@elmen.dev">pierre@elmen.dev</a>
  </nav>
</footer>
