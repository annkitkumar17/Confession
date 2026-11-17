/**
 * ===================================================================
 * BIRTHDAY SURPRISE WEBSITE CONFIGURATION
 * ===================================================================
 * Personalized for CHAYA & HARSH
 */

const CONFIG = {
  // --- Personal Names ---
  herName: "Chaya",            // Birthday girl
  myName: "Harsh",             // Boy's name

  // --- Scene 1: Envelope Opening ---
  envelopeBadge: "A LITTLE SOMETHING FOR YOU",
  envelopeHeadline: "For {herName}",
  envelopeSubtext: "A little something I made for your birthday.",
  envelopePrompt: "Tap the seal to open",

  // --- Scene 2: The Question ---
  questionIntro: "Before I wish you happy birthday…",
  questionTitle: "Will you let me celebrate you today?",
  yesButtonLabel: "Yes, obviously",
  
  // Escalating replies when she tries to click "No"
  noButtonReplies: [
    "No? Bold choice, Chaya.",
    "Rude. Try again.",
    "That button seems faulty.",
    "The universe strongly recommends Yes.",
    "I’m choosing to ignore that.",
    "Just press Yes, babe 🥺",
    "Nice try, but you can't escape my love.",
    "Are you really still clicking this? 😂",
    "I can do this all day, sweetheart.",
    "The Yes button is looking really pretty right now..."
  ],

  // --- Scene 3: Birthday Letter ---
  letterBadge: "A LOVE LETTER",
  letterGreeting: "Happy Birthday, {herName}.",
  letterBody: [
    "I hope today feels as special as you make ordinary days feel.",
    "Thank you for your laughter, your kindness, your chaos, and the way you make everything feel a little lighter.",
    "I hope this year brings you everything you quietly wish for—and a few beautiful surprises too."
  ],
  letterSignature: "With too much love,",
  letterNextButton: "One last surprise for you ✨",

  // --- Scene 4: Final Celebration & Candle ---
  celebrationTitle: "Happy Birthday, {herName} 🎂",
  celebrationSubtext: "Close your eyes, make a silent wish, and blow out the candle.",
  wishButtonLabel: "Make a wish ✨",
  wishGrantedMessage: "Wish granted. I’ll be here for all of them.",
  wishGrantedSubtext: "May this year be the softest, brightest, most unforgettable chapter yet.",
  footerText: "Made with love, bad jokes, and a little too much thought. — {myName}",

  // --- Ambient Music / Sound ---
  enableSoundByDefault: false,
};

// Export for module or global use
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
