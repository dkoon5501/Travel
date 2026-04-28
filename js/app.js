/* ===== DATA ===== */

const AIRPORTS = [
  "New York (JFK)", "New York (LGA)", "Los Angeles (LAX)", "Chicago (ORD)",
  "San Francisco (SFO)", "Miami (MIA)", "Dallas (DFW)", "Seattle (SEA)",
  "Boston (BOS)", "Atlanta (ATL)", "Denver (DEN)", "Las Vegas (LAS)",
  "London (LHR)", "London (LGW)", "Paris (CDG)", "Tokyo (NRT)", "Tokyo (HND)",
  "Dubai (DXB)", "Singapore (SIN)", "Sydney (SYD)", "Amsterdam (AMS)",
  "Frankfurt (FRA)", "Madrid (MAD)", "Barcelona (BCN)", "Rome (FCO)",
  "Bangkok (BKK)", "Hong Kong (HKG)", "Seoul (ICN)", "Toronto (YYZ)",
  "Vancouver (YVR)", "Mexico City (MEX)", "São Paulo (GRU)", "Cairo (CAI)",
  "Istanbul (IST)", "Zurich (ZRH)", "Vienna (VIE)", "Prague (PRG)",
  "Lisbon (LIS)", "Athens (ATH)", "Bali (DPS)", "Cancun (CUN)",
  "Phuket (HKT)", "Maldives (MLE)", "Marrakech (RAK)", "Cape Town (CPT)"
];

const DESTINATIONS = [
  { id: 1, name: "Santorini",     country: "Greece",       tag: "beach",     emoji: "🏖", price: "$649",  rating: "4.9", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=75", search: "Santorini" },
  { id: 2, name: "Tokyo",         country: "Japan",        tag: "city",      emoji: "🏙", price: "$820",  rating: "4.8", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=75", search: "Tokyo" },
  { id: 3, name: "Patagonia",     country: "Argentina",    tag: "adventure", emoji: "🧗", price: "$1,100",rating: "4.7", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=75", search: "Patagonia" },
  { id: 4, name: "Kyoto",         country: "Japan",        tag: "culture",   emoji: "🏛", price: "$750",  rating: "4.9", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75", search: "Kyoto" },
  { id: 5, name: "Bali",          country: "Indonesia",    tag: "beach",     emoji: "🏖", price: "$580",  rating: "4.8", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=75", search: "Bali" },
  { id: 6, name: "Banff",         country: "Canada",       tag: "mountain",  emoji: "⛰", price: "$690",  rating: "4.9", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=75", search: "Banff Canada" },
  { id: 7, name: "Paris",         country: "France",       tag: "city",      emoji: "🏙", price: "$710",  rating: "4.7", img: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=600&q=75", search: "Paris" },
  { id: 8, name: "Machu Picchu",  country: "Peru",         tag: "adventure", emoji: "🧗", price: "$890",  rating: "4.9", img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=75", search: "Machu Picchu" },
  { id: 9, name: "Amalfi Coast",  country: "Italy",        tag: "beach",     emoji: "🏖", price: "$780",  rating: "4.8", img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=75", search: "Amalfi Coast" },
  { id: 10, name: "Marrakech",    country: "Morocco",      tag: "culture",   emoji: "🏛", price: "$520",  rating: "4.6", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=75", search: "Marrakech" },
  { id: 11, name: "Swiss Alps",   country: "Switzerland",  tag: "mountain",  emoji: "⛰", price: "$1,200",rating: "4.9", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75", search: "Swiss Alps" },
  { id: 12, name: "Maldives",     country: "Maldives",     tag: "beach",     emoji: "🏖", price: "$1,350",rating: "5.0", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=75", search: "Maldives" },
];

const DEALS = [
  { icon: "✈",  title: "New York → London",   route: "Round trip · Sep 12–20",   price: "$389", original: "$720",  pct: "46% off", type: "flights"    },
  { icon: "✈",  title: "LA → Tokyo",           route: "Round trip · Oct 3–14",    price: "$542", original: "$980",  pct: "45% off", type: "flights"    },
  { icon: "🏨", title: "4★ Bali Resort",       route: "7 nights · All inclusive", price: "$640", original: "$1,100",pct: "42% off", type: "hotels"     },
  { icon: "✈",  title: "Chicago → Cancun",     route: "Round trip · Nov 1–8",     price: "$249", original: "$490",  pct: "49% off", type: "flights"    },
  { icon: "🏨", title: "Paris Boutique Hotel", route: "5 nights · Breakfast incl",price: "$480", original: "$790",  pct: "39% off", type: "hotels"     },
  { icon: "🎯", title: "Rome Food Tour",        route: "4-hour guided experience", price: "$45",  original: "$90",   pct: "50% off", type: "activities" },
];

const PACKING_LISTS = {
  "👔 Documents & Money": ["Passport / ID", "Travel insurance", "Flight tickets", "Hotel confirmation", "Credit cards", "Cash (local currency)", "Vaccination records"],
  "👕 Clothing": ["Underwear (7+)", "T-shirts", "Pants / shorts", "Warm layer / jacket", "Comfortable shoes", "Sandals / flip-flops", "Formal outfit (if needed)", "Pajamas"],
  "🧴 Toiletries": ["Toothbrush & toothpaste", "Shampoo & conditioner", "Sunscreen (SPF 50+)", "Deodorant", "Razor / shaving kit", "Moisturizer", "Makeup / cosmetics"],
  "💊 Health & Safety": ["Prescription medications", "Pain relievers", "Antihistamines", "Stomach remedies", "First aid kit", "Insect repellent", "Face masks"],
  "🔌 Electronics": ["Phone & charger", "Laptop / tablet", "Universal adapter", "Power bank", "Earphones / headphones", "Camera & memory cards"],
  "🎒 Misc Essentials": ["Reusable water bottle", "Snacks for transit", "Travel pillow", "Eye mask", "Earplugs", "Pen for forms", "Day bag / tote"],
};

const BUDGET_ESTIMATES = {
  budget:  { hotel: 35,  food: 20, transport: 10, activities: 10, misc: 8  },
  mid:     { hotel: 120, food: 60, transport: 30, activities: 40, misc: 25 },
  luxury:  { hotel: 450, food: 200,transport: 100,activities: 150,misc: 80 },
};

const EXCHANGE_RATES = {
  USD:1, EUR:0.92, GBP:0.79, JPY:149.7, CAD:1.36, AUD:1.53,
  CHF:0.90, CNY:7.24, INR:83.1, MXN:17.15, BRL:4.97, SGD:1.34, THB:35.1,
};

/* ===== STATE ===== */
let savedTrips = JSON.parse(localStorage.getItem('wander_saved') || '[]');
let selectedStars = 0;
let activeFilter = 'all';

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  populateAirports();
  renderDestinations('all');
  renderDeals();
  renderPackingList();
  setDefaultDates();
  initTabs();
  initTripType();
  initSwapBtn();
  initStarFilter();
  initDestFilter();
  initSearchButtons();
  initCurrency();
  initBudget();
  initSavedTrips();
  initNavScroll();
  initFooterLinks();
  updateSavedBadge();
});

/* ===== AIRPORTS DATALIST ===== */
function populateAirports() {
  const list = document.getElementById('airportList');
  AIRPORTS.forEach(ap => {
    const opt = document.createElement('option');
    opt.value = ap;
    list.appendChild(opt);
  });
}

/* ===== DEFAULT DATES ===== */
function setDefaultDates() {
  const today = new Date();
  const fmt = d => d.toISOString().split('T')[0];

  const depart = new Date(today); depart.setDate(today.getDate() + 30);
  const ret    = new Date(today); ret.setDate(today.getDate() + 37);
  const checkin  = new Date(today); checkin.setDate(today.getDate() + 30);
  const checkout = new Date(today); checkout.setDate(today.getDate() + 37);

  document.getElementById('departDate').value = fmt(depart);
  document.getElementById('departDate').min   = fmt(today);
  document.getElementById('returnDate').value = fmt(ret);
  document.getElementById('returnDate').min   = fmt(today);
  document.getElementById('hotelCheckin').value  = fmt(checkin);
  document.getElementById('hotelCheckin').min    = fmt(today);
  document.getElementById('hotelCheckout').value = fmt(checkout);
  document.getElementById('hotelCheckout').min   = fmt(today);
  document.getElementById('activityDate').value  = fmt(depart);
  document.getElementById('activityDate').min    = fmt(today);

  const nowLocal = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
  const dtFmt = d => d.toISOString().slice(0,16);
  const pickupDT = new Date(nowLocal); pickupDT.setDate(nowLocal.getDate() + 30);
  const dropDT   = new Date(nowLocal); dropDT.setDate(nowLocal.getDate() + 37);
  document.getElementById('carPickupDate').value  = dtFmt(pickupDT);
  document.getElementById('carDropoffDate').value = dtFmt(dropDT);
}

/* ===== TABS ===== */
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    });
  });
}

/* ===== TRIP TYPE ===== */
function initTripType() {
  document.querySelectorAll('input[name="tripType"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const returnGroup = document.getElementById('returnDateGroup');
      returnGroup.style.display = radio.value === 'oneway' ? 'none' : '';
    });
  });
}

/* ===== SWAP BUTTON ===== */
function initSwapBtn() {
  document.getElementById('swapBtn').addEventListener('click', () => {
    const from = document.getElementById('flightFrom');
    const to   = document.getElementById('flightTo');
    [from.value, to.value] = [to.value, from.value];
  });
}

/* ===== STAR FILTER ===== */
function initStarFilter() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.val);
      if (selectedStars === val) {
        selectedStars = 0;
        stars.forEach(s => s.classList.remove('active'));
      } else {
        selectedStars = val;
        stars.forEach(s => {
          s.classList.toggle('active', parseInt(s.dataset.val) <= val);
        });
      }
    });
  });
}

/* ===== DESTINATION FILTER ===== */
function initDestFilter() {
  document.querySelectorAll('.dest-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dest-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderDestinations(activeFilter);
    });
  });
}

/* ===== RENDER DESTINATIONS ===== */
function renderDestinations(filter) {
  const grid = document.getElementById('destGrid');
  const filtered = filter === 'all' ? DESTINATIONS : DESTINATIONS.filter(d => d.tag === filter);

  grid.innerHTML = filtered.map((d, i) => `
    <div class="dest-card fade-up" style="animation-delay:${i * 60}ms" data-id="${d.id}">
      <div class="dest-img-wrap">
        <img class="dest-img" src="${d.img}" alt="${d.name}" loading="lazy" />
        <span class="dest-tag">${d.emoji} ${d.tag}</span>
        <button class="dest-save ${isSaved(d.id) ? 'saved' : ''}" data-id="${d.id}" title="Save trip">
          ${isSaved(d.id) ? '❤' : '🤍'}
        </button>
      </div>
      <div class="dest-body">
        <div class="dest-name">${d.name}</div>
        <div class="dest-country">${d.country}</div>
        <div class="dest-meta">
          <span class="dest-price">From ${d.price}</span>
          <span class="dest-rating">★ ${d.rating}</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.dest-save').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleSaveDestination(parseInt(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.dest-save')) return;
      const dest = DESTINATIONS.find(d => d.id === parseInt(card.dataset.id));
      if (dest) searchFlightsFor(dest.search);
    });
  });
}

/* ===== RENDER DEALS ===== */
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  grid.innerHTML = DEALS.map((deal, i) => `
    <div class="deal-card fade-up" style="animation-delay:${i * 80}ms" data-type="${deal.type}">
      <div class="deal-icon">${deal.icon}</div>
      <div class="deal-info">
        <div class="deal-title">${deal.title}</div>
        <div class="deal-route">${deal.route}</div>
        <div class="deal-price-row">
          <span class="deal-price">${deal.price}</span>
          <span class="deal-original">${deal.original}</span>
        </div>
      </div>
      <span class="deal-badge">${deal.pct}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.deal-card').forEach((card, i) => {
    card.addEventListener('click', () => {
      const deal = DEALS[i];
      const tab = document.querySelector(`.tab[data-tab="${deal.type}"]`);
      if (tab) { tab.click(); }
      document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
      showToast(`Opening ${deal.type} search for "${deal.title}"`);
    });
  });
}

/* ===== RENDER PACKING LIST ===== */
function renderPackingList() {
  const container = document.getElementById('packingCategories');
  container.innerHTML = Object.entries(PACKING_LISTS).map(([cat, items]) => `
    <div class="packing-category">
      <details>
        <summary>${cat} <small style="color:var(--muted);margin-left:auto">(${items.length})</small></summary>
        <div class="packing-item-list">
          ${items.map(item => `
            <label class="packing-item">
              <input type="checkbox" data-item="${item}" />
              ${item}
            </label>
          `).join('')}
        </div>
      </details>
    </div>
  `).join('');

  container.querySelectorAll('.packing-item input').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.packing-item').classList.toggle('checked', cb.checked);
    });
  });
}

/* ===== SEARCH BUTTONS ===== */
function initSearchButtons() {
  document.getElementById('searchFlightsBtn').addEventListener('click', () => {
    const from = document.getElementById('flightFrom').value.trim();
    const to   = document.getElementById('flightTo').value.trim();
    if (!from || !to) { showToast('Please enter origin and destination.'); return; }
    const depart   = document.getElementById('departDate').value;
    const ret      = document.getElementById('returnDate').value;
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const cls      = document.getElementById('cabinClass').value;

    const fromCode = extractCode(from) || from;
    const toCode   = extractCode(to)   || to;

    let url = `https://www.google.com/travel/flights?q=Flights+from+${encodeURIComponent(fromCode)}+to+${encodeURIComponent(toCode)}`;
    if (depart) url += `+on+${depart}`;
    if (tripType === 'roundtrip' && ret) url += `+returning+${ret}`;

    openSearch(url);
    showToast(`Searching flights: ${from} → ${to}`);
  });

  document.getElementById('searchHotelsBtn').addEventListener('click', () => {
    const dest = document.getElementById('hotelDest').value.trim();
    if (!dest) { showToast('Please enter a destination.'); return; }
    const checkin  = document.getElementById('hotelCheckin').value;
    const checkout = document.getElementById('hotelCheckout').value;
    const guests   = document.getElementById('hotelGuests').value;
    const rooms    = document.getElementById('hotelRooms').value;

    const url = `https://www.booking.com/search.html?ss=${encodeURIComponent(dest)}&checkin=${checkin}&checkout=${checkout}&group_adults=${guests}&no_rooms=${rooms}`;
    openSearch(url);
    showToast(`Searching hotels in ${dest}`);
  });

  document.getElementById('searchCarsBtn').addEventListener('click', () => {
    const pickup = document.getElementById('carPickup').value.trim();
    if (!pickup) { showToast('Please enter a pick-up location.'); return; }
    const url = `https://www.kayak.com/cars/${encodeURIComponent(pickup)}`;
    openSearch(url);
    showToast(`Searching car rentals in ${pickup}`);
  });

  document.getElementById('searchActivitiesBtn').addEventListener('click', () => {
    const dest = document.getElementById('activityDest').value.trim();
    if (!dest) { showToast('Please enter a destination.'); return; }
    const cat  = document.getElementById('activityCategory').value;
    const q    = cat ? `${dest} ${cat}` : dest;
    const url  = `https://www.viator.com/search/${encodeURIComponent(q)}`;
    openSearch(url);
    showToast(`Searching activities in ${dest}`);
  });
}

function extractCode(str) {
  const m = str.match(/\(([A-Z]{3})\)/);
  return m ? m[1] : null;
}

function searchFlightsFor(destination) {
  document.getElementById('flightTo').value = destination;
  document.querySelector('.tab[data-tab="flights"]').click();
  document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
  showToast(`Flying to ${destination}! Set your origin and search.`);
}

function openSearch(url) {
  window.open(url, '_blank', 'noopener');
}

/* ===== CURRENCY CONVERTER ===== */
function initCurrency() {
  const amount = document.getElementById('currencyAmount');
  const from   = document.getElementById('currencyFrom');
  const to     = document.getElementById('currencyTo');
  const result = document.getElementById('currencyResult');
  const rateDisplay = document.getElementById('exchangeRateDisplay');

  const convert = () => {
    const val  = parseFloat(amount.value) || 0;
    const base = EXCHANGE_RATES[from.value] || 1;
    const dest = EXCHANGE_RATES[to.value]   || 1;
    const rate = dest / base;
    result.value = (val * rate).toFixed(2);
    rateDisplay.textContent = `1 ${from.value} = ${rate.toFixed(4)} ${to.value}`;
  };

  amount.addEventListener('input', convert);
  from.addEventListener('change', convert);
  to.addEventListener('change', convert);
  document.querySelector('.currency-equals').addEventListener('click', () => {
    const tmp = from.value;
    from.value = to.value;
    to.value = tmp;
    convert();
  });

  convert();
}

/* ===== BUDGET ESTIMATOR ===== */
function initBudget() {
  document.getElementById('estimateBudgetBtn').addEventListener('click', () => {
    const dest      = document.getElementById('budgetDest').value.trim() || 'your destination';
    const days      = parseInt(document.getElementById('budgetDays').value) || 7;
    const style     = document.getElementById('budgetStyle').value;
    const travelers = parseInt(document.getElementById('budgetTravelers').value) || 1;
    const rates     = BUDGET_ESTIMATES[style];

    const hotel      = rates.hotel      * days * Math.ceil(travelers / 2);
    const food       = rates.food       * days * travelers;
    const transport  = rates.transport  * days * travelers;
    const activities = rates.activities * days;
    const misc       = rates.misc       * days * travelers;
    const total      = hotel + food + transport + activities + misc;

    const resultEl = document.getElementById('budgetResult');
    resultEl.innerHTML = `
      <div style="font-weight:600;margin-bottom:8px">Estimate for ${travelers} traveler${travelers>1?'s':''} · ${days} days in ${dest}</div>
      <div class="budget-line"><span>🏨 Accommodation</span><span>$${hotel.toLocaleString()}</span></div>
      <div class="budget-line"><span>🍽 Food & Dining</span><span>$${food.toLocaleString()}</span></div>
      <div class="budget-line"><span>🚆 Local Transport</span><span>$${transport.toLocaleString()}</span></div>
      <div class="budget-line"><span>🎭 Activities</span><span>$${activities.toLocaleString()}</span></div>
      <div class="budget-line"><span>🛍 Miscellaneous</span><span>$${misc.toLocaleString()}</span></div>
      <div class="budget-total"><span>Total Estimate</span><span>$${total.toLocaleString()}</span></div>
    `;
    resultEl.classList.add('show');
  });
}

/* ===== SAVED TRIPS ===== */
function isSaved(id) {
  return savedTrips.some(t => t.id === id);
}

function toggleSaveDestination(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) return;

  if (isSaved(id)) {
    savedTrips = savedTrips.filter(t => t.id !== id);
    showToast(`Removed ${dest.name} from saved trips`);
  } else {
    savedTrips.push({ id: dest.id, name: dest.name, country: dest.country, emoji: dest.emoji, savedAt: new Date().toLocaleDateString() });
    showToast(`Saved ${dest.name}! ❤`);
  }

  localStorage.setItem('wander_saved', JSON.stringify(savedTrips));
  updateSavedBadge();
  renderDestinations(activeFilter);
  renderSavedTripsWidget();
}

function updateSavedBadge() {
  document.getElementById('savedBadge').textContent = savedTrips.length;
}

function renderSavedTripsWidget() {
  const list = document.getElementById('savedTripsList');
  if (savedTrips.length === 0) {
    list.innerHTML = '<p class="empty-state">No saved trips yet.<br/>Search and save your favorites!</p>';
    return;
  }

  list.innerHTML = savedTrips.map(t => `
    <div class="saved-trip-item">
      <span class="trip-icon">${t.emoji}</span>
      <div class="trip-info">
        <div class="trip-name">${t.name}</div>
        <div class="trip-date">${t.country} · Saved ${t.savedAt}</div>
      </div>
      <button class="saved-trip-remove" data-id="${t.id}" title="Remove">✕</button>
    </div>
  `).join('');

  list.querySelectorAll('.saved-trip-remove').forEach(btn => {
    btn.addEventListener('click', () => toggleSaveDestination(parseInt(btn.dataset.id)));
  });
}

function initSavedTrips() {
  renderSavedTripsWidget();

  const modal    = document.getElementById('savedTripsModal');
  const modalBody = document.getElementById('savedTripsModalBody');
  const closeBtn = document.getElementById('closeSavedModal');
  const openBtn  = document.getElementById('savedTripsBtn');

  const openModal = () => {
    modalBody.innerHTML = savedTrips.length === 0
      ? '<p class="empty-state" style="padding:20px 0">No saved trips yet. Browse destinations and hit the heart button!</p>'
      : savedTrips.map(t => `
          <div class="saved-trip-item" style="padding:14px 0;border-bottom:1px solid var(--border)">
            <span class="trip-icon" style="font-size:1.5rem">${t.emoji}</span>
            <div class="trip-info">
              <div class="trip-name" style="font-size:1rem">${t.name}</div>
              <div class="trip-date">${t.country} · Saved ${t.savedAt}</div>
            </div>
            <button class="saved-trip-remove" data-id="${t.id}">✕</button>
          </div>
        `).join('');

    modalBody.querySelectorAll('.saved-trip-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSaveDestination(parseInt(btn.dataset.id));
        openModal();
      });
    });

    modal.classList.add('open');
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

/* ===== NAV SCROLL ===== */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ===== FOOTER LINKS ===== */
function initFooterLinks() {
  document.querySelectorAll('[data-tab-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const tab = document.querySelector(`.tab[data-tab="${link.dataset.tabLink}"]`);
      if (tab) tab.click();
      document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ===== TOAST ===== */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
