let state = { step: 1, store: null, issue: null, subIssue: null };

function render() {
  const app = document.getElementById("app");
  const crumbs = document.getElementById("crumbs");

const reportHtml = `
    <div class="contact-card" style="margin-top: 15px; border-left-color: var(--red); padding: 10px 12px;">
      <div class="contact-name" style="font-size: 14px; margin-bottom: 2px;">Report incorrect info</div>
      <div class="contact-role" style="font-size: 11px; margin-bottom: 8px;">Aldert</div>
      <div class="btn-group" style="gap: 5px;">
        <a class="call-btn" style="background:var(--red); color:#fff; padding: 8px; font-size: 13px;" href="tel:0835644582">📞 Call 0835644582</a>
        <a class="email-btn" style="padding: 8px; font-size: 13px;" href="mailto:aldert@tradeonsa.co.za">✉️ Email Support</a>
      </div>
    </div>
  `;

  // STEP 1: Select Store
  if (state.step === 1) {
    crumbs.innerHTML = `<span class="active">1. Select Store</span>`;
    app.innerHTML = `
      <p class="step-label">Select your store</p>
      <div class="store-list">
        ${STORES.map(s => `<button class="tile" onclick="setStore('${s.id}')">${s.name}</button>`).join("")}
      </div>
      ${reportHtml}
    `;
  }
  // STEP 2: Select Main Category
  else if (state.step === 2) {
    const storeName = STORES.find(s => s.id === state.store).name;
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span class="active">2. Select Category</span>`;
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back to Stores</button>
      <p class="step-label">What is broken?</p>
      <div class="grid">
        ${MENU_STRUCTURE.map(m => `
          <button class="tile" onclick="setIssue('${m.id}')">
            <span class="ic">${m.icon}</span>
            <span>${m.label}</span>
          </button>
        `).join("")}
      </div>
      ${reportHtml}
    `;
  }
  // STEP 3: Select Sub-Category (e.g., 1. MOD PC)
  else if (state.step === 3) {
    const storeName = STORES.find(s => s.id === state.store).name;
    const mainCategory = MENU_STRUCTURE.find(m => m.id === state.issue);
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span>${mainCategory.label}</span><span> › </span><span class="active">3. Select Fault Type</span>`;
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back to Categories</button>
      <p class="step-label">Select specific equipment / fault type</p>
      <div class="store-list">
        ${mainCategory.subCategories.map((sub, index) => `
          <button class="tile" onclick="setSubIssue(${index})">
            <span class="ic">${sub.icon}</span>
            <span>${sub.label}</span>
          </button>
        `).join("")}
      </div>
      ${reportHtml}
    `;
  }
  // STEP 4: Troubleshooting Guide (Screenshot 3 style with dark heading box)
  else if (state.step === 4) {
    const storeName = STORES.find(s => s.id === state.store).name;
    const mainCategory = MENU_STRUCTURE.find(m => m.id === state.issue);
    const subCategory = mainCategory.subCategories[state.subIssue];
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span>${subCategory.label}</span><span> › </span><span class="active">4. Troubleshooting</span>`;
    
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back to Fault Types</button>
      <p class="step-label">Basic Troubleshooting</p>
      
      <!-- Styled header block like Screenshot 1 -->
      <div style="background-color: #252525; border-radius: 12px; padding: 15px; text-align: center; margin-bottom: 15px; border: 1px solid #444;">
        <div style="font-size: 24px; margin-bottom: 8px;">${subCategory.icon}</div>
        <strong style="color: #ffffff; font-size: 16px;">${subCategory.label.toUpperCase()}</strong>
      </div>

      <div class="trouble-box">
        <ol>
          ${subCategory.finalChecks.map(c => `<li>${c}</li>`).join("")}
        </ol>
      </div>
      <button class="btn-action" onclick="gotoStep(5)">Still Broken? Log a Call</button>
      ${reportHtml}
    `;
  }
  // STEP 5: Support Contacts
  else if (state.step === 5) {
    const storeName = STORES.find(s => s.id === state.store).name;
    const mainCategory = MENU_STRUCTURE.find(m => m.id === state.issue);
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span>${mainCategory.label}</span><span> › </span><span class="active">5. Support Contact</span>`;
    
    // Map internal key structure to match DEFAULT_CONTACTS keys
    let contactKey = state.issue;
    if (state.issue === "gaap_tills") contactKey = "tills";

    const storeContacts = CONTACTS[state.store] || {};
    const supportData = storeContacts[contactKey] || DEFAULT_CONTACTS[contactKey];

    let supportHtml = "";
    if (!supportData) {
      supportHtml = `<div class="empty">No contact details loaded for this store yet.<br>Please contact your Area Manager.</div>`;
    } else if (supportData.type === "info") {
      supportHtml = `<div class="info-box"><strong>Important:</strong><br><br>${supportData.message}</div>`;
    } else {
      supportHtml = supportData.contacts.map(c => `
        <div class="contact-card">
          <div class="contact-name">${c.name}</div>
          <div class="contact-role">${c.role}</div>
          <div class="btn-group">
            ${c.phone ? `<a class="call-btn" href="tel:${c.phone}">📞 Call ${c.phone}</a>` : ''}
            ${c.email ? `<a class="email-btn" href="mailto:${c.email}">✉️ Email Support</a>` : ''}
          </div>
        </div>
      `).join("");
    }

    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back to Troubleshooting</button>
      <p class="step-label">${storeName} Contacts</p>
      ${supportHtml}
      ${reportHtml}
    `;
  }
}

function setStore(id) { 
  state.store = id; 
  state.step = 2; 
  render(); 
}

function setIssue(id) { 
  state.issue = id; 
  state.step = 3; 
  render(); 
}

function setSubIssue(index) { 
  state.subIssue = index; 
  state.step = 4; 
  render(); 
}

function gotoStep(num) { 
  state.step = num; 
  render(); 
}

function goBack() {
  if (state.step === 5) state.step = 4;
  else if (state.step === 4) state.step = 3;
  else if (state.step === 3) state.step = 2;
  else if (state.step === 2) state.step = 1;
  render();
}

// Initial initialization
render();
