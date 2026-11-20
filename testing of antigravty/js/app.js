/**
 * MAISON VENDÔME - LUXURY E-COMMERCE ENGINE
 * Handles currency conversion, interactive vault filtering,
 * shopping bag management, quick-view inspection, and VIP appointments.
 */

// --- PRODUCT CATALOGUE (THE MASTERPIECE VAULT) ---
const PRODUCTS = [
    {
        id: "astral-tourbillon",
        name: "The Celestial Astral Tourbillon",
        category: "timepieces",
        categoryLabel: "Haute Horlogerie",
        priceUSD: 145000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
        badge: "Limited Edition (25 Pcs)",
        shortDesc: "Manual-wind skeleton tourbillon with celestial star chart complication.",
        specs: {
            "Material": "18k Honey Gold & Grade 5 Titanium",
            "Movement": "Calibre MV-883 Tourbillon Volant",
            "Power Reserve": "72 Hours Hand-Finished",
            "Diameter": "41.5mm • 9.8mm Profile",
            "Provenance": "Handcrafted Vallée de Joux, Switzerland"
        }
    },
    {
        id: "sovereign-riviere",
        name: "The Sovereign Diamond Rivière",
        category: "jewelry",
        categoryLabel: "High Jewelry",
        priceUSD: 215000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
        badge: "Unique Creation (1 of 1)",
        shortDesc: "Graduated collar of 54 D-Flawless round brilliant and cushion diamonds.",
        specs: {
            "Total Carat": "36.42 Carats Total Weight",
            "Color & Clarity": "D Color • Flawless (Type IIa)",
            "Metal": "Platinum 950 Hand-Drawn Mountings",
            "Certification": "GIA Master Dossiers Included",
            "Atelier": "Place Vendôme, Paris"
        }
    },
    {
        id: "parfum-oud",
        name: "Oud Impérial & Rose Noire",
        category: "parfums",
        categoryLabel: "Extrait de Parfum",
        priceUSD: 1250,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop",
        badge: "Pure Extrait 38%",
        shortDesc: "Vintage Cambodian agarwood aged 20 years, layered with Grasse centifolia rose.",
        specs: {
            "Flacon": "Hand-blown Baccarat Crystal 100ml",
            "Key Notes": "Aged Oud, Bulgarian Damask Rose, Grey Ambergris",
            "Concentration": "38% Haute Parfumerie Extrait",
            "Maceration": "Matured in Limousin Oak 18 Months",
            "Origin": "Grasse, French Riviera"
        }
    },
    {
        id: "monopoussoir-chronograph",
        name: "Vendôme Chronographe Monopoussoir",
        category: "timepieces",
        categoryLabel: "Haute Horlogerie",
        priceUSD: 88000,
        image: "https://images.unsplash.com/photo-1547996160-71dfabb1a7cf?q=80&w=1974&auto=format&fit=crop",
        badge: "Numbered Atelier Piece",
        shortDesc: "Single-button column wheel chronograph with grand feu enamel dial.",
        specs: {
            "Case": "18k White Gold (40mm)",
            "Dial": "Grand Feu Kiln-Fired Ivory Enamel",
            "Frequency": "21,600 vph with Breguet Overcoil",
            "Strap": "Hand-stitched Mississippi Alligator",
            "Certification": "Geneva Poinçon Seal Certified"
        }
    },
    {
        id: "empress-emerald-ring",
        name: "The Empress Colombian Emerald Ring",
        category: "jewelry",
        categoryLabel: "High Jewelry",
        priceUSD: 175000,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        badge: "Historical Provenance",
        shortDesc: "An 8.42ct untreated Muzo emerald flanked by tapered diamond bullets.",
        specs: {
            "Center Gem": "8.42ct Muzo Emerald (No Oil/Treatment)",
            "Side Stones": "1.80ct Tapered Baguette Diamonds (D-VVS1)",
            "Mount": "18k Yellow Gold & Platinum Crown",
            "Report": "SSEF & Gübelin Gem Lab Certificates",
            "Crafting Time": "140 Hours Master Lapidary"
        }
    },
    {
        id: "alligator-briefcase",
        name: "L'Ambassadeur Matte Alligator Case",
        category: "bespoke",
        categoryLabel: "Rare Accessories",
        priceUSD: 42000,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
        badge: "Bespoke Order",
        shortDesc: "Individually selected matte Mississippiensis leather with 24k gold hardware.",
        specs: {
            "Leather": "Grade 1 CITES-Certified Alligator",
            "Hardware": "Hand-chiseled Solid Brass with 24k Gold Vermeil",
            "Interior": "French Goat Suede with Hidden Vault Pocket",
            "Dimensions": "42cm x 30cm x 8cm",
            "Artisan": "Single Leather Master (Geneva)"
        }
    },
    {
        id: "parfum-ambre",
        name: "Ambre Doré Grand Cru",
        category: "parfums",
        categoryLabel: "Extrait de Parfum",
        priceUSD: 980,
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1974&auto=format&fit=crop",
        badge: "Reserve Privée",
        shortDesc: "Golden Amber resin, Bourbon Vanilla infusion, and wild Somali Frankincense.",
        specs: {
            "Volume": "100ml Pure Crystal",
            "Key Notes": "Amber Resin, Madagascar Bourbon Vanilla, Frankincense",
            "Concentration": "32% Pure Parfum",
            "Packaging": "Velvet-lined lacquered piano wood casket",
            "Origin": "Grasse, France"
        }
    },
    {
        id: "emerald-collana",
        name: "The Imperial Emerald Collana",
        category: "jewelry",
        categoryLabel: "High Jewelry",
        priceUSD: 380000,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
        badge: "Masterpiece of the Maison",
        shortDesc: "14.85-carat untreated Muzo Colombian emerald ensconced in marquise diamonds.",
        specs: {
            "Center Emerald": "14.85ct Muzo Emerald (Minor Cedar Oil Only)",
            "Diamond Accents": "42.10ct D-F Color, VVS+ Clarity",
            "Structure": "Platinum 950 Articulated Linkage",
            "Provenance": "Unveiled at Biennale des Antiquaires",
            "Documentation": "Monograph dossier and Gübelin Gem Pass"
        }
    }
];

// --- STATE MANAGEMENT ---
let cart = [];
let wishlist = new Set();
let currentCurrency = "USD";
let activeFilter = "all";

const CURRENCIES = {
    USD: { symbol: "$", rate: 1.0, format: (num) => `$${num.toLocaleString('en-US')}` },
    EUR: { symbol: "€", rate: 0.92, format: (num) => `€${Math.round(num * 0.92).toLocaleString('en-US')}` },
    GBP: { symbol: "£", rate: 0.79, format: (num) => `£${Math.round(num * 0.79).toLocaleString('en-US')}` },
    AED: { symbol: "AED ", rate: 3.67, format: (num) => `AED ${Math.round(num * 3.67).toLocaleString('en-US')}` }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initGenevaClock();
    renderProducts();
    setupEventListeners();
    updateCartUI();
});

// --- GENEVA LIVE CLOCK ---
function initGenevaClock() {
    function updateTime() {
        const clockEl = document.getElementById('geneva-clock');
        if (!clockEl) return;
        
        // Geneva is Central European Time (UTC+1, or UTC+2 in summer)
        const now = new Date();
        const options = {
            timeZone: 'Europe/Zurich',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        clockEl.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
    }
    updateTime();
    setInterval(updateTime, 1000);
}

// --- CURRENCY CONVERTER ---
function formatPrice(usdAmount) {
    const cur = CURRENCIES[currentCurrency] || CURRENCIES.USD;
    return cur.format(usdAmount);
}

function updateAllPricesInDOM() {
    document.querySelectorAll('.price-display').forEach(el => {
        const base = parseFloat(el.getAttribute('data-base-price'));
        if (!isNaN(base)) {
            el.textContent = formatPrice(base);
        }
    });
}

// --- RENDER PRODUCTS GRID ---
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filtered = activeFilter === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === activeFilter);

    grid.innerHTML = filtered.map(item => `
        <div class="product-card border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group">
            
            <!-- Image & Badges -->
            <div class="relative aspect-square overflow-hidden bg-noir-deep">
                <img src="${item.image}" 
                     alt="${item.name}" 
                     loading="lazy"
                     class="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700">
                
                <div class="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span class="bg-noir/90 backdrop-blur-md border border-gold/30 text-gold-champagne text-[10px] uppercase tracking-widest px-2.5 py-1 font-cinzel">
                        ${item.badge}
                    </span>
                </div>

                <button onclick="toggleWishlist('${item.id}')" 
                        class="wishlist-btn-${item.id} absolute top-3 right-3 w-9 h-9 rounded-full bg-noir/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold transition-colors"
                        title="Add to Wishlist">
                    <i data-lucide="heart" class="w-4 h-4 ${wishlist.has(item.id) ? 'fill-gold text-gold' : ''}"></i>
                </button>

                <!-- Quick Inspect Overlay Button -->
                <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-noir via-noir/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <button onclick="quickViewProduct('${item.id}')" 
                            class="w-full py-2.5 bg-noir-surface/90 hover:bg-noir border border-gold/40 text-gold-champagne text-[11px] uppercase tracking-widest font-cinzel transition-all">
                        Examine Details
                    </button>
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 flex flex-col flex-1 justify-between">
                <div>
                    <div class="text-[10px] uppercase tracking-opulent text-gold/80 font-cinzel mb-1.5">
                        ${item.categoryLabel}
                    </div>
                    <h3 class="font-cinzel text-lg text-white font-medium group-hover:text-gold transition-colors leading-snug">
                        ${item.name}
                    </h3>
                    <p class="font-serif italic text-xs text-gray-400 mt-2 line-clamp-2">
                        ${item.shortDesc}
                    </p>
                </div>

                <div class="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                        <span class="text-[9px] uppercase tracking-widest text-gray-500 block">Acquisition</span>
                        <span class="font-cinzel text-base text-gold font-bold price-display" data-base-price="${item.priceUSD}">
                            ${formatPrice(item.priceUSD)}
                        </span>
                    </div>

                    <button onclick="addToBag('${item.id}')" 
                            class="px-5 py-2.5 bg-gradient-to-r from-gold-rich to-gold hover:brightness-110 text-noir font-cinzel font-bold text-[10px] uppercase tracking-widest transition-all shadow-sm">
                        Acquire Piece
                    </button>
                </div>
            </div>

        </div>
    `).join('');

    lucide.createIcons();
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Currency Selector
    const currencySelector = document.getElementById('currency-selector');
    if (currencySelector) {
        currencySelector.addEventListener('change', (e) => {
            currentCurrency = e.target.value;
            renderProducts();
            updateAllPricesInDOM();
            updateCartUI();
            showToast(`Currency converted to ${currentCurrency}`);
        });
    }

    // Vault Filter Tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => {
                t.classList.remove('active-tab');
                t.classList.add('inactive-tab');
            });
            tab.classList.remove('inactive-tab');
            tab.classList.add('active-tab');

            activeFilter = tab.getAttribute('data-category');
            renderProducts();
        });
    });

    // Cart Drawer triggers
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartDrawer) {
        cartDrawer.addEventListener('click', (e) => {
            if (e.target === cartDrawer) closeCart();
        });
    }

    // Mobile Navigation triggers
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMobileNav = document.getElementById('close-mobile-nav');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavDrawer.classList.remove('opacity-0', 'pointer-events-none');
            document.getElementById('mobile-nav-content').classList.remove('-translate-x-full');
        });
    }
    if (closeMobileNav) {
        closeMobileNav.addEventListener('click', closeMobileMenu);
    }
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Search Modal triggers
    const searchBtn = document.getElementById('search-btn');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => searchInput && searchInput.focus(), 100);
        });
    }
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', () => {
            searchModal.classList.add('opacity-0', 'pointer-events-none');
        });
    }
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim().toLowerCase();
                searchModal.classList.add('opacity-0', 'pointer-events-none');
                executeSearch(query);
            }
        });
    }

    // Search tags
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const query = tag.textContent.trim().toLowerCase();
            if (searchInput) searchInput.value = query;
            searchModal.classList.add('opacity-0', 'pointer-events-none');
            executeSearch(query);
        });
    });

    // VIP Concierge Nav button
    const conciergeNavBtn = document.getElementById('concierge-nav-btn');
    if (conciergeNavBtn) {
        conciergeNavBtn.addEventListener('click', () => openBookingModal());
    }
}

function closeMobileMenu() {
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileNavContent = document.getElementById('mobile-nav-content');
    if (mobileNavContent) mobileNavContent.classList.add('-translate-x-full');
    setTimeout(() => {
        if (mobileNavDrawer) mobileNavDrawer.classList.add('opacity-0', 'pointer-events-none');
    }, 200);
}

// --- SEARCH LOGIC ---
function executeSearch(query) {
    if (!query) return;
    const matched = PRODUCTS.find(p => 
        p.name.toLowerCase().includes(query) || 
        p.shortDesc.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query)
    );

    if (matched) {
        quickViewProduct(matched.id);
        showToast(`Located Masterpiece: "${matched.name}"`);
    } else {
        const vault = document.getElementById('curated-vault');
        if (vault) vault.scrollIntoView({ behavior: 'smooth' });
        showToast(`Refining vault view for "${query}"`);
    }
}

// --- CART & VAULT MANAGEMENT ---
function addToBag(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            priceUSD: product.priceUSD,
            image: product.image,
            badge: product.badge,
            quantity: 1
        });
    }

    updateCartUI();
    openCart();
    showToast(`Added to Vault: ${product.name}`);
}

function removeFromBag(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromBag(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const cartSubtotalEl = document.getElementById('cart-subtotal');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountEl) cartCountEl.textContent = totalCount;

    const subtotalUSD = cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);
    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotalUSD);

    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="py-16 text-center">
                <i data-lucide="package-open" class="w-10 h-10 text-gold/40 mx-auto mb-3"></i>
                <p class="font-cinzel text-sm text-gray-400 uppercase tracking-widest">Your Private Vault is Empty</p>
                <p class="font-serif italic text-xs text-gray-500 mt-1">Select from our rare horological and fine jewelry editions.</p>
            </div>
        `;
    } else {
        cartItemsEl.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 bg-noir-card p-3 border border-white/5">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover border border-gold/20">
                <div class="flex-1 min-w-0">
                    <h4 class="font-cinzel text-xs text-white truncate font-medium">${item.name}</h4>
                    <span class="text-[10px] text-gray-400 block">${item.badge}</span>
                    <span class="font-cinzel text-xs text-gold font-bold mt-1 block">${formatPrice(item.priceUSD)}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 border border-white/10 hover:border-gold flex items-center justify-center text-xs text-gray-300">-</button>
                    <span class="text-xs font-mono text-white">${item.quantity}</span>
                    <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 border border-white/10 hover:border-gold flex items-center justify-center text-xs text-gray-300">+</button>
                </div>
                <button onclick="removeFromBag('${item.id}')" class="text-gray-500 hover:text-red-400 p-1" title="Remove item">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
    }

    lucide.createIcons();
}

function openCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const panel = document.getElementById('cart-drawer-panel');
    if (cartDrawer && panel) {
        cartDrawer.classList.remove('opacity-0', 'pointer-events-none');
        panel.classList.remove('translate-x-full');
    }
}

function closeCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const panel = document.getElementById('cart-drawer-panel');
    if (panel) panel.classList.add('translate-x-full');
    setTimeout(() => {
        if (cartDrawer) cartDrawer.classList.add('opacity-0', 'pointer-events-none');
    }, 250);
}

function initiateCheckout() {
    if (cart.length === 0) {
        showToast("Your private vault is currently empty.");
        return;
    }
    closeCart();
    openBookingModal("Checkout Consultation & Armored Transit Protocol");
    showToast("Opening Secure Client Concierge Protocol...");
}

// --- WISHLIST MANAGEMENT ---
function toggleWishlist(productId) {
    if (wishlist.has(productId)) {
        wishlist.delete(productId);
        showToast("Removed from Private Wishlist");
    } else {
        wishlist.add(productId);
        showToast("Saved to Private Wishlist");
    }

    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.size;
        wishlistCount.classList.toggle('hidden', wishlist.size === 0);
    }

    renderProducts();
}

// --- QUICK VIEW MODAL ---
function quickViewProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');

    const specsHtml = Object.entries(product.specs).map(([key, val]) => `
        <div class="flex justify-between py-1.5 border-b border-white/5 text-xs">
            <span class="text-gray-400 uppercase tracking-widest text-[10px]">${key}</span>
            <span class="text-white font-serif font-light text-right pl-4">${val}</span>
        </div>
    `).join('');

    content.innerHTML = `
        <div class="w-full md:w-1/2 bg-noir-deep p-6 flex items-center justify-center relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-80 md:h-[420px] object-cover border border-gold/30">
            <span class="absolute top-8 left-8 bg-noir/90 border border-gold/40 text-gold text-[10px] tracking-widest uppercase px-3 py-1 font-cinzel">
                ${product.badge}
            </span>
        </div>
        <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
                <span class="text-xs uppercase tracking-opulent text-gold font-cinzel">${product.categoryLabel}</span>
                <h3 class="font-cinzel text-2xl text-white font-bold mt-1 mb-2">${product.name}</h3>
                <div class="font-cinzel text-2xl text-gold font-bold mb-4">${formatPrice(product.priceUSD)}</div>
                <p class="font-serif italic text-gray-300 text-sm leading-relaxed mb-6">${product.shortDesc}</p>
                
                <div class="mb-6">
                    <h5 class="text-[10px] uppercase tracking-widest text-gold mb-2 font-cinzel">Technical Dossier</h5>
                    <div class="space-y-1">
                        ${specsHtml}
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3 pt-4 border-t border-white/10">
                <button onclick="addToBag('${product.id}'); closeQuickView();" 
                        class="w-full py-3.5 bg-gradient-to-r from-gold-rich to-gold hover:brightness-110 text-noir font-cinzel font-bold text-xs uppercase tracking-widest transition-all">
                    Acquire for Private Vault
                </button>
                <button onclick="closeQuickView(); openBookingModal('${product.name}');" 
                        class="w-full py-3.5 border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold-champagne font-cinzel text-xs uppercase tracking-widest transition-all">
                    Request Atelier Viewing
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    lucide.createIcons();
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) modal.classList.add('opacity-0', 'pointer-events-none');
}

// --- BOOKING MODAL ---
function openBookingModal(itemTitle = '') {
    const modal = document.getElementById('booking-modal');
    const input = document.getElementById('booking-piece-interest');
    if (input && itemTitle) {
        input.value = itemTitle;
    }
    if (modal) modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.add('opacity-0', 'pointer-events-none');
}

function submitBooking() {
    closeBookingModal();
    showToast("Audience Request Transmitted. A Senior Curator will contact you shortly.");
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput && emailInput.value) {
        emailInput.value = '';
        showToast("Welcome to the Circle of Patronage. Invitation dispatched.");
    }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-enter pointer-events-auto bg-noir-card/95 border border-gold/40 backdrop-blur-md text-white px-5 py-3 rounded-none shadow-2xl flex items-center space-x-3 text-xs tracking-wider font-serif';
    toast.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}
