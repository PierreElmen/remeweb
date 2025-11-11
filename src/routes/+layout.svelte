<script lang="ts">
  import '../app.css';
  import Lenis from 'lenis';
  import { onDestroy, onMount } from 'svelte';

  let lenis: Lenis | null = null;
  let rafId: number | null = null;

  export const disableSmoothScroll = () => lenis?.stop();
  export const enableSmoothScroll = () => lenis?.start();

  const setupLenis = () => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const raf = (time: number) => {
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

<slot />
