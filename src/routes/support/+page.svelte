<svelte:head>
	<title>Support — Re:Me</title>
	<meta
		name="description"
		content="Get help with Re:Me commitments, Screen Time access, allowed apps and websites, and nearby commitments."
	/>
	<link rel="canonical" href="https://reme.elmen.dev/support" />
</svelte:head>

<main id="main-content" class="legal-page">
	<header class="legal-hero site-container">
		<p class="eyebrow"><span></span> Re:Me support</p>
		<h1>How can we help?</h1>
		<p>
			Find quick answers about protected commitments, allowed essentials, and starting
			together—or send a note for individual help.
		</p>
	</header>

	<div class="site-container legal-content">
		<section class="support-grid" aria-label="Support options">
			<article class="legal-card support-card">
				<h2>Ask a question</h2>
				<p>
					For support, privacy questions, or feedback about Re:Me, email Pierre. Include your iOS
					version and a short description of what happened when reporting a problem.
				</p>
				<a class="button button-primary" href="mailto:pierre@elmen.dev">Email support</a>
			</article>
			<article class="legal-card support-card">
				<h2>Privacy questions</h2>
				<p>
					Learn what Re:Me stores locally, how Screen Time authorization works, and what nearby
					devices exchange when you use a “We” commitment.
				</p>
				<a class="button button-secondary" href="/privacy">Read the privacy policy</a>
			</article>
		</section>

		<section class="legal-card">
			<h2>Screen Time access</h2>
			<p>
				Re:Me needs Apple Screen Time authorization to block apps and websites during a protected
				commitment. If you previously denied access, open the iOS Settings app and review Re:Me’s
				Screen Time permission. The exact location can vary between iOS versions.
			</p>
			<p>
				When blocking is unavailable for a technical reason, Re:Me may offer a clearly labelled
				timer-only commitment. Timer-only mode is not offered after permission is explicitly
				denied.
			</p>
		</section>

		<section class="legal-card">
			<h2>Allowed apps and websites</h2>
			<p>
				Open Settings in Re:Me, then choose <strong>Allowed Apps &amp; Websites</strong>. Each of the
				seven commitment modes keeps its own selection. Choose individual apps and websites you
					want to keep available; leaving the selection empty blocks everything covered by the
					Screen Time shield.
			</p>
			<p>
				Whole-category exceptions are not currently supported. If a category was selected, choose
					the individual apps or websites instead.
			</p>
		</section>

		<section class="legal-card">
			<h2>Nearby commitments</h2>
			<p>
				Starting or joining together requires local-network access and another compatible Re:Me
					device nearby. Make sure both devices are using compatible app versions and have local
					networking enabled. The host needs at least one guest before starting.
			</p>
		</section>
	</div>
</main>
