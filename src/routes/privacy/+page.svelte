<svelte:head>
	<title>Privacy Policy — Re:Me</title>
	<meta
		name="description"
		content="How Re:Me stores commitment history, uses Apple Screen Time, and coordinates nearby commitments without an account or developer backend."
	/>
	<meta property="og:title" content="Re:Me Privacy Policy" />
	<meta
		property="og:description"
		content="Local commitment history, no analytics or advertising SDKs, and a clear explanation of nearby sharing."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://reme.elmen.dev/privacy" />
	<meta property="og:image" content="https://reme.elmen.dev/social-card.svg" />
	<link rel="canonical" href="https://reme.elmen.dev/privacy" />
</svelte:head>

<main id="main-content" class="legal-page">
	<header class="legal-hero site-container">
		<p class="eyebrow"><span></span> Privacy, in plain language</p>
		<h1>Your time stays personal.</h1>
		<p>
			Re:Me works without an account or developer-operated backend. This policy explains what
			the app stores, how Apple Screen Time is used, and what is shared when you choose a nearby
			commitment.
		</p>
		<p class="legal-updated">Last updated 3 September 2026</p>
	</header>

	<div class="legal-layout site-container">
		<nav class="legal-nav" aria-label="Privacy policy sections">
			<strong>On this page</strong>
			<a href="#overview">Overview</a>
			<a href="#stored-data">Stored data</a>
			<a href="#screen-time">Screen Time</a>
			<a href="#nearby">Nearby mode</a>
			<a href="#services">Services and tracking</a>
			<a href="#choices">Your choices</a>
			<a href="#contact">Contact</a>
		</nav>

		<div class="legal-content">
			<section class="legal-card" id="overview">
				<h2>Overview</h2>
				<p>
					Re:Me helps you make and track timed phone-free commitments. No Re:Me account is
					required. The app stores completed commitment history locally and does not upload that
					history to a developer-operated server.
				</p>
				<div class="callout">
					<strong>The short version:</strong> Re:Me has no advertising, analytics, attribution, or
					tracking SDKs. Nearby group mode does share limited information directly with Re:Me
					devices near you, as described below.
				</div>
			</section>

			<section class="legal-card" id="stored-data">
				<h2>Information stored on your device</h2>
				<p>For a completed commitment, Re:Me can store:</p>
				<ul>
					<li>A commitment identifier, preset name, start and end times, and duration.</li>
					<li>Whether Screen Time protection or timer-only mode was used.</li>
					<li>Whether it was a group commitment, your host or guest role, and participant count.</li>
					<li>Hashed identifiers for peers who participated. Participant names are not stored in the completed commitment record.</li>
				</ul>
				<p>
					The app derives your streak, levels, achievements, calendar, charts, and daily timeline
					from these completed records. Active commitment state, widget information, allowed-app
					selections, and settings are also stored locally using Apple-provided storage.
				</p>
				<h3>iCloud and backups</h3>
				<p>
					Re:Me does not currently provide app-controlled iCloud backup or synchronization. Apple
					may handle device backups according to your iOS and iCloud settings; that system behavior
					is controlled by Apple, not by Re:Me.
				</p>
			</section>

			<section class="legal-card" id="screen-time">
				<h2>Apple Screen Time</h2>
				<p>
					With your authorization, Re:Me uses Apple’s Family Controls and Screen Time frameworks
					to shield apps and websites while a protected commitment is active.
				</p>
				<ul>
					<li>You choose individual apps and websites that may remain available for each commitment mode.</li>
					<li>Apple provides opaque selection and authorization tokens used to apply those choices.</li>
					<li>Selected app names and website domains may be resolved and displayed locally so you can review your choices.</li>
					<li>Re:Me does not implement Device Activity reports and does not read your screen-usage history.</li>
					<li>You can revoke Screen Time authorization through iOS Settings.</li>
				</ul>
				<p>
					When blocking is technically unavailable, Re:Me may offer a clearly labelled timer-only
					commitment after asking you to confirm. If authorization was explicitly denied, the app
					asks you to restore access in Settings.
				</p>
			</section>

			<section class="legal-card" id="nearby">
				<h2>Nearby commitments</h2>
				<p>
					The optional “We” experience uses Apple’s local networking technology to discover and
					coordinate with nearby Re:Me devices. It does not use a Re:Me group server.
				</p>
				<p>During nearby discovery and coordination, devices can exchange:</p>
				<ul>
					<li>Your nearby display name and local identifiers.</li>
					<li>The commitment identifier, preset, duration, and information needed to coordinate allowed choices.</li>
					<li>Connection and protocol information needed to join and begin at the same time.</li>
				</ul>
				<p>
					This information is visible to participating or discovering Re:Me devices nearby. The
					connected peer session requires encryption. Your completed commitment history is not
					shared with the group.
				</p>
			</section>

			<section class="legal-card" id="services">
				<h2>Services, analytics, and advertising</h2>
				<p>The current version of Re:Me:</p>
				<ul>
					<li>Does not require an account or sign-in.</li>
					<li>Does not send completed commitment records to a developer backend.</li>
					<li>Does not contain analytics, advertising, attribution, or tracking SDKs.</li>
					<li>Uses Apple frameworks for Screen Time, local storage, widgets, Live Activities, and nearby connectivity.</li>
				</ul>
				<p>
					The app can use Apple’s on-device logging facilities for operational and debugging
					information. Apple’s services and operating-system features are governed by Apple’s own
					terms and privacy practices.
				</p>
			</section>

			<section class="legal-card" id="choices">
				<h2>Your choices and control</h2>
				<ul>
					<li>You can view your completed time and derived progress inside Re:Me.</li>
					<li>You can edit or clear the individual apps and websites allowed for each mode.</li>
					<li>You can change the display name used for nearby commitments.</li>
					<li>You can choose not to use nearby mode or grant local-network access.</li>
					<li>You can revoke Screen Time access in iOS Settings.</li>
				</ul>
				<h3>Editing, export, and deletion</h3>
				<p>
					Re:Me does not currently provide controls to edit or delete individual commitment
					records, export or import history, or reset all app data. Removing the app and restoring
					data from device backups are handled by iOS. Because backups may exist, Re:Me does not
					promise that uninstalling immediately and irreversibly removes every copy managed by
					Apple’s systems.
				</p>
			</section>

			<section class="legal-card" id="contact">
				<h2>Changes and contact</h2>
				<p>
					This policy may change as Re:Me evolves. When it does, the revision date at the top of
					this page will be updated.
				</p>
				<p>
					For questions about Re:Me or this privacy policy, email
					<a href="mailto:pierre@elmen.dev">pierre@elmen.dev</a>.
				</p>
			</section>
		</div>
	</div>
</main>
