let state = { step: 1, store: null, issue: null, subIssue: null };

function render(){
  const app = document.getElementById("app");
  const crumbs = document.getElementById("crumbs");

  const reportHtml = `
    <div class="contact-card" style="margin-top: 25px; border-left-color: var(--red);">
      <div class="contact-name">Report incorrect info</div>
      <div class="contact-role">Aldert</div>
      <div class="btn-group">
        <a class="call-btn" style="background:var(--red); color:#fff;" href="tel:0835644582">📞 Call 0835644582</a>
        <a class="email-btn" href="mailto:aldert@tradeonsa.co.za">✉️ Email Support</a>
      </div>
    </div>
  `;

  // Step 1: Select Store
  if(state.step === 1){
    crumbs.innerHTML = `<span class="active">1. Select Store</span>`;
    app.innerHTML = `
      <p class="step-label">Select your store</p>
      <div class="store-list">
        ${STORES && STORES.length > 0 
          ? STORES.map(s => `<button class="tile" onclick="setStore('${s.id}')">${s.name}</button>`).join("") 
          : '<p>No stores found.</p>'}
      </div>
      ${reportHtml}
    `;
  }
  // Step 2: Select Category
  else if(state.step === 2){
    const store = STORES.find(s => s.id === state.store);
    crumbs.innerHTML = `<span>${store ? store.name : ''}</span><span> › </span><span class="active">2. Select Category</span>`;
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back</button>
      <p class="step-label">What category?</p>
      <div class="grid">
        ${ISSUES.map(i => `
          <button class="tile" onclick="setIssue('${i.id}')">
            <span class="ic">${i.icon}</span>
            <span>${i.label}</span>
          </button>
        `).join("")}
      </div>
    `;
  }
  // Step 3: Select Sub-Issue
  else if(state.step === 3){
    const issue = ISSUES.find(i => i.id === state.issue);
    crumbs.innerHTML = `<span>...</span><span> › </span><span class="active">3. Select Issue</span>`;
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back</button>
      <p class="step-label">${issue.label}</p>
      <div class="grid">
        ${issue.checks.map((c, index) => `
          <button class="tile" onclick="setSubIssue(${index})">
            <span>${c.split('<h4')[1].split('</h4>')[0].split('>')[1]}</span>
          </button>
        `).join("")}
      </div>
    `;
  }
  // Step 4: Troubleshooting
  else if(state.step === 4){
    const issue = ISSUES.find(i => i.id === state.issue);
    const sub = issue.checks[state.subIssue];
    crumbs.innerHTML = `<span class="active">4. Troubleshooting</span>`;
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back</button>
      <div class="trouble-box">${sub}</div>
      <button class="btn-action" onclick="gotoStep(5)">Still Broken? Log a Call</button>
    `;
  }
  // Step 5: Contacts
  else if(state.step === 5){
    const supportData = DEFAULT_CONTACTS[state.issue];
    let supportHtml = supportData ? supportData.contacts.map(c => `
      <div class="contact-card">
        <div class="contact-name">${c.name}</div>
        <div class="contact-role">${c.role}</div>
        <div class="btn-group">
          ${c.phone ? `<a class="call-btn" href="tel:${c.phone}">📞 Call ${c.phone}</a>` : ''}
          ${c.email ? `<a class="email-btn" href="mailto:${c.email}">✉️ Email Support</a>` : ''}
        </div>
      </div>
    `).join("") : `<div class="empty">No contact details found.</div>`;

    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back</button>
      ${supportHtml}
    `;
  }
}

// Navigation Functions
function setStore(id){ state.store = id; state.step = 2; render(); }
function setIssue(id){ state.issue = id; state.step = 3; render(); }
function setSubIssue(index){ state.subIssue = index; state.step = 4; render(); }
function gotoStep(num){ state.step = num; render(); }
function goBack(){ state.step--; render(); }

// Initialize
render();
