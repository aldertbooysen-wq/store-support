"use strict";

// ======================================================
// GLOBAL DATA
// ======================================================

let STORES = [];
let ISSUES = [];
let DEFAULT_CONTACTS = {};

let state = {
  step: 1,
  store: null,
  issue: null
};

// Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz5t-HE23VKNLPgNJ4J2sxyap_P7APtrtFNWoW0ISVOqfi6HuottFNSltfyZa86FcI-/exec";

// Use corsproxy.io to retrieve the Google Apps Script data
const DATA_URL =
  "https://corsproxy.io/?url=" +
  encodeURIComponent(GOOGLE_SCRIPT_URL);


// ======================================================
// INITIALISE APPLICATION
// ======================================================

async function initApp() {
  const app = document.getElementById("app");
  const crumbs = document.getElementById("crumbs");

  if (!app || !crumbs) {
    console.error(
      'The required elements with IDs "app" and "crumbs" were not found.'
    );
    return;
  }

  crumbs.innerHTML = "";

  app.innerHTML = `
    <div class="empty">
      Loading store information...
    </div>
  `;

  try {
    console.log("Requesting data from:", DATA_URL);

    const response = await fetch(DATA_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json"
      }
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(
        `Data request failed: ${response.status} ${response.statusText}`
      );
    }

    // Read the response as text first so that a useful error
    // can be displayed if HTML is returned instead of JSON.
    const responseText = await response.text();

    if (!responseText.trim()) {
      throw new Error("The data server returned an empty response.");
    }

    let data;

    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Invalid server response:", responseText);

      throw new Error(
        "The server did not return valid JSON. Response: " +
          responseText.substring(0, 200)
      );
    }

    if (data.error) {
      throw new Error(
        data.message || "Google Apps Script returned an error."
      );
    }

    if (!Array.isArray(data.stores)) {
      throw new Error("The Stores information is missing or invalid.");
    }

    if (!Array.isArray(data.issues)) {
      throw new Error("The Issues information is missing or invalid.");
    }

    if (!Array.isArray(data.default_contacts)) {
      throw new Error(
        "The DefaultContacts information is missing or invalid."
      );
    }

    STORES = data.stores.filter(function (store) {
      return store && store.id && store.name;
    });

    ISSUES = data.issues.filter(function (issue) {
      return issue && issue.id && issue.label;
    });

