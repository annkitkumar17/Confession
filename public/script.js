/**
 * ===================================================================
 * BIRTHDAY SURPRISE WEBSITE - INTERACTIVE EXPERIENCE ENGINE
 * Customized for CHAYA & HARSH
 * Strict Interaction-Gated Progression & Mobile-Optimized
 * ===================================================================
 */

function initBirthdayApp() {
  // 1. Configuration Fallback
  const cfg = (typeof CONFIG !== 'undefined' && CONFIG) ? CONFIG : {
    herName: "Chaya",
    myName: "Harsh",
    envelopeBadge: "A LITTLE SOMETHING FOR YOU",
    envelopeHeadline: "For {herName}",
    envelopeSubtext: "A little something I made for your birthday.",
    envelopePrompt: "Tap the seal to open",
    questionIntro: "Before I wish you happy birthday…",
    questionTitle: "Will you let me celebrate you today?",
    yesButtonLabel: "Yes, obviously",
    noButtonReplies: [
      "No? Bold choice, Chaya.",
      "Rude. Try again.",
      "That button seems faulty.",
      "The universe strongly recommends Yes.",
      "I’m choosing to ignore that.",
      "Just press Yes, babe 🥺"
    ],
    letterBadge: "A LOVE LETTER",
    letterGreeting: "Happy Birthday, {herName}.",
    letterBody: [
      "I hope today feels as special as you make ordinary days feel.",
      "Thank you for your laughter, your kindness, your chaos, and the way you make everything feel a little lighter.",
      "I hope this year brings you everything you quietly wish for—and a few beautiful surprises too."
    ],
    letterSignature: "With too much love,",
    letterNextButton: "One last surprise for you ✨",
    celebrationTitle: "Happy Birthday, {herName} 🎂",
    celebrationSubtext: "Close your eyes, make a silent wish, and blow out the candle.",
    wishButtonLabel: "Make a wish ✨",
    wishGrantedMessage: "Wish granted. I’ll be here for all of them.",
    wishGrantedSubtext: "May this year be the softest, brightest, most unforgettable chapter yet.",
    footerText: "Made with love, bad jokes, and a little too much thought. — {myName}",
    enableSoundByDefault: false
  };

  const formatText = (str) => {
    if (!str) return '';
    return str.replace(/{herName}/g, cfg.herName).replace(/{myName}/g, cfg.myName);
  };

  // -------------------------------------------------------------------------
  // 2. DYNAMIC CONTENT INJECTION
  // -------------------------------------------------------------------------
  document.title = `Happy Birthday, ${cfg.herName} ✨`;

  const brandName = document.getElementById('brand-her-name');
  if (brandName) brandName.textContent = cfg.herName;

  const envBadge = document.getElementById('env-badge');
  if (envBadge) envBadge.textContent = formatText(cfg.envelopeBadge);
  const envHeadline = document.getElementById('env-headline');
  if (envHeadline) envHeadline.innerHTML = `For <em>${cfg.herName}</em>`;
  const envSubtext = document.getElementById('env-subtext');
  if (envSubtext) envSubtext.textContent = formatText(cfg.envelopeSubtext);
  const envPrompt = document.getElementById('env-prompt');
  if (envPrompt) envPrompt.textContent = formatText(cfg.envelopePrompt);
  const letterTeaser = document.getElementById('letter-teaser');
  if (letterTeaser) letterTeaser.textContent = `Happy Birthday, ${cfg.herName}`;
  const cardMonogram = document.querySelector('.card-monogram');
  if (cardMonogram) cardMonogram.textContent = cfg.herName.charAt(0).toUpperCase();

  const qIntro = document.getElementById('question-intro');
  if (qIntro) qIntro.textContent = formatText(cfg.questionIntro);
  const qTitle = document.getElementById('question-title');
  if (qTitle) qTitle.textContent = formatText(cfg.questionTitle);
  const yesBtn = document.getElementById('btn-yes');
  if (yesBtn) yesBtn.innerHTML = `<span>${formatText(cfg.yesButtonLabel)}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

  const letterBadge = document.getElementById('letter-badge');
  if (letterBadge) letterBadge.textContent = formatText(cfg.letterBadge);
  const letterGreeting = document.getElementById('letter-greeting');
  if (letterGreeting) letterGreeting.textContent = formatText(cfg.letterGreeting);
  const letterBodyContainer = document.getElementById('letter-body');
  if (letterBodyContainer && Array.isArray(cfg.letterBody)) {
    letterBodyContainer.innerHTML = cfg.letterBody.map(p => `<p>${formatText(p)}</p>`).join('');
  }
  const signoffIntro = document.getElementById('signoff-intro');
  if (signoffIntro) signoffIntro.textContent = formatText(cfg.letterSignature);
  const signoffName = document.getElementById('signoff-name');
  if (signoffName) signoffName.textContent = cfg.myName;
  const btnNextToWish = document.getElementById('btn-next-to-wish');
  if (btnNextToWish) {
    const span = btnNextToWish.querySelector('span');
    if (span) span.textContent = formatText(cfg.letterNextButton);
  }

  const celTitle = document.getElementById('cel-title');
  if (celTitle) celTitle.innerHTML = `Happy Birthday, <em>${cfg.herName}</em> 🎂`;
  const celSubtext = document.getElementById('cel-subtext');
  if (celSubtext) celSubtext.textContent = formatText(cfg.celebrationSubtext);
  const btnWish = document.getElementById('btn-wish');
  if (btnWish) btnWish.innerHTML = `<span>${formatText(cfg.wishButtonLabel)}</span>`;
  const wishTitle = document.getElementById('wish-title');
  if (wishTitle) wishTitle.textContent = formatText(cfg.wishGrantedMessage);
  const wishSub = document.getElementById('wish-subtext');
  if (wishSub) wishSub.textContent = formatText(cfg.wishGrantedSubtext);
  const footerText = document.getElementById('footer-text');
  if (footerText) footerText.textContent = formatText(cfg.footerText);

  // -------------------------------------------------------------------------
  // 3. ROBUST CONFETTI EMITTER (With local fallback)
  // -------------------------------------------------------------------------
  const fireConfetti = (opts = {}) => {
    if (typeof confetti === 'function') {
      try {
        confetti(opts);
        return;
      } catch (err) {
        console.warn('CDN confetti error, falling back', err);
      }
    }
    // Lightweight inline DOM particle fallback
    const count = opts.particleCount || 30;
    const colors = opts.colors || ['#FFF8F3', '#E8747F', '#D4A373', '#6E2B3B'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.zIndex = '9995';
      p.style.pointerEvents = 'none';
      p.style.width = `${Math.random() * 8 + 6}px`;
      p.style.height = `${Math.random() * 8 + 6}px`;
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      const startX = (opts.origin && opts.origin.x !== undefined ? opts.origin.x : 0.5) * window.innerWidth;
      const startY = (opts.origin && opts.origin.y !== undefined ? opts.origin.y : 0.6) * window.innerHeight;
      p.style.left = `${startX}px`;
      p.style.top = `${startY}px`;

      const angle = (Math.random() - 0.5) * Math.PI;
      const speed = Math.random() * 12 + 6;
      const vx = Math.sin(angle) * speed;
      const vy = -Math.cos(angle) * speed;

      document.body.appendChild(p);

      let px = startX, py = startY, curVy = vy, opacity = 1;
      const anim = setInterval(() => {
        px += vx;
        py += curVy;
        curVy += 0.45; // gravity
        opacity -= 0.02;
        p.style.left = `${px}px`;
        p.style.top = `${py}px`;
        p.style.opacity = `${opacity}`;
        if (opacity <= 0 || py > window.innerHeight) {
          clearInterval(anim);
          p.remove();
        }
      }, 16);
    }
  };

  // -------------------------------------------------------------------------
  // 4. WEB AUDIO SYNTHESIZER
  // -------------------------------------------------------------------------
  class AudioManager {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.melodyInterval = null;
      this.melodyIndex = 0;
      this.isSoundEnabled = cfg.enableSoundByDefault || false;

      this.notes = {
        C4: 261.63, D4: 293.66, E4: 329.63, G4: 392.00, A4: 440.00,
        C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
        A5: 880.00, B5: 987.77, C6: 1046.50
      };

      this.melody = [
        { note: 'G4', dur: 0.6 }, { note: 'G4', dur: 0.4 }, { note: 'A4', dur: 0.9 }, { note: 'G4', dur: 0.9 },
        { note: 'C5', dur: 0.9 }, { note: 'B5', dur: 1.6 },
        { note: 'G4', dur: 0.6 }, { note: 'G4', dur: 0.4 }, { note: 'A4', dur: 0.9 }, { note: 'G4', dur: 0.9 },
        { note: 'D5', dur: 0.9 }, { note: 'C5', dur: 1.6 },
        { note: 'G4', dur: 0.6 }, { note: 'G4', dur: 0.4 }, { note: 'G5', dur: 0.9 }, { note: 'E5', dur: 0.9 },
        { note: 'C5', dur: 0.9 }, { note: 'B5', dur: 0.9 }, { note: 'A4', dur: 1.4 },
        { note: 'F5', dur: 0.6 }, { note: 'F5', dur: 0.4 }, { note: 'E5', dur: 0.9 }, { note: 'C5', dur: 0.9 },
        { note: 'D5', dur: 0.9 }, { note: 'C5', dur: 2.2 }
      ];
    }

    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playChime(freq, duration = 1.2, volume = 0.15) {
      if (!this.isSoundEnabled) return;
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const oscHarmonic = this.ctx.createOscillator();
        const gainHarmonic = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        oscHarmonic.type = 'triangle';
        oscHarmonic.frequency.setValueAtTime(freq * 2.01, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(volume, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        gainHarmonic.gain.setValueAtTime(0, now);
        gainHarmonic.gain.linearRampToValueAtTime(volume * 0.25, now + 0.012);
        gainHarmonic.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);

        osc.connect(gain);
        oscHarmonic.connect(gainHarmonic);
        gain.connect(this.ctx.destination);
        gainHarmonic.connect(this.ctx.destination);

        osc.start(now);
        oscHarmonic.start(now);
        osc.stop(now + duration);
        oscHarmonic.stop(now + duration);
      } catch (e) {
        console.warn('Audio playback caught:', e);
      }
    }

    playPaperRustle() {
      if (!this.isSoundEnabled) return;
      this.playChime(this.notes.C5, 0.8, 0.12);
      setTimeout(() => this.playChime(this.notes.E5, 0.9, 0.14), 120);
      setTimeout(() => this.playChime(this.notes.G5, 1.2, 0.16), 240);
    }

    playDodgePop() {
      if (!this.isSoundEnabled) return;
      this.initContext();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } catch (e) {}
    }

    playYesChord() {
      if (!this.isSoundEnabled) return;
      this.playChime(this.notes.C5, 1.4, 0.16);
      setTimeout(() => this.playChime(this.notes.E5, 1.5, 0.18), 80);
      setTimeout(() => this.playChime(this.notes.G5, 1.6, 0.20), 160);
      setTimeout(() => this.playChime(this.notes.C6, 2.0, 0.22), 260);
    }

    playCelebrationFlourish() {
      if (!this.isSoundEnabled) return;
      const notesToPlay = [this.notes.C5, this.notes.E5, this.notes.G5, this.notes.A5, this.notes.C6, this.notes.E5, this.notes.G5, this.notes.C6];
      notesToPlay.forEach((freq, idx) => {
        setTimeout(() => this.playChime(freq, 1.5, 0.18), idx * 110);
      });
    }

    startAmbientMelody() {
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.playNextMelodyNote();
    }

    stopAmbientMelody() {
      this.isPlaying = false;
      if (this.melodyInterval) {
        clearTimeout(this.melodyInterval);
        this.melodyInterval = null;
      }
    }

    playNextMelodyNote() {
      if (!this.isPlaying || !this.isSoundEnabled) return;
      const item = this.melody[this.melodyIndex];
      const freq = this.notes[item.note] || 440;
      this.playChime(freq, item.dur * 1.5, 0.12);
      this.melodyIndex = (this.melodyIndex + 1) % this.melody.length;
      const delayMs = item.dur * 850;
      this.melodyInterval = setTimeout(() => this.playNextMelodyNote(), delayMs);
    }

    toggleSound() {
      this.initContext();
      this.isSoundEnabled = !this.isSoundEnabled;
      const btn = document.getElementById('sound-toggle-btn');
      const text = document.getElementById('sound-toggle-text');

      if (this.isSoundEnabled) {
        if (btn) btn.classList.add('playing');
        if (text) text.textContent = 'Music: On';
        this.startAmbientMelody();
      } else {
        if (btn) btn.classList.remove('playing');
        if (text) text.textContent = 'Music: Off';
        this.stopAmbientMelody();
      }
      return this.isSoundEnabled;
    }
  }

  const audio = new AudioManager();

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      audio.toggleSound();
    });
  }

  // -------------------------------------------------------------------------
  // 5. INTERACTION-GATED PAGE PROGRESSION SYSTEM
  // -------------------------------------------------------------------------
  let currentScene = 1;
  let unlockedScenes = 1;

  const scenes = [
    document.getElementById('scene-envelope'),
    document.getElementById('scene-question'),
    document.getElementById('scene-letter'),
    document.getElementById('scene-celebration')
  ];

  const dots = document.querySelectorAll('.progress-dot');
  const chapterNumText = document.getElementById('current-chapter-num');
  const navBackContainer = document.getElementById('nav-back-container');
  const btnNavBack = document.getElementById('btn-nav-back');

  const goToScene = (targetIndex) => {
    if (targetIndex < 1 || targetIndex > 4 || targetIndex > unlockedScenes) return;

    currentScene = targetIndex;

    scenes.forEach((sceneEl, idx) => {
      if (!sceneEl) return;
      const sceneNum = idx + 1;
      sceneEl.classList.remove('active', 'prev');

      if (sceneNum === currentScene) {
        sceneEl.classList.add('active');
        sceneEl.scrollTop = 0;
      } else if (sceneNum < currentScene) {
        sceneEl.classList.add('prev');
      }
    });

    if (chapterNumText) {
      chapterNumText.textContent = currentScene;
    }

    dots.forEach(dot => {
      const dotIndex = parseInt(dot.getAttribute('data-index'), 10);
      dot.classList.remove('active');

      if (dotIndex <= unlockedScenes) {
        dot.classList.remove('locked');
      } else {
        dot.classList.add('locked');
      }

      if (dotIndex === currentScene) {
        dot.classList.add('active');
      }
    });

    if (navBackContainer) {
      navBackContainer.style.display = currentScene > 1 ? 'block' : 'none';
    }
  };

  if (btnNavBack) {
    btnNavBack.addEventListener('click', () => {
      if (currentScene > 1) {
        goToScene(currentScene - 1);
      }
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      if (targetIndex <= unlockedScenes) {
        goToScene(targetIndex);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 6. SCENE 1: ENVELOPE INTERACTION (Unlocks Chapter 2)
  // -------------------------------------------------------------------------
  const envelope = document.getElementById('envelope-card');
  const waxSeal = document.getElementById('wax-seal');
  let envelopeOpened = false;

  const openEnvelope = () => {
    if (envelopeOpened) return;
    envelopeOpened = true;
    if (envelope) envelope.classList.add('is-open');
    audio.playPaperRustle();

    fireConfetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#FFF8F3', '#E8747F', '#D4A373', '#6E2B3B'],
      scalar: 0.8,
      ticks: 180,
      gravity: 0.8
    });

    unlockedScenes = Math.max(unlockedScenes, 2);

    setTimeout(() => {
      goToScene(2);
    }, 1150);
  };

  if (envelope) {
    envelope.addEventListener('click', openEnvelope);
  }
  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  // -------------------------------------------------------------------------
  // 7. SCENE 2: THE QUESTION & PLAYFUL "NO" (Unlocks Chapter 3)
  // -------------------------------------------------------------------------
  const btnNo = document.getElementById('btn-no');
  const toastNo = document.getElementById('playful-toast');
  const arena = document.getElementById('button-arena');
  let noAttempts = 0;
  let toastTimer = null;

  const replies = Array.isArray(cfg.noButtonReplies) && cfg.noButtonReplies.length > 0
    ? cfg.noButtonReplies
    : ["Rude. Try again.", "No? Bold choice.", "That button seems faulty.", "The universe strongly recommends Yes.", "Just press Yes, babe 🥺"];

  const dodgeNoButton = (e) => {
    if (e) e.preventDefault();
    noAttempts++;
    audio.playDodgePop();

    const isMobile = window.innerWidth <= 680;
    // Keep dodge range conservative so button never leaves phone screen
    const maxMoveX = isMobile ? 32 : 120;
    const maxMoveY = isMobile ? 26 : 45;

    const randomX = (Math.random() - 0.5) * 2 * maxMoveX;
    const randomY = (Math.random() - 0.5) * 2 * maxMoveY;
    const randomAngle = (Math.random() - 0.5) * 20;
    const scale = Math.max(0.75, 1 - noAttempts * 0.04);

    if (btnNo) {
      btnNo.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomAngle}deg) scale(${scale})`;
    }

    if (yesBtn) {
      const yesScale = Math.min(1.3, 1 + noAttempts * 0.06);
      yesBtn.style.transform = `scale(${yesScale})`;
      yesBtn.style.boxShadow = `0 14px 35px -5px rgba(110, 43, 59, 0.45), 0 0 ${20 + noAttempts * 6}px ${6 + noAttempts * 2}px rgba(232, 116, 127, 0.45)`;
    }

    if (toastNo) {
      const replyText = formatText(replies[(noAttempts - 1) % replies.length]);
      toastNo.textContent = replyText;
      toastNo.classList.add('show');
    }

    if (btnNo) {
      const cheekyLabels = ["No", "Still No?", "Are you sure?", "Faulty button", "Really?", "Nope!"];
      btnNo.textContent = cheekyLabels[noAttempts % cheekyLabels.length];
    }

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      if (toastNo) toastNo.classList.remove('show');
    }, 2800);
  };

  if (btnNo) {
    btnNo.addEventListener('mouseenter', dodgeNoButton);
    btnNo.addEventListener('click', dodgeNoButton);
    btnNo.addEventListener('touchstart', dodgeNoButton, { passive: false });
  }

  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      audio.playYesChord();

      fireConfetti({
        particleCount: 50,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#E8747F', '#6E2B3B', '#FFF8F3', '#D4A373']
      });

      if (toastNo) {
        toastNo.textContent = `Good choice, ${cfg.herName}. I knew you'd see reason ❤️`;
        toastNo.classList.add('show');
      }

      unlockedScenes = Math.max(unlockedScenes, 3);

      setTimeout(() => {
        goToScene(3);
      }, 1000);
    });
  }

  // -------------------------------------------------------------------------
  // 8. SCENE 3: THE BIRTHDAY LETTER (Unlocks Chapter 4)
  // -------------------------------------------------------------------------
  if (btnNextToWish) {
    btnNextToWish.addEventListener('click', () => {
      audio.playChime(audio.notes.G5, 1.2, 0.15);
      unlockedScenes = Math.max(unlockedScenes, 4);
      goToScene(4);
    });
  }

  // -------------------------------------------------------------------------
  // 9. SCENE 4: FINAL CELEBRATION & CANDLE
  // -------------------------------------------------------------------------
  const candleStage = document.getElementById('candle-stage');
  const wishRevealBox = document.getElementById('wish-reveal-box');
  let wishMade = false;

  const triggerWishCelebration = () => {
    if (wishMade) return;
    wishMade = true;

    if (candleStage) {
      candleStage.classList.add('blown-out');

      for (let i = 0; i < 4; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke-particle';
        smoke.style.left = `${10 + (Math.random() - 0.5) * 10}px`;
        smoke.style.animationDelay = `${i * 0.15}s`;
        candleStage.appendChild(smoke);
        setTimeout(() => smoke.remove(), 1400);
      }
    }

    audio.playCelebrationFlourish();

    if (!audio.isSoundEnabled) {
      audio.toggleSound();
    }

    // Grand celebration fireworks & confetti
    const colors = ['#FFF8F3', '#E8747F', '#6E2B3B', '#D4A373', '#FCECEE'];

    fireConfetti({
      particleCount: 85,
      spread: 85,
      origin: { y: 0.65 },
      colors: colors,
      gravity: 0.7,
      ticks: 240
    });

    setTimeout(() => {
      fireConfetti({
        particleCount: 55,
        angle: 60,
        spread: 60,
        origin: { x: 0.15, y: 0.7 },
        colors: colors
      });
      fireConfetti({
        particleCount: 55,
        angle: 120,
        spread: 60,
        origin: { x: 0.85, y: 0.7 },
        colors: colors
      });
    }, 350);

    setTimeout(() => {
      fireConfetti({
        particleCount: 45,
        spread: 100,
        origin: { y: 0.4 },
        colors: ['#E8747F', '#6E2B3B', '#D4A373'],
        shapes: ['circle'],
        scalar: 1.1,
        gravity: 0.5
      });
    }, 800);

    if (wishRevealBox) {
      wishRevealBox.classList.add('show');
    }

    if (btnWish) {
      btnWish.style.pointerEvents = 'none';
      btnWish.style.opacity = '0.7';
      btnWish.innerHTML = `<span>Wish made ❤️</span>`;
    }
  };

  if (btnWish) {
    btnWish.addEventListener('click', triggerWishCelebration);
  }
  if (candleStage) {
    candleStage.addEventListener('click', triggerWishCelebration);
  }

  // -------------------------------------------------------------------------
  // 10. AMBIENT CURSOR PARTICLES
  // -------------------------------------------------------------------------
  let lastSparkleTime = 0;
  const createSparkle = (x, y) => {
    const now = Date.now();
    if (now - lastSparkleTime < 110) return;
    lastSparkleTime = now;

    const sparkle = document.createElement('div');
    sparkle.className = 'cursor-sparkle';
    sparkle.style.left = `${x - 4}px`;
    sparkle.style.top = `${y - 4}px`;

    const size = Math.floor(Math.random() * 5) + 3;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    const colors = ['#E8747F', '#D4A373', '#6E2B3B', '#FFF0E5'];
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.boxShadow = `0 0 8px ${sparkle.style.backgroundColor}`;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 750);
  };

  window.addEventListener('mousemove', (e) => {
    createSparkle(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      createSparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}

// Auto-run on DOM ready or immediate if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBirthdayApp);
} else {
  initBirthdayApp();
}
