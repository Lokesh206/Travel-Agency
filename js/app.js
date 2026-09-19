// ==========================================================================
// TRAVEL INDIA - APPLICATION LOGIC
// Inspired by Mana Yatri & Namma Yatri (Open Mobility Network - Bharat)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  // Current State
  state: {
    activeLocation: "all",
    activeCategory: "all",
    activePriceFilter: "all",
    activeSort: "recommended",
    searchQuery: "",
    selectedPackage: null,
    activeState: "telangana",
    activeGalleryCategory: "all",
    spotlightIndex: 0,
    spotlightTimer: null,
    spotlightDetailsOpen: false,
    activePolicyTab: "payment",
    currentLang: "en",
    lastBooking: null,
    currentStep: 1,
    bookingData: {
      packageId: null,
      date: "",
      time: "09:00 AM",
      pickup: "",
      guests: 2,
      guideLang: "English & Hindi",
      name: "",
      phone: "",
      email: "",
      notes: "",
      paymentMethod: "upi-qr",
      assignedDriver: null,
      bookingId: null,
      totalAmount: 0,
      timestamp: null
    },
    bookings: []
  },

  // Initialize Application
  init() {
    this.loadSavedBookings();
    this.initLanguage();
    this.populateHeroDropdowns();
    this.renderDestinationTabs();
    this.renderPackages();
    this.initSpotlightSlider();
    this.renderPhotoMarquee();
    this.renderAtoZServices();
    this.initAtoZBuilder();
    this.renderStatePlanner();
    this.renderAgencyDetails();
    this.renderPolicies("payment");
    this.renderSocialMedia();
    this.renderDriverPartners();
    this.initEventListeners();
    this.initMetricsTicker();
    this.initDriverCalculator();
    this.updateBookingBadge();

    // Default booking date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    const defaultDate = `${yyyy}-${mm}-${dd}`;
    
    const heroDate = document.getElementById("hero-date");
    if (heroDate) {
      heroDate.value = defaultDate;
      heroDate.min = `${yyyy}-${mm}-${dd}`;
    }

    const bookingDate = document.getElementById("booking-date");
    if (bookingDate) {
      bookingDate.value = defaultDate;
      bookingDate.min = `${yyyy}-${mm}-${dd}`;
    }
  },

  // Load bookings from LocalStorage
  loadSavedBookings() {
    try {
      const saved = localStorage.getItem("travel_india_bookings");
      if (saved) {
        this.state.bookings = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load bookings from storage", e);
      this.state.bookings = [];
    }
  },

  // Save bookings to LocalStorage
  saveBookings() {
    try {
      localStorage.setItem("travel_india_bookings", JSON.stringify(this.state.bookings));
      this.updateBookingBadge();
    } catch (e) {
      console.warn("Could not save bookings to storage", e);
    }
  },

  updateBookingBadge() {
    const badge = document.getElementById("nav-booking-count");
    if (badge) {
      badge.textContent = this.state.bookings.length;
      badge.style.display = this.state.bookings.length > 0 ? "inline-block" : "none";
    }
  },

  // Populate hero search dropdowns
  populateHeroDropdowns() {
    const locSelect = document.getElementById("hero-location");
    if (locSelect) {
      locSelect.innerHTML = TRAVEL_DATA.locations.map(loc => 
        `<option value="${loc.id}">${loc.name} ${loc.tag ? '(' + loc.tag + ')' : ''}</option>`
      ).join("");
    }
  },

  // Render Destination Tabs
  renderDestinationTabs() {
    const tabsContainer = document.getElementById("destination-tabs");
    if (!tabsContainer) return;

    tabsContainer.innerHTML = TRAVEL_DATA.locations.map(loc => {
      const count = loc.id === "all" 
        ? TRAVEL_DATA.packages.length 
        : TRAVEL_DATA.packages.filter(p => p.locationId === loc.id).length;

      const isActive = this.state.activeLocation === loc.id;
      return `
        <button class="destination-tab-btn ${isActive ? 'active' : ''}" data-location="${loc.id}">
          <span>${loc.name}</span>
          <span class="tab-count">${count}</span>
        </button>
      `;
    }).join("");

    // Add click event for tabs
    tabsContainer.querySelectorAll(".destination-tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const loc = btn.getAttribute("data-location");
        this.selectLocation(loc);
      });
    });
  },

  selectLocation(locationId) {
    this.state.activeLocation = locationId;
    this.renderDestinationTabs();
    this.renderPackages();

    // Update active city hero indicator if needed
    const heroSelect = document.getElementById("hero-location");
    if (heroSelect && heroSelect.value !== locationId) {
      heroSelect.value = locationId;
    }
  },

  // Filter and Sort Packages
  getFilteredPackages() {
    let list = [...TRAVEL_DATA.packages];

    // Filter by destination
    if (this.state.activeLocation !== "all") {
      list = list.filter(p => p.locationId === this.state.activeLocation);
    }

    // Filter by category
    if (this.state.activeCategory !== "all") {
      list = list.filter(p => p.category === this.state.activeCategory);
    }

    // Filter by price range
    if (this.state.activePriceFilter === "budget") {
      list = list.filter(p => p.price < 1000);
    } else if (this.state.activePriceFilter === "mid") {
      list = list.filter(p => p.price >= 1000 && p.price <= 2500);
    } else if (this.state.activePriceFilter === "premium") {
      list = list.filter(p => p.price > 2500);
    }

    // Filter by search query
    if (this.state.searchQuery.trim() !== "") {
      const q = this.state.searchQuery.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.locationName.toLowerCase().includes(q) ||
        p.highlights.some(h => h.toLowerCase().includes(q))
      );
    }

    // Sort
    if (this.state.activeSort === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (this.state.activeSort === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (this.state.activeSort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  },

  filterByPrice(priceCat) {
    this.state.activePriceFilter = priceCat;
    document.querySelectorAll(".price-pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-price") === priceCat);
    });
    this.renderPackages();
  },

  // Render Packages Grid
  renderPackages() {
    const grid = document.getElementById("packages-grid");
    const countDisplay = document.getElementById("results-count");
    if (!grid) return;

    const packages = this.getFilteredPackages();

    if (countDisplay) {
      const locName = this.state.activeLocation === "all" ? "All India" : this.state.activeLocation.toUpperCase();
      const priceText = this.state.activePriceFilter === "all" ? "All Fares" : this.state.activePriceFilter.toUpperCase();
      countDisplay.textContent = `Showing ${packages.length} Verified Tours (${locName} • ${priceText})`;
    }

    if (packages.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border-radius: 16px; border: 1px dashed #CBD5E1;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🛺</div>
          <h3 style="font-size: 1.3rem; font-weight: 800; color: #0B192C;">No packages found</h3>
          <p style="color: #64748B; margin-top: 6px;">Try adjusting your destination or category filters.</p>
          <button class="btn-itinerary" style="margin-top: 16px;" onclick="App.resetFilters()">View All Packages</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = packages.map(pkg => {
      return `
        <div class="package-card" data-id="${pkg.id}" onclick="App.openItineraryModal('${pkg.id}')" title="Click to view full tour details">
          <div class="pkg-media">
            <img src="${pkg.image}" alt="${pkg.title}" class="pkg-img" loading="lazy" />
            <span class="pkg-badge">${pkg.badge}</span>
            <span class="pkg-all-inclusive-badge">✨ All-Inclusive Tour</span>
            <span class="pkg-location-tag">📍 ${pkg.locationName}</span>
          </div>

          <div class="pkg-body">
            <div class="pkg-meta">
              <span class="pkg-meta-item">⏱️ ${pkg.duration}</span>
              <span>•</span>
              <span class="pkg-meta-item">👥 ${pkg.capacity}</span>
              <span>•</span>
              <span class="pkg-meta-item">⭐ ${pkg.rating} (${pkg.reviewsCount})</span>
            </div>

            <h3 class="pkg-title">${pkg.title}</h3>
            <p class="pkg-tagline">${pkg.tagline}</p>

            <ul class="pkg-highlights-list">
              ${pkg.highlights.slice(0, 3).map(h => `
                <li class="pkg-highlight-item">
                  <span class="pkg-highlight-icon">✓</span>
                  <span>${h}</span>
                </li>
              `).join("")}
            </ul>

            <div class="pkg-pricing-box">
              <div class="pkg-pricing-row">
                <div>
                  <div class="pkg-fare-label">100% Direct Driver Fare</div>
                  <div>
                    <span class="pkg-direct-fare">₹${pkg.price.toLocaleString("en-IN")}</span>
                    <span class="pkg-original-fare">₹${pkg.originalPrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>
                <div class="pkg-saving-badge">
                  Save ₹${pkg.saving.toLocaleString("en-IN")} (Zero Comm.)
                </div>
              </div>
              <div class="pkg-direct-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                All-Inclusive: Private Transport, Guide, Fuel &amp; Tolls
              </div>
            </div>

            <div class="pkg-footer-actions">
              <button class="btn-view-package" onclick="event.stopPropagation(); App.openItineraryModal('${pkg.id}')">
                Explore Tour Details &amp; Itinerary →
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  resetFilters() {
    this.state.activeLocation = "all";
    this.state.activeCategory = "all";
    this.state.searchQuery = "";
    document.querySelectorAll(".pill-btn").forEach(p => p.classList.remove("active"));
    const allPill = document.querySelector(".pill-btn[data-category='all']");
    if (allPill) allPill.classList.add("active");
    this.renderDestinationTabs();
    this.renderPackages();
  },

  // Open Package Details & Itinerary Preview Modal
  openItineraryModal(packageId) {
    const pkg = TRAVEL_DATA.packages.find(p => p.id === packageId);
    if (!pkg) return;

    const modal = document.getElementById("itinerary-modal");
    const container = document.getElementById("itinerary-content");
    if (!modal || !container) return;

    container.innerHTML = `
      <div style="position: relative; border-radius: 14px; overflow: hidden; height: 200px; margin-bottom: 16px; background: #0B192C;">
        <img src="${pkg.image}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,25,44,0.85) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 16px;">
          <span class="pkg-all-inclusive-badge" style="position: static; font-size: 0.8rem; padding: 5px 12px;">✨ All-Inclusive Tour Package</span>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
          <div>
            <h2 style="font-size: 1.45rem; font-weight: 900; color: #0B192C; margin: 0 0 4px 0;">${pkg.title}</h2>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0;">📍 ${pkg.locationName} • ⏱️ ${pkg.duration} • 👥 ${pkg.capacity} • ⭐ ${pkg.rating} (${pkg.reviewsCount} reviews)</p>
          </div>
          <div style="text-align: right; white-space: nowrap;">
            <div style="font-size: 0.72rem; font-weight: 800; color: #059669; text-transform: uppercase;">100% Direct Driver Fare</div>
            <div style="font-size: 1.45rem; font-weight: 900; color: #FB8500;">₹${pkg.price.toLocaleString("en-IN")}</div>
          </div>
        </div>
        <p style="font-size: 0.9rem; color: #334155; line-height: 1.55; margin-top: 10px;">
          ${pkg.tagline}
        </p>
      </div>

      <div style="background: #F8FAFC; border-radius: 12px; padding: 16px; border: 1px solid #E2E8F0; margin-bottom: 20px;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: #0B192C; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>🗓️</span> Day Schedule &amp; Tour Stops
        </h4>
        <div style="position: relative; padding-left: 20px; border-left: 2px solid #CBD5E1; display: flex; flex-direction: column; gap: 14px;">
          ${pkg.itinerary.map(item => `
            <div style="position: relative;">
              <div style="position: absolute; left: -27px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: #FB8500; border: 2px solid #FFF;"></div>
              <div style="font-size: 0.8rem; font-weight: 800; color: #FB8500;">${item.time}</div>
              <div style="font-size: 0.94rem; font-weight: 700; color: #0B192C;">${item.title}</div>
              <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">${item.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px;">
        <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 12px; padding: 14px;">
          <h5 style="color: #065F46; font-weight: 800; font-size: 0.88rem; margin-bottom: 8px;">✅ What's Included in Package</h5>
          <ul style="list-style: none; font-size: 0.82rem; color: #166534; display: flex; flex-direction: column; gap: 6px;">
            ${pkg.inclusions.map(inc => `<li>✓ ${inc}</li>`).join("")}
            <li>✓ Dedicated Transport &amp; Sarathi Guide</li>
            <li>✓ Fuel, Road Tolls &amp; Sightseeing Parking</li>
            <li>✓ Zero Platform Surcharges (100% Direct)</li>
          </ul>
        </div>
        <div style="background: #FFF1F2; border: 1px solid #FECDD3; border-radius: 12px; padding: 14px;">
          <h5 style="color: #9F1239; font-weight: 800; font-size: 0.88rem; margin-bottom: 8px;">❌ Not Included</h5>
          <ul style="list-style: none; font-size: 0.82rem; color: #9F1239; display: flex; flex-direction: column; gap: 6px;">
            ${pkg.exclusions.map(exc => `<li>• ${exc}</li>`).join("")}
            <li>• Personal souvenirs / shopping</li>
          </ul>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; background: #0B192C; color: #FFF; padding: 16px 20px; border-radius: 14px; flex-wrap: wrap; gap: 12px;">
        <div>
          <div style="font-size: 0.76rem; color: #94A3B8; text-transform: uppercase;">All-Inclusive Transparent Fare</div>
          <div style="font-size: 1.45rem; font-weight: 900; color: #FFB703;">
            ₹${pkg.price.toLocaleString("en-IN")} <span style="font-size: 0.78rem; font-weight: 600; color: #34D399;">(100% Direct Driver Payment)</span>
          </div>
        </div>
        <button class="btn-book-now" style="font-size: 1rem; padding: 12px 24px;" onclick="App.proceedToBookingFromDetails('${pkg.id}')">
          Continue with Booking →
        </button>
      </div>
    `;

    modal.classList.add("active");
  },

  proceedToBookingFromDetails(packageId) {
    this.closeModal('itinerary-modal');
    this.startBooking(packageId);
  },

  // Multi-Step Booking Flow
  startBooking(packageId) {
    const pkg = TRAVEL_DATA.packages.find(p => p.id === packageId);
    if (!pkg) return;

    this.state.selectedPackage = pkg;
    this.state.currentStep = 1;
    this.state.bookingData.packageId = pkg.id;
    this.state.bookingData.totalAmount = pkg.price;

    // Set suggested pickups from location
    const loc = TRAVEL_DATA.locations.find(l => l.id === pkg.locationId);
    const chipsContainer = document.getElementById("step1-pickup-chips");
    if (chipsContainer && loc && loc.popularPickups) {
      chipsContainer.innerHTML = loc.popularPickups.map(p => `
        <span class="pickup-chip" onclick="App.selectPickupAddress('${p}')">${p}</span>
      `).join("");
    }

    this.updateBookingModalUI();
    document.getElementById("booking-modal").classList.add("active");
  },

  selectPickupAddress(address) {
    const input = document.getElementById("booking-pickup");
    if (input) input.value = address;
  },

  updateBookingModalUI() {
    const pkg = this.state.selectedPackage;
    if (!pkg) return;

    // Summary header
    document.getElementById("modal-summary-title").textContent = pkg.title;
    document.getElementById("modal-summary-meta").textContent = `📍 ${pkg.locationName} • 🛺 ${pkg.vehicleType}`;
    document.getElementById("modal-summary-price").textContent = `₹${pkg.price.toLocaleString("en-IN")}`;
    document.getElementById("modal-summary-img").src = pkg.image;

    // Stepper indicators
    for (let i = 1; i <= 4; i++) {
      const stepEl = document.getElementById(`step-item-${i}`);
      const formStep = document.getElementById(`booking-step-${i}`);

      if (stepEl) {
        stepEl.classList.remove("active", "completed");
        if (i < this.state.currentStep) stepEl.classList.add("completed");
        if (i === this.state.currentStep) stepEl.classList.add("active");
      }

      if (formStep) {
        formStep.classList.toggle("active", i === this.state.currentStep);
      }
    }

    // Modal navigation buttons
    const backBtn = document.getElementById("btn-booking-back");
    const nextBtn = document.getElementById("btn-booking-next");
    const footer = document.getElementById("booking-modal-footer");

    if (this.state.currentStep === 4) {
      // Step 4 is confirmation pass, hide bottom controls
      if (footer) footer.style.display = "none";
    } else {
      if (footer) footer.style.display = "flex";
      if (backBtn) backBtn.style.visibility = this.state.currentStep > 1 ? "visible" : "hidden";
      if (nextBtn) {
        if (this.state.currentStep === 3) {
          nextBtn.innerHTML = `Pay ₹${pkg.price.toLocaleString("en-IN")} &amp; Confirm Booking`;
        } else {
          nextBtn.innerHTML = `Continue to Step ${this.state.currentStep + 1} →`;
        }
      }
    }

    // Dynamic Fare Breakdown in Step 3
    if (this.state.currentStep === 3) {
      document.getElementById("breakdown-base-fare").textContent = `₹${pkg.price.toLocaleString("en-IN")}`;
      document.getElementById("breakdown-total").textContent = `₹${pkg.price.toLocaleString("en-IN")}`;
      document.getElementById("qr-amount-display").textContent = `₹${pkg.price.toLocaleString("en-IN")}`;
    }
  },

  nextBookingStep() {
    if (this.state.currentStep === 1) {
      // Validate Step 1
      const date = document.getElementById("booking-date").value;
      const time = document.getElementById("booking-time").value;
      const pickup = document.getElementById("booking-pickup").value.trim();

      if (!date) {
        this.showToast("⚠️ Please select your tour date.");
        return;
      }
      if (!pickup) {
        this.showToast("⚠️ Please enter a pickup address or choose a landmark.");
        return;
      }

      this.state.bookingData.date = date;
      this.state.bookingData.time = time;
      this.state.bookingData.pickup = pickup;
      this.state.bookingData.guests = document.getElementById("booking-guests").value;
      this.state.bookingData.guideLang = document.getElementById("booking-lang").value;

      this.state.currentStep = 2;
      this.updateBookingModalUI();
    } else if (this.state.currentStep === 2) {
      // Validate Step 2
      const name = document.getElementById("booking-name").value.trim();
      const phone = document.getElementById("booking-phone").value.trim();
      const email = document.getElementById("booking-email").value.trim();
      const notes = document.getElementById("booking-notes").value.trim();

      if (name.length < 3) {
        this.showToast("⚠️ Please enter traveler's full name.");
        return;
      }
      if (!/^\d{10}$/.test(phone.replace(/[^0-9]/g, ""))) {
        this.showToast("⚠️ Please enter a valid 10-digit mobile number.");
        return;
      }

      this.state.bookingData.name = name;
      this.state.bookingData.phone = phone;
      this.state.bookingData.email = email || `${name.toLowerCase().replace(/\s+/g, "")}@gmail.com`;
      this.state.bookingData.notes = notes;

      this.state.currentStep = 3;
      this.updateBookingModalUI();
    } else if (this.state.currentStep === 3) {
      // Process Payment
      this.processPayment();
    }
  },

  prevBookingStep() {
    if (this.state.currentStep > 1) {
      this.state.currentStep--;
      this.updateBookingModalUI();
    }
  },

  // Simulated Instant Payment & Driver Assignment
  processPayment() {
    const nextBtn = document.getElementById("btn-booking-next");
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.innerHTML = `<span class="spinner" style="display:inline-block;width:16px;height:16px;border:2px solid #0B192C;border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite;margin-right:8px;"></span> Processing 100% Direct Driver Payment...`;
    }

    setTimeout(() => {
      // Generate Booking ID
      const randomId = Math.floor(10000 + Math.random() * 90000);
      const pkg = this.state.selectedPackage;
      const cityCode = pkg.locationId.substring(0, 3).toUpperCase();
      const bookingId = `TI-${cityCode}-${randomId}`;

      // Pick a matching driver partner or generate one
      let driver = TRAVEL_DATA.driverPartners.find(d => 
        d.city.toLowerCase().includes(pkg.locationId.toLowerCase())
      );
      if (!driver) {
        driver = TRAVEL_DATA.driverPartners[0];
      }

      this.state.bookingData.bookingId = bookingId;
      this.state.bookingData.assignedDriver = driver;
      this.state.bookingData.timestamp = new Date().toISOString();
      this.state.bookingData.packageTitle = pkg.title;
      this.state.bookingData.locationName = pkg.locationName;
      this.state.bookingData.vehicleType = pkg.vehicleType;
      this.state.lastBooking = { ...this.state.bookingData };

      // Save to bookings list
      this.state.bookings.unshift({ ...this.state.bookingData });
      this.saveBookings();

      if (nextBtn) {
        nextBtn.disabled = false;
      }

      // Render Step 4 Pass
      this.renderBookingPass(this.state.bookingData);
      this.state.currentStep = 4;
      this.updateBookingModalUI();

      // Dispatch Email Ticket Simulation
      this.dispatchEmailTicket(this.state.bookingData);

      this.showToast(`🎉 Booking Confirmed! Driver ${driver.name} assigned.`);
      setTimeout(() => {
        this.showToast(`📧 Official Ticket & Pass sent to <strong>${this.state.bookingData.email}</strong>!`);
      }, 1400);
    }, 1200);
  },

  // Dispatch Email Ticket and Populate Email Preview Modal
  dispatchEmailTicket(booking) {
    const emailToEl = document.getElementById("email-modal-to");
    const emailSubjectEl = document.getElementById("email-modal-subject");
    const emailBodyEl = document.getElementById("email-modal-body");
    const emailNoticeEl = document.getElementById("pass-email-notice");

    if (emailNoticeEl) {
      emailNoticeEl.innerHTML = `
        <div style="background: #EFF6FF; border: 1.5px solid #BFDBFE; border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 0.82rem; color: #1E40AF;">
            <strong>✉️ Ticket Sent via Email!</strong><br />
            Delivered to: <code>${booking.email}</code>
          </div>
          <button class="btn-itinerary" style="padding: 6px 12px; font-size: 0.78rem; background: #DBEAFE; color: #1E40AF; border-color: #93C5FD;" onclick="App.openEmailModal()">
            View Email Ticket
          </button>
        </div>
      `;
    }

    if (emailToEl) emailToEl.textContent = `${booking.name} <${booking.email}>`;
    if (emailSubjectEl) emailSubjectEl.textContent = `Confirmed: Your Travel India Tour Ticket & Sarathi Pass [${booking.bookingId}]`;

    if (emailBodyEl) {
      emailBodyEl.innerHTML = `
        <div style="max-width: 620px; margin: 0 auto; background: #FFFFFF; font-family: 'Inter', system-ui, sans-serif; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Email Brand Header -->
          <div style="background: #0B192C; padding: 24px; text-align: center; color: #FFFFFF; border-bottom: 4px solid #FB8500;">
            <div style="font-size: 1.4rem; font-weight: 900; letter-spacing: 1px;">
              🛺 TRAVEL <span style="color: #FF9933;">IN</span><span style="color: #FFF;">D</span><span style="color: #138808;">IA</span>
            </div>
            <div style="font-size: 0.78rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px;">
              Official Booking Confirmation &amp; E-Ticket
            </div>
          </div>

          <!-- Greeting & Reference -->
          <div style="padding: 24px;">
            <p style="font-size: 1rem; color: #0F172A; margin-bottom: 12px;">
              Namaste <strong>${booking.name}</strong>,
            </p>
            <p style="font-size: 0.88rem; color: #475569; line-height: 1.5; margin-bottom: 20px;">
              Thank you for choosing <strong>Travel India</strong>! Your zero-commission booking has been confirmed and 100% of your fare has been directly credited to your verified local Sarathi chauffeur.
            </p>

            <!-- Booking Highlights Table -->
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 8px; font-size: 0.85rem;">
                <span style="color: #64748B;">Booking Reference:</span>
                <span style="font-weight: 800; color: #FB8500; font-family: monospace;">${booking.bookingId}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 8px; font-size: 0.85rem;">
                <span style="color: #64748B;">Tour Package:</span>
                <span style="font-weight: 700; color: #0B192C;">${booking.packageTitle}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 8px; font-size: 0.85rem;">
                <span style="color: #64748B;">Date &amp; Pickup Time:</span>
                <span style="font-weight: 700; color: #0B192C;">${booking.date} at ${booking.time}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 8px; font-size: 0.85rem;">
                <span style="color: #64748B;">Pickup Location:</span>
                <span style="font-weight: 700; color: #0B192C;">${booking.pickup}</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 8px; font-size: 0.85rem;">
                <span style="color: #64748B;">Passengers:</span>
                <span style="font-weight: 700; color: #0B192C;">${booking.guests} Guests</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 900; color: #059669; padding-top: 4px;">
                <span>Total Amount Paid (100% to Driver):</span>
                <span>₹${booking.totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <!-- Chauffeur Details -->
            <div style="background: #ECFDF5; border: 1.5px solid #A7F3D0; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
              <div style="font-size: 0.76rem; font-weight: 800; color: #065F46; text-transform: uppercase;">
                Assigned Sarathi Chauffeur
              </div>
              <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
                <img src="${booking.assignedDriver.avatar}" alt="${booking.assignedDriver.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #059669;" />
                <div>
                  <div style="font-weight: 800; color: #064E3B; font-size: 1rem;">${booking.assignedDriver.name}</div>
                  <div style="font-size: 0.8rem; color: #047857;">🚗 Vehicle: ${booking.assignedDriver.vehicle}</div>
                  <div style="font-size: 0.75rem; color: #065F46;">Rating: ⭐ ${booking.assignedDriver.rating} • Experience: ${booking.assignedDriver.experience}</div>
                </div>
              </div>
            </div>

            <!-- Important Instructions -->
            <div style="font-size: 0.8rem; color: #64748B; line-height: 1.6; border-top: 1px solid #E2E8F0; padding-top: 14px;">
              <strong style="color: #0F172A;">Important Tourist Instructions:</strong><br />
              • Your driver will contact you 1 hour before pickup on <strong>${booking.phone}</strong>.<br />
              • Zero commission model: You do NOT need to pay any booking commission or platform tip.<br />
              • For 24x7 SOS emergency coordination during your tour, dial <strong>1800-242-728</strong>.
            </div>

            <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 0.74rem; color: #94A3B8;">
              Travel India National Tourism Bureau • Reg: MOT-IND/2023/ONDC-88412 • New Delhi, India<br />
              This is an automated ticket dispatch from <code>tickets@travelindia.org</code>.
            </div>
          </div>
        </div>
      `;
    }
  },

  openEmailModal() {
    const modal = document.getElementById("email-modal");
    if (modal) modal.classList.add("active");
  },

  resendEmailTicket() {
    if (!this.state.lastBooking) {
      this.showToast("⚠️ No active booking found to resend.");
      return;
    }
    this.showToast(`📧 Re-sending ticket to <strong>${this.state.lastBooking.email}</strong>...`);
    setTimeout(() => {
      this.showToast(`✅ E-Ticket successfully sent to <strong>${this.state.lastBooking.email}</strong>!`);
    }, 1000);
  },

  renderBookingPass(booking) {
    document.getElementById("pass-id-display").textContent = booking.bookingId;
    document.getElementById("pass-pkg-title").textContent = booking.packageTitle;
    document.getElementById("pass-driver-name").textContent = booking.assignedDriver.name;
    document.getElementById("pass-driver-vehicle").textContent = booking.assignedDriver.vehicle;
    document.getElementById("pass-driver-rating").textContent = `⭐ ${booking.assignedDriver.rating} (Verified Sarathi)`;
    document.getElementById("pass-driver-img").src = booking.assignedDriver.avatar;

    document.getElementById("pass-date-time").textContent = `${booking.date} at ${booking.time}`;
    document.getElementById("pass-pickup-loc").textContent = booking.pickup;
    document.getElementById("pass-traveler-name").textContent = booking.name;
    document.getElementById("pass-traveler-phone").textContent = booking.phone;
    document.getElementById("pass-paid-amount").textContent = `₹${booking.totalAmount.toLocaleString("en-IN")}`;
  },

  // Curated Incredible India Tourist Gallery Helpers
  getGalleryList() {
    let list = TRAVEL_DATA.touristGallery || [];
    if (this.state.activeGalleryCategory !== "all") {
      list = list.filter(item => item.category === this.state.activeGalleryCategory);
    }
    return list;
  },

  // ========================================================================
  // 1. FEATURED LOCATION SPOTLIGHT SLIDE (ONE SLIDE - LIMITED INFORMATION)
  // ========================================================================
  initSpotlightSlider() {
    this.renderSpotlightSlide();
    this.startSpotlightTimer();
  },

  startSpotlightTimer() {
    if (this.state.spotlightTimer) clearInterval(this.state.spotlightTimer);
    this.state.spotlightTimer = setInterval(() => {
      this.nextSpotlightSlide(false);
    }, 6500);
  },

  pauseSpotlightTimer() {
    if (this.state.spotlightTimer) clearInterval(this.state.spotlightTimer);
  },

  nextSpotlightSlide(restartTimer = true) {
    const list = this.getGalleryList();
    if (list.length === 0) return;
    this.state.spotlightIndex = (this.state.spotlightIndex + 1) % list.length;
    this.renderSpotlightSlide();
    if (restartTimer) this.startSpotlightTimer();
  },

  prevSpotlightSlide() {
    const list = this.getGalleryList();
    if (list.length === 0) return;
    this.state.spotlightIndex = (this.state.spotlightIndex - 1 + list.length) % list.length;
    this.renderSpotlightSlide();
    this.startSpotlightTimer();
  },

  setSpotlightSlide(index) {
    const list = this.getGalleryList();
    if (index >= 0 && index < list.length) {
      this.state.spotlightIndex = index;
      this.renderSpotlightSlide();
      this.startSpotlightTimer();
    }
  },

  selectSpotlightById(id) {
    const list = this.getGalleryList();
    const idx = list.findIndex(item => item.id === id);
    if (idx !== -1) {
      this.setSpotlightSlide(idx);
      const spotlightEl = document.getElementById("spotlight-slide-wrapper");
      if (spotlightEl) spotlightEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  },

  toggleSpotlightDetails() {
    this.state.spotlightDetailsOpen = !this.state.spotlightDetailsOpen;
    const panel = document.getElementById("spotlight-drop-details");
    const btn = document.getElementById("btn-spotlight-drop");
    if (panel) {
      panel.style.display = this.state.spotlightDetailsOpen ? "block" : "none";
    }
    if (btn) {
      btn.innerHTML = `<span>${this.state.spotlightDetailsOpen ? 'Hide Details ▴' : 'View Details ▾'}</span>`;
    }
  },

  renderSpotlightSlide() {
    const container = document.getElementById("spotlight-slide-card");
    const dotsContainer = document.getElementById("spotlight-dots");
    const list = this.getGalleryList();
    if (!container || list.length === 0) return;

    if (this.state.spotlightIndex >= list.length) {
      this.state.spotlightIndex = 0;
    }

    const item = list[this.state.spotlightIndex];

    container.innerHTML = `
      <div class="spotlight-single-media">
        <img src="${item.image}" alt="${item.title}" class="spotlight-single-img" />
        
        <!-- Floating Navigation Arrows -->
        <button class="spotlight-floating-nav spotlight-nav-left" onclick="event.stopPropagation(); App.prevSpotlightSlide()" title="Previous Landmark">
          ‹
        </button>
        <button class="spotlight-floating-nav spotlight-nav-right" onclick="event.stopPropagation(); App.nextSpotlightSlide()" title="Next Landmark">
          ›
        </button>

        <div class="spotlight-single-overlay">
          <div class="spotlight-top-tags">
            <span class="spotlight-tag-pill">📍 ${item.location} • ${item.state}</span>
            <span class="spotlight-direct-pill">🛡️ 100% Direct Driver Fare</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: flex-end;">
            <span style="background: rgba(11,25,44,0.8); backdrop-filter: blur(6px); color: #FFB703; font-weight: 800; font-size: 0.82rem; padding: 5px 14px; border-radius: 6px; border: 1px solid rgba(255,183,3,0.3);">
              ✨ ${item.highlightTag || "Incredible Bharat Destination"}
            </span>
            <span style="background: rgba(11,25,44,0.8); color: #FFF; font-size: 0.76rem; font-weight: 700; padding: 4px 10px; border-radius: 4px;">
              ${this.state.spotlightIndex + 1} of ${list.length}
            </span>
          </div>
        </div>
      </div>

      <!-- Essential Title & Action Bar (Important Info Only) -->
      <div class="spotlight-essential-bar">
        <div class="spotlight-title-group">
          <h3 class="spotlight-title">${item.title}</h3>
          <div class="spotlight-location-sub">
            <span>📍 ${item.location}</span>
            <span>•</span>
            <span>Starting from <strong class="spotlight-direct-fare-text">₹${(item.directFare || 899).toLocaleString("en-IN")}</strong></span>
            <span>•</span>
            <span style="color: #059669; font-weight: 700;">Zero Commission Direct</span>
          </div>
        </div>

        <div class="spotlight-actions-group">
          <button class="btn-book-now" onclick="App.bookSpotlightTour('${item.id}')">
            Explore Package &amp; Book →
          </button>
          <button id="btn-spotlight-drop" class="btn-spotlight-drop" onclick="App.toggleSpotlightDetails()">
            <span>${this.state.spotlightDetailsOpen ? 'Hide Details ▴' : 'View Details ▾'}</span>
          </button>
        </div>
      </div>

      <!-- Expandable Details Dropdown (Remaining Information) -->
      <div id="spotlight-drop-details" class="spotlight-drop-panel" style="display: ${this.state.spotlightDetailsOpen ? 'block' : 'none'};">
        <p class="spotlight-drop-desc">${item.description}</p>
        <div class="spotlight-drop-chips">
          <span class="spotlight-drop-chip">🗓️ Best Season: <strong>${item.bestTime}</strong></span>
          <span class="spotlight-drop-chip">🧭 Recommended Route: <strong>${item.topTour}</strong></span>
          <span class="spotlight-drop-chip">🚗 Transport &amp; Guide: <strong>100% Included in Package</strong></span>
          <span class="spotlight-drop-chip">🛡️ Driver Payout: <strong>Direct to Driver UPI (₹0 Commission)</strong></span>
        </div>
      </div>
    `;

    // Render indicator dots
    if (dotsContainer) {
      dotsContainer.innerHTML = list.map((_, i) => `
        <span class="spotlight-dot ${i === this.state.spotlightIndex ? 'active' : ''}" onclick="App.setSpotlightSlide(${i})" title="Go to slide ${i + 1}"></span>
      `).join("");
    }

    // Highlight active card in marquee if present
    document.querySelectorAll(".marquee-card").forEach(c => {
      c.classList.toggle("active-spotlight", c.getAttribute("data-id") === item.id);
    });
  },

  bookSpotlightTour(galleryId) {
    const list = this.getGalleryList();
    const item = list.find(g => g.id === galleryId) || list[this.state.spotlightIndex];
    if (!item) return;

    // Match with existing package or find best match
    let pkg = TRAVEL_DATA.packages.find(p => 
      p.title.toLowerCase().includes(item.title.toLowerCase()) ||
      item.topTour.toLowerCase().includes(p.title.toLowerCase()) ||
      p.locationName.toLowerCase().includes(item.state.toLowerCase())
    );

    if (!pkg) {
      pkg = TRAVEL_DATA.packages[0];
    }

    // Give basic information in detail first, then continue to booking
    this.openItineraryModal(pkg.id);
  },

  exploreSpotlightState(stateName) {
    this.quickBookFromGallery(stateName);
  },

  // ========================================================================
  // 2. INFINITE PHOTO MARQUEE OF ALL INDIA TOURIST PHOTOS
  // ========================================================================
  renderPhotoMarquee(category = "all") {
    const track = document.getElementById("tourist-marquee-track");
    if (!track) return;

    let list = TRAVEL_DATA.touristGallery || [];
    if (category !== "all") {
      list = list.filter(item => item.category === category);
    }

    // Duplicate list items to create infinite seamless loop
    const duplicatedList = [...list, ...list];

    track.innerHTML = duplicatedList.map((item) => `
      <div class="marquee-card ${item.id === (list[this.state.spotlightIndex]?.id) ? 'active-spotlight' : ''}" data-id="${item.id}" onclick="App.selectSpotlightById('${item.id}')" title="Click to view ${item.title}">
        <img src="${item.image}" alt="${item.title}" class="marquee-card-img" loading="lazy" />
        <div class="marquee-card-overlay">
          <span class="marquee-card-tag">📍 ${item.state}</span>
          <div class="marquee-card-title">${item.title}</div>
          <span class="marquee-card-fare">Direct ₹${(item.directFare || 899).toLocaleString("en-IN")}</span>
        </div>
      </div>
    `).join("");
  },

  pauseMarquee() {
    const track = document.getElementById("tourist-marquee-track");
    if (track) track.style.animationPlayState = "paused";
  },

  resumeMarquee() {
    const track = document.getElementById("tourist-marquee-track");
    if (track) track.style.animationPlayState = "running";
  },

  filterGallery(category) {
    this.state.activeGalleryCategory = category;
    this.state.spotlightIndex = 0;
    document.querySelectorAll(".gallery-pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-cat") === category);
    });
    this.renderSpotlightSlide();
    this.renderPhotoMarquee(category);
  },

  // ========================================================================
  // 3. POLICIES & TRUST CENTER (PAYMENT, CANCELLATION, TERMS, PRIVACY)
  // ========================================================================
  renderPolicies(tabKey = "payment") {
    const container = document.getElementById("policy-content-area");
    if (!container || !TRAVEL_DATA.policies) return;

    const policy = TRAVEL_DATA.policies[tabKey] || TRAVEL_DATA.policies.payment;

    container.innerHTML = `
      <div style="border-bottom: 1px solid #E2E8F0; padding-bottom: 16px; margin-bottom: 20px;">
        <div style="font-size: 0.78rem; font-weight: 800; color: var(--primary-orange); text-transform: uppercase; letter-spacing: 1px;">
          Travel India Transparency Framework
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 900; color: var(--primary-dark); margin: 6px 0 4px 0;">
          ${policy.title}
        </h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
          ${policy.tagline}
        </p>
      </div>

      <div class="policy-points-grid">
        ${policy.points.map((pt, idx) => `
          <div class="policy-point-item">
            <h4>
              <span style="background: rgba(251, 133, 0, 0.15); color: var(--primary-orange); width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem; font-weight: 900;">
                ${idx + 1}
              </span>
              <span>${pt.heading}</span>
            </h4>
            <p>${pt.body}</p>
          </div>
        `).join("")}
      </div>
    `;
  },

  switchPolicyTab(tabKey) {
    this.state.activePolicyTab = tabKey;
    document.querySelectorAll(".policy-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-policy") === tabKey);
    });
    this.renderPolicies(tabKey);
  },

  // ========================================================================
  // 4. OFFICIAL SOCIAL MEDIA CHANNELS HUB
  // ========================================================================
  renderSocialMedia() {
    const container = document.getElementById("social-media-grid");
    if (!container || !TRAVEL_DATA.socialMedia) return;

    container.innerHTML = TRAVEL_DATA.socialMedia.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-card" title="Follow ${s.name}">
        <span class="social-icon">${s.icon}</span>
        <div class="social-info">
          <div>${s.name}</div>
          <div>${s.handle}</div>
          <div style="font-size: 0.7rem; color: var(--primary-amber); margin-top: 2px;">${s.followers}</div>
        </div>
      </a>
    `).join("");
  },

  quickBookFromGallery(stateName) {
    // Check if there is a matching state in statesData
    const stateObj = TRAVEL_DATA.statesData.find(s => 
      s.name.toLowerCase().includes(stateName.toLowerCase()) ||
      stateName.toLowerCase().includes(s.name.toLowerCase())
    );
    if (stateObj) {
      this.selectState(stateObj.id);
      const stateSection = document.getElementById("state-trip-planner");
      if (stateSection) stateSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Switch location tab
      const loc = TRAVEL_DATA.locations.find(l => 
        l.state.toLowerCase().includes(stateName.toLowerCase()) || 
        l.name.toLowerCase().includes(stateName.toLowerCase())
      );
      if (loc) {
        this.selectLocation(loc.id);
        document.getElementById("packages-catalog").scrollIntoView({ behavior: "smooth" });
      }
    }
  },

  // Render State-by-State Event & Trip Planning
  renderStatePlanner() {
    const tabsContainer = document.getElementById("state-selector-tabs");
    if (!tabsContainer || !TRAVEL_DATA.statesData) return;

    tabsContainer.innerHTML = TRAVEL_DATA.statesData.map(st => {
      const isActive = this.state.activeState === st.id;
      return `
        <button class="state-card-btn ${isActive ? 'active' : ''}" onclick="App.selectState('${st.id}')">
          <span class="state-icon">${st.icon}</span>
          <div>
            <div class="state-name">${st.name}</div>
            <div class="state-trips-count">${st.trips.length} Available Trips</div>
          </div>
        </button>
      `;
    }).join("");

    this.renderStateTrips(this.state.activeState);
  },

  selectState(stateId) {
    this.state.activeState = stateId;
    document.querySelectorAll(".state-card-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("onclick").includes(stateId));
    });
    this.renderStateTrips(stateId);
  },

  renderStateTrips(stateId) {
    const container = document.getElementById("state-trips-list");
    const bannerContainer = document.getElementById("state-active-banner");
    if (!container || !TRAVEL_DATA.statesData) return;

    const state = TRAVEL_DATA.statesData.find(s => s.id === stateId) || TRAVEL_DATA.statesData[0];
    if (!state) return;

    if (bannerContainer) {
      bannerContainer.innerHTML = `
        <div class="state-banner-card" style="background-image: linear-gradient(to right, rgba(11, 25, 44, 0.95), rgba(11, 25, 44, 0.7)), url('${state.banner}');">
          <div class="state-banner-content">
            <span class="state-badge-highlight">${state.icon} ${state.name} State Circuit</span>
            <h3 class="state-banner-title">${state.tagline}</h3>
            <div class="state-banner-meta">
              <span>🏛️ Capital: <strong>${state.capital}</strong></span>
              <span>•</span>
              <span>🗓️ Best Season: <strong>${state.bestSeason}</strong></span>
              <span>•</span>
              <span>📍 Major Hubs: <strong>${state.majorHubs.join(", ")}</strong></span>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = state.trips.map(trip => `
      <div class="state-trip-card">
        <div class="state-trip-header">
          <div>
            <span class="state-trip-type">${trip.type}</span>
            <h4 class="state-trip-title">${trip.title}</h4>
            <div class="state-trip-meta">
              <span>⏱️ ${trip.duration}</span>
              <span>•</span>
              <span>🚗 ${trip.vehicle}</span>
              <span>•</span>
              <span>👥 ${trip.capacity}</span>
              <span>•</span>
              <span>⭐ ${trip.rating}</span>
            </div>
          </div>
          <div class="state-trip-price-box">
            <div style="font-size: 0.72rem; color: #64748B; font-weight: 700;">DIRECT FARE</div>
            <div class="state-trip-price">₹${trip.fare.toLocaleString("en-IN")}</div>
            <div class="state-trip-saving">Save ₹${trip.saving.toLocaleString("en-IN")} (Zero Comm.)</div>
          </div>
        </div>

        <p class="state-trip-highlights">${trip.highlights}</p>

        <div class="state-trip-stops">
          <strong style="font-size: 0.78rem; color: #0B192C;">Key Stops:</strong>
          ${trip.stops.map(st => `<span class="trip-stop-pill">${st}</span>`).join("")}
        </div>

        <div class="state-trip-footer">
          <span style="font-size: 0.78rem; color: #059669; font-weight: 700;">
            ✓ 100% Direct Driver Payment via UPI • Tolls Included
          </span>
          <button class="btn-book-now" onclick="App.startBookingStateTrip('${trip.id}', '${state.id}')">
            Book This Trip →
          </button>
        </div>
      </div>
    `).join("");
  },

  startBookingStateTrip(tripId, stateId) {
    const state = TRAVEL_DATA.statesData.find(s => s.id === stateId);
    if (!state) return;
    const trip = state.trips.find(t => t.id === tripId);
    if (!trip) return;

    // Adapt state trip into package format for booking modal
    const pkgAdapter = {
      id: trip.id,
      locationId: state.id,
      locationName: `${state.name}, Bharat`,
      title: trip.title,
      tagline: trip.highlights,
      vehicleType: trip.vehicle,
      price: trip.fare,
      originalPrice: trip.originalFare,
      saving: trip.saving,
      image: state.banner,
      capacity: trip.capacity,
      duration: trip.duration
    };

    this.state.selectedPackage = pkgAdapter;
    this.state.currentStep = 1;
    this.state.bookingData.packageId = trip.id;
    this.state.bookingData.totalAmount = trip.fare;

    const chipsContainer = document.getElementById("step1-pickup-chips");
    if (chipsContainer && state.majorHubs) {
      chipsContainer.innerHTML = state.majorHubs.map(h => `
        <span class="pickup-chip" onclick="App.selectPickupAddress('${h} Central Station / Hotel')">${h}</span>
      `).join("");
    }

    this.updateBookingModalUI();
    document.getElementById("booking-modal").classList.add("active");
  },

  // Render Agency Information & Branch Office Directory
  renderAgencyDetails() {
    const agency = TRAVEL_DATA.agencyInfo;
    if (!agency) return;

    const regEl = document.getElementById("agency-reg-no");
    const hqAddressEl = document.getElementById("agency-hq-address");
    const hqHoursEl = document.getElementById("agency-hq-hours");
    const branchesContainer = document.getElementById("agency-branches-grid");

    if (regEl) regEl.textContent = agency.registrationNo;
    if (hqAddressEl) hqAddressEl.textContent = agency.headquarters.address;
    if (hqHoursEl) hqHoursEl.textContent = agency.headquarters.operatingHours;

    if (branchesContainer && agency.branchOffices) {
      branchesContainer.innerHTML = agency.branchOffices.map(b => `
        <div class="branch-card">
          <div class="branch-header">
            <span class="branch-city">📍 ${b.city}</span>
            <span class="branch-state">${b.state}</span>
          </div>
          <div class="branch-landmark">${b.landmark}</div>
          <p class="branch-address">${b.address}</p>
          <div class="branch-contact">
            <div>📞 <strong>${b.phone}</strong></div>
            <div>✉️ <a href="mailto:${b.email}">${b.email}</a></div>
          </div>
          <div class="branch-head">Desk Lead: <strong>${b.head}</strong></div>
        </div>
      `).join("");
    }
  },

  // Multilingual System (English, Kannada, Hindi, Telugu)
  initLanguage() {
    try {
      const savedLang = localStorage.getItem("travel_india_lang") || "en";
      this.changeLanguage(savedLang, false);
    } catch (e) {
      this.changeLanguage("en", false);
    }
  },

  changeLanguage(lang, notify = true) {
    if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) return;
    this.state.currentLang = lang;
    try {
      localStorage.setItem("travel_india_lang", lang);
    } catch (e) {}

    const dict = TRANSLATIONS[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update select dropdowns
    const select = document.getElementById("language-switcher");
    if (select && select.value !== lang) {
      select.value = lang;
    }
    const topSelect = document.getElementById("top-language-switcher");
    if (topSelect && topSelect.value !== lang) {
      topSelect.value = lang;
    }

    if (notify) {
      const langNames = { en: "English", kn: "ಕನ್ನಡ (Kannada)", hi: "हिन्दी (Hindi)", te: "తెలుగు (Telugu)" };
      this.showToast(`🌐 Language updated to <strong>${langNames[lang] || lang}</strong>`);
    }
  },

  // Render A to Z Trip Planning Services
  renderAtoZServices() {
    const container = document.getElementById("atoz-services-grid");
    if (!container || !TRAVEL_DATA.atozServices) return;

    container.innerHTML = TRAVEL_DATA.atozServices.map(svc => `
      <div class="atoz-service-card">
        <div class="atoz-letter-badge">${svc.letter}</div>
        <div class="atoz-icon">${svc.icon}</div>
        <h4 class="atoz-title">${svc.title}</h4>
        <p class="atoz-desc">${svc.desc}</p>
      </div>
    `).join("");
  },

  // Interactive A to Z Custom Trip Builder
  initAtoZBuilder() {
    const builder = document.getElementById("atoz-trip-builder");
    if (!builder) return;

    builder.querySelectorAll("input, select").forEach(input => {
      input.addEventListener("change", () => this.calculateAtoZCustomTrip());
    });

    this.calculateAtoZCustomTrip();
  },

  calculateAtoZCustomTrip() {
    const stateSelect = document.getElementById("builder-state");
    const durationSelect = document.getElementById("builder-duration");
    const priceDisplay = document.getElementById("builder-est-price");
    const savingDisplay = document.getElementById("builder-est-saving");
    const breakdownList = document.getElementById("builder-breakdown-list");
    if (!stateSelect || !priceDisplay) return;

    const days = parseInt(durationSelect ? durationSelect.value : "1");
    let baseFare = days * 1699;

    const incGuide = document.getElementById("inc-guide")?.checked;
    const incPasses = document.getElementById("inc-passes")?.checked;
    const incMeals = document.getElementById("inc-meals")?.checked;
    const incStay = document.getElementById("inc-stay")?.checked;

    let guideCost = incGuide ? days * 700 : 0;
    let passesCost = incPasses ? days * 450 : 0;
    let mealsCost = incMeals ? days * 600 : 0;
    let stayCost = incStay ? (days > 1 ? (days - 1) * 2200 : 0) : 0;

    let total = baseFare + guideCost + passesCost + mealsCost + stayCost;
    let corporateCost = Math.round(total * 1.38);
    let saving = corporateCost - total;

    priceDisplay.textContent = `₹${total.toLocaleString("en-IN")}`;
    if (savingDisplay) {
      savingDisplay.textContent = `Save ₹${saving.toLocaleString("en-IN")} with Travel India 0% Commission`;
    }

    if (breakdownList) {
      breakdownList.innerHTML = `
        <li style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span>🚗 Dedicated Vehicle &amp; Chauffeur (${days} Day/s):</span>
          <strong>₹${baseFare.toLocaleString("en-IN")}</strong>
        </li>
        ${incGuide ? `<li style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>🗣️ Certified Multilingual Sarathi Guide:</span><strong>₹${guideCost.toLocaleString("en-IN")}</strong></li>` : ''}
        ${incPasses ? `<li style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>🎟️ Monument Passes &amp; VIP Darshan:</span><strong>₹${passesCost.toLocaleString("en-IN")}</strong></li>` : ''}
        ${incMeals ? `<li style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>🍱 Audited Regional Culinary Meals:</span><strong>₹${mealsCost.toLocaleString("en-IN")}</strong></li>` : ''}
        ${incStay && stayCost > 0 ? `<li style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>🏰 Heritage / Homestay Stay (${days - 1} Nights):</span><strong>₹${stayCost.toLocaleString("en-IN")}</strong></li>` : ''}
        <li style="display:flex; justify-content:space-between; border-top:1px dashed #CBD5E1; padding-top:6px; margin-top:6px; color:#059669; font-weight:800;">
          <span>Zero Platform Commission:</span>
          <span>₹0.00 (100% Direct to Driver)</span>
        </li>
      `;
    }
  },

  bookAtoZCustomTrip() {
    const stateSelect = document.getElementById("builder-state");
    const durationSelect = document.getElementById("builder-duration");
    const priceDisplay = document.getElementById("builder-est-price");

    const stateName = stateSelect ? stateSelect.options[stateSelect.selectedIndex].text : "All India";
    const duration = durationSelect ? `${durationSelect.value} Day(s) Complete A-to-Z Circuit` : "Complete A-to-Z Circuit";
    const totalAmount = priceDisplay ? parseInt(priceDisplay.textContent.replace(/[^0-9]/g, "")) : 2499;

    const customPkg = {
      id: "pkg-atoz-custom",
      locationId: stateSelect ? stateSelect.value : "hyderabad",
      locationName: `${stateName}, Bharat`,
      title: `Complete A-to-Z Custom Tour (${stateName})`,
      tagline: `Full-service trip planning: Doorstep AC vehicle, native chauffeur, monument passes, and 24x7 coordinator.`,
      vehicleType: "Dedicated AC Vehicle & Chauffeur",
      price: totalAmount,
      originalPrice: Math.round(totalAmount * 1.35),
      saving: Math.round(totalAmount * 0.35),
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      capacity: "Up to 4-6 Guests",
      duration: duration
    };

    this.state.selectedPackage = customPkg;
    this.state.currentStep = 1;
    this.state.bookingData.packageId = customPkg.id;
    this.state.bookingData.totalAmount = totalAmount;

    this.updateBookingModalUI();
    document.getElementById("booking-modal").classList.add("active");
  },

  // Driver Partners Showcase
  renderDriverPartners() {
    const container = document.getElementById("drivers-grid");
    if (!container) return;

    container.innerHTML = TRAVEL_DATA.driverPartners.map(d => `
      <div class="driver-card">
        <div class="driver-header">
          <img src="${d.avatar}" alt="${d.name}" class="driver-avatar" />
          <div>
            <h4 class="driver-name">${d.name}</h4>
            <div class="driver-vehicle">🚗 ${d.vehicle}</div>
            <span class="driver-badge">${d.badge}</span>
          </div>
        </div>

        <div class="driver-stats-row">
          <div>
            <div style="font-size: 0.72rem; color: #64748B;">Rating &amp; Trips</div>
            <strong>⭐ ${d.rating} (${d.trips})</strong>
          </div>
          <div>
            <div style="font-size: 0.72rem; color: #64748B;">Languages</div>
            <strong>${d.languages.slice(0, 2).join(", ")}</strong>
          </div>
        </div>

        <p class="driver-quote">"${d.quote}"</p>
      </div>
    `).join("");
  },

  // Open Data Live Metrics & Ticker
  initMetricsTicker() {
    const tickerText = document.getElementById("live-ticker-text");
    if (!tickerText) return;

    let index = 0;
    setInterval(() => {
      index = (index + 1) % TRAVEL_DATA.liveTicker.length;
      const item = TRAVEL_DATA.liveTicker[index];
      tickerText.innerHTML = `<strong>${item.user}</strong> in <strong>${item.city}</strong> just booked <em>"${item.package}"</em> (${item.amount}) • ${item.time}`;
    }, 4500);
  },

  // Interactive Driver Earnings Calculator
  initDriverCalculator() {
    const slider = document.getElementById("driver-rides-slider");
    const countDisplay = document.getElementById("driver-rides-count");
    const diffDisplay = document.getElementById("driver-monthly-diff");
    if (!slider || !countDisplay || !diffDisplay) return;

    const calculate = () => {
      const rides = parseInt(slider.value);
      countDisplay.textContent = `${rides} Rides / Day`;
      
      // Assume avg fare ₹300 per ride
      const monthlyRevenue = rides * 300 * 26; // 26 working days
      const corporateCommission = monthlyRevenue * 0.28; // 28% cut
      diffDisplay.textContent = `+ ₹${Math.round(corporateCommission).toLocaleString("en-IN")}`;
    };

    slider.addEventListener("input", calculate);
    calculate();
  },

  // Event Listeners
  initEventListeners() {
    // Hero Search Button Click
    const heroBtn = document.getElementById("btn-hero-search");
    if (heroBtn) {
      heroBtn.addEventListener("click", () => {
        const loc = document.getElementById("hero-location").value;
        const cat = document.getElementById("hero-category").value;
        this.state.activeLocation = loc;
        this.state.activeCategory = cat;

        const dateEl = document.getElementById("hero-date");
        if (dateEl && dateEl.value) this.state.bookingData.date = dateEl.value;
        const groupEl = document.getElementById("hero-group-size");
        if (groupEl && groupEl.value !== "all") this.state.bookingData.guests = groupEl.value;

        // Update category pills
        document.querySelectorAll(".pill-btn").forEach(p => {
          p.classList.toggle("active", p.getAttribute("data-category") === cat);
        });

        this.renderDestinationTabs();
        this.renderPackages();

        // Smooth scroll to catalog
        const catalog = document.getElementById("packages-catalog");
        if (catalog) {
          catalog.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Category filter pills
    document.querySelectorAll(".pill-btn").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".pill-btn").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.state.activeCategory = pill.getAttribute("data-category");
        this.renderPackages();
      });
    });

    // Search input
    const searchInput = document.getElementById("catalog-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value;
        this.renderPackages();
      });
    }

    // Sort select
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.state.activeSort = e.target.value;
        this.renderPackages();
      });
    }

    // Payment method tabs
    document.querySelectorAll(".pay-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".pay-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const method = btn.getAttribute("data-method");
        this.state.bookingData.paymentMethod = method;

        const upiView = document.getElementById("pay-view-upi");
        const cardView = document.getElementById("pay-view-card");
        const cashView = document.getElementById("pay-view-cash");

        if (upiView) upiView.style.display = method === "upi-qr" ? "block" : "none";
        if (cardView) cardView.style.display = method === "card" ? "block" : "none";
        if (cashView) cashView.style.display = method === "cash" ? "block" : "none";
      });
    });

    // My Bookings Drawer
    const myBookingsBtn = document.getElementById("btn-open-bookings");
    if (myBookingsBtn) {
      myBookingsBtn.addEventListener("click", () => this.openMyBookingsDrawer());
    }

    const closeDrawerBtn = document.getElementById("btn-close-drawer");
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener("click", () => {
        document.getElementById("bookings-drawer").classList.remove("active");
      });
    }

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".navbar");
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 20);
      }
    });

    // Navigation dropdown toggle & touch support
    const dropdownToggle = document.querySelector(".nav-dropdown-toggle");
    const dropdownItem = document.querySelector(".nav-dropdown-item");
    if (dropdownToggle && dropdownItem) {
      dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdownItem.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (!dropdownItem.contains(e.target)) {
          dropdownItem.classList.remove("active");
        }
      });

      dropdownItem.querySelectorAll(".dropdown-link").forEach(link => {
        link.addEventListener("click", () => {
          dropdownItem.classList.remove("active");
          const mobileMenu = document.querySelector(".nav-menu");
          if (mobileMenu && window.innerWidth <= 768) {
            mobileMenu.style.display = "none";
          }
        });
      });
    }
  },

  // Open My Bookings Drawer
  openMyBookingsDrawer() {
    const drawer = document.getElementById("bookings-drawer");
    const container = document.getElementById("my-bookings-list");
    if (!drawer || !container) return;

    if (this.state.bookings.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: #64748B;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🎒</div>
          <h4 style="font-weight: 800; color: #0B192C;">No Active Bookings</h4>
          <p style="font-size: 0.85rem; margin-top: 4px;">Choose a location and book an authentic direct-to-driver tour!</p>
        </div>
      `;
    } else {
      container.innerHTML = this.state.bookings.map(b => `
        <div class="booking-item-card confirmed">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
            <span style="font-family: monospace; font-weight: 800; color: #FB8500; font-size: 0.88rem;">${b.bookingId}</span>
            <span style="background: #ECFDF5; color: #059669; font-size: 0.72rem; font-weight: 800; padding: 2px 8px; border-radius: 999px;">CONFIRMED</span>
          </div>
          <h4 style="font-size: 0.98rem; font-weight: 800; color: #0B192C; line-height: 1.3;">${b.packageTitle}</h4>
          <div style="font-size: 0.82rem; color: #64748B; margin-top: 4px;">
            📅 ${b.date} at ${b.time} • 👥 ${b.guests} Guests
          </div>
          <div style="font-size: 0.82rem; color: #059669; font-weight: 700; margin-top: 6px;">
            🚗 Chauffeur: ${b.assignedDriver ? b.assignedDriver.name : 'Verified Sarathi'} (${b.assignedDriver ? b.assignedDriver.vehicle : ''})
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; padding-top: 10px; border-top: 1px solid #E2E8F0;">
            <span style="font-weight: 900; color: #0B192C;">₹${b.totalAmount.toLocaleString("en-IN")}</span>
            <button class="btn-itinerary" style="padding: 6px 12px; font-size: 0.78rem;" onclick="App.viewPassFromHistory('${b.bookingId}')">
              View Digital Pass
            </button>
          </div>
        </div>
      `).join("");
    }

    drawer.classList.add("active");
  },

  viewPassFromHistory(bookingId) {
    const booking = this.state.bookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

    this.renderBookingPass(booking);
    document.getElementById("bookings-drawer").classList.remove("active");
    this.state.currentStep = 4;
    this.updateBookingModalUI();
    document.getElementById("booking-modal").classList.add("active");
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  },

  // Print Pass Action
  printPass() {
    window.print();
  },

  // Share to WhatsApp Action
  shareWhatsApp() {
    const b = this.state.bookingData;
    const text = encodeURIComponent(`🛺 My Travel India Booking Confirmed!\nBooking ID: ${b.bookingId}\nTour: ${b.packageTitle}\nDate: ${b.date} at ${b.time}\nDriver: ${b.assignedDriver.name} (${b.assignedDriver.vehicle})\n100% Direct to Driver & Zero Commission!`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  },

  // Toast System
  showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};
