// Globale data veranderlikes
let STORES = [];
let ISSUES = [];
let DEFAULT_CONTACTS = {};
let state = { step: 1, store: null, issue: null };

// Inisiële funksie om data te gaan haal
async function initApp() {
  // Hierdie URL gebruik 'n proxy om CORS-blokkasie te omseil
  const url = "https://corsproxy.io/?https://script.google.com/macros/s/AKfycbz5t-HE23VKNLPgNJ4J2sxyap_P7APtrtFNWoW0ISVOqfi6HuottFNSltfyZa86FcI-/exec"; 
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    STORES = data.stores;
    ISSUES = data.issues;
    
    // Omskep die kontakte na die formaat wat jou app verwag
    DEFAULT_CONTACTS = data.default_contacts.reduce((acc, curr) => {
      acc[curr.id] = JSON.parse(curr.data);
      return acc;
    }, {});
    
    render(); 
  } catch (err) {
    console.error("Kon nie data laai nie:", err);
    document.getElementById("app").innerHTML = "<p style='color:red;'>Kon nie data laai nie. Kontak IT.</p>";
  }
}

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

  if(state.step === 1){
    crumbs.innerHTML = `<span class="active">1. Choose Store</span>`;
    app.innerHTML = `
      <p class="step-label">Select your store</p>
      <div class="store-list">
        ${STORES.map(s => `<button class="tile" onclick="setStore('${s.id}')">${s.name}</button>`).join("")}
      </div>
      ${reportHtml}
    `;
  }
  else if(state.step === 2){
    const store = STORES.find(s => s.id === state.store);
    const storeName = store ? store.name : "Unknown";
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span class="active">2. Select Fault</span>`;
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back to Stores</button>
      <p class="step-label">What is broken?</p>
      <div class="grid">
        ${ISSUES.map(i => `
          <button class="tile" onclick="setIssue('${i.id}')">
            <span class="ic">${i.icon}</span>
            <span>${i.label}</span>
          </button>
        `).join("")}
      </div>
      ${reportHtml}
    `;
  }
  else if(state.step === 3){
    const store = STORES.find(s => s.id === state.store);
    const storeName = store ? store.name : "Unknown";
    const issue = ISSUES.find(i => i.id === state.issue);
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span>${issue.label}</span><span> › </span><span class="active">3. Basic Troubleshooting</span>`;
    
    const checkList = typeof issue.checks === 'string' ? JSON.parse(issue.checks) : issue.checks;
    
    app.innerHTML = `
      <button class="btn-back" onclick="goBack()">← Back to Faults</button>
      <p class="step-label">Basic Troubleshooting</p>
      <div class="trouble-box">
        <ol>
          ${checkList.map(c => `<li>${c}</li>`).join("")}
        </ol>
      </div>
      <button class="btn-action" onclick="gotoStep(4)">Still Broken? Log a Call</button>
      ${reportHtml}
    `;
  }
  else if(state.step === 4){
    const store = STORES.find(s => s.id === state.store);
    const storeName = store ? store.name : "Unknown";
    const issue = ISSUES.find(i => i.id === state.issue);
    crumbs.innerHTML = `<span>${storeName}</span><span> › </span><span>${issue.label}</span><span> › </span><span class="active">4. Support Contact</span>`;
    
    const supportData = DEFAULT_CONTACTS[state.issue];

    let supportHtml = "";
    if(!supportData){
      supportHtml = `<div class="empty">No contact details loaded for this store yet.</div>`;
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

function setStore(id){ state.store = id; state.step = 2; render(); }
function setIssue(id){ state.issue = id; state.step = 3; render(); }
function gotoStep(num){ state.step = num; render(); }
function goBack(){
  if(state.step === 4) state.step = 3;
  else if(state.step === 3) state.step = 2;
  else if(state.step === 2) state.step = 1;
  render();
}

// Begin die program
initApp();
