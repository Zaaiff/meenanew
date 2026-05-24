// ─── Edit SURPRISE_URL after you host (Netlify Drop, GitHub Pages) ─────────

const SURPRISE_URL = "https://YOUR-LIVE-URL.netlify.app/surprise.html";

const PAGE = {
  headline: "Scan this, Meena",
  tagline: "I made something just for you, Azmeena",

  herName: "Azmeena",
  nickname: "Meena",
  yourName: "Your love",

  /** Unlock — step 1: nickname, step 2: secret (spaces ignored, capitals optional) */
  gateNickname: "Meena",
  secretWord: "MeenaZaif",

  togetherSince: "2024-06-01",

  openingQuote:
    "“I look at you and I see my whole future — quiet mornings, loud laughter, and a forever that starts with yes.”",

  timeline: [
    {
      date: "June 2024",
      title: "When we became us",
      text: "The month everything changed — when loving you became my favorite truth.",
    },
    {
      date: "Every day since",
      title: "The little moments",
      text: "Texts, smiles, late talks — the ordinary days I'll never take for granted.",
    },
    {
      date: "Today",
      title: "This page",
      text: "You, reading this — and me, loving you more than yesterday.",
    },
    {
      date: "Forever",
      title: "What I'm asking for",
      text: "Not someday. Not maybe. All of me, all of you — for life.",
    },
  ],

  adoreList: [
    "The way your presence feels like home",
    "Your laugh — my favorite sound",
    "How gentle you are with people you love",
    "The strength you carry even when you're tired",
    "Your smile in every photo I keep",
    "That you're Azmeena to the world and Meena to me",
    "How you make me believe in forever",
    "Us against the sky — I never get tired of that view",
  ],

  title: "Azmeena, you are my forever",
  subtitle: "Every moment with you feels like home.",

  heroImage: "images/us-sky.png",

  letter: `My dearest Meena,

You are not just the love of my life — you are my peace, my joy, and the person I choose every single day.

I look at you and I see my future. I see late-night talks, quiet smiles, adventures we'll take, and a life built together with honesty and love.

Thank you for being you — kind, beautiful, strong, and so deeply loved by me.

I don't want a someday with someone else. I want forever with you.

I love you, Azmeena.`,

  proposal: {
    title: "Will you marry me?",
    text: "Not someday far away — I mean it with my whole heart. I want to stand beside you, grow old with you, and call you my wife.",
    subtext: "You already have all of me. This is me asking for all of you, forever.",
  },

  milestones: [
    { label: "My favorite person", value: "You, Meena" },
    { label: "What I want most", value: "Forever with you" },
    { label: "Reason I smile", value: "Azmeena" },
  ],

  /** Chapter 5 — mirror notes */
  littleNotes: [
    "You are loved more than you know, Meena.",
    "On hard days: breathe — I'm still here, still yours.",
    "That smile of yours? It rewires my whole day.",
    "Azmeena, you are enough. You always were.",
    "I fall in love with you again — quietly, constantly.",
    "Whatever comes next, I want it with you.",
  ],

  /** Chapter 6 — promises */
  promisesTitle: "My promise to you",
  promises: [
    "I will never leave you — not when it's easy, not when it's hard, not ever.",
    "When you doubt yourself, I'll remind you that you're not alone.",
    "When life gets loud or messy, I'll still be right here beside you.",
    "I won't walk away from us — I will fight for us, gently and honestly.",
    "On your worst days, you'll still have me — steady, loyal, yours.",
    "Forever means I stay — through everything, with you, Meena.",
  ],

  /** Chapter 7 — tap-to-reveal reasons */
  reasons: [
    "The way you say my name.",
    "Your laugh — especially when you didn't mean to.",
    "How safe I feel when it's just us.",
    "The little things only you notice.",
    "Your kindness, even on hard days.",
    "How you make ordinary moments feel sacred.",
    "Your beauty — inside and out, always.",
    "That you're Azmeena to the world and Meena to me.",
    "Every version of you — silly, serious, glowing.",
    "The way you care about people you love.",
    "Your strength when you don't see it yourself.",
    "How you make me want to be better.",
    "The comfort of your presence — my peace.",
    "Us against the sky — my favorite view.",
    "Because it's you. It has always been you.",
  ],

  couplePhotos: [
    { src: "images/us-sky.png", caption: "Us against the sky — my favorite view" },
    { src: "images/us-sunset.png", caption: "That golden hour with you" },
    { src: "images/us-misty.png", caption: "Close, warm, and yours" },
    { src: "images/our-hands.png", caption: "Your hand in mine" },
  ],

  herPhotos: [
    { src: "images/hero-roses.png", caption: "You and the roses" },
    { src: "images/roses-smile.png", caption: "That smile I adore" },
    { src: "images/formal.png", caption: "Stunning, as always" },
    { src: "images/henna-roses.png", caption: "My beautiful Meena" },
    { src: "images/lilac.png", caption: "Grace in every step" },
    { src: "images/blue-sky.png", caption: "Bright as the sky" },
    { src: "images/park-sky.png", caption: "Sunshine on you" },
    { src: "images/red-selfie.png", caption: "Always you" },
  ],

  songEmbedUrl: "",

  closingLine: "Forever yours — and hoping forever ours,",
};
