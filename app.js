/* ============================================================
   SocialBling — App JavaScript
   ============================================================ */

// ---------- DATA ----------

const NEIGHBORHOODS = [
  { id: 'koramangala', name: 'Koramangala', zone: 'South', members: 145 },
  { id: 'hsr', name: 'HSR Layout', zone: 'South', members: 98 },
  { id: 'indiranagar', name: 'Indiranagar', zone: 'East', members: 112 },
  { id: 'whitefield', name: 'Whitefield', zone: 'East', members: 87 },
  { id: 'jayanagar', name: 'Jayanagar', zone: 'South', members: 76 },
  { id: 'jpnagar', name: 'JP Nagar', zone: 'South', members: 65 },
  { id: 'btm', name: 'BTM Layout', zone: 'South', members: 89 },
  { id: 'sarjapur', name: 'Sarjapur Road', zone: 'East', members: 67 },
  { id: 'marathahalli', name: 'Marathahalli', zone: 'East', members: 43 },
  { id: 'bellandur', name: 'Bellandur', zone: 'East', members: 45 },
  { id: 'hebbal', name: 'Hebbal', zone: 'North', members: 34 },
  { id: 'yelahanka', name: 'Yelahanka', zone: 'North', members: 28 },
  { id: 'malleshwaram', name: 'Malleshwaram', zone: 'North', members: 31 },
  { id: 'rajajinagar', name: 'Rajajinagar', zone: 'North', members: 22 },
  { id: 'banashankari', name: 'Banashankari', zone: 'South', members: 38 },
  { id: 'electroniccity', name: 'Electronic City', zone: 'South', members: 52 },
  { id: 'bannerghatta', name: 'Bannerghatta Road', zone: 'South', members: 41 },
  { id: 'kengeri', name: 'Kengeri', zone: 'West', members: 19 },
];

const AGE_OPTIONS = [
  { id: '0-6m',     label: '0–6 months',   emoji: '🍼', desc: 'Newborn survival mode' },
  { id: '6-12m',    label: '6–12 months',  emoji: '🐣', desc: 'Starting to crawl' },
  { id: '1-2y',     label: '1–2 years',    emoji: '🚶', desc: 'First steps & words' },
  { id: '2-3y',     label: '2–3 years',    emoji: '🎨', desc: 'Toddler adventures' },
  { id: '3-5y',     label: '3–5 years',    emoji: '🛝', desc: 'Preschool years' },
  { id: '5-8y',     label: '5–8 years',    emoji: '📚', desc: 'School starters' },
  { id: '8-12y',    label: '8–12 years',   emoji: '⚽', desc: 'Big kids' },
  { id: 'multiple', label: 'Multiple kids', emoji: '👨‍👩‍👧‍👦', desc: 'Different ages' },
];

const MEETUPS = [
  {
    id: 1, type: 'playdate',
    title: 'Morning Playdate at Lalbagh',
    emoji: '🌸',
    location: 'Lalbagh Botanical Garden, South Gate',
    area: 'South',
    date: 'Sat, Jun 7', time: '8:00 AM – 11:00 AM',
    ageGroup: '2–5 yrs',
    organizer: 'Meena P.',
    spots: 12, spotsLeft: 4,
    desc: 'Morning stroll, kids on the grass, parents chat over chai. Bring a mat and snacks to share.',
    tags: ['playdate', 'family'],
    waLink: 'https://chat.whatsapp.com/IAEXy0G4u9mAKXOAlhrgdy',
  },
  {
    id: 3, type: 'mom',
    title: 'Mom Recharge Hour',
    emoji: '☕',
    location: "Meena's home, Koramangala 5th Block",
    area: 'Koramangala',
    date: 'Sun, Jun 8', time: '10:00 AM – 12:00 PM',
    ageGroup: '1–4 yrs',
    organizer: 'Meena P.',
    spots: 4, spotsLeft: 2,
    desc: "Meena hosts 4 kids so 4 moms get 2 free hours. Next turn: Priya hosts Jun 22. Rotation-based swap.",
    tags: ['mom'],
    waLink: 'https://chat.whatsapp.com/DA7V6lPyipjLU7n8MDO6KO',
  },
  {
    id: 4, type: 'family',
    title: 'Skill Swap',
    emoji: '💃',
    location: "Sunita's home (shared on join)",
    area: 'Indiranagar',
    date: 'Sat, Jun 14', time: '9:00 AM – 10:30 AM',
    ageGroup: '4–8 yrs',
    organizer: 'Sunita R.',
    spots: 10, spotsLeft: 5,
    desc: 'Sunita (former Kathak dancer) teaches 45-min basics to kids at home. Parents watch & photograph furiously. FREE.',
    tags: ['family', 'playdate'],
    waLink: 'https://chat.whatsapp.com/K7vIP3BAsQQ0CZ0GkSXW0r',
  },
  {
    id: 6, type: 'mom',
    title: 'Honest Hour — Postpartum Circle',
    emoji: '❤️',
    location: 'Online (WhatsApp group)',
    area: 'All areas',
    date: 'Thu, Jun 12', time: '9:00 PM – 10:00 PM',
    ageGroup: '0–18 months',
    organizer: 'SocialBling',
    spots: 0, spotsLeft: 0,
    desc: 'Weekly new-moms check-in. No judgment, no perfect parenting. Anonymous polls and honest talk.',
    tags: ['mom'],
    waLink: 'https://chat.whatsapp.com/DpPlvCmCbOqBWtwu6APVWG',
  },
  {
    id: 9, type: 'playdate',
    title: 'Cubbon Park Playdate — Ages 4–7',
    emoji: '🌳',
    location: 'Cubbon Park, Band Stand Lawn',
    area: 'Cubbon Park',
    date: 'Sun, Jun 8', time: '9:00 AM – 11:00 AM',
    ageGroup: '4–7 yrs',
    organizer: 'SocialBling',
    spots: 0, spotsLeft: 0,
    desc: 'Open green space, kids run free while parents connect. Bring snacks and a mat. Ongoing WhatsApp group for weekly meetups.',
    tags: ['playdate', 'family'],
    waLink: 'https://chat.whatsapp.com/G06UL3osFWL5aF2npq1FNX',
  },
  {
    id: 10, type: 'playdate',
    title: 'Cubbon Park Playdate — Ages 8–12',
    emoji: '⚽',
    location: 'Cubbon Park, Sports Ground',
    area: 'Cubbon Park',
    date: 'Sun, Jun 8', time: '9:00 AM – 11:00 AM',
    ageGroup: '8–12 yrs',
    organizer: 'SocialBling',
    spots: 0, spotsLeft: 0,
    desc: 'Cricket, badminton, frisbee — kids lead, parents join or chill. Active weekend group for older kids in Cubbon Park.',
    tags: ['playdate', 'family'],
    waLink: 'https://chat.whatsapp.com/BhzG5ATSMBSGYhvFjTt8Nm',
  },
];

// ---------- ALL GROUPS DATA ----------

const ALL_GROUPS = [
  {
    emoji: '💕',
    name: 'Mom Circle — Your City',
    desc: 'Safe space for moms · All areas',
    tag: 'mom',
    link: 'https://chat.whatsapp.com/E1V1TPo2nZ6H9nJiADyTWJ',
  },
  {
    emoji: '💪',
    name: 'Dad Circle — Your City',
    desc: '5AM club · runs · hangouts · dads',
    tag: 'dad',
    link: 'https://chat.whatsapp.com/D6AjJvSx70iKmwtJgBJ6gC',
  },
  {
    emoji: '🏡',
    name: 'Family Circle — Your City',
    desc: 'Playdates · events · gear swaps',
    tag: 'family',
    link: 'https://chat.whatsapp.com/CUIkeWndHT6JJhYKLfPqWi',
  },
  {
    emoji: '❤️',
    name: 'Honest Hour — Postpartum Circle',
    desc: 'New moms · 0–18 months · weekly check-in',
    tag: 'mom',
    link: 'https://chat.whatsapp.com/DpPlvCmCbOqBWtwu6APVWG',
  },
  {
    emoji: '☕',
    name: 'Mom Recharge Hour',
    desc: 'Childcare swap · Koramangala · 1–4 yrs',
    tag: 'mom',
    link: 'https://chat.whatsapp.com/DA7V6lPyipjLU7n8MDO6KO',
  },
  {
    emoji: '🌸',
    name: 'Lalbagh Playdate Group',
    desc: 'Morning playdates · South · 2–5 yrs',
    tag: 'playdate',
    link: 'https://chat.whatsapp.com/IAEXy0G4u9mAKXOAlhrgdy',
  },
  {
    emoji: '💃',
    name: 'Skill Swap',
    desc: 'Dance at home · Indiranagar · 4–8 yrs',
    tag: 'family',
    link: 'https://chat.whatsapp.com/K7vIP3BAsQQ0CZ0GkSXW0r',
  },
  {
    emoji: '🌳',
    name: 'Cubbon Park Playdate — Ages 4–7',
    desc: 'Weekend outdoor play · City centre',
    tag: 'playdate',
    link: 'https://chat.whatsapp.com/G06UL3osFWL5aF2npq1FNX',
  },
  {
    emoji: '⚽',
    name: 'Cubbon Park Playdate — Ages 8–12',
    desc: 'Cricket · badminton · frisbee · City centre',
    tag: 'playdate',
    link: 'https://chat.whatsapp.com/BhzG5ATSMBSGYhvFjTt8Nm',
  },
];

// ---------- MODAL — Direct All-Groups ----------

function openModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderAllGroups();
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function overlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function renderAllGroups(filter) {
  filter = filter || 'all';
  const container = document.getElementById('allGroupsList');
  if (!container) return;

  const list = filter === 'all'
    ? ALL_GROUPS
    : ALL_GROUPS.filter(g => g.tag === filter);

  container.innerHTML = list.map((g, i) => `
    <a class="ag-item" href="${g.link}" target="_blank" rel="noopener noreferrer">
      <span class="ag-emoji">${g.emoji}</span>
      <div class="ag-info">
        <div class="ag-name">${g.name}</div>
        <div class="ag-desc">${g.desc}</div>
      </div>
      <span class="ag-arrow">💬</span>
    </a>
  `).join('');
}

function filterGroups(f, btn) {
  document.querySelectorAll('.ag-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAllGroups(f);
}

// ---------- RENDER MEETUPS ----------

function renderMeetups(filter) {
  filter = filter || 'all';
  const grid = document.getElementById('meetupsGrid');
  if (!grid) return;

  const list = filter === 'all'
    ? MEETUPS
    : MEETUPS.filter(m => m.tags.includes(filter));

  if (list.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--muted);grid-column:1/-1;padding:32px 0">No meetups for this filter yet. Check back soon!</p>';
    return;
  }

  grid.innerHTML = list.map(m => {
    let spotsHtml;
    if (m.spots === 0) {
      spotsHtml = '<span class="meetup-spots spots-open">🟢 Open · No limit</span>';
    } else if (m.spotsLeft === 0) {
      spotsHtml = '<span class="meetup-spots spots-full">❌ Full</span>';
    } else if (m.spotsLeft <= 3) {
      spotsHtml = '<span class="meetup-spots spots-few">🔴 Only ' + m.spotsLeft + ' spots left</span>';
    } else {
      spotsHtml = '<span class="meetup-spots spots-open">🟢 ' + m.spotsLeft + ' / ' + m.spots + ' spots open</span>';
    }

    let rsvpBtn;
    if (m.spotsLeft === 0 && m.spots !== 0) {
      rsvpBtn = '<button class="meetup-rsvp rsvp-full" disabled>Full</button>';
    } else if (m.waLink) {
      rsvpBtn = '<a class="meetup-rsvp wa-live-btn" href="' + m.waLink + '" target="_blank" rel="noopener noreferrer">💬 Join Group →</a>';
    } else {
      rsvpBtn = '<button class="meetup-rsvp" id="rsvp' + m.id + '" onclick="rsvpClick(this,' + m.id + ')">RSVP →</button>';
    }

    return `
      <div class="meetup-card">
        <div class="meetup-accent ${m.type}"></div>
        <div class="meetup-body">
          <div class="meetup-header">
            <span class="meetup-emoji">${m.emoji}</span>
            <div>
              <div class="meetup-title">${m.title}</div>
              <div class="meetup-date">📅 ${m.date} &nbsp;&middot;&nbsp; ${m.time}</div>
            </div>
          </div>
          <div class="meetup-meta">
            <span class="meta-tag">📍 ${m.area}</span>
            <span class="meta-tag">👶 ${m.ageGroup}</span>
            <span class="meta-tag">🙋 ${m.organizer}</span>
          </div>
          <div class="meetup-desc">${m.desc}</div>
          <div class="meetup-footer">
            ${spotsHtml}
            ${rsvpBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterMeetups(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMeetups(filter);
}

function rsvpClick(btn, id) {
  btn.textContent = 'RSVPed ✓';
  btn.classList.add('rsvp-done');
  btn.disabled = true;
  showToast('RSVP confirmed! Join the WhatsApp circle to get the exact location details.');
}

// ---------- RENDER NEIGHBORHOODS ----------

function renderNeighborhoods() {
  const grid = document.getElementById('neighborhoodsGrid');
  if (!grid) return;

  const sorted = [...NEIGHBORHOODS].sort((a, b) => b.members - a.members);

  grid.innerHTML = sorted.map(h => `
    <div class="hood-card ${h.members < 30 ? 'hood-new' : ''}" onclick="hoodClick('${h.id}')">
      <div class="hood-name">${h.name}</div>
      <div class="hood-zone">${h.zone}</div>
      <div class="hood-badge">${h.members} members</div>
    </div>
  `).join('');
}

function hoodClick(id) {
  const hood = NEIGHBORHOODS.find(n => n.id === id);
  openModal();
  // After modal opens at step 1, prime a tip
  setTimeout(() => {
    showToast('\uD83D\uDCCD Find "' + (hood ? hood.name : '') + '" in step 3!');
  }, 400);
}

// ---------- TOAST ----------

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---------- MOBILE NAV ----------

function toggleNav() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// Close mobile nav on link click
document.addEventListener('click', function(e) {
  if (e.target.closest('#navLinks a')) {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.remove('open');
  }
});

// ---------- SCROLL EFFECTS ----------

function initScrollEffects() {
  // Nav shrink on scroll
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Assign directional animation classes by section
  const directionMap = [
    { selector: '#circles .circle-card:nth-child(1)',     cls: 'reveal-left' },
    { selector: '#circles .circle-card:nth-child(2)',     cls: 'reveal' },
    { selector: '#circles .circle-card:nth-child(3)',     cls: 'reveal-right' },
    { selector: '#meetups .meetup-card:nth-child(odd)',   cls: 'reveal-left' },
    { selector: '#meetups .meetup-card:nth-child(even)',  cls: 'reveal-right' },
    { selector: '#features .feature-card:nth-child(3n+1)',cls: 'reveal-left' },
    { selector: '#features .feature-card:nth-child(3n+2)',cls: 'reveal' },
    { selector: '#features .feature-card:nth-child(3n)',  cls: 'reveal-right' },
    { selector: '#testimonials .testimonial:nth-child(1)',cls: 'reveal-left' },
    { selector: '#testimonials .testimonial:nth-child(2)',cls: 'reveal' },
    { selector: '#testimonials .testimonial:nth-child(3)',cls: 'reveal-right' },
    { selector: '#neighborhoods .hood-card',              cls: 'reveal-scale' },
  ];

  directionMap.forEach(function(item) {
    document.querySelectorAll(item.selector).forEach(function(el) {
      // Remove existing reveal classes then add the directional one
      el.classList.remove('reveal', 'reveal-left', 'reveal-right', 'reveal-scale');
      el.classList.add(item.cls);
    });
  });

  // Observe all reveal variants
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .section-enter-line').forEach(function(el) {
    observer.observe(el);
  });

  // Stagger children within grids
  [
    '#circles .circles-grid',
    '#features .features-grid',
    '#testimonials .testimonials-grid',
    '#meetups .meetups-grid',
    '#neighborhoods .neighborhoods-grid',
  ].forEach(function(sel) {
    const grid = document.querySelector(sel);
    if (!grid) return;
    grid.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el, i) {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  });
}

// ---------- KEYBOARD ----------

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('modalOverlay');
    if (overlay && overlay.classList.contains('open')) closeModal();
  }
});

// ---------- INIT ----------

document.addEventListener('DOMContentLoaded', function() {
  renderMeetups('all');
  renderNeighborhoods();
  initScrollEffects();
});
