// The Nordic Void - Fanzine Interactivity & Audio Synthesizer

document.addEventListener('DOMContentLoaded', () => {
  setupGate();
  setupNavigation();
  setupRuneDecoder();
  setupAudioPlayer();
  setupLightbox();
  setupMarket();
  setupPodcast();
  setupVault();
});

// 1. Moonlit Gate Entrance Transition
function setupGate() {
  const gateOverlay = document.getElementById('gate-overlay');
  const enterBtn = document.getElementById('enter-btn');
  
  enterBtn.addEventListener('click', () => {
    gateOverlay.classList.add('fade-out');
    // Start Audio automatically if context exists (browser requires user gesture, which click is!)
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    // Auto-play the dark soundscape on enter
    toggleSoundscape(true);
  });
}

// 2. Tab Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-content');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update active content section
      tabContents.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === targetTab) {
          tab.classList.add('active');
        }
      });
    });
  });
}

// 3. Elder Runes & Decoder
const runesGlossary = [
  { symbol: 'ᚠ', name: 'Fehu', meaning: 'Kekayaan, Kelimpahan, Ternak' },
  { symbol: 'ᚢ', name: 'Uruz', meaning: 'Kekuatan, Keberanian, Energi Liar' },
  { symbol: 'ᚦ', name: 'Thurisaz', meaning: 'Duri, Raksasa, Perlindungan' },
  { symbol: 'ᚨ', name: 'Ansuz', meaning: 'Kebijaksanaan, Dewa Odin, Vokal' },
  { symbol: 'ᚱ', name: 'Raidho', meaning: 'Perjalanan, Roda, Takdir' },
  { symbol: 'ᚲ', name: 'Kenaz', meaning: 'Obor, Pengetahuan, Api Jiwa' },
  { symbol: 'ᚷ', name: 'Gebo', meaning: 'Hadiah, Hubungan, Keseimbangan' },
  { symbol: 'ᚹ', name: 'Wunjo', meaning: 'Harmoni, Kemakmuran, Sukacita' },
  { symbol: 'ᚺ', name: 'Hagalaz', meaning: 'Badai, Kehancuran Alam, Perubahan' },
  { symbol: 'ᚾ', name: 'Nauthiz', meaning: 'Ketahanan, Kebutuhan, Cobaan' },
  { symbol: 'ᛁ', name: 'Isa', meaning: 'Es, Keheningan, Hambatan Dingin' },
  { symbol: 'ᛃ', name: 'Jera', meaning: 'Siklus Alam, Panen, Karma' },
  { symbol: 'ᛇ', name: 'Eihwaz', meaning: 'Pohon Yew, Ketahanan, Kematian' },
  { symbol: 'ᛈ', name: 'Perthro', meaning: 'Misteri, Takdir, Rahasia Tak Terungkap' },
  { symbol: 'ᛉ', name: 'Algiz', meaning: 'Perlindungan, Rusa Rimba, Kesadaran' },
  { symbol: 'ᛊ', name: 'Sowilo', meaning: 'Matahari, Kemenangan, Energi Kehidupan' },
  { symbol: 'ᛏ', name: 'Tiwaz', meaning: 'Dewa Tyr, Keadilan, Pengorbanan' },
  { symbol: 'ᛒ', name: 'Berkano', meaning: 'Kelahiran Kembali, Pohon Birch, Ibu' },
  { symbol: 'ᛖ', name: 'Ehwaz', meaning: 'Kuda, Loyalitas, Kerja Sama' },
  { symbol: 'ᛗ', name: 'Mannaz', meaning: 'Diri Manusia, Kesadaran Sosial' },
  { symbol: 'ᛚ', name: 'Laguz', meaning: 'Air, Intuisi, Aliran Bawah Sadar' },
  { symbol: 'ᛜ', name: 'Ingwaz', meaning: 'Energi Dalam, Kesuburan, Potensi' },
  { symbol: 'ᛟ', name: 'Othala', meaning: 'Warisan Leluhur, Rumah, Tanah Air' },
  { symbol: 'ᛞ', name: 'Dagaz', meaning: 'Fajar, Transformasi Spiritual, Cahaya' }
];

// Simple English -> Rune transliteration dictionary
const runeMap = {
  'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ',
  'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'j': 'ᛃ',
  'k': 'ᚲ', 'l': 'ᛚ', 'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ',
  'p': 'ᛈ', 'q': 'ᚲ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
  'u': 'ᚢ', 'v': 'ᚢ', 'w': 'ᚹ', 'x': 'ᚲᛊ', 'y': 'ᛁ',
  'z': 'ᛉ', ' ': '  '
};

function setupRuneDecoder() {
  const inputElement = document.getElementById('rune-input-text');
  const outputElement = document.getElementById('rune-output-display');
  const glossaryGrid = document.getElementById('runes-grid');

  // Load Glossary Cards
  runesGlossary.forEach(rune => {
    const card = document.createElement('div');
    card.className = 'rune-card';
    card.innerHTML = `
      <div class="rune-symbol">${rune.symbol}</div>
      <div class="rune-name">${rune.name}</div>
      <div class="rune-meaning">${rune.meaning}</div>
    `;
    card.addEventListener('click', () => {
      // Append the rune name to input when clicked
      inputElement.value += (inputElement.value ? ' ' : '') + rune.name;
      translateText(inputElement.value);
    });
    glossaryGrid.appendChild(card);
  });

  // Listener for Input Transcription
  inputElement.addEventListener('input', (e) => {
    translateText(e.target.value);
  });

  function translateText(text) {
    if (!text.trim()) {
      outputElement.innerHTML = `<span class="placeholder-text">Teks runa Anda akan muncul di sini...</span>`;
      return;
    }

    const translated = text.toLowerCase().split('').map(char => {
      return runeMap[char] || char;
    }).join('');

    outputElement.textContent = translated;
  }
}

// 4. Dark Synthesized Ambient Soundscape (Web Audio API)
let audioContext = null;
let isPlaying = false;
let rumbleNode = null;
let windNode = null;
let melodyInterval = null;
let mainGainNode = null;

// Audio visualizer variables
let visualizerAnimationId = null;
const visualizerCanvas = document.getElementById('visualizer');
const canvasCtx = visualizerCanvas.getContext('2d');

function setupAudioPlayer() {
  const playPauseBtn = document.getElementById('play-pause-btn');
  const cassetteIcon = document.getElementById('cassette-icon');

  playPauseBtn.addEventListener('click', () => {
    if (!audioContext) {
      initAudio();
    }
    
    if (isPlaying) {
      toggleSoundscape(false);
      playPauseBtn.textContent = '▶';
      cassetteIcon.classList.remove('playing');
    } else {
      audioContext.resume().then(() => {
        stopOtherAudioThan('soundscape');
        toggleSoundscape(true);
        playPauseBtn.textContent = '⏸';
        cassetteIcon.classList.add('playing');
      });
    }
  });

  // Pre-initialize canvas dimensions
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  visualizerCanvas.width = visualizerCanvas.clientWidth;
  visualizerCanvas.height = visualizerCanvas.clientHeight;
}

function initAudio() {
  // Setup audio context with fallback
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioContextClass();
  
  // Create a master volume controller
  mainGainNode = audioContext.createGain();
  mainGainNode.gain.setValueAtTime(0.0, audioContext.currentTime); // fade-in later
  mainGainNode.connect(audioContext.destination);
}

function toggleSoundscape(shouldPlay) {
  if (shouldPlay && !isPlaying) {
    if (!audioContext) initAudio();
    
    isPlaying = true;
    
    // Smoothly fade master volume in
    mainGainNode.gain.cancelScheduledValues(audioContext.currentTime);
    mainGainNode.gain.setValueAtTime(mainGainNode.gain.value, audioContext.currentTime);
    mainGainNode.gain.linearRampToValueAtTime(0.8, audioContext.currentTime + 2.0);

    // Start individual synth layers
    startRumble();
    startWindNoise();
    startMelody();
    startVisualizer();
  } else if (!shouldPlay && isPlaying) {
    isPlaying = false;
    
    // Smoothly fade master volume out before stopping
    mainGainNode.gain.cancelScheduledValues(audioContext.currentTime);
    mainGainNode.gain.setValueAtTime(mainGainNode.gain.value, audioContext.currentTime);
    mainGainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 1.5);
    
    setTimeout(() => {
      if (!isPlaying) {
        stopRumble();
        stopWindNoise();
        stopMelody();
        stopVisualizer();
      }
    }, 1600);
  }
}

// Layer A: Low Sub-frequency Rumble (Brownian/Red Noise generator)
function startRumble() {
  if (!audioContext) return;

  const bufferSize = 10 * audioContext.sampleRate;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    // Brown noise filter formula
    output[i] = (lastOut + (0.02 * white)) / 1.02;
    lastOut = output[i];
    output[i] *= 3.5; // Amplify
  }

  rumbleNode = audioContext.createBufferSource();
  rumbleNode.buffer = noiseBuffer;
  rumbleNode.loop = true;

  // Filter out high frequencies to make it a deep rumble
  const lowpass = audioContext.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.setValueAtTime(65, audioContext.currentTime); // Deep rumble limit
  lowpass.Q.setValueAtTime(2, audioContext.currentTime);

  const rumbleGain = audioContext.createGain();
  rumbleGain.gain.setValueAtTime(0.5, audioContext.currentTime);

  rumbleNode.connect(lowpass);
  lowpass.connect(rumbleGain);
  rumbleGain.connect(mainGainNode);

  rumbleNode.start();
}

function stopRumble() {
  if (rumbleNode) {
    try { rumbleNode.stop(); } catch(e) {}
    rumbleNode = null;
  }
}

// Layer B: Cold Howling Wind (White noise passed through a sweeping Bandpass filter)
function startWindNoise() {
  if (!audioContext) return;

  const bufferSize = 4 * audioContext.sampleRate;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = audioContext.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  // Bandpass filter to isolate the "howl"
  const bandpass = audioContext.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.setValueAtTime(350, audioContext.currentTime);
  bandpass.Q.setValueAtTime(3.0, audioContext.currentTime);

  const windGain = audioContext.createGain();
  windGain.gain.setValueAtTime(0.12, audioContext.currentTime);

  whiteNoise.connect(bandpass);
  bandpass.connect(windGain);
  windGain.connect(mainGainNode);

  whiteNoise.start();
  windNode = whiteNoise;

  // Simulate howling wind gusts by slowly oscillating the filter frequency
  function howl() {
    if (!isPlaying) return;
    const targetFreq = 200 + Math.random() * 500;
    const duration = 4 + Math.random() * 6; // slow sweep
    bandpass.frequency.exponentialRampToValueAtTime(targetFreq, audioContext.currentTime + duration);
    
    // Slow volume change of wind
    const targetVolume = 0.05 + Math.random() * 0.12;
    windGain.gain.linearRampToValueAtTime(targetVolume, audioContext.currentTime + duration);

    setTimeout(howl, duration * 1000);
  }
  
  howl();
}

function stopWindNoise() {
  if (windNode) {
    try { windNode.stop(); } catch(e) {}
    windNode = null;
  }
}

// Layer C: Eerie Dark Ambient Synth Melody (Pagan/Minimal Minor Scale)
// Notes: E2, G2, B2, A#2, F#2, G2, E2, B1 (Pagan Dark Ambient Melody)
const melodyNotes = [82.41, 98.00, 123.47, 116.54, 92.50, 98.00, 82.41, 61.74];
let currentNoteIndex = 0;

function startMelody() {
  if (!audioContext) return;

  function playNextNote() {
    if (!isPlaying) return;

    const freq = melodyNotes[currentNoteIndex];
    currentNoteIndex = (currentNoteIndex + 1) % melodyNotes.length;

    // Create oscillator (Triangle wave gives a raw 90s dungeon synth tone)
    const osc = audioContext.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);

    // Eerie low-pass filter
    const lp = audioContext.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(600, audioContext.currentTime);

    // Gain node for envelope
    const oscGain = audioContext.createGain();
    oscGain.gain.setValueAtTime(0, audioContext.currentTime);
    // Slow attack
    oscGain.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 1.2);
    // Slow decay
    oscGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 4.5);

    // Delay/Reverb simulation node
    const delay = audioContext.createDelay();
    delay.delayTime.setValueAtTime(0.6, audioContext.currentTime);
    const feedback = audioContext.createGain();
    feedback.gain.setValueAtTime(0.4, audioContext.currentTime);

    // Connect nodes
    osc.connect(lp);
    lp.connect(oscGain);
    
    // Direct path
    oscGain.connect(mainGainNode);
    
    // Delay path
    oscGain.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay); // feedback loop
    feedback.connect(mainGainNode);

    osc.start();
    // Stop node clean up
    osc.stop(audioContext.currentTime + 5.0);

    // Schedule next note in 3.8 seconds (overlapping ambient style)
    const nextInterval = 3200 + Math.random() * 1500;
    melodyInterval = setTimeout(playNextNote, nextInterval);
  }

  // Delay the first note slightly
  melodyInterval = setTimeout(playNextNote, 1000);
}

function stopMelody() {
  if (melodyInterval) {
    clearTimeout(melodyInterval);
    melodyInterval = null;
  }
}

// 5. Raw Low-fi Visualizer Drawing
function startVisualizer() {
  function draw() {
    if (!isPlaying) {
      // Clear visualizer to silent line
      canvasCtx.fillStyle = '#000000';
      canvasCtx.fillRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      canvasCtx.strokeStyle = '#222222';
      canvasCtx.beginPath();
      canvasCtx.moveTo(0, visualizerCanvas.height / 2);
      canvasCtx.lineTo(visualizerCanvas.width, visualizerCanvas.height / 2);
      canvasCtx.stroke();
      return;
    }

    visualizerAnimationId = requestAnimationFrame(draw);

    canvasCtx.fillStyle = '#000000';
    canvasCtx.fillRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

    // Draw raw fanzine-style glitchy waveform representation
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = '#f5f5f5';
    canvasCtx.beginPath();

    const sliceWidth = visualizerCanvas.width / 40;
    let x = 0;

    for (let i = 0; i < 40; i++) {
      // Generate noise-based height to look like active audio visualizer
      const rawAmplitude = Math.sin(i * 0.3 + Date.now() * 0.005) * 0.4 + (Math.random() * 0.6);
      const amplitude = Math.max(0.1, rawAmplitude);
      const height = amplitude * (visualizerCanvas.height - 10);
      const y = (visualizerCanvas.height - height) / 2;

      // Draw vertical bars like photocopied barcode visualizer
      canvasCtx.fillStyle = Math.random() > 0.98 ? '#ffffff' : '#aaaaaa'; // Stark flicker effect
      canvasCtx.fillRect(x, y, 2, height);
      x += sliceWidth;
    }
  }

  draw();
}

function stopVisualizer() {
  if (visualizerAnimationId) {
    cancelAnimationFrame(visualizerAnimationId);
    visualizerAnimationId = null;
  }
  // Reset visualizer line
  canvasCtx.fillStyle = '#000000';
  canvasCtx.fillRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
  canvasCtx.strokeStyle = '#444444';
  canvasCtx.beginPath();
  canvasCtx.moveTo(0, visualizerCanvas.height / 2);
  canvasCtx.lineTo(visualizerCanvas.width, visualizerCanvas.height / 2);
  canvasCtx.stroke();
}

// 6. Lightbox Modal
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-image');
      lightboxImg.src = imgSrc;
      lightbox.classList.add('active');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
}

// 7. Covenant Store (Discogs Collection Marketplace)
const WHATSAPP_NUMBER = "6281328128315"; // Seller's WhatsApp number

function setupMarket() {
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('market-search');
  const filterButtons = document.querySelectorAll('#market-filter-buttons .filter-btn');

  if (!productsGrid || typeof collectionData === 'undefined') return;

  let activeFilter = 'all';
  let searchQuery = '';

  // Initial render
  renderStore();

  // Search event
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderStore();
  });

  // Filter events
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderStore();
    });
  });

  function renderStore() {
    productsGrid.innerHTML = '';

    const filtered = collectionData.filter(item => {
      // Search matching
      const matchSearch = item.artist.toLowerCase().includes(searchQuery) || 
                          item.title.toLowerCase().includes(searchQuery) ||
                          item.label.toLowerCase().includes(searchQuery);

      // Filter matching
      let matchFilter = false;
      if (activeFilter === 'all') {
        matchFilter = true;
      } else if (activeFilter === 'CD') {
        matchFilter = item.format.includes('CD') || item.format.includes('CDr');
      } else if (activeFilter === 'Cassette') {
        matchFilter = item.format.includes('Cassette');
      } else if (activeFilter === 'Vinyl') {
        matchFilter = item.format.includes('Vinyl') || item.format.includes('LP');
      }

      return matchSearch && matchFilter;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px 0; font-family: var(--fanzine-font); color: var(--mid-grey);">
          [ RILISAN YANG DICARI TIDAK DITEMUKAN DI DALAM VOID ]
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';

      // Clean display format
      let dispFormat = item.format;
      if (dispFormat.includes('CDr')) dispFormat = 'CD-R';

      // Year display
      const yearDisp = item.year && item.year !== 0 ? item.year : 'TBA';

      // Clean WA Link text
      const messageText = `Halo The Void, saya tertarik untuk membeli rilisan fisik koleksi Anda:\n\n*Band:* ${item.artist}\n*Album:* ${item.title}\n*Format:* ${dispFormat} (${yearDisp})\n*Katalog:* ${item.label} (${item.catno})`;
      const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

      card.innerHTML = `
        <div class="product-img-box">
          <span class="format-tag">${dispFormat}</span>
          <img src="${item.thumb}" alt="${item.title}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="product-img-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; flex-direction:column; font-family:var(--gothic-font); color:var(--mid-grey); background:var(--black); border:1px dashed var(--mid-grey);">
            <div style="font-size:2rem; margin-bottom:5px;">💿</div>
            <div style="font-size:0.8rem; font-family:var(--fanzine-font); text-transform:uppercase;">No Image</div>
          </div>
        </div>
        <div class="product-info">
          <div class="product-artist">${item.artist}</div>
          <div class="product-title">${item.title}</div>
          <div class="product-meta">
            <div>Label: ${item.label}</div>
            <div>CatNo: ${item.catno}</div>
            <div>Tahun: ${yearDisp}</div>
          </div>
        </div>
        <a href="${waLink}" target="_blank" class="wa-order-btn">Pesan via WhatsApp</a>
      `;

      productsGrid.appendChild(card);
    });
  }
}

// 9. The Vault (Demo Cassette Player & Playlist Logic)
const vaultDemos = {
  burzum: {
    band: "Burzum",
    title: "Demo 1991",
    tracks: [
      { num: "01", name: "Lost Wisdom", src: "assets/demo/Burzum 1991 - Demo (Demo)/01. Lost Wisdom.mp3" },
      { num: "02", name: "Spell Of Destruction", src: "assets/demo/Burzum 1991 - Demo (Demo)/02. Spell Of Destruction.mp3" },
      { num: "03", name: "Channeling The Power Of Souls Into A New God", src: "assets/demo/Burzum 1991 - Demo (Demo)/03. Channeling The Power Of Souls Into A New God.mp3" }
    ]
  },
  darkthrone: {
    band: "Darkthrone",
    title: "Land Of Frost (1988)",
    tracks: [
      { num: "01", name: "Land Of Frost", src: "assets/demo/Darkthrone 1988 - Land Of Frost (Demo)/01. Land Of Frost.mp3" },
      { num: "02", name: "Winds Of Triton", src: "assets/demo/Darkthrone 1988 - Land Of Frost (Demo)/02. Winds Of Triton.mp3" },
      { num: "03", name: "Forest Of Darkness", src: "assets/demo/Darkthrone 1988 - Land Of Frost (Demo)/03. Forest Of Darkness.mp3" },
      { num: "04", name: "Odyssey Of Freedom", src: "assets/demo/Darkthrone 1988 - Land Of Frost (Demo)/04. Odyssey Of Freedom.mp3" },
      { num: "05", name: "Day Of The Dead", src: "assets/demo/Darkthrone 1988 - Land Of Frost (Demo)/05. Day Of The Dead.mp3" }
    ]
  },
  samael: {
    band: "Samael",
    title: "Into The Infernal Storm Of Evil (1987)",
    tracks: [
      { num: "01", name: "Intro", src: "assets/demo/Samael 1987 - Into The Infernal Storm Of Evil (Demo)/01. Intro.mp3" },
      { num: "02", name: "Messengers Of The Light", src: "assets/demo/Samael 1987 - Into The Infernal Storm Of Evil (Demo)/02. Messengers Of The Light.mp3" },
      { num: "03", name: "Knowledge Of The Ancient Kingdom", src: "assets/demo/Samael 1987 - Into The Infernal Storm Of Evil (Demo)/03. Knowledge Of The Ancient Kingdom.mp3" },
      { num: "04", name: "Into The Dark", src: "assets/demo/Samael 1987 - Into The Infernal Storm Of Evil (Demo)/04. Into The Dark.mp3" }
    ]
  },
  emperor: {
    band: "Emperor",
    title: "Wrath of the Tyrant (1993)",
    tracks: [
      { num: "01", name: "Introduction", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/1. Introduction.mp3" },
      { num: "02", name: "Ancient Queen", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/2. Ancient Queen.mp3" },
      { num: "03", name: "My Empire's Doom", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/3. My Empire's Doom.mp3" },
      { num: "04", name: "Forgotten Centuries", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/4. Forgotten Centuries.mp3" },
      { num: "05", name: "Night of the Graveless Souls", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/5. Night of the Graveless Souls.mp3" },
      { num: "06", name: "Moon Over Kara-Shehr", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/6, Moon Over Kara-Shehr.mp3" },
      { num: "07", name: "Witches Sabbath", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/7. Witches Sabbath.mp3" },
      { num: "08", name: "Lord of the Storms", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/8. Lord of the Storms.mp3" },
      { num: "09", name: "Wrath of the Tyrant", src: "assets/demo/Emperor 1993 - Wrath of the Tyrant (Demo)/9. Wrath of the Tyrant.mp3" }
    ]
  },
  mayhem: {
    band: "Mayhem",
    title: "Pure Fucking Armageddon (1986)",
    tracks: [
      { num: "01", name: "Voice Of A Tortured Skull", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/01. Voice Of A Tortured Skull.mp3" },
      { num: "02", name: "Carnage", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/02. Carnage.mp3" },
      { num: "03", name: "Ghoul", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/03. Ghoul.mp3" },
      { num: "04", name: "Black Metal (Venom Cover)", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/04. Black Metal (Total Death Version) (Venom Cover).mp3" },
      { num: "05", name: "Pure Fucking Armageddon", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/05. Pure Fucking Armageddon.mp3" },
      { num: "06", name: "Mayhem", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/06. Mayhem.mp3" },
      { num: "07", name: "Ghoul (Alternate)", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/07. Ghoul.mp3" },
      { num: "08", name: "Pure Fucking Armageddon (Alternate)", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/08. Pure Fucking Armageddon.mp3" },
      { num: "09", name: "Carnage (Alternate)", src: "assets/demo/Mayhem 1986 - Pure Fucking Armageddon (Demo)/09. Carnage.mp3" }
    ]
  }
};

let vaultSourceNode = null;
let vaultAnalyser = null;
let vaultVisualizerId = null;

function setupVault() {
  const audioNode = document.getElementById('vault-audio-node');
  const playBtn = document.getElementById('vault-btn-play');
  const prevBtn = document.getElementById('vault-btn-prev');
  const nextBtn = document.getElementById('vault-btn-next');
  const scrubber = document.getElementById('vault-scrubber');
  const timeCurrent = document.getElementById('vault-time-current');
  const timeDuration = document.getElementById('vault-time-duration');
  const volumeSlider = document.getElementById('vault-volume-slider');
  const cassetteTape = document.getElementById('vault-cassette-tape');
  
  const bandDisplay = document.getElementById('vault-band-display');
  const titleDisplay = document.getElementById('vault-title-display');
  const tracklistEl = document.getElementById('vault-tracklist');
  const selectorCards = document.querySelectorAll('.tape-select-card');

  if (!audioNode || !playBtn) return;

  let currentTapeKey = "burzum";
  let currentTrackIndex = 0;

  // 1. Initial Load
  loadTape(currentTapeKey, false);

  // 2. Play / Pause Action
  playBtn.addEventListener('click', () => {
    // Stop other audio sources
    stopOtherAudioThan('vault');

    // Init Web Audio
    initVaultAudio();

    if (audioNode.paused) {
      audioNode.play();
      playBtn.textContent = '⏸ PAUSE';
      cassetteTape.classList.add('playing');
      startVaultVisualizer();
    } else {
      audioNode.pause();
      playBtn.textContent = '▶ PLAY';
      cassetteTape.classList.remove('playing');
    }
  });

  // 3. Switch Tape function
  function loadTape(tapeKey, shouldPlay = true) {
    currentTapeKey = tapeKey;
    currentTrackIndex = 0;
    
    const demo = vaultDemos[tapeKey];
    bandDisplay.textContent = demo.band;
    titleDisplay.textContent = demo.title;

    // Render Tracklist
    renderTracklist();

    // Select track
    loadTrack(0, shouldPlay);
  }

  // Click selector cards
  selectorCards.forEach(card => {
    card.addEventListener('click', () => {
      selectorCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const tapeKey = card.getAttribute('data-tape');
      
      const wasPlaying = !audioNode.paused;
      loadTape(tapeKey, wasPlaying);
    });
  });

  // 4. Load Specific Track
  function loadTrack(index, shouldPlay = true) {
    const demo = vaultDemos[currentTapeKey];
    const track = demo.tracks[index];
    if (!track) return;

    currentTrackIndex = index;

    audioNode.src = track.src;
    audioNode.load();

    // Highlight active track in UI
    const listItems = tracklistEl.querySelectorAll('li');
    listItems.forEach(li => li.classList.remove('active'));
    if (listItems[index]) {
      listItems[index].classList.add('active');
    }

    // Reset scrubber
    scrubber.value = 0;
    timeCurrent.textContent = '00:00';
    timeDuration.textContent = '00:00';

    if (shouldPlay) {
      stopOtherAudioThan('vault');
      initVaultAudio();
      audioNode.play();
      playBtn.textContent = '⏸ PAUSE';
      cassetteTape.classList.add('playing');
      startVaultVisualizer();
    } else {
      playBtn.textContent = '▶ PLAY';
      cassetteTape.classList.remove('playing');
    }
  }

  // 5. Render Tracklist Helper
  function renderTracklist() {
    tracklistEl.innerHTML = '';
    const demo = vaultDemos[currentTapeKey];
    
    demo.tracks.forEach((track, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="track-num">${track.num}</span>
        <span class="track-name">${track.name}</span>
        <span class="track-play-icon">▶</span>
      `;
      li.addEventListener('click', () => {
        loadTrack(idx, true);
      });
      tracklistEl.appendChild(li);
    });
  }

  // 6. Navigation Controls
  prevBtn.addEventListener('click', () => {
    const demo = vaultDemos[currentTapeKey];
    let prevIdx = currentTrackIndex - 1;
    if (prevIdx < 0) prevIdx = demo.tracks.length - 1;
    loadTrack(prevIdx, true);
  });

  nextBtn.addEventListener('click', () => {
    const demo = vaultDemos[currentTapeKey];
    let nextIdx = (currentTrackIndex + 1) % demo.tracks.length;
    loadTrack(nextIdx, true);
  });

  // 7. Time updates
  audioNode.addEventListener('timeupdate', () => {
    if (isNaN(audioNode.duration)) return;
    const progress = (audioNode.currentTime / audioNode.duration) * 100;
    scrubber.value = progress;
    timeCurrent.textContent = formatTime(audioNode.currentTime);
  });

  audioNode.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = formatTime(audioNode.duration);
  });

  scrubber.addEventListener('input', () => {
    if (isNaN(audioNode.duration)) return;
    const seek = (scrubber.value / 100) * audioNode.duration;
    audioNode.currentTime = seek;
  });

  volumeSlider.addEventListener('input', (e) => {
    audioNode.volume = e.target.value / 100;
  });

  audioNode.addEventListener('ended', () => {
    const demo = vaultDemos[currentTapeKey];
    let nextIdx = (currentTrackIndex + 1) % demo.tracks.length;
    loadTrack(nextIdx, true);
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
  }
}

// Global Pause Helper
function stopOtherAudioThan(activePlayer) {
  if (activePlayer !== 'soundscape' && isPlaying) {
    toggleSoundscape(false);
    const mainPlayPauseBtn = document.getElementById('play-pause-btn');
    if (mainPlayPauseBtn) mainPlayPauseBtn.textContent = '▶';
    const mainCassetteIcon = document.getElementById('cassette-icon');
    if (mainCassetteIcon) mainCassetteIcon.classList.remove('playing');
  }

  if (activePlayer !== 'podcast') {
    const podcastAudio = document.getElementById('podcast-audio-node');
    if (podcastAudio && !podcastAudio.paused) {
      podcastAudio.pause();
      const podcastPlayBtn = document.getElementById('podcast-btn-play');
      if (podcastPlayBtn) podcastPlayBtn.textContent = '▶ PLAY';
      const tape = document.getElementById('podcast-cassette-tape');
      if (tape) tape.classList.remove('playing');
    }
  }

  if (activePlayer !== 'vault') {
    const vaultAudio = document.getElementById('vault-audio-node');
    if (vaultAudio && !vaultAudio.paused) {
      vaultAudio.pause();
      const vaultPlayBtn = document.getElementById('vault-btn-play');
      if (vaultPlayBtn) vaultPlayBtn.textContent = '▶ PLAY';
      const vaultTape = document.getElementById('vault-cassette-tape');
      if (vaultTape) vaultTape.classList.remove('playing');
    }
  }
}

function initVaultAudio() {
  if (!audioContext) {
    initAudio();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  if (!vaultAnalyser) {
    vaultAnalyser = audioContext.createAnalyser();
    vaultAnalyser.fftSize = 64;
  }
  const audioNode = document.getElementById('vault-audio-node');
  if (!vaultSourceNode && audioNode) {
    try {
      vaultSourceNode = audioContext.createMediaElementSource(audioNode);
      vaultSourceNode.connect(vaultAnalyser);
      vaultAnalyser.connect(audioContext.destination);
    } catch (e) {
      console.error("Failed to route vault audio:", e);
    }
  }
}

function startVaultVisualizer() {
  const canvas = document.getElementById('vault-canvas');
  if (!canvas || !vaultAnalyser) return;

  const ctx = canvas.getContext('2d');
  const bufferLength = vaultAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const audioNode = document.getElementById('vault-audio-node');

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  function draw() {
    if (!audioNode || audioNode.paused) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#222222';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      return;
    }

    vaultVisualizerId = requestAnimationFrame(draw);
    vaultAnalyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = canvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * (canvas.height - 10);
      const y = (canvas.height - barHeight) / 2;

      ctx.fillStyle = Math.random() > 0.98 ? '#ffffff' : '#aaaaaa';
      ctx.fillRect(x, y, barWidth - 4, barHeight);
      x += barWidth;
    }
  }

  draw();
}

// 8. Voidcast Chronicles (Podcast Player Logic)
let podcastSourceNode = null;
let podcastAnalyser = null;
let podcastVisualizerId = null;

function setupPodcast() {
  const audioNode = document.getElementById('podcast-audio-node');
  const playBtn = document.getElementById('podcast-btn-play');
  const prevBtn = document.getElementById('podcast-btn-prev');
  const nextBtn = document.getElementById('podcast-btn-next');
  const scrubber = document.getElementById('podcast-scrubber');
  const timeCurrent = document.getElementById('podcast-time-current');
  const timeDuration = document.getElementById('podcast-time-duration');
  const volumeSlider = document.getElementById('podcast-volume-slider');
  const cassetteTape = document.getElementById('podcast-cassette-tape');
  const episodeItems = document.querySelectorAll('.episode-item');
  
  const currentTitle = document.getElementById('podcast-current-title');
  const currentDesc = document.getElementById('podcast-current-desc');
  const currentLabel = document.getElementById('podcast-episode-label');

  if (!audioNode || !playBtn) return;

  let currentEpisodeIndex = 0;

  // 1. Play / Pause Toggle
  playBtn.addEventListener('click', () => {
    stopOtherAudioThan('podcast');

    // Initialize Web Audio API routing for the podcast element
    initPodcastAudio();

    if (audioNode.paused) {
      audioNode.play();
      playBtn.textContent = '⏸ PAUSE';
      cassetteTape.classList.add('playing');
      startPodcastVisualizer();
    } else {
      audioNode.pause();
      playBtn.textContent = '▶ PLAY';
      cassetteTape.classList.remove('playing');
    }
  });

  // 2. Load Episode function
  function loadEpisode(index) {
    const item = episodeItems[index];
    if (!item) return;

    // Remove active class from all and add to current
    episodeItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Get metadata from data attributes
    const src = item.getAttribute('data-src');
    const label = item.getAttribute('data-label');
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');

    currentEpisodeIndex = index;

    // Load new audio source
    audioNode.src = src;
    audioNode.load();

    // Update UI labels
    currentLabel.textContent = label;
    currentTitle.textContent = title;
    currentDesc.textContent = desc;

    // Reset progress bar
    scrubber.value = 0;
    timeCurrent.textContent = '00:00';
    timeDuration.textContent = '00:00';

    // Auto play if already playing, or if clicked
    const wasPlaying = !audioNode.paused || playBtn.textContent.includes('PAUSE');
    if (wasPlaying) {
      stopOtherAudioThan('podcast');
      initPodcastAudio();
      audioNode.play();
      playBtn.textContent = '⏸ PAUSE';
      cassetteTape.classList.add('playing');
      startPodcastVisualizer();
    } else {
      playBtn.textContent = '▶ PLAY';
      cassetteTape.classList.remove('playing');
    }
  }

  // Click on episode item
  episodeItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      loadEpisode(idx);
    });
  });

  // 3. Navigation Controls (Next / Prev)
  prevBtn.addEventListener('click', () => {
    let prevIdx = currentEpisodeIndex - 1;
    if (prevIdx < 0) prevIdx = episodeItems.length - 1;
    loadEpisode(prevIdx);
  });

  nextBtn.addEventListener('click', () => {
    let nextIdx = (currentEpisodeIndex + 1) % episodeItems.length;
    loadEpisode(nextIdx);
  });

  // 4. Progress bar Scrubber Update
  audioNode.addEventListener('timeupdate', () => {
    if (isNaN(audioNode.duration)) return;
    
    // Update progress slider
    const progress = (audioNode.currentTime / audioNode.duration) * 100;
    scrubber.value = progress;

    // Update time label
    timeCurrent.textContent = formatTime(audioNode.currentTime);
  });

  // Loaded metadata event to show duration
  audioNode.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = formatTime(audioNode.duration);
  });

  // Seek on scrubber change
  scrubber.addEventListener('input', () => {
    if (isNaN(audioNode.duration)) return;
    const seekTime = (scrubber.value / 100) * audioNode.duration;
    audioNode.currentTime = seekTime;
  });

  // 5. Volume Slider
  volumeSlider.addEventListener('input', (e) => {
    const vol = e.target.value / 100;
    audioNode.volume = vol;
  });

  // Auto-advance when episode ends
  audioNode.addEventListener('ended', () => {
    let nextIdx = (currentEpisodeIndex + 1) % episodeItems.length;
    loadEpisode(nextIdx);
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const minsStr = mins < 10 ? '0' + mins : mins;
    const secsStr = secs < 10 ? '0' + secs : secs;
    return `${minsStr}:${secsStr}`;
  }
}

function initPodcastAudio() {
  if (!audioContext) {
    initAudio();
  }
  
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  if (!podcastAnalyser) {
    podcastAnalyser = audioContext.createAnalyser();
    podcastAnalyser.fftSize = 64; // Low resolution glitch visualizer
  }

  const audioNode = document.getElementById('podcast-audio-node');
  if (!podcastSourceNode && audioNode) {
    // MediaElementAudioSourceNode must only be created once per element
    try {
      podcastSourceNode = audioContext.createMediaElementSource(audioNode);
      podcastSourceNode.connect(podcastAnalyser);
      podcastAnalyser.connect(audioContext.destination);
    } catch (e) {
      console.error("Failed to route podcast audio element to audioContext:", e);
    }
  }
}

function startPodcastVisualizer() {
  const canvas = document.getElementById('podcast-canvas');
  if (!canvas || !podcastAnalyser) return;

  const ctx = canvas.getContext('2d');
  const bufferLength = podcastAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const audioNode = document.getElementById('podcast-audio-node');

  // Resize visualizer canvas
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  function draw() {
    if (!audioNode || audioNode.paused) {
      // Clear visualizer to silent line
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#222222';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      return;
    }

    podcastVisualizerId = requestAnimationFrame(draw);
    podcastAnalyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = canvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      // Scale height
      const rawVal = dataArray[i];
      const percent = rawVal / 255;
      const barHeight = percent * (canvas.height - 10);
      const y = (canvas.height - barHeight) / 2;

      ctx.fillStyle = Math.random() > 0.98 ? '#ffffff' : '#aaaaaa';
      ctx.fillRect(x, y, barWidth - 4, barHeight);
      x += barWidth;
    }
  }

  draw();
}
