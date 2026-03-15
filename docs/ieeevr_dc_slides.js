/**
 * IEEE VR 2026 — Doctoral Consortium
 * VR Ecology: Relational Haptic Co-Creation for Kinaesthetic Creativity
 * S.C. Vollmer — York University
 *
 * Drop this SLIDES array into the same site template used for
 * sparks2026.headsetparties.com — same JS/CSS structure, new content.
 *
 * IMAGE ASSETS NEEDED (host in site root):
 *   scene_0045.png  — from live_sessions/data/scene_images/scene_0045.png
 *   scene_0048.png  — from live_sessions/data/scene_images/scene_0048.png
 *
 * ALSO WORTH GENERATING:
 *   creative_mode.png — screenshot of creative mode (cymatic floor + fog + stars)
 *   Press M in browser, enter XR, take spectator screenshot — looks far better
 *   than evaluative grid for a presentation title slide.
 */

const SLIDES = [

  // ─────────────────────────────────────────────────────────────────────
  // 01 · TITLE / HOOK
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "01",
    title: "VR Ecology · IEEE VR DC 2026",
    contentHTML: `
      <p style="color:rgba(255,255,255,.82);margin:0 0 10px;font-size:.86em;letter-spacing:.05em;text-transform:uppercase">
        Doctoral Consortium · S.C. Vollmer · York University
      </p>
      <p style="margin:0 0 16px">
        <span style="color:#8cffc7;font-weight:700;font-size:1.08em;line-height:1.3;display:block">
          Relational Haptic Co-Creation<br>for Kinaesthetic Creativity in XR
        </span>
      </p>
      <p style="margin:0 0 12px;color:rgba(255,255,255,.82);line-height:1.7;font-size:.96em">
        How can an AI partner stay <em>legible</em> and <em>negotiable</em>
        when the primary interface is the body — not the text box?
      </p>
      <p style="margin:0;color:rgba(255,255,255,.80);font-style:italic;font-size:.88em;
                border-left:2px solid rgba(45,201,122,.4);padding-left:.7em">
        XR as somatic spacetime: you lean, reach, hesitate, feel a pull.<br>
        Something that pushes back makes sense here.
      </p>`,
    mediaSVG: `<img src="ieeevr_otter.png"
      alt="2026 IEEE VR Daegu Korea — otter wearing VR goggles, surfing a wave"
      style="width:100%;height:auto;max-height:100%;object-fit:contain;
             display:block;filter:drop-shadow(0 6px 28px rgba(45,201,122,.28))">`,
    notes: [
      "10 minutes. First presenter of the day. First half: enough context to understand the problem. Second half: three open questions I'm bringing to the DC.",
      "The core tension: AI keeps pulling creative practice back toward text — which is exactly the opposite of what XR should be doing. That gap is what this talk is about."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 02 · THE PROBLEM
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "02",
    title: "AI pulls creative practice toward text",
    contentHTML: `
      <p style="margin:0 0 12px;color:rgba(255,255,255,.82);font-size:.96em">
        Generative AI pulls creative making toward language.
        Prompting asks you to:
      </p>
      <ul style="margin:0 0 14px;color:rgba(255,255,255,.78);line-height:2.1;font-size:.94em">
        <li>stop moving</li>
        <li>stop listening</li>
        <li>start explaining</li>
      </ul>
      <p style="margin:0 0 12px;color:rgba(255,255,255,.78);font-size:.94em">
        XR arrives as
        <span style="color:#8cffc7;font-weight:700">somatic spacetime</span> —
        you lean, reach, hesitate, feel a pull.
        That is fundamentally different from a desktop.
      </p>
      <p style="margin:0;color:rgba(255,255,255,.82);font-style:italic;font-size:.9em">
        My dissertation asks: what does AI collaboration look like
        when the primary interface is the body?
      </p>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160"
      style="width:100%;height:100%;max-height:100%;display:block">
      <defs>
        <marker id="s2-a" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill="rgba(140,255,199,.82)"/>
        </marker>
      </defs>
      <!-- left: text interface -->
      <rect x="6" y="16" width="142" height="90" rx="11"
        fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.14)" stroke-width="1.6"/>
      <rect x="20" y="30" width="114" height="13" rx="4" fill="rgba(255,255,255,.07)"/>
      <rect x="20" y="50" width="82" height="9"  rx="3" fill="rgba(255,255,255,.05)"/>
      <rect x="20" y="64" width="98" height="9"  rx="3" fill="rgba(255,255,255,.05)"/>
      <rect x="20" y="78" width="66" height="9"  rx="3" fill="rgba(255,255,255,.05)"/>
      <text x="77" y="122" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">stop · explain · wait</text>
      <!-- right: body in space -->
      <rect x="192" y="16" width="142" height="90" rx="11"
        fill="rgba(140,255,199,.06)" stroke="#8cffc7" stroke-width="1.7"/>
      <!-- simplified hand shape -->
      <path d="M266,62 C255,50 248,44 244,39 C241,35 251,33 254,38 L262,47
               L262,35 C262,30 270,30 270,35 L270,47
               L270,35 C270,30 278,30 278,35 L278,52
               C280,45 287,46 287,52 L285,70
               C284,78 276,83 268,83 L256,83
               C249,83 245,79 245,72"
        fill="none" stroke="#8cffc7" stroke-width="1.8" stroke-linecap="round"/>
      <!-- paint stroke -->
      <path d="M238,58 C250,46 270,54 272,66"
        fill="none" stroke="rgba(140,255,199,.35)" stroke-width="1.6" stroke-linecap="round"/>
      <text x="263" y="122" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">move · feel · make</text>
      <!-- centre arrow -->
      <line x1="150" y1="61" x2="190" y2="61" stroke="rgba(140,255,199,.4)"
        stroke-width="1.7" stroke-dasharray="4,3" marker-end="url(#s2-a)"/>
      <text x="170" y="53" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">instead</text>
      <!-- labels -->
      <text x="77"  y="140" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif">text-first AI</text>
      <text x="263" y="140" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">body-first XR</text>
    </svg>`,
    notes: [
      "Prompting can be useful, but it asks makers to stop moving, stop listening, and start explaining. It's a language-first interface dropped into a body-first experience.",
      "XR arrives as personal somatic spacetime: you lean, you reach, you hesitate, you feel a pull. The craving for something that pushes back is far more sensible here than on a desktop.",
      "My dissertation lives in that gap: what does AI collaboration look like when the primary interface is the body — not the text box?"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 03 · RESEARCH FRAMING
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "03",
    title: "Relational presence as empirical coordination",
    contentHTML: `
      <p style="margin:0 0 4px;color:rgba(255,255,255,.72)">
        AI intent must become
        <span style="color:#8cffc7;font-weight:700">legible enough</span>
        for timely, consentful* turn-taking during embodied making.
      </p>
      <p style="margin:0 0 10px;font-size:.77em;color:rgba(255,255,255,.38);font-style:italic">
        * consentful — design practice for consent-based interaction · consentfultech.io
      </p>
      <p style="margin:0 0 8px;font-size:.88em;color:rgba(255,255,255,.82)">
        Design resources translated into constraints:
      </p>
      <table style="border-collapse:collapse;width:100%;font-size:.86em;margin:0 0 10px;line-height:1.7">
        <tr style="color:rgba(255,255,255,.80);font-size:.84em;border-bottom:1px solid rgba(255,255,255,.09)">
          <th style="text-align:left;padding:0 10px 5px 0;font-weight:500">source</th>
          <th style="text-align:left;padding:0 10px 5px;font-weight:500">principle</th>
          <th style="text-align:left;padding:0 0 5px;font-weight:500">becomes</th>
        </tr>
        <tr>
          <td style="padding:4px 10px 4px 0;color:#8cffc7;font-weight:600">ProTactile</td>
          <td style="padding:4px 10px;color:rgba(255,255,255,.88)">phatic grounding · back-channel</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.88)">ORIENT · CONFIRM</td>
        </tr>
        <tr>
          <td style="padding:4px 10px 4px 0;color:#8cffc7;font-weight:600">ProTactile</td>
          <td style="padding:4px 10px;color:rgba(255,255,255,.88)">confirmable, repairable</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.88)">OFFER · HANDOFF</td>
        </tr>
        <tr>
          <td style="padding:4px 10px 4px 0;color:#7aa7ff;font-weight:600">Interspecies</td>
          <td style="padding:4px 10px;color:rgba(255,255,255,.88)">calming signal, not command</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.88)">SLOW · SETTLE</td>
        </tr>
      </table>
      <p style="margin:8px 0 0;font-size:.87em;color:rgba(255,255,255,.82);
                padding-left:.7em;border-left:2px solid rgba(45,201,122,.42)">
        <span style="color:#8cffc7;font-weight:700;font-style:normal">Did you know?</span>
        <span style="font-style:italic"> 🦦 sea otters hold paws while sleeping so they don't drift apart —
        tactile co-regulation without language.</span>
      </p>
      <p style="margin:0 0 10px;color:rgba(255,255,255,.72);font-style:italic;font-size:.88em">
        The cue is an invitation:<br>confirmable, ignorable, repairable in-the-moment.
      </p>
      <p style="margin:0;color:rgba(255,255,255,.82);font-size:.87em;font-style:italic;border-top:1px solid rgba(255,255,255,.09);padding-top:10px">
        Presence is not the illusion of being somewhere — it is the felt reciprocity of being-with.
      </p>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260"
      style="width:100%;height:100%;max-height:100%;display:block">
      <defs>
        <marker id="s3b-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="rgba(140,255,199,.6)"/>
        </marker>
      </defs>
      <!-- N→E: right of AI to top of HAPTIC -->
      <path d="M 194,31 C 238,31 250,60 250,110"
        fill="none" stroke="rgba(140,255,199,.38)" stroke-width="1.6"
        marker-end="url(#s3b-a)"/>
      <text x="240" y="58" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">intent</text>
      <!-- E→S: bottom of HAPTIC to right of FELT -->
      <path d="M 250,152 C 250,196 222,229 194,229"
        fill="none" stroke="rgba(140,255,199,.38)" stroke-width="1.6"
        marker-end="url(#s3b-a)"/>
      <text x="268" y="196" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">signal</text>
      <!-- S→W: left of FELT to bottom of MAKER -->
      <path d="M 106,229 C 78,229 50,202 50,152"
        fill="none" stroke="rgba(140,255,199,.38)" stroke-width="1.6"
        marker-end="url(#s3b-a)"/>
      <text x="58" y="218" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">response</text>
      <!-- W→N: top of MAKER to left of AI -->
      <path d="M 50,110 C 50,60 62,31 106,31"
        fill="none" stroke="rgba(140,255,199,.38)" stroke-width="1.6"
        marker-end="url(#s3b-a)"/>
      <text x="28" y="68" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">context</text>
      <!-- center ghost -->
      <text x="150" y="127" text-anchor="middle" fill="rgba(255,255,255,.11)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">relational</text>
      <text x="150" y="141" text-anchor="middle" fill="rgba(255,255,255,.11)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">loop</text>
      <!-- N: AI -->
      <rect x="106" y="10" width="88" height="42" rx="9"
        fill="rgba(122,167,255,.12)" stroke="#7aa7ff" stroke-width="1.7"/>
      <text x="150" y="30" text-anchor="middle" fill="#7aa7ff"
        font-size="11" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">AI</text>
      <text x="150" y="44" text-anchor="middle" fill="rgba(255,255,255,.55)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">reads context</text>
      <!-- E: HAPTIC -->
      <rect x="206" y="110" width="88" height="42" rx="9"
        fill="rgba(140,255,199,.12)" stroke="#8cffc7" stroke-width="1.7"/>
      <text x="250" y="130" text-anchor="middle" fill="#8cffc7"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">HAPTIC</text>
      <text x="250" y="144" text-anchor="middle" fill="rgba(255,255,255,.55)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">cue fired</text>
      <!-- S: FELT -->
      <rect x="106" y="208" width="88" height="42" rx="9"
        fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.28)" stroke-width="1.7"/>
      <text x="150" y="228" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">FELT</text>
      <text x="150" y="242" text-anchor="middle" fill="rgba(255,255,255,.55)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">in the body</text>
      <!-- W: MAKER -->
      <rect x="6" y="110" width="88" height="42" rx="9"
        fill="rgba(140,255,199,.08)" stroke="rgba(140,255,199,.50)" stroke-width="1.7"/>
      <text x="50" y="130" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">MAKER</text>
      <text x="50" y="144" text-anchor="middle" fill="rgba(255,255,255,.55)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">responds</text>
    </svg>`,
    caption: "empirical coordination problem — not UX design problem",
    notes: [
      "I treat relational presence as an empirical coordination problem: whether AI intent becomes legible enough to support timely, consentful turn-taking during embodied making.",
      "Consentful — from the Consentful Tech project (consentfultech.io) — is a design practice for building systems that respect consent as an active, ongoing, renegotiable relationship. Not a checkbox. That's why I use it instead of 'consensual', which carries a different weight.",
      "Did you know: sea otters hold paws while sleeping so they don't drift apart. That behaviour is called rafting — tactile co-regulation without language. The haptic system I'm describing does something structurally similar: it holds contact so the collaboration doesn't drift.",
      "The three design constraints — legible, negotiable, repairable — come from the literatures I draw on, not from UX heuristics.",
      "ProTactile gives me a model for phatic grounding and back-channeling: brief confirmations that are repeatable and renegotiable in real time.",
      "Interspecies coordination gives me a heuristic check: can a cue be understood as orientation or invitation rather than instruction? These aren't metaphors to decorate an AI — they're constraints on what the haptic vocabulary is allowed to be."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 04 · THE HAPTIC VOCABULARY
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "04",
    title: "A small, learnable tactile language",
    contentHTML: `
      <p style="margin:0 0 10px;color:rgba(255,255,255,.82)">
        Three coordination functions:
      </p>
      <table style="border-collapse:collapse;width:100%;font-size:.86em;margin:0 0 10px">
        <tr style="color:rgba(255,255,255,.80);font-size:.87em">
          <th style="text-align:left;padding:2px 8px 7px 0;font-weight:500">function</th>
          <th style="text-align:left;padding:2px 8px 7px;font-weight:500">signal</th>
          <th style="text-align:left;padding:2px 0 7px;font-weight:500">means</th>
        </tr>
        <tr>
          <td style="padding:4px 8px 4px 0;color:#8cffc7;font-weight:600">ORIENT</td>
          <td style="padding:4px 8px;color:rgba(255,255,255,.82)">bilateral shoulder tap · 200ms</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.80)">"look here"</td>
        </tr>
        <tr>
          <td style="padding:4px 8px 4px 0;color:#7aa7ff;font-weight:600">OFFER</td>
          <td style="padding:4px 8px;color:rgba(255,255,255,.82)">soft double-pulse · ~500ms</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.80)">"may I?"</td>
        </tr>
        <tr>
          <td style="padding:4px 8px 4px 0;color:#7aa7ff;font-weight:600">HANDOFF</td>
          <td style="padding:4px 8px;color:rgba(255,255,255,.82)">firm bilateral · 500ms sustained</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.80)">"your turn"</td>
        </tr>
        <tr>
          <td style="padding:4px 8px 4px 0;color:#8cffc7;font-weight:600">CONFIRM</td>
          <td style="padding:4px 8px;color:rgba(255,255,255,.82)">quick bilateral tap · 100ms</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.80)">"got it"</td>
        </tr>
        <tr>
          <td style="padding:4px 8px 4px 0;color:rgba(255,160,120,.82);font-weight:600">SLOW</td>
          <td style="padding:4px 8px;color:rgba(255,255,255,.82)">sustained low bilateral · 800ms</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.80)">"ease the pace"</td>
        </tr>
        <tr>
          <td style="padding:4px 8px 4px 0;color:rgba(255,160,120,.82);font-weight:600">SETTLE</td>
          <td style="padding:4px 8px;color:rgba(255,255,255,.82)">descending intensity · 1s</td>
          <td style="padding:4px 0;color:rgba(255,255,255,.80)">"rest here"</td>
        </tr>
      </table>
      <p style="margin:0 0 8px;color:rgba(255,255,255,.80);font-style:italic;font-size:.86em">
        Confirmable · Ignorable · Repairable in-the-moment
      </p>
      <p style="margin:0;font-size:.86em;color:rgba(255,255,255,.88);
                border-left:2px solid rgba(45,201,122,.42);padding-left:.7em">
        The AI taps — the maker moves — that movement returns as context for the next move.
      </p>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 290"
      style="width:100%;height:100%;max-height:100%;display:block">
      <!-- head -->
      <circle cx="100" cy="28" r="20"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <!-- torso -->
      <rect x="68" y="52" width="64" height="80" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <!-- upper arms (shoulders) -->
      <rect x="30" y="52" width="36" height="28" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <rect x="134" y="52" width="36" height="28" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <!-- lower arms (forearms) -->
      <rect x="30" y="84" width="36" height="30" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <rect x="134" y="84" width="36" height="30" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <!-- legs -->
      <rect x="70" y="136" width="26" height="66" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
      <rect x="104" y="136" width="26" height="66" rx="8"
        fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2"/>

      <!-- ORIENT zone: shoulders — mint green -->
      <rect x="30" y="52" width="36" height="28" rx="8"
        fill="rgba(140,255,199,.22)" stroke="#8cffc7" stroke-width="2.1"/>
      <rect x="134" y="52" width="36" height="28" rx="8"
        fill="rgba(140,255,199,.22)" stroke="#8cffc7" stroke-width="2.1"/>

      <!-- NEGOTIATE zone: forearms — periwinkle -->
      <rect x="30" y="84" width="36" height="30" rx="8"
        fill="rgba(122,167,255,.2)" stroke="#7aa7ff" stroke-width="1.8"/>
      <rect x="134" y="84" width="36" height="30" rx="8"
        fill="rgba(122,167,255,.2)" stroke="#7aa7ff" stroke-width="1.8"/>

      <!-- REGULATE zone: chest/upper torso — warm orange -->
      <rect x="68" y="52" width="64" height="44" rx="8"
        fill="rgba(255,160,120,.12)" stroke="rgba(255,160,120,.52)" stroke-width="1.8"/>

      <!-- legend -->
      <rect x="8" y="224" width="11" height="11" rx="2"
        fill="rgba(140,255,199,.28)" stroke="#8cffc7" stroke-width="1.3"/>
      <text x="24" y="234" fill="#8cffc7" font-size="9.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">orient</text>

      <rect x="8" y="242" width="11" height="11" rx="2"
        fill="rgba(122,167,255,.22)" stroke="#7aa7ff" stroke-width="1.3"/>
      <text x="24" y="252" fill="#7aa7ff" font-size="9.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">negotiate</text>

      <rect x="8" y="260" width="11" height="11" rx="2"
        fill="rgba(255,160,120,.16)" stroke="rgba(255,160,120,.5)" stroke-width="1.3"/>
      <text x="24" y="270" fill="rgba(255,160,120,.82)" font-size="9.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">regulate</text>

      <text x="100" y="286" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">
        swappable add-on haptics · 9 devices · 40+ motor points
      </text>
    </svg>`,
    caption: "swappable add-on haptics — full-body points of contact",
    notes: [
      "The haptic vocabulary is organized around three coordination functions: orientation, negotiation, and regulation.",
      "Orient is a bilateral shoulder tap — shared spatial reference. Like a shoulder tap in ProTactile: 'look here'.",
      "Negotiate has two signals. Offer is soft and tentative — two light pulses, a question. Handoff is firm and sustained — unambiguous turn transfer.",
      "Regulate: Confirm is just a brief receipt. Slow is a long sustained low pulse — co-regulate the rhythm. Settle is a descending sequence — soften, rest.",
      "All six run on the bHaptics full suit — vest, arm bands, gloves, feet bands, head visor. Hardware confirmed working. The vocabulary is deliberately small so it's learnable before it's extended."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 05 · RESEARCH ARC — how we got here
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "05",
    title: "The questions arrive late, not early",
    contentHTML: `
      <p style="margin:0 0 10px;color:rgba(255,255,255,.72);font-size:.91em">
        The open questions I'm bringing today are
        <em>products</em> of accumulated work — not its starting point.
      </p>
      <ul style="margin:0;line-height:1.0;font-size:.87em;list-style:none;padding:0">
        <li style="margin-bottom:7px">
          <span style="color:#8cffc7;font-weight:600">On-body haptics · distributed creativity</span>
          <span style="color:rgba(255,255,255,.80)"> — belt → RPi · Hackaday Supercon demo · Mitacs grant · open-sourced</span>
        </li>
        <li style="margin-bottom:7px">
          <span style="color:#8cffc7;font-weight:600">Intuitive gestures in VR painting</span>
          <span style="color:rgba(255,255,255,.80)"> — empirical user study · navigation methods · 14 participants
          </span><br>
          <span style="color:rgba(255,255,255,.42);font-size:.85em;font-style:italic">HCI paper · York University</span>
        </li>
        <li style="margin-bottom:7px">
          <span style="color:#8cffc7;font-weight:600">Curious Creatures</span>
          <span style="color:rgba(255,255,255,.80)"> — living VR research-creation lab · gesture + haptics first fused</span><br>
          <span style="color:rgba(255,255,255,.42);font-size:.85em;font-style:italic">ACM MOCO</span>
        </li>
        <li style="margin-bottom:7px">
          <span style="color:#7aa7ff;font-weight:600">AI + procedural VFX + WebXR</span>
          <span style="color:rgba(255,255,255,.80)"> — co-creative human-computer worldmaking</span><br>
          <span style="color:rgba(255,255,255,.42);font-size:.85em;font-style:italic">HCCC paper · EVA London industry talk</span>
        </li>
        <li style="margin-bottom:7px">
          <span style="color:#7aa7ff;font-weight:600">Comps</span>
          <span style="color:rgba(255,255,255,.80)"> — embodied interaction · kinaesthetic expression · ProTactile · interspecies coordination</span>
        </li>
        <li style="margin-bottom:7px">
          <span style="color:#7aa7ff;font-weight:600">Relational co-creation</span>
          <span style="color:rgba(255,255,255,.80)"> — AI &amp; Society under review · SIGGRAPH Sparks talk</span>
        </li>
        <li>
          <span style="color:#8cffc7;font-weight:700">→ now:</span>
          <span style="color:#8cffc7"> 50+ sessions · prototype between L2/L3 · open questions surface here</span>
        </li>
      </ul>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 310"
      style="width:100%;height:100%;max-height:100%;display:block">
      <defs>
        <marker id="s7-a" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 7 3, 0 6" fill="rgba(140,255,199,.6)"/>
        </marker>
      </defs>

      <!-- spine line -->
      <line x1="80" y1="18" x2="80" y2="278"
        stroke="rgba(255,255,255,.08)" stroke-width="1.5"/>

      <!-- node 1: haptics -->
      <circle cx="80" cy="24" r="7"
        fill="rgba(140,255,199,.18)" stroke="#8cffc7" stroke-width="1.6"/>
      <text x="92" y="22" fill="#8cffc7" font-size="7.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">on-body haptics</text>
      <text x="92" y="31" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">belt → RPi · Hackaday · Mitacs</text>

      <!-- connector -->
      <line x1="80" y1="32" x2="80" y2="56"
        stroke="rgba(140,255,199,.25)" stroke-width="1.2"/>

      <!-- node 2: VR gestures -->
      <circle cx="80" cy="62" r="7"
        fill="rgba(140,255,199,.18)" stroke="#8cffc7" stroke-width="1.6"/>
      <text x="92" y="60" fill="#8cffc7" font-size="7.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">gestures in VR painting</text>
      <text x="92" y="69" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">user study · HCI paper</text>

      <line x1="80" y1="70" x2="80" y2="94"
        stroke="rgba(140,255,199,.25)" stroke-width="1.2"/>

      <!-- node 3: Curious Creatures -->
      <circle cx="80" cy="100" r="7"
        fill="rgba(140,255,199,.18)" stroke="#8cffc7" stroke-width="1.6"/>
      <text x="92" y="98" fill="#8cffc7" font-size="7.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">Curious Creatures</text>
      <text x="92" y="107" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">ACM MOCO '19</text>

      <line x1="80" y1="108" x2="80" y2="132"
        stroke="rgba(122,167,255,.25)" stroke-width="1.2"/>

      <!-- node 4: AI + VFX -->
      <circle cx="80" cy="138" r="7"
        fill="rgba(122,167,255,.18)" stroke="#7aa7ff" stroke-width="1.6"/>
      <text x="92" y="136" fill="#7aa7ff" font-size="7.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">AI + VFX + WebXR</text>
      <text x="92" y="145" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">HCCC · EVA London</text>

      <line x1="80" y1="146" x2="80" y2="170"
        stroke="rgba(122,167,255,.25)" stroke-width="1.2"/>

      <!-- node 5: comps -->
      <circle cx="80" cy="176" r="7"
        fill="rgba(122,167,255,.18)" stroke="#7aa7ff" stroke-width="1.6"/>
      <text x="92" y="174" fill="#7aa7ff" font-size="7.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">comps</text>
      <text x="92" y="183" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">embodiment · ProTactile · kinaesthesia</text>

      <line x1="80" y1="184" x2="80" y2="208"
        stroke="rgba(122,167,255,.25)" stroke-width="1.2"/>

      <!-- node 6: relational co-creation -->
      <circle cx="80" cy="214" r="7"
        fill="rgba(122,167,255,.18)" stroke="#7aa7ff" stroke-width="1.6"/>
      <text x="92" y="212" fill="#7aa7ff" font-size="7.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">relational co-creation</text>
      <text x="92" y="221" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">AI &amp; Society · Sparks SIGGRAPH</text>

      <line x1="80" y1="222" x2="80" y2="246"
        stroke="rgba(140,255,199,.4)" stroke-width="1.5"
        marker-end="url(#s7-a)"/>

      <!-- node 7: NOW -->
      <circle cx="80" cy="258" r="9"
        fill="rgba(140,255,199,.22)" stroke="#8cffc7" stroke-width="2.2"/>
      <text x="80" y="262" text-anchor="middle" fill="#8cffc7"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">now</text>
      <text x="92" y="270" fill="rgba(140,255,199,.82)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">50+ sessions · L2/L3</text>
      <text x="92" y="279" fill="rgba(255,255,255,.55)" font-size="6.5"
        font-family="ui-sans-serif,system-ui,sans-serif">open questions → here</text>
    </svg>`,
    notes: [
      "Before the three open questions, it's worth being explicit: they arrive late in the work, not early.",
      "The on-body haptics work started well before the dissertation — an Arduino belt for distributed creativity in collaborative performance, iterated through to the Raspberry Pi v2 system, demoed at Hackaday Supercon, funded by a Mitacs e-Accelerate grant for washable wearables in mixed reality, and eventually open-sourced.",
      "The empirical VR painting user study — navigation methods, 14 participants — produced the HCI paper and seeded the intuition that gesture in VR has a different logic than desktop interaction.",
      "Curious Creatures at ACM MOCO was the first time VR, gesture tracking, and haptics were fused together in a living research-creation lab framing. That paper is the direct ancestor of this system.",
      "The HCCC paper and EVA London industry talk brought AI and procedural VFX into the WebXR environment — the first iteration of what became the co-creative AI pipeline.",
      "Comps established the theoretical commitments that made the design constraints legible: embodied interaction, kinaesthetic expression, ProTactile, interspecies coordination.",
      "The AI & Society paper — relational methodologies in co-creation and embodied ways of knowing, currently under peer review — and the SIGGRAPH Sparks talk are the most recent outputs.",
      "50+ sessions captured. The questions I'm bringing today are where that accumulated work has run into genuine open problems — not starting-line uncertainty."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 06 · THE SYSTEM
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "06",
    title: "The prototype exists and works",
    contentHTML: `
      <p style="margin:0 0 8px;color:rgba(255,255,255,.82);font-size:.91em">
        A living research platform — 50+ sessions captured.
      </p>
      <ul style="margin:0 0 10px;line-height:1.9;font-size:.9em;color:rgba(255,255,255,.82)">
        <li><span style="color:#8cffc7;font-weight:600">Gesture recognition</span> — Vive controllers · WebXR joints · MediaPipe webcam</li>
        <li><span style="color:#8cffc7;font-weight:600">AI co-creation</span> — scene suggestions via haptic-intent vocab · source-tagged</li>
        <li><span style="color:#8cffc7;font-weight:600">Haptic feedback</span> — bHaptics full suit · 9 devices · 40+ motors</li>
        <li><span style="color:#7aa7ff;font-weight:600">Trace-memory log</span> — turn-taking · initiative shifts · repair events</li>
      </ul>
      <p style="margin:0 0 6px;font-size:.87em;color:rgba(255,255,255,.80)">
        Dual haptic architecture:
      </p>
      <div style="display:flex;gap:10px;font-size:.85em">
        <div style="background:rgba(140,255,199,.06);border:1px solid rgba(140,255,199,.25);
                    border-radius:7px;padding:6px 10px;flex:1">
          <span style="color:#8cffc7;font-weight:600">bHaptics 🇰🇷 (IEEEVR 2026 sponsor :)</span><br>
          <span style="color:rgba(255,255,255,.72)">full-body suit · SDK confirmed</span>
        </div>
        <div style="background:rgba(122,167,255,.06);border:1px solid rgba(122,167,255,.25);
                    border-radius:7px;padding:6px 10px;flex:1">
          <span style="color:#7aa7ff;font-weight:600">Octopulse 🔧</span><br>
          <span style="color:rgba(255,255,255,.72)">open-source fallback · DIY</span>
        </div>
      </div>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 310"
      style="width:100%;height:100%;max-height:100%;display:block">
      <defs>
        <marker id="s6-a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="rgba(140,255,199,.7)"/>
        </marker>
      </defs>
      <!-- GESTURE -->
      <rect x="30" y="10" width="140" height="34" rx="8"
        fill="rgba(140,255,199,.1)" stroke="#8cffc7" stroke-width="1.7"/>
      <text x="100" y="32" text-anchor="middle" fill="#8cffc7"
        font-size="11" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">GESTURE</text>
      <line x1="100" y1="44" x2="100" y2="68" stroke="rgba(140,255,199,.4)"
        stroke-width="1.5" marker-end="url(#s6-a)"/>
      <!-- LIVE SESSION -->
      <rect x="30" y="68" width="140" height="34" rx="8"
        fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.22)" stroke-width="1.5"/>
      <text x="100" y="90" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="11" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">LIVE SESSION</text>
      <line x1="100" y1="102" x2="100" y2="126" stroke="rgba(140,255,199,.4)"
        stroke-width="1.5" marker-end="url(#s6-a)"/>
      <!-- AI -->
      <rect x="30" y="126" width="140" height="34" rx="8"
        fill="rgba(122,167,255,.1)" stroke="#7aa7ff" stroke-width="1.7"/>
      <text x="100" y="148" text-anchor="middle" fill="#7aa7ff"
        font-size="11" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">AI</text>
      <line x1="100" y1="160" x2="100" y2="184" stroke="rgba(140,255,199,.4)"
        stroke-width="1.5" marker-end="url(#s6-a)"/>
      <!-- HAPTIC ROUTER -->
      <rect x="30" y="184" width="140" height="34" rx="8"
        fill="rgba(140,255,199,.08)" stroke="#8cffc7" stroke-width="1.7"/>
      <text x="100" y="206" text-anchor="middle" fill="#8cffc7"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">HAPTIC ROUTER</text>
      <!-- branches to bHaptics + Octopulse -->
      <line x1="70" y1="218" x2="50" y2="242" stroke="rgba(140,255,199,.4)"
        stroke-width="1.4" marker-end="url(#s6-a)"/>
      <line x1="130" y1="218" x2="150" y2="242" stroke="rgba(122,167,255,.4)"
        stroke-width="1.4" marker-end="url(#s6-a)"/>
      <!-- bHaptics -->
      <rect x="12" y="242" width="80" height="28" rx="7"
        fill="rgba(140,255,199,.08)" stroke="#8cffc7" stroke-width="1.4"/>
      <text x="52" y="255" text-anchor="middle" fill="#8cffc7"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">bHaptics 🇰🇷</text>
      <text x="52" y="266" text-anchor="middle" fill="rgba(140,255,199,.55)"
        font-size="6.5" font-family="ui-sans-serif,system-ui,sans-serif">IEEEVR 2026 sponsor</text>
      <!-- Octopulse -->
      <rect x="108" y="242" width="80" height="28" rx="7"
        fill="rgba(122,167,255,.08)" stroke="#7aa7ff" stroke-width="1.4"/>
      <text x="148" y="260" text-anchor="middle" fill="#7aa7ff"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">Octopulse 🔧</text>
      <!-- TRACE-MEMORY LOG (dashed, passive) -->
      <line x1="100" y1="218" x2="100" y2="278" stroke="rgba(255,255,255,.14)"
        stroke-width="1.2" stroke-dasharray="3,3"/>
      <rect x="44" y="278" width="112" height="26" rx="6"
        fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.16)" stroke-width="1.3"/>
      <text x="100" y="295" text-anchor="middle" fill="rgba(255,255,255,.50)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">TRACE-MEMORY LOG</text>
    </svg>`,
    caption: "research platform — not just a demo",
    notes: [
      "The prototype has been running in live sessions since 2024. It is a working research instrument, not a proof-of-concept.",
      "The gesture pipeline runs three layers in priority order: WebXR hand joints via Handy.js → MediaPipe webcam classification → Vive controller fallback. All three can run simultaneously.",
      "The AI pipeline reads gesture events and scene state, generates JSON scene suggestions with a haptic-intent vocabulary, and routes those intents through the haptic router to whatever hardware is present.",
      "The dual haptic architecture — bHaptics full suit hardware-confirmed, open-source Octopulse as fallback — means sessions can run with or without commercial hardware. The router handles the priority chain.",
      "Every gesture event, AI suggestion, haptic cue, and scene change is written to the trace-memory log with a source tag: human, AI, or system. 50+ sessions captured. This longitudinal record is what the planned study designs will read."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 07 · PLANNED STUDIES
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "07",
    title: "Planned studies: three conditions, three outcome clusters",
    contentHTML: `
      <p style="margin:0 0 8px;color:rgba(255,255,255,.82);font-size:.91em">
        Within-subject design — same participant, three conditions:
      </p>
      <table style="border-collapse:collapse;width:100%;font-size:.86em;margin:0 0 10px">
        <tr style="color:rgba(255,255,255,.70);font-size:.84em;border-bottom:1px solid rgba(255,255,255,.09)">
          <th style="text-align:left;padding:0 10px 5px 0;font-weight:500">condition</th>
          <th style="text-align:left;padding:0 0 5px;font-weight:500">description</th>
        </tr>
        <tr>
          <td style="padding:5px 10px 5px 0;color:#8cffc7;font-weight:600;white-space:nowrap">A · baseline</td>
          <td style="padding:5px 0;color:rgba(255,255,255,.82)">VR painting · no AI · no haptics</td>
        </tr>
        <tr>
          <td style="padding:5px 10px 5px 0;color:#7aa7ff;font-weight:600;white-space:nowrap">B · haptic only</td>
          <td style="padding:5px 0;color:rgba(255,255,255,.82)">gesture-triggered haptic cues · no AI scene changes</td>
        </tr>
        <tr>
          <td style="padding:5px 10px 5px 0;color:#8cffc7;font-weight:600;white-space:nowrap">C · full system</td>
          <td style="padding:5px 0;color:rgba(255,255,255,.82)">AI co-creation + full haptic vocabulary</td>
        </tr>
      </table>
      <p style="margin:0 0 6px;color:rgba(255,255,255,.82);font-size:.88em;font-weight:600">
        Three outcome clusters:
      </p>
      <ul style="margin:0;line-height:1.9;font-size:.87em;color:rgba(255,255,255,.82)">
        <li><span style="color:#8cffc7;font-weight:600">Grounding</span> — turn-taking latency · repair events · initiative shifts</li>
        <li><span style="color:#7aa7ff;font-weight:600">Creative flow</span> — gesture continuity · scene-building rate · unprompted divergence</li>
        <li><span style="color:rgba(255,160,120,.88);font-weight:600">Agency</span> — perceived legibility · AI override rate · post-session interview</li>
      </ul>`,
    mediaSVG: `<img src="scene_0049.png"
      alt="VR Ecology creative mode — session 0049"
      style="width:100%;height:auto;max-height:100%;object-fit:contain;
             display:block;border-radius:10px;
             filter:drop-shadow(0 6px 24px rgba(0,0,0,.55))">`,
    notes: [
      "Within-subject design: same participant completes all three conditions. Order is counterbalanced to control for learning effects.",
      "Condition A is the control — VR painting with no AI and no haptics. It establishes the participant's baseline movement patterns, pacing, and scene-building style.",
      "Condition B isolates the haptic layer: gesture events trigger cues, but the AI is not generating scene suggestions. This lets us see what haptic grounding alone does to the interaction, without confounding it with AI content.",
      "Condition C is the full system. We're not testing whether participants prefer it — we're reading the trace-memory log for coordination signatures: does turn-taking latency shift? Are there more or fewer repair events? Does creative divergence increase?"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 08 · CAPABILITY STAGING
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "08",
    title: "Capability-staging: findings survive iteration",
    contentHTML: `
      <p style="margin:0 0 8px;color:rgba(255,255,255,.82);font-size:.9em">
        Each study is indexed to a
        <span style="color:#8cffc7">capability level</span>,
        not a specific implementation.
        Findings survive iteration.
      </p>
      <table style="border-collapse:collapse;width:100%;font-size:.87em;margin:0 0 10px">
        <tr style="color:rgba(255,255,255,.80);font-size:.86em">
          <th style="text-align:left;padding:3px 6px 7px 0;font-weight:500;min-width:60px">area</th>
          <th style="text-align:center;padding:3px 6px 7px;font-weight:500">L1 · MVP</th>
          <th style="text-align:center;padding:3px 6px 7px;font-weight:500">L2</th>
          <th style="text-align:center;padding:3px 6px 7px;font-weight:500">L3</th>
          <th style="text-align:center;padding:3px 0 7px;font-weight:500">L4</th>
        </tr>
        <tr>
          <td style="padding:4px 6px 4px 0;color:rgba(255,255,255,.82)">Gesture</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">buttons</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">WebXR joints</td>
          <td style="padding:4px 6px;text-align:center;color:#8cffc7;
                     background:rgba(140,255,199,.06);font-size:.88em">+ MediaPipe ✓</td>
          <td style="padding:4px 0;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">fusion</td>
        </tr>
        <tr>
          <td style="padding:4px 6px 4px 0;color:rgba(255,255,255,.82)">Haptics</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">mock log</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">vest + arms</td>
          <td style="padding:4px 6px;text-align:center;color:#8cffc7;
                     background:rgba(140,255,199,.06);font-size:.88em">full suit ✓</td>
          <td style="padding:4px 0;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">adaptive</td>
        </tr>
        <tr>
          <td style="padding:4px 6px 4px 0;color:rgba(255,255,255,.82)">Logging</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">JSON</td>
          <td style="padding:4px 6px;text-align:center;color:#8cffc7;
                     background:rgba(140,255,199,.06);font-size:.88em">+ provenance ✓</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">+ replay</td>
          <td style="padding:4px 0;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">dashboard</td>
        </tr>
        <tr>
          <td style="padding:4px 6px 4px 0;color:rgba(255,255,255,.82)">AI</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">scene adds</td>
          <td style="padding:4px 6px;text-align:center;color:#8cffc7;
                     background:rgba(140,255,199,.06);font-size:.88em">+ haptic intents ✓</td>
          <td style="padding:4px 6px;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">+ reflection</td>
          <td style="padding:4px 0;text-align:center;color:rgba(255,255,255,.80);font-size:.88em">adaptive</td>
        </tr>
      </table>
      <p style="margin:0;color:rgba(255,255,255,.80);font-size:.86em;font-style:italic">
        Sitting between L2 and L3 — considering the architecture that will support the planned study designs
      </p>`,
    mediaText: "Table is the content — no media needed",
    notes: [
      "Research-through-creation means the system legitimately keeps evolving. Capability staging is designed for this — it's a methodological structure, not a workaround.",
      "The framework defines four progressive levels across gesture input, haptic output, logging, and AI behaviour. Each study is indexed to a capability level, not a specific build.",
      "Findings are reported as 'at L3 haptic capability, we observed X' — which survives the system legitimately advancing. The framework makes iteration a feature of the method, not a confound.",
      "Current position: gesture and haptics are at L3 — MediaPipe fusion is running, the full bHaptics suit is hardware-confirmed. Logging and AI are at L2 — source-tagged provenance (who did what: human, AI, or system) and haptic intents are in, but replay and reflection capabilities are still ahead.",
      "The system is sitting between L2 and L3 while I think carefully about the architecture that will support the planned study designs — the gap is deliberate, not accidental.",
      "Capability staging handles internal validity. What kind of knowledge the whole enterprise produces — design principles, empirically-grounded frameworks — is the question on the next slide."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 09 · DC QUESTION 1 — measuring grounding without breaking flow
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "09",
    title: "Q1 · Measuring grounding without breaking flow",
    contentHTML: `
      <p style="margin:0 0 8px;color:rgba(255,255,255,.78)">
        Trust and partnership form slowly.
        Flow breaks when you stop to measure.
      </p>
      <p style="margin:0 0 10px;color:rgba(255,160,120,.88);font-size:.88em;font-style:italic;
                border-left:2px solid rgba(255,160,120,.38);padding-left:.7em">
        Standard psychometrics break the thing I'm trying to measure —
        stop someone to fill out a trust scale and you've interrupted the flow state you came to study.
      </p>
      <p style="margin:0 0 6px;color:#8cffc7;font-weight:600">Partial answer: trace-memory logs</p>
      <ul style="margin:0 0 10px;font-size:.9em;color:rgba(255,255,255,.82);line-height:1.9">
        <li>turn-taking latency · initiative shifts · repair events</li>
        <li>non-invasive · continuous · with provenance</li>
      </ul>
      <p style="margin:0 0 8px;color:rgba(255,255,255,.80);font-size:.88em">
        Gap: logs give <em>coordination</em> data —
        not trust or grounding directly.
      </p>
      <p style="margin:0;color:#7aa7ff;font-weight:600;font-size:.9em">
        Do logs + retrospective recall make a strong enough case for trust and grounding claims?
      </p>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220"
      style="width:100%;height:100%;max-height:100%;display:block">
      <!-- left box: standard psychometrics -->
      <rect x="6" y="12" width="150" height="118" rx="10"
        fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.16)" stroke-width="1.6"/>
      <text x="81" y="34" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">standard</text>
      <text x="81" y="49" text-anchor="middle" fill="rgba(255,255,255,.88)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">psychometrics</text>
      <text x="81" y="71" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">flow scales</text>
      <text x="81" y="86" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">trust scales</text>
      <text x="81" y="101" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">retrospective</text>
      <text x="81" y="118" text-anchor="middle" fill="rgba(255,160,120,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">⚠ session-interrupting</text>
      <!-- right box: trace logs -->
      <rect x="184" y="12" width="150" height="118" rx="10"
        fill="rgba(140,255,199,.08)" stroke="#8cffc7" stroke-width="1.7"/>
      <text x="259" y="34" text-anchor="middle" fill="#8cffc7"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">trace-memory</text>
      <text x="259" y="49" text-anchor="middle" fill="#8cffc7"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="600">logs</text>
      <text x="259" y="71" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">turn-taking latency</text>
      <text x="259" y="86" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">initiative shifts</text>
      <text x="259" y="101" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">repair events</text>
      <text x="259" y="118" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">✓ non-invasive</text>
      <!-- vs -->
      <text x="170" y="74" text-anchor="middle" fill="rgba(255,255,255,.60)"
        font-size="13" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">vs</text>
      <!-- gap rule -->
      <line x1="6" y1="152" x2="334" y2="152"
        stroke="rgba(255,255,255,.06)" stroke-width="1.3"/>
      <text x="170" y="172" text-anchor="middle" fill="rgba(122,167,255,.72)"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif">
        gap: logs give coordination data
      </text>
      <text x="170" y="187" text-anchor="middle" fill="rgba(122,167,255,.72)"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif">
        — not grounding or trust directly
      </text>
      <text x="170" y="208" text-anchor="middle" fill="rgba(122,167,255,.40)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">
        triangulation: logs + retrospective recall?
      </text>
    </svg>`,
    notes: [
      "Trust and partnership are slow-forming relational constructs. Flow breaks under interruption. The two requirements are in direct tension.",
      "My trace-memory logs give me behavioral coordination data continuously: turn-taking latency, initiative shifts, repair events — without stopping the session. That's the non-invasive path.",
      "But logs give coordination data — not grounding or trust directly. There's a specific warrant gap between what the logs capture and the relational constructs I'm claiming.",
      "My working plan is triangulation: behavioral logs plus retrospective video-stimulated recall. The question I'm asking the DC is whether that triangulation provides sufficient methodological warrant for trust and partnership claims — and whether there are better-validated approaches in embodied, flow-critical settings.",
      "What study designs have worked for capturing relational constructs without interrupting embodied flow?"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 10 · DC QUESTION 2 — generalization from a living system
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "10",
    title: "Q2 · What generalization is credible from a living system?",
    contentHTML: `
      <p style="margin:0 0 10px;color:rgba(255,255,255,.72)">
        The system legitimately keeps evolving.<br>
        How do I make transferable claims?
      </p>
      <p style="margin:0 0 6px;color:#8cffc7;font-weight:600">
        Capability staging is my partial answer —
      </p>
      <p style="margin:0 0 12px;color:rgba(255,255,255,.82);font-size:.88em">
        but it only handles internal validity.
        It doesn't tell me what kind of knowledge I'm producing.
      </p>
      <ul style="margin:0 0 10px;font-size:.9em;color:rgba(255,255,255,.82);line-height:1.9">
        <li>not statistical generalization</li>
        <li>design knowledge? empirically-grounded framework?</li>
        <li>what kind of contribution actually travels?</li>
      </ul>
      <p style="margin:0;color:#7aa7ff;font-weight:600;font-size:.9em">
        How have others framed contributions from systems that legitimately keep changing?
      </p>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200"
      style="width:100%;height:100%;max-height:100%;display:block">
      <defs>
        <marker id="s10-a" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill="#7aa7ff"/>
        </marker>
      </defs>
      <!-- timeline -->
      <line x1="20" y1="70" x2="320" y2="70"
        stroke="rgba(255,255,255,.1)" stroke-width="2"/>
      <!-- version nodes + labels -->
      <circle cx="60"  cy="70" r="9" fill="rgba(140,255,199,.28)" stroke="#8cffc7" stroke-width="1.8"/>
      <text x="60"  y="55" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">v1</text>
      <text x="60"  y="93" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">early</text>
      <circle cx="150" cy="70" r="9" fill="rgba(140,255,199,.28)" stroke="#8cffc7" stroke-width="1.8"/>
      <text x="150" y="55" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">v2</text>
      <text x="150" y="93" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">current</text>
      <circle cx="240" cy="70" r="9" fill="rgba(122,167,255,.26)" stroke="#7aa7ff" stroke-width="1.8"/>
      <text x="240" y="55" text-anchor="middle" fill="rgba(122,167,255,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">v3</text>
      <text x="240" y="93" text-anchor="middle" fill="rgba(255,255,255,.35)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">planned</text>
      <circle cx="310" cy="70" r="8" fill="rgba(255,255,255,.06)"
        stroke="rgba(255,255,255,.22)" stroke-width="1.6" stroke-dasharray="3,2"/>
      <text x="310" y="55" text-anchor="middle" fill="rgba(255,255,255,.50)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">v4?</text>
      <!-- study bracket 1 -->
      <rect x="98" y="86" width="104" height="26" rx="5"
        fill="rgba(140,255,199,.07)" stroke="rgba(140,255,199,.32)" stroke-width="1.3"/>
      <text x="150" y="103" text-anchor="middle" fill="rgba(140,255,199,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">Study 1 @ L2</text>
      <!-- study bracket 2 (dashed = future) -->
      <rect x="186" y="120" width="106" height="26" rx="5"
        fill="rgba(122,167,255,.06)" stroke="rgba(122,167,255,.28)"
        stroke-width="1.3" stroke-dasharray="4,2"/>
      <text x="239" y="137" text-anchor="middle" fill="rgba(122,167,255,.82)"
        font-size="9" font-family="ui-sans-serif,system-ui,sans-serif">Study 2 @ L3</text>
      <!-- question arc v3→v4 -->
      <path d="M 249,61 Q 288,26 302,62" fill="none"
        stroke="rgba(122,167,255,.38)" stroke-width="1.6"
        stroke-dasharray="4,3" marker-end="url(#s10-a)"/>
      <text x="284" y="30" text-anchor="middle" fill="rgba(122,167,255,.72)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">still comparable?</text>
      <!-- bottom rule + knowledge question -->
      <line x1="20" y1="164" x2="320" y2="164"
        stroke="rgba(255,255,255,.05)" stroke-width="1.2"/>
      <text x="170" y="180" text-anchor="middle" fill="rgba(255,255,255,.30)"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">
        capability staging handles validity — but what kind of knowledge does this produce?
      </text>
    </svg>`,
    notes: [
      "This is the core epistemological question for research-through-creation as a mode broadly — not unique to my project.",
      "The system keeps evolving. That's not a flaw — it's the method. I build to think, test to learn, rebuild.",
      "Capability staging handles internal validity: study one at L2, study two at L3. Claims are indexed to levels, not builds.",
      "But it doesn't specify what kind of knowledge the work produces. It's not statistical generalization — the sample isn't representative, the system isn't stable.",
      "My working framing: the contribution is empirically-grounded design knowledge — principles and breakdown/repair characterizations indexed to capability levels, applicable beyond this specific implementation. I'd like to pressure-test that framing against people who've navigated it successfully.",
      "How have others in the HCI research-through-creation tradition framed transferable contributions from systems that legitimately keep changing?"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 11 · DC QUESTION 3 — learnability, sensory diversity, appropriation
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "11",
    title: "Q3 · Learnability, sensory diversity, and the ethics of borrowing",
    contentHTML: `
      <p style="margin:0 0 8px;color:rgba(255,255,255,.82);font-size:.88em">
        Three tensions requiring careful design attention:
      </p>
      <p style="margin:0 0 3px">
        <span style="color:#8cffc7;font-weight:600">Habituation</span>
      </p>
      <p style="margin:0 0 10px;font-size:.87em;color:rgba(255,255,255,.82)">
        Haptics literature treats signals as <em>cues</em> — repeated exposure leads to noise.
        But ProTactile isn't cues: it's a living language <em>made</em> for touch.
        Do the same habituation dynamics even apply?
      </p>
      <p style="margin:0 0 3px">
        <span style="color:#7aa7ff;font-weight:600">Sensory diversity</span>
      </p>
      <p style="margin:0 0 10px;font-size:.87em;color:rgba(255,255,255,.82)">
        Haptic hypersensitivity, motor differences.
        If I validate on a narrow population — who does the design actually serve?
      </p>
      <p style="margin:0 0 3px">
        <span style="color:rgba(255,160,120,.85);font-weight:600">Appropriation</span>
      </p>
      <p style="margin:0;font-size:.87em;color:rgba(255,255,255,.82)">
        ProTactile is a communication system by and for the deaf-blind community.
        I draw on it to design for sighted VR users. Citing it isn't enough.
        What does ethical borrowing actually require?
      </p>`,
    mediaText: "three tensions — full width for breathing room",
    notes: [
      "This slide surfaces three interlocking tensions — not as confessions of being stuck, but as the specific points where standard design practice runs out and something more careful is required.",
      "Habituation: haptics literature is clear that repeated cues lose salience over time. My working vocabulary is small by design, but I need to know how vocabulary size interacts with discriminability across a longitudinal study. That's a tractable empirical question with a specific shape.",
      "Sensory diversity: haptic hypersensitivity, sensory processing differences, motor variation. These are design constraints from the start — the vocabulary has to work across sensory profiles, and the validation scope has to match the design claim.",
      "Appropriation: I draw on ProTactile as a design resource — a communication system developed by and for the deaf-blind community. Citing it is not the same as community consultation or co-design. The question isn't whether to use this lineage — it informs the work at a structural level — but what responsible use actually requires.",
      "What does ethical borrowing from a community practice look like when the application context is different but the design logic is genuinely indebted?"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 12 · OPEN-SOURCE HAPTICS — on-body haptics project
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "12",
    title: "On-Body Haptics · open-source, use freely, contribute",
    contentHTML: `
      <p style="margin:0 0 10px;color:rgba(255,255,255,.82);font-size:.93em">
        The custom haptic hardware developed for this project is
        <span style="color:#8cffc7;font-weight:700">fully open-sourced</span>
        — multiple variants, step-by-step how-to's, built for students, artists, and budget-conscious labs.
      </p>
      <ul style="margin:0 0 12px;line-height:2;font-size:.89em">
        <li>
          <span style="color:rgba(180,160,255,.95);font-weight:600">v1 · Arduino belt</span>
          <span style="color:rgba(255,255,255,.82)"> — 5 motors · Bluetooth · beginner-friendly</span>
        </li>
        <li>
          <span style="color:rgba(180,160,255,.95);font-weight:600">v2 · Raspberry Pi</span>
          <span style="color:rgba(255,255,255,.82)"> — 8 motors per device · I2C bus · DRV2605L drivers · custom PCBs</span>
        </li>
        <li>
          <span style="color:rgba(255,255,255,.60)">+ more variants documented</span>
        </li>
      </ul>
      <p style="margin:0 0 10px;color:rgba(255,255,255,.82);font-size:.89em">
        Schematics, code, build guides, and wiring diagrams — all there.
        If you need haptics and can't afford commercial kit:
        <span style="color:#8cffc7;font-weight:600">please use it, remix it, contribute back.</span>
      </p>
      <p style="margin:0;font-size:1em;font-weight:700;letter-spacing:.03em;
                color:#8cffc7;border-left:3px solid rgba(45,201,122,.5);padding-left:.7em">
        misscrispencakes.github.io/On-body-haptics/
      </p>`,
    mediaSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"
      style="width:100%;height:100%;max-height:100%;display:block">
      <defs>
        <marker id="s12-a" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill="rgba(180,160,255,.82)"/>
        </marker>
      </defs>

      <!-- v1 box -->
      <rect x="6" y="16" width="128" height="88" rx="10"
        fill="rgba(180,160,255,.09)" stroke="rgba(180,160,255,.55)" stroke-width="1.7"/>
      <text x="70" y="40" text-anchor="middle" fill="rgba(180,160,255,.95)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">v1 · Arduino belt</text>
      <text x="70" y="57" text-anchor="middle" fill="rgba(255,255,255,.75)"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif">5 motors · Bluetooth</text>
      <text x="70" y="71" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">~$40 in parts</text>
      <text x="70" y="84" text-anchor="middle" fill="rgba(180,160,255,.7)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">beginner-friendly</text>

      <!-- arrow -->
      <line x1="135" y1="60" x2="185" y2="60"
        stroke="rgba(180,160,255,.5)" stroke-width="1.8" marker-end="url(#s12-a)"/>

      <!-- v2 box -->
      <rect x="186" y="16" width="128" height="88" rx="10"
        fill="rgba(180,160,255,.13)" stroke="rgba(180,160,255,.75)" stroke-width="1.9"/>
      <text x="250" y="40" text-anchor="middle" fill="rgba(180,160,255,.98)"
        font-size="10" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">v2 · Raspberry Pi</text>
      <text x="250" y="57" text-anchor="middle" fill="rgba(255,255,255,.82)"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif">8 motors · I2C · DRV2605L</text>
      <text x="250" y="71" text-anchor="middle" fill="rgba(255,255,255,.75)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">custom PCBs</text>
      <text x="250" y="84" text-anchor="middle" fill="rgba(180,160,255,.7)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">120+ waveform effects</text>

      <!-- open source badge -->
      <rect x="6" y="124" width="308" height="42" rx="8"
        fill="rgba(45,201,122,.07)" stroke="rgba(45,201,122,.28)" stroke-width="1.4"/>
      <text x="160" y="142" text-anchor="middle" fill="rgba(140,255,199,.9)"
        font-size="9.5" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="700">
        schematics · code · wiring diagrams · build guides
      </text>
      <text x="160" y="157" text-anchor="middle" fill="rgba(255,255,255,.65)"
        font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">
        students · artists · budget-conscious labs · welcome
      </text>

      <!-- v3 hint -->
      <rect x="6" y="184" width="308" height="40" rx="8"
        fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.10)" stroke-width="1.2"
        stroke-dasharray="5,3"/>
      <text x="160" y="201" text-anchor="middle" fill="rgba(255,255,255,.28)"
        font-size="8.5" font-family="ui-sans-serif,system-ui,sans-serif" font-style="italic">
        v3 in progress — contributions welcome
      </text>
      <text x="160" y="215" text-anchor="middle" fill="rgba(255,255,255,.20)"
        font-size="7.5" font-family="ui-sans-serif,system-ui,sans-serif">
        misscrispencakes.github.io/On-body-haptics/
      </text>
    </svg>`,
    footerLink: "https://misscrispencakes.github.io/On-body-haptics/",
    notes: [
      "Quick open-source moment before the close — I want anyone in this room who needs haptic hardware and doesn't have a budget for commercial kit to know this exists.",
      "The On-Body Haptics project documents every version of the custom hardware built for this research: the v1 Arduino Bluetooth belt (5 motors, beginner-friendly, ~$40 in parts), the v2 Raspberry Pi device (8 motors per device, I2C bus, DRV2605L haptic drivers with 120+ waveform effects, custom PCBs).",
      "Full build guides, schematics, wiring diagrams, and code are all there. Written for students, independent artists, and labs that can't afford bHaptics or similar commercial systems.",
      "If you're doing embodied HCI, accessibility, performance, or art and you need something you can put on a body — please use it. Fork it, remix it, contribute a variant back. That's the whole point."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  // 13 · THE ASK
  // ─────────────────────────────────────────────────────────────────────
  {
    num: "13",
    title: "What I'm asking from today",
    contentHTML: `
      <p style="margin:0 0 14px;color:rgba(255,255,255,.72);font-size:.91em">
        An end-to-end prototype that runs. 50+ sessions of data.
        Three questions where I have partial answers and want the community's experience.
      </p>
      <ol style="margin:0 0 20px;line-height:2.3;font-size:.94em">
        <li>
          <span style="color:#8cffc7;font-weight:600">Study designs</span>
          <span style="color:rgba(255,255,255,.75)"> that capture trust and grounding</span>
          <em style="color:rgba(255,255,255,.80)"> without interrupting embodied flow</em>
        </li>
        <li>
          <span style="color:#7aa7ff;font-weight:600">Generalization framing</span>
          <span style="color:rgba(255,255,255,.75)"> for contributions from living, evolving systems</span>
        </li>
        <li>
          <span style="color:rgba(255,160,120,.9);font-weight:600">Equitable validation + ethical borrowing</span>
          <span style="color:rgba(255,255,255,.75)"> — sensory diversity, and what responsible use of ProTactile actually requires</span>
        </li>
      </ol>
      <p style="margin:0 0 8px;color:rgba(255,255,255,.82);font-style:italic;font-size:.9em;
                border-top:1px solid rgba(255,255,255,.08);padding-top:14px">
        "Not to erase the human touch, but to enliven it."
      </p>
      <p style="margin:0;color:rgba(45,201,122,.45);font-size:.87em;letter-spacing:.06em">
        🦦 &nbsp;hold paws · don't drift
      </p>
      <p style="margin:10px 0 0;font-size:.78em;color:rgba(255,255,255,.38)">
        bHaptics HTTP bridge (open source) →
        <a href="https://github.com/MissCrispenCakes/bhaptics-http" target="_blank"
           style="color:rgba(140,255,199,.6);text-decoration:none;font-family:ui-monospace,monospace">
          github.com/MissCrispenCakes/bhaptics-http
        </a>
      </p>`,
    footerLink: "https://misscrispencakes.github.io/On-body-haptics/",
    mediaText: "Keep it clean — the three questions are the content",
    notes: [
      "That's the work. An end-to-end prototype that runs, 50+ sessions of data, and three questions where I have partial answers and want the community's experience to fill the remaining gaps.",
      "One more thing before I sit down: the custom haptic hardware — all of it — is open-sourced at misscrispencakes.github.io/On-body-haptics/ — build guides, schematics, code. If anyone in this room needs haptics and doesn't have the budget for commercial kit, please use it.",
      "Thank you."
    ]
  }

];
