<script lang="ts">
  import '../app.css';
  import Lenis from 'lenis';
  import { onDestroy, onMount } from 'svelte';

  let lenis = null;
  let rafId = null;

  export const disableSmoothScroll = () => lenis?.stop();
  export const enableSmoothScroll = () => lenis?.start();

  const setupLenis = () => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const raf = (time) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
  };

  const teardownLenis = () => {
    lenis?.destroy();
    lenis = null;

    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  onMount(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    setupLenis();
  });

  onDestroy(() => {
    teardownLenis();
  });
</script>

<header class="header-surface sticky top-0 z-40 backdrop-blur-2xl">
  <div class="page-container flex min-h-16 flex-wrap items-center justify-between gap-3 py-4">
    <a class="text-lg font-bold uppercase tracking-[0.18em] text-[var(--fg)]" href="/">Re:Me</a>
    <nav class="flex items-center gap-4 text-sm font-semibold" aria-label="Primary">
      <a
        class="rounded-full px-3 py-2 text-[var(--fg)] transition hover:bg-[rgba(100,114,84,0.12)] hover:text-[var(--primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        href="/"
        >Home</a
      >
      <a
        class="rounded-full px-3 py-2 text-[var(--fg)] transition hover:bg-[rgba(100,114,84,0.12)] hover:text-[var(--primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        href="https://apps.apple.com/app/idYOUR_APP_ID"
        rel="noopener"
        target="_blank"
        >Download</a
      >
      <a
        class="rounded-full px-3 py-2 text-[var(--fg)] transition hover:bg-[rgba(100,114,84,0.12)] hover:text-[var(--primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        href="mailto:pierre@elmen.dev"
        >Contact</a
      >
    </nav>
  </div>
</header>

<slot />
