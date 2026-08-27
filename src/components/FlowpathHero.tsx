import { useEffect, useRef, useState, type CSSProperties } from "react";

const VIDEO_URL = "/assets/flowpath-hero-pink.mp4";
const CROSSFADE_SECONDS = 2.5;

const PETALS = [
  { left: 3, size: 13, duration: 13, delay: -4, drift: 110, spin: 520, opacity: 0.82, blur: 0 },
  { left: 8, size: 9, duration: 10, delay: -7, drift: -70, spin: -440, opacity: 0.72, blur: 0.4 },
  { left: 14, size: 16, duration: 16, delay: -12, drift: 90, spin: 650, opacity: 0.9, blur: 0 },
  {
    left: 20,
    size: 11,
    duration: 12,
    delay: -2,
    drift: -120,
    spin: -530,
    opacity: 0.78,
    blur: 0.2,
  },
  { left: 25, size: 7, duration: 9, delay: -5, drift: 65, spin: 410, opacity: 0.68, blur: 0.6 },
  { left: 30, size: 15, duration: 15, delay: -9, drift: 130, spin: 700, opacity: 0.88, blur: 0 },
  { left: 35, size: 10, duration: 11, delay: -8, drift: -85, spin: -480, opacity: 0.76, blur: 0.3 },
  { left: 40, size: 18, duration: 17, delay: -14, drift: 105, spin: 590, opacity: 0.92, blur: 0.2 },
  { left: 45, size: 8, duration: 10, delay: -3, drift: -60, spin: -390, opacity: 0.7, blur: 0.5 },
  { left: 50, size: 13, duration: 14, delay: -11, drift: 125, spin: 610, opacity: 0.84, blur: 0 },
  {
    left: 55,
    size: 10,
    duration: 12,
    delay: -6,
    drift: -115,
    spin: -560,
    opacity: 0.78,
    blur: 0.2,
  },
  { left: 60, size: 16, duration: 16, delay: -1, drift: 80, spin: 680, opacity: 0.9, blur: 0 },
  { left: 65, size: 7, duration: 9, delay: -7, drift: -75, spin: -420, opacity: 0.66, blur: 0.7 },
  { left: 70, size: 14, duration: 13, delay: -10, drift: 120, spin: 540, opacity: 0.86, blur: 0.1 },
  { left: 75, size: 9, duration: 11, delay: -4, drift: -95, spin: -510, opacity: 0.74, blur: 0.4 },
  { left: 80, size: 17, duration: 17, delay: -13, drift: 100, spin: 720, opacity: 0.92, blur: 0 },
  { left: 85, size: 11, duration: 12, delay: -8, drift: -130, spin: -600, opacity: 0.8, blur: 0.2 },
  { left: 90, size: 8, duration: 10, delay: -2, drift: 70, spin: 450, opacity: 0.7, blur: 0.5 },
  { left: 94, size: 15, duration: 15, delay: -11, drift: -105, spin: -640, opacity: 0.88, blur: 0 },
  { left: 97, size: 10, duration: 13, delay: -6, drift: 80, spin: 570, opacity: 0.76, blur: 0.3 },
] as const;

const PETAL_CSS = `
  .falling-petal {
    display: block;
    position: absolute;
    z-index: 20;
    top: -12vh;
    width: var(--petal-size);
    height: var(--petal-height);
    border-radius: 85% 18% 85% 18%;
    background:
      radial-gradient(circle at 28% 25%, rgba(255,255,255,.75) 0 5%, transparent 22%),
      linear-gradient(135deg, #fce4ec 0%, #f48fb1 32%, #ec407a 70%, #c2185b 100%);
    box-shadow: 0 0 8px rgba(236, 64, 122, .32);
    filter: blur(var(--petal-blur));
    opacity: var(--petal-opacity);
    animation: petal-fall var(--petal-duration) linear var(--petal-delay) infinite;
    will-change: transform;
  }

  @keyframes petal-fall {
    0% {
      transform: translate3d(0, -12vh, 0) rotate(0deg) rotateX(0deg);
    }
    35% {
      transform: translate3d(var(--petal-drift-mid), 34vh, 0) rotate(var(--petal-spin-mid)) rotateX(160deg);
    }
    70% {
      transform: translate3d(var(--petal-drift-back), 76vh, 0) rotate(var(--petal-spin-late)) rotateX(300deg);
    }
    100% {
      transform: translate3d(var(--petal-drift), 118vh, 0) rotate(var(--petal-spin)) rotateX(520deg);
    }
  }

`;

export default function FlowpathHero() {
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef(0);
  const transitioningRef = useRef(false);
  const [visibleVideo, setVisibleVideo] = useState(0);

  useEffect(() => {
    const videos = [firstVideoRef.current, secondVideoRef.current];

    if (!videos[0] || !videos[1]) return;

    const firstVideo = videos[0];
    let transitionTimer: number | undefined;
    let cancelled = false;

    const beginCrossfade = () => {
      if (transitioningRef.current) return;

      const currentIndex = activeVideoRef.current;
      const nextIndex = currentIndex === 0 ? 1 : 0;
      const currentVideo = videos[currentIndex];
      const nextVideo = videos[nextIndex];

      if (!currentVideo || !nextVideo) return;

      const fadeDuration = Math.min(CROSSFADE_SECONDS, currentVideo.duration / 3);
      transitioningRef.current = true;
      nextVideo.currentTime = 0;

      void nextVideo
        .play()
        .then(() => {
          if (cancelled) return;

          setVisibleVideo(nextIndex);
          transitionTimer = window.setTimeout(() => {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            activeVideoRef.current = nextIndex;
            transitioningRef.current = false;
          }, fadeDuration * 1000);
        })
        .catch(() => {
          transitioningRef.current = false;
        });
    };

    const handleTimeUpdate = (event: Event) => {
      const video = event.currentTarget as HTMLVideoElement;

      if (video !== videos[activeVideoRef.current] || !Number.isFinite(video.duration)) return;

      const fadeDuration = Math.min(CROSSFADE_SECONDS, video.duration / 3);
      if (video.duration - video.currentTime <= fadeDuration) beginCrossfade();
    };

    const handleEnded = (event: Event) => {
      const video = event.currentTarget as HTMLVideoElement;
      if (video === videos[activeVideoRef.current] && !transitioningRef.current) beginCrossfade();
    };

    videos.forEach((video) => {
      video?.addEventListener("timeupdate", handleTimeUpdate);
      video?.addEventListener("ended", handleEnded);
    });

    void firstVideo.play().catch(() => undefined);

    return () => {
      cancelled = true;
      if (transitionTimer !== undefined) window.clearTimeout(transitionTimer);
      videos.forEach((video) => {
        video?.removeEventListener("timeupdate", handleTimeUpdate);
        video?.removeEventListener("ended", handleEnded);
        video?.pause();
      });
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <style dangerouslySetInnerHTML={{ __html: PETAL_CSS }} />
      <video
        ref={firstVideoRef}
        className="absolute inset-0 h-full w-full object-cover transition-opacity ease-linear"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ opacity: visibleVideo === 0 ? 1 : 0, transitionDuration: `${CROSSFADE_SECONDS}s` }}
        aria-label="Flores rosas em movimento"
      />
      <video
        ref={secondVideoRef}
        className="absolute inset-0 h-full w-full object-cover transition-opacity ease-linear"
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        style={{ opacity: visibleVideo === 1 ? 1 : 0, transitionDuration: `${CROSSFADE_SECONDS}s` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
        {PETALS.map((petal, index) => (
          <span
            key={index}
            className="falling-petal"
            style={
              {
                left: `${petal.left}%`,
                "--petal-size": `${petal.size * 1.4}px`,
                "--petal-height": `${petal.size * 0.9}px`,
                "--petal-duration": `${petal.duration}s`,
                "--petal-delay": `${petal.delay}s`,
                "--petal-drift": `${petal.drift}px`,
                "--petal-drift-mid": `${petal.drift * 0.45}px`,
                "--petal-drift-back": `${petal.drift * -0.25}px`,
                "--petal-spin": `${petal.spin}deg`,
                "--petal-spin-mid": `${petal.spin * 0.38}deg`,
                "--petal-spin-late": `${petal.spin * 0.72}deg`,
                "--petal-opacity": petal.opacity,
                "--petal-blur": `${petal.blur}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </section>
  );
}
