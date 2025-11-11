<script>
	import Lenis from 'lenis';
	import { onMount } from 'svelte';

	const currentYear = new Date().getFullYear();
	/** @type {import('lenis').default | null} */
	let lenis = null;

	onMount(() => {
		const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (reduceMotionQuery.matches) {
			return;
		}

		lenis = new Lenis({
			duration: 1.2,
			easing: (t) => 1 - Math.pow(1 - t, 2.4),
			smoothTouch: false,
			wheelMultiplier: 0.9
		});

		let rafId;
		const raf = (time) => {
			lenis?.raf(time);
			rafId = requestAnimationFrame(raf);
		};

		rafId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(rafId);
			lenis?.destroy();
		};
	});
</script>

<svelte:head>
	<title>Re:Me — mindful phone companion</title>
	<meta
		name="description"
		content="Reclaim time away from your phone with Re:Me. Start mindful commitments, hush distractions with Apple’s Screen Time APIs, and level up through calming achievements as you celebrate streaks."
	/>
	<meta property="og:title" content="Re:Me — mindful phone companion" />
	<meta
		property="og:description"
		content="Start a commitment, stay present, and let Re:Me handle distractions with gentle Screen Time shielding. Achievements, streaks, and level progress celebrate every reclaimed minute."
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

<main class="space-y-24 lg:space-y-28">
	<section
		class="page-container grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24"
		data-reveal-group
	>
		<div class="space-y-6" data-reveal style="--reveal-order: 0">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]"
				>Mindful phone time</span
			>
			<h1 class="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[64px]">
				Re:Me
			</h1>
			<p class="max-w-xl text-lg text-[var(--muted)]">
				Re:Me helps you take intentional breaks from your phone. Start a commitment, hush distracting
				apps with Apple&rsquo;s Screen Time APIs, and watch your levels and streaks grow as you reclaim
				time.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					class="inline-flex items-center gap-3 rounded-[var(--radius-pill)] bg-[var(--primary)] px-5 py-3 text-base font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
					href="https://apps.apple.com/app/idYOUR_APP_ID"
					rel="noopener"
					target="_blank"
				>
					<span class="text-2xl" aria-hidden="true"></span>
					<span class="flex flex-col leading-tight text-left">
						<span class="text-[0.7rem] uppercase tracking-[0.3em] text-[rgba(255,252,248,0.8)]"
							>Download on the</span
						>
						<span class="text-lg">App Store</span>
					</span>
				</a>
				<a
					class="inline-flex items-center rounded-[var(--radius-pill)] border border-[rgba(31,35,38,0.12)] px-5 py-3 font-semibold text-[var(--primary)] transition hover:bg-[rgba(100,114,84,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] dark:border-[rgba(255,252,248,0.2)]"
					href="/privacy"
					>Privacy-first design</a
				>
			</div>
		</div>
		<aside
			class="space-y-4 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl"
			aria-label="Re:Me session preview"
			data-reveal
			style="--reveal-order: 1"
		>
			<div class="flex items-center justify-between text-sm text-[var(--muted)]">
				<span
					class="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
					>Next commitment</span
				>
				<span class="text-base font-semibold text-[var(--fg)]">45 min</span>
			</div>
			<h2 class="text-2xl font-semibold">Unplug</h2>
			<p class="text-[var(--muted)]">
				Settle in, breathe, and tap start. Re:Me keeps distractions away while gaining achievements and
				leveling up.
			</p>
			<ul class="list-disc space-y-2 pl-5 text-[var(--muted)]">
				<li>Screen Time shielding: on</li>
				<li>Press &amp; hold 3s to end early</li>
				<li>Live Activity pinned to your Lock Screen</li>
				<li>Level & Achievements progress.</li>
			</ul>
		</aside>
	</section>

	<section class="page-container grid gap-6 lg:grid-cols-3" aria-label="Key features" data-reveal-group>
		<article
			class="space-y-4 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]"
			data-reveal
			style="--reveal-order: 0"
		>
			<h3 class="text-xl font-semibold">Intentional commitments</h3>
			<p class="text-[var(--muted)]">
				Choose from gentle presets like Deep Work, Reset, or your own minutes. Every session starts with
				mindful copy drawn from the app’s refreshed Home view.
			</p>
			<ul class="list-disc space-y-2 pl-5 text-[var(--muted)]">
				<li>Durations adjustable in 5-minute steps (5–120 minutes)</li>
				<li>Tap-and-hold guard mirrors the in-app session sheet</li>
				<li>Calm olive gradients and rounded cards echo SwiftUI styling</li>
			</ul>
		</article>

		<article
			class="space-y-4 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]"
			data-reveal
			style="--reveal-order: 1"
		>
			<h3 class="text-xl font-semibold">Gentle Screen Time shielding</h3>
			<p class="text-[var(--muted)]">
				Re:Me uses Apple’s Family Controls APIs to hush the specific apps you choose. You stay in
				control—permissions live inside Screen Time, and you can revoke them anytime.
			</p>
			<ul class="list-disc space-y-2 pl-5 text-[var(--muted)]">
				<li>ShieldService only activates during active commitments</li>
				<li>No usage analytics or personal data ever leave your device</li>
				<li>Ending early still requires a mindful three-second hold</li>
			</ul>
		</article>

		<article
			class="space-y-4 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]"
			data-reveal
			style="--reveal-order: 2"
		>
			<h3 class="text-xl font-semibold">Celebrate reclaimed time</h3>
			<p class="text-[var(--muted)]">
				Weekly streak cards, level progress, and animated achievements celebrate steady progress. Charts
				highlight every mindful minute you earn.
			</p>
			<ul class="list-disc space-y-2 pl-5 text-[var(--muted)]">
				<li>Weekly streak + monthly calendar overview</li>
				<li>Achievements unlock with trophy highlights and confetti</li>
				<li>Level paths mirror session points to mark your journey</li>
			</ul>
		</article>
	</section>

	<section class="page-container space-y-8 text-center lg:text-left" data-reveal-group>
		<h2 class="text-3xl font-semibold" data-reveal style="--reveal-order: 0">
			Mindful details that keep you present
		</h2>
		<p class="mx-auto max-w-3xl text-lg text-[var(--muted)]" data-reveal style="--reveal-order: 1">
			From the Live Activity countdown to gentle reflection prompts, every part of Re:Me is built to keep
			your attention where you want it—off the phone, on the moment.
		</p>
		<div class="grid gap-6 lg:grid-cols-3" data-reveal-group>
			<article
				class="space-y-3 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 text-left shadow-[var(--shadow-soft)]"
				data-reveal
				style="--reveal-order: 0"
			>
				<h4 class="text-lg font-semibold">Hold to finish</h4>
				<p class="text-[var(--muted)]">
					Ending a session mirrors the app’s Active Session view with a three-second hold. It’s a calm
					pause that helps you confirm the intention you set.
				</p>
			</article>
			<article
				class="space-y-3 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 text-left shadow-[var(--shadow-soft)]"
				data-reveal
				style="--reveal-order: 1"
			>
				<h4 class="text-lg font-semibold">Reflect &amp; reset</h4>
				<p class="text-[var(--muted)]">
					Prompted reflections appear after finishing a commitment. Jot a note, log how you feel, or jump
					straight into another intention.
				</p>
			</article>
			<article
				class="space-y-3 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 text-left shadow-[var(--shadow-soft)]"
				data-reveal
				style="--reveal-order: 2"
			>
				<h4 class="text-lg font-semibold">Live Activity &amp; widgets</h4>
				<p class="text-[var(--muted)]">
					Keep the timer visible on your Lock Screen and Dynamic Island. iOS 17 widgets and Live Activities
					stay in sync with every second you reclaim.
				</p>
			</article>
		</div>
	</section>

	<section class="page-container" data-reveal>
		<div
			class="space-y-6 rounded-[var(--radius-card)] bg-[var(--surface-secondary)] p-8 shadow-[var(--shadow-soft)]"
			data-reveal
		>
			<h2 class="text-3xl font-semibold">Local-first, by design</h2>
			<p class="text-lg text-[var(--muted)]">
				Re:Me keeps your information on-device by default. Optional iCloud syncing is yours to enable, and it
				lives in your own private container.
			</p>
			<ul class="list-disc space-y-2 pl-5 text-[var(--muted)]">
				<li>Session history, streaks, and achievements are stored locally with SwiftData.</li>
				<li>You can opt into iCloud backups; the developer never sees your records.</li>
				<li>No ads, tracking SDKs, or analytics libraries—just mindful phone-free time.</li>
			</ul>
			<p class="text-lg text-[var(--muted)]">
				Read the full <a class="underline" href="/privacy">privacy policy</a> for details.
			</p>
		</div>
	</section>

	<section class="page-container space-y-8 text-center lg:text-left" data-reveal-group>
		<h2 class="text-3xl font-semibold" data-reveal style="--reveal-order: 0">
			Built for the moments that matter
		</h2>
		<p class="mx-auto max-w-3xl text-lg text-[var(--muted)]" data-reveal style="--reveal-order: 1">
			Re:Me runs on iOS 17 and newer, embraces system fonts, and matches Apple’s design language with gentle
			gradients, serene olive highlights, and rounded corners you already use in the app.
		</p>
		<div class="grid gap-6 lg:grid-cols-3" data-reveal-group>
			<article
				class="space-y-3 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 text-left shadow-[var(--shadow-soft)]"
				data-reveal
				style="--reveal-order: 0"
			>
				<h3 class="text-xl font-semibold">SwiftUI on the inside</h3>
				<p class="text-[var(--muted)]">
					The landing page follows the same Serene palette as Theme.swift: olive primary (#647254), sage
					accent (#A4B071), soft cream backgrounds (#FFFCF8 light / #171B18 dark), and calm neutral
					foregrounds (#1F2326 / #FFFCF8).
				</p>
			</article>
			<article
				class="space-y-3 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 text-left shadow-[var(--shadow-soft)]"
				data-reveal
				style="--reveal-order: 1"
			>
				<h3 class="text-xl font-semibold">Accessibility ready</h3>
				<p class="text-[var(--muted)]">
					Large, legible typography mirrors the in-app scale (titles at 24–32 px, body at 16 px) with
					sufficient contrast in both light and dark modes.
				</p>
			</article>
			<article
				class="space-y-3 rounded-[var(--radius-card)] border border-[var(--card-border)] bg-[var(--card)] p-6 text-left shadow-[var(--shadow-soft)]"
				data-reveal
				style="--reveal-order: 2"
			>
				<h3 class="text-xl font-semibold">Made to share</h3>
				<p class="text-[var(--muted)]">
					Open Graph and Twitter cards describe Re:Me as a mindful phone companion, complete with a serene
					olive gradient social preview.
				</p>
			</article>
		</div>
	</section>

	<section class="page-container text-center" data-reveal-group>
		<span
			class="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]"
			>Ready when you are</span
		>
		<h2 class="mt-6 text-3xl font-semibold" data-reveal style="--reveal-order: 0">
			Start your next phone-free commitment
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]" data-reveal style="--reveal-order: 1">
			Reclaim time for presence, creativity, and rest. Re:Me is free of ads and tracking, and it takes just a
			moment to make your first commitment.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4" data-reveal style="--reveal-order: 2">
			<a
				class="inline-flex items-center gap-3 rounded-[var(--radius-pill)] bg-[var(--primary)] px-5 py-3 text-base font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
				href="https://apps.apple.com/app/idYOUR_APP_ID"
				rel="noopener"
				target="_blank"
			>
				<span class="text-2xl" aria-hidden="true"></span>
				<span class="flex flex-col leading-tight text-left">
					<span class="text-[0.7rem] uppercase tracking-[0.3em] text-[rgba(255,252,248,0.8)]"
						>Download on the</span
					>
					<span class="text-lg">App Store</span>
				</span>
			</a>
			<a
				class="inline-flex items-center rounded-[var(--radius-pill)] border border-[rgba(31,35,38,0.12)] px-5 py-3 font-semibold text-[var(--primary)] transition hover:bg-[rgba(100,114,84,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] dark:border-[rgba(255,252,248,0.2)]"
				href="mailto:pierre@elmen.dev"
				>Say hello</a
			>
		</div>
	</section>
</main>

<footer class="border-t border-[rgba(31,35,38,0.08)] py-8 dark:border-[rgba(255,252,248,0.12)]">
	<div class="page-container flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
		<span>&copy; {currentYear} Re:Me. Built with calm intention by Pierre Elmen.</span>
		<nav class="flex flex-wrap gap-6">
			<a class="transition hover:text-[var(--fg)]" href="/privacy">Privacy Policy</a>
			<a class="transition hover:text-[var(--fg)]" href="mailto:pierre@elmen.dev">pierre@elmen.dev</a>
		</nav>
	</div>
</footer>
