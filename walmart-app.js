/* ============================================================
   SocialBling — Walmart Associate Community JavaScript
   ============================================================ */

// ---------- DATA ----------

const NEIGHBORHOODS = [
  { id: 'supplychain', name: 'Supply Chain', zone: 'Tech', members: 145 },
  { id: 'walmartlabs', name: 'Walmart Labs', zone: 'Tech', members: 132 },
  { id: 'gto', name: 'GTO', zone: 'Tech', members: 118 },
  { id: 'gfs', name: 'GFS', zone: 'Tech', members: 98 },
  { id: 'womentech', name: 'Women in Tech', zone: 'Community', members: 87 },
  { id: 'hr', name: 'HR & People', zone: 'Corporate', members: 76 },
  { id: 'finance', name: 'Finance', zone: 'Corporate', members: 65 },
  { id: 'marketing', name: 'Marketing', zone: 'Corporate', members: 58 },
  { id: 'samsclubtech', name: "Sam's Club Tech", zone: 'Tech', members: 89 },
  { id: 'operations', name: 'Operations', zone: 'Corporate', members: 74 },
  { id: 'legal', name: 'Legal & Compliance', zone: 'Corporate', members: 31 },
  { id: 'strategy', name: 'Strategy & Growth', zone: 'Corporate', members: 44 },
  { id: 'design', name: 'Design & UX', zone: 'Tech', members: 52 },
  { id: 'data', name: 'Data & Analytics', zone: 'Tech', members: 67 },
  { id: 'security', name: 'Cybersecurity', zone: 'Tech', members: 29 },
  { id: 'infra', name: 'Infrastructure', zone: 'Tech', members: 43 },
  { id: 'product', name: 'Product Management', zone: 'Tech', members: 61 },
  { id: 'newjoiners', name: 'New Joiners', zone: 'Community', members: 38 },
];

const AGE_OPTIONS = [
  { id: 'active',   label: 'Active Circles',   emoji: '🏃', desc: 'Fitness & sports' },
  { id: 'interest', label: 'Interest Circles',  emoji: '💡', desc: 'Hobbies & learning' },
  { id: 'support',  label: 'Support Circles',   emoji: '🌟', desc: 'New joiners & wellness' },
  { id: 'parents',  label: 'Parent Circle',     emoji: '👨‍👩‍👧', desc: 'Parents at WGT' },
  { id: 'women',    label: 'Women in Tech',     emoji: '👩‍💻', desc: 'WIT chapter' },
  { id: 'food',     label: 'Foodies @ WGT',    emoji: '🍱', desc: 'Lunch & food lovers' },
  { id: 'wellness', label: 'Wellness Warriors', emoji: '🧘', desc: 'Mental health & yoga' },
  { id: 'any',      label: 'Surprise me!',      emoji: '🎲', desc: 'Match me to any circle' },
];

// Tags: family | mom | dad | tech | joiner
const MEETUPS = [
  // ---- FAMILY CIRCLE ----
  {
    id: 1, type: 'family',
    title: 'Cubbon Park Family Morning',
    emoji: '🌳',
    location: 'Cubbon Park, Band Stand Lawn · Bangalore',
    area: 'Central Bangalore',
    date: 'Sun, Jun 29', time: '8:00 AM – 11:00 AM',
    ageGroup: 'All ages · kids welcome',
    organizer: 'Family Circle',
    spots: 0, spotsLeft: 0,
    desc: 'Open green space, fresh air, and kids running free. WGT families meet at Band Stand Lawn. Bring a mat, snacks, and your best energy. Chai & juice stalls nearby.',
    tags: ['family'],
    slack: 'social-bling-cubbon-park',
  },
  {
    id: 2, type: 'family',
    title: 'Lalbagh Sunday Stroll',
    emoji: '🌸',
    location: 'Lalbagh Botanical Garden, South Gate · Bangalore',
    area: 'South Bangalore',
    date: 'Sun, Jul 6', time: '7:30 AM – 10:30 AM',
    ageGroup: 'Toddlers to 10 yrs',
    organizer: 'Family Circle',
    spots: 25, spotsLeft: 11,
    desc: 'Walk through Lalbagh with WGT families. Kids love the glass house, duck pond, and open lawns. Parents chat, kids explore. Breakfast after at nearby Darshinis.',
    tags: ['family'],
    slack: 'social-bling-lalbagh',
  },
  {
    id: 3, type: 'family',
    title: 'Bannerghatta Nature Day',
    emoji: '🦁',
    location: 'Bannerghatta Biological Park · Bangalore',
    area: 'South Bangalore',
    date: 'Sat, Jul 12', time: '9:00 AM – 2:00 PM',
    ageGroup: '4 yrs+ · family',
    organizer: 'Family Circle',
    spots: 30, spotsLeft: 14,
    desc: 'WGT family outing to Bannerghatta — safari, butterfly park, and zoo. Carpooling from WGT campus at 8:30AM. Entry fees shared. Kids absolutely love this one.',
    tags: ['family'],
    slack: 'social-bling-bannerghatta',
  },
  {
    id: 4, type: 'family',
    title: 'Nandi Hills Sunrise Drive',
    emoji: '⛰️',
    location: 'Nandi Hills · 60km from Bangalore',
    area: 'Day Trip',
    date: 'Sun, Jul 13', time: '4:30 AM – 10:00 AM',
    ageGroup: 'Families · older kids',
    organizer: 'Family Circle',
    spots: 15, spotsLeft: 5,
    desc: 'Pre-dawn convoy from WGT to Nandi Hills for the sunrise. Misty hills, paragliding views, and a big breakfast on the way back. Carpool groups coordinated on Slack.',
    tags: ['family'],
    slack: 'social-bling-nandi-hills',
  },
  {
    id: 5, type: 'family',
    title: 'Science Centre Kids Day',
    emoji: '🔬',
    location: 'National Science Centre · Cubbon Park Road',
    area: 'Central Bangalore',
    date: 'Sat, Jul 5', time: '10:00 AM – 1:00 PM',
    ageGroup: '5 yrs+ · school-age kids',
    organizer: 'Family Circle',
    spots: 20, spotsLeft: 8,
    desc: 'Hands-on science exhibits, interactive models, and a planetarium show. Perfect for curious kids. WGT parents group up, kids learn together. Entry ~₹60/child.',
    tags: ['family'],
    slack: 'social-bling-science-centre',
  },

  // ---- MOM CIRCLE ----
  {
    id: 6, type: 'mom',
    title: 'Postpartum Support Circle',
    emoji: '🤱',
    location: 'Block B, Quiet Room 2 · WGT',
    area: 'WGT',
    date: 'Wed, Jul 2', time: '12:30 PM – 1:30 PM',
    ageGroup: 'New moms · 0–12 months',
    organizer: 'Mom Circle',
    spots: 12, spotsLeft: 6,
    desc: 'A safe space for new moms back at work. Share experiences, ask anything, find solidarity. Topics: pumping at work, sleep schedules, managing mom guilt. No judgment.',
    tags: ['mom'],
    slack: 'social-bling-postpartum',
  },
  {
    id: 7, type: 'mom',
    title: 'Pregnancy & Baby Care Meetup',
    emoji: '🍼',
    location: 'Block A, Room 12 · WGT',
    area: 'WGT',
    date: 'Fri, Jul 4', time: '5:30 PM – 6:30 PM',
    ageGroup: 'Expecting & new moms',
    organizer: 'Mom Circle',
    spots: 15, spotsLeft: 9,
    desc: 'Monthly meetup for expecting moms and new mothers. Hospital tips, maternity leave planning, pediatrician recommendations, and everything Bangalore babies. Bring questions!',
    tags: ['mom'],
    slack: 'social-bling-pregnancy',
  },
  {
    id: 8, type: 'mom',
    title: "Mom's Kids Playdate",
    emoji: '🧸',
    location: 'Ulsoor Lake Park · Bangalore',
    area: 'Central Bangalore',
    date: 'Sat, Jul 5', time: '9:30 AM – 11:30 AM',
    ageGroup: 'Moms + kids 1–6 yrs',
    organizer: 'Mom Circle',
    spots: 20, spotsLeft: 12,
    desc: 'WGT moms bring their little ones to Ulsoor Lake Park for a morning playdate. Kids play, moms connect. Great outdoor setting, safe area, stroller-friendly paths.',
    tags: ['mom'],
    slack: 'social-bling-mom-playdate',
  },

  // ---- DAD CIRCLE ----
  {
    id: 9, type: 'dad',
    title: 'Badminton Thursdays',
    emoji: '🏸',
    location: 'WGT Campus Indoor Court',
    area: 'WGT',
    date: 'Thu, Jul 3', time: '7:00 AM – 8:30 AM',
    ageGroup: 'All dads · all levels',
    organizer: 'Dad Circle',
    spots: 16, spotsLeft: 6,
    desc: 'Weekly badminton before work. Singles and doubles. All skill levels welcome. Court booked every Thursday. Come for the game, stay for the banter.',
    tags: ['dad'],
    slack: 'social-bling-badminton',
  },
  {
    id: 10, type: 'dad',
    title: 'Weekend Cricket League',
    emoji: '🏏',
    location: 'WGT Campus Sports Ground',
    area: 'WGT',
    date: 'Sat, Jun 28', time: '7:00 AM – 10:00 AM',
    ageGroup: 'All associates',
    organizer: 'Dad Circle',
    spots: 22, spotsLeft: 6,
    desc: 'Inter-team cricket. Bring your team of 11. Refreshments provided. Trophy for winning team. Pure fun, zero hierarchy.',
    tags: ['dad'],
    slack: 'social-bling-cricket',
  },
  {
    id: 11, type: 'dad',
    title: "Dad's Kids Playdate",
    emoji: '⚽',
    location: "Cubbon Park, Children's Play Area",
    area: 'Central Bangalore',
    date: 'Sun, Jul 6', time: '9:00 AM – 11:00 AM',
    ageGroup: 'Dads + kids 3–10 yrs',
    organizer: 'Dad Circle',
    spots: 18, spotsLeft: 10,
    desc: 'Dads take over the park! Football, frisbee, and whatever the kids want to play. WGT dads bond over parenting wins and fails. Kids tire out, dads go home as heroes.',
    tags: ['dad'],
    slack: 'social-bling-dad-playdate',
  },

  // ---- TECH CIRCLE ----
  {
    id: 12, type: 'tech',
    title: 'GenAI & Future of Tech',
    emoji: '🤖',
    location: 'Block C Auditorium · WGT',
    area: 'WGT',
    date: 'Thu, Jul 10', time: '5:00 PM – 6:30 PM',
    ageGroup: 'All associates',
    organizer: 'Tech Circle',
    spots: 80, spotsLeft: 34,
    desc: 'Monthly tech talk on GenAI, LLMs, and what\'s coming next. Internal speaker series + external guests. This month: "Building AI-native products inside Walmart." Open to all WGT associates.',
    tags: ['tech'],
    slack: 'social-bling-tech-talks',
  },

  // ---- NEW JOINERS ----
  {
    id: 13, type: 'joiner',
    title: 'New Joiners Mixer — July Batch',
    emoji: '🌟',
    location: 'Block C Cafeteria · WGT',
    area: 'WGT',
    date: 'Fri, Jul 4', time: '5:30 PM – 7:00 PM',
    ageGroup: 'Joined in last 90 days',
    organizer: 'New Joiners Hub',
    spots: 50, spotsLeft: 28,
    desc: 'Welcome mixer for everyone who joined in the last 3 months. Meet your buddy, find your circle, feel at home from week one. Snacks, icebreakers, and zero awkward silence.',
    tags: ['joiner'],
    slack: 'social-bling-new-joiners',
  },
];

// ---------- ALL GROUPS DATA ----------

// Tags: family | mom | dad | tech | joiner
const ALL_GROUPS = [
  // Family Circle
  {
    emoji: '🌳',
    name: 'Cubbon Park Family Morning',
    desc: 'Sunday 8AM · Band Stand Lawn · all ages & strollers welcome',
    tag: 'family',
    slack: 'social-bling-cubbon-park',
  },
  {
    emoji: '🌸',
    name: 'Lalbagh Sunday Trails',
    desc: "Sunday 7:30AM · Glass House gate · trails, flowers & kids' play area",
    tag: 'family',
    slack: 'social-bling-lalbagh',
  },
  {
    emoji: '🦁',
    name: 'Bannerghatta Family Day',
    desc: 'Safari · Zoo · Butterfly Park · monthly group visit',
    tag: 'family',
    slack: 'social-bling-bannerghatta',
  },
  {
    emoji: '⛰️',
    name: 'Nandi Hills Sunrise Drive',
    desc: 'Pre-dawn convoy · misty sunrise · big breakfast on the way back',
    tag: 'family',
    slack: 'social-bling-nandi-hills',
  },
  // Mom Circle
  {
    emoji: '🤱',
    name: 'Postpartum Support Circle',
    desc: 'New moms back at work · Wed lunch · safe space · zero judgment',
    tag: 'mom',
    slack: 'social-bling-postpartum',
  },
  {
    emoji: '🍼',
    name: 'Pregnancy & Baby Care',
    desc: 'Expecting & new moms · hospital tips · maternity planning · Bangalore babies',
    tag: 'mom',
    slack: 'social-bling-pregnancy',
  },
  {
    emoji: '🧸',
    name: "Mom's Kids Playdate",
    desc: 'Saturday mornings · Ulsoor Lake · moms + kids 1–6 yrs',
    tag: 'mom',
    slack: 'social-bling-mom-playdate',
  },
  // Dad Circle
  {
    emoji: '🏸',
    name: 'Badminton Thursdays',
    desc: 'Every Thursday 7AM · WGT indoor court · all levels welcome',
    tag: 'dad',
    slack: 'social-bling-badminton',
  },
  {
    emoji: '🏏',
    name: 'WGT Cricket League',
    desc: 'Weekend cricket · Sports Ground · all teams · trophy for winners',
    tag: 'dad',
    slack: 'social-bling-cricket',
  },
  {
    emoji: '⚽',
    name: "Dad's Kids Playdate",
    desc: 'Sunday mornings · Cubbon Park · dads + kids 3–10 yrs · football & frisbee',
    tag: 'dad',
    slack: 'social-bling-dad-playdate',
  },
  // Tech Circle
  {
    emoji: '🤖',
    name: 'GenAI & Tech Talks',
    desc: 'Monthly speaker series · GenAI, LLMs & future of tech at Walmart',
    tag: 'tech',
    slack: 'social-bling-tech-talks',
  },
  // New Joiners
  {
    emoji: '🌟',
    name: 'New Joiners Hub',
    desc: '30-day buddy system · onboarding support · monthly mixer for new hires',
    tag: 'joiner',
    slack: 'social-bling-new-joiners',
  },
];

// ---------- CIRCLE CARD FILTER ----------

function selectCircle(card) {
  const grid = document.getElementById('circlesGrid');
  const resetRow = document.getElementById('circleResetRow');
  if (!grid) return;

  const alreadySelected = card.classList.contains('circle-selected');

  // Clear all
  grid.querySelectorAll('.circle-card').forEach(c => c.classList.remove('circle-selected'));
  grid.classList.remove('has-selection');
  if (resetRow) resetRow.innerHTML = '';

  if (alreadySelected) {
    // Deselect → reset meetup filters to All
    _syncMeetupFilters(null);
    return;
  }

  // Select this card
  card.classList.add('circle-selected');
  grid.classList.add('has-selection');

  if (resetRow) {
    resetRow.innerHTML = '<button class="circle-reset-btn" onclick="resetCircles()">✕ Show all circles</button>';
  }

  // Sync meetup filter bar to this circle only
  const meetupFilter = card.dataset.meetupFilter || 'all';
  _syncMeetupFilters(meetupFilter);

  // Scroll to meetups section
  const meetupsSection = document.getElementById('meetups');
  if (meetupsSection) {
    setTimeout(() => meetupsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
  }
}

function _syncMeetupFilters(activeFilter) {
  const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
  if (!activeFilter) {
    // Show all, reset to All
    filterBtns.forEach(b => { b.style.display = ''; b.classList.remove('active'); });
    const allBtn = document.querySelector('.filter-bar .filter-btn[data-filter="all"]');
    if (allBtn) { allBtn.classList.add('active'); renderMeetups('all'); }
    return;
  }
  // Hide all filter buttons except the matching one (hide "All" too)
  filterBtns.forEach(b => {
    const isMatch = b.dataset.filter === activeFilter;
    b.style.display = isMatch ? '' : 'none';
    b.classList.toggle('active', isMatch);
  });
  renderMeetups(activeFilter);
}

function resetCircles() {
  const grid = document.getElementById('circlesGrid');
  const resetRow = document.getElementById('circleResetRow');
  if (grid) {
    grid.querySelectorAll('.circle-card').forEach(c => c.classList.remove('circle-selected'));
    grid.classList.remove('has-selection');
  }
  if (resetRow) resetRow.innerHTML = '';
  _syncMeetupFilters(null);
}

// ---------- MODAL — Direct All-Groups ----------

function openModal(defaultFilter) {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const filter = defaultFilter || 'all';
  renderAllGroups(filter);

  // If a specific circle filter: show only that tab (hide all others)
  // If no filter (nav button): show all tabs
  const filterBtns = document.querySelectorAll('.ag-filter-btn');
  filterBtns.forEach(b => {
    b.classList.remove('active');
    if (filter === 'all') {
      b.style.display = '';
    } else {
      const m = b.getAttribute('onclick').match(/'([^']+)'/);
      const btnFilter = m ? m[1] : '';
      b.style.display = (btnFilter === filter) ? '' : 'none';
      if (btnFilter === filter) b.classList.add('active');
    }
  });
}

function openModalFiltered(tag) {
  openModal(tag);
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

  container.innerHTML = list.map((g) => `
    <div class="ag-item" style="justify-content:space-between;align-items:center">
      <span class="ag-emoji">${g.emoji}</span>
      <div class="ag-info" style="flex:1">
        <div class="ag-name">${g.name}</div>
        <div class="ag-desc">${g.desc}</div>
      </div>
      <a class="slack-join-btn" href="https://walmart.slack.com/app_redirect?channel=${g.slack}" target="_blank" rel="noopener noreferrer" title="Open #${g.slack} in Slack">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5zm2-9a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5zm9 2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2V9zm-1 0a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5zm-2 9a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z"/></svg>
        Join Slack
      </a>
    </div>
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
    grid.innerHTML = '<p style="text-align:center;color:var(--muted);grid-column:1/-1;padding:32px 0">No events for this filter yet. Check back soon!</p>';
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
    } else if (m.slack) {
      rsvpBtn = '<a class="meetup-rsvp slack-join-btn" href="https://walmart.slack.com/app_redirect?channel=' + m.slack + '" target="_blank" rel="noopener noreferrer"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5zm2-9a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5zm9 2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2V9zm-1 0a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5zm-2 9a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z"/></svg> Join on Slack →</a>';
    } else {
      rsvpBtn = '<button class="meetup-rsvp" id="rsvp' + m.id + '" onclick="rsvpClick(this,' + m.id + ')">Register Interest →</button>';
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
            <span class="meta-tag">👥 ${m.ageGroup}</span>
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
  btn.textContent = 'Registered ✓';
  btn.classList.add('rsvp-done');
  btn.disabled = true;
  showToast('Interest registered! The circle admin will reach out to confirm your spot.');
}

function registerCircleInterest(el, name) {
  const arrow = el.querySelector('.ag-arrow');
  if (arrow && arrow.textContent !== 'Registered ✓') {
    arrow.textContent = 'Registered ✓';
    el.style.opacity = '0.7';
    showToast('Interest registered for ' + name + '! Admin will reach out soon.');
  }
}

// ---------- RENDER TEAMS ----------

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
  setTimeout(() => {
    showToast('\uD83D\uDCCD Find "' + (hood ? hood.name : '') + '" circles in the list below!');
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

document.addEventListener('click', function(e) {
  if (e.target.closest('#navLinks a')) {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.remove('open');
  }
});

// ---------- SCROLL EFFECTS ----------

function initScrollEffects() {
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const directionMap = [
    { selector: '#circles .circle-card:nth-child(1)',     cls: 'reveal-left' },
    { selector: '#circles .circle-card:nth-child(2)',     cls: 'reveal' },
    { selector: '#circles .circle-card:nth-child(3)',     cls: 'reveal-right' },
    { selector: '#circles .circle-card:nth-child(4)',     cls: 'reveal-left' },
    { selector: '#circles .circle-card:nth-child(5)',     cls: 'reveal' },
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
      el.classList.remove('reveal', 'reveal-left', 'reveal-right', 'reveal-scale');
      el.classList.add(item.cls);
    });
  });

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
