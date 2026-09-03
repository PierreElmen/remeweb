<script lang="ts">
	import '../app.css';

	const currentYear = new Date().getFullYear();
</script>

<a class="skip-link" href="#main-content">Skip to content</a>

<header class="site-header">
	<div class="site-container header-inner">
		<a class="brand" href="/" aria-label="Re:Me home">
			<picture>
				<source srcset="/images/reme-icon-dark.png" media="(prefers-color-scheme: dark)" />
				<img src="/images/reme-icon-light.png" alt="" width="36" height="36" />
			</picture>
			<span>Re:Me</span>
		</a>

		<nav class="site-nav" aria-label="Primary navigation">
			<a href="/#how-it-works">How it works</a>
			<a href="/#progress">Progress</a>
			<a href="/#together">Together</a>
			<a href="/privacy">Privacy</a>
			<a class="nav-cta" href="/support">Support</a>
		</nav>
	</div>
</header>

<slot />

<footer class="site-footer">
	<div class="site-container footer-grid">
		<div>
			<a class="brand footer-brand" href="/" aria-label="Re:Me home">
				<picture>
					<source srcset="/images/reme-icon-dark.png" media="(prefers-color-scheme: dark)" />
					<img src="/images/reme-icon-light.png" alt="" width="36" height="36" />
				</picture>
				<span>Re:Me</span>
			</a>
			<p>Make time for what’s in front of you.</p>
		</div>
		<div class="footer-links" aria-label="Footer navigation">
			<a href="/#how-it-works">How it works</a>
			<a href="/#together">Together</a>
			<a href="/privacy">Privacy</a>
			<a href="/support">Support</a>
		</div>
	</div>
	<div class="site-container footer-meta">
		<span>© {currentYear} Re:Me</span>
		<span>Built by Pierre Elmen</span>
	</div>
</footer>
