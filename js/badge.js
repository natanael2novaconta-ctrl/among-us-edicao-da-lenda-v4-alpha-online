(() => {
  // src/badge/assets/base44_text.png
  var base44_text_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABECAMAAAB+vJpyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAEVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////Up1zwgAAABZ0Uk5TABAgMEBQX2BvcH+Aj5CfoK+wv8/f741pbhwAAAVHSURBVHja7ZvtbuwoDECNQ5ZNSZgsAd7/Ufeq6i0Ex3Y6I1WJNOdv3RlyGvAHKrx58+bNmzdvfg0v4OwAN8P5BnH16FsM/KUoxNnCffi3tDgQCKUFqxCd5OAmYCFCdHVUiE5CuAXptBDMohCdD7gBczktJBVVyP2NuNLhBHWaEB0LFwcTESKoe11IMnBtYulxvDpdiI6HS/NRCE5UpwvJqaX05ItnXIoT1elCPOwY3HqfU8QkTQhVpwtRNtsE1yUUTQhVpwtR6pdwi5I9KUJCeUUI+FKJcFUwVx+eCOHULVETomy4dIOSPSMRwqqDZ4QAEXLtjDuBLCQ1Dp4TkoQtg25ev/Jziqu30EAD81fcZIHFjDVwdginsO0xR4Rw6jw8JySXb/6DFvORSs/qgEIDU7CHNlzsAyf8UcmeUBYytn/d54QYJu1iODk7MXMuB8SBHneHgQF/kHFHIEJYdU8KsaUyCIuvzAYabBbjKsNWTimWd4EsZO1+pAqR9ad2EQKbOReYEFTD+uQB2wUSIZy6BX4shD6Q0x6THr5O6Z9PfmI4V7IjEcKqM88JMfNh0h2KwlSTvkjQfOjvyEyWT4Rw6nQhwba4OZaGjMz4bQuLDzHvYs1BlZw+42i7SA3nLcat7Bj1Sc8KVAirThWiM7a5q/J9oeESedewlT0cxcWDdusrJaNLRLGccRkhVF2E14Vke9wdWag8+u3lDncjbqVi+gFnsjVwUadTkTw8FUJLdnxdSESoZG6ZW/f5ayuoYvJ+ydhlqIonr4iQNmQhpAc+LUQtjpCdoTk2zQdo8XujgZ/bRuKeTRusEKruJSFUiWWbG9N968YEDumbpeu3+N40itMrBFGIJerOC9EzH35j2M44dN9nz7ZmfG1phJrRAyuEqntJCNneEtj1ges+dzAsjLY+ozl+0hOBF0LV6UJeN4LjFLbc59OptOQ4j4OYKbLoeOEnPcgJEdXpQrawY41Zr6CNneaYS0+sm0Gz0k7/KN1Lx6QNUQgWRt0TvYx9lBZLhzlCO1O/kFqx5B1QSVzGDSAKMaw6XYh265daG1Hv72xhSQGBjdGFjCRtsEJmou5pIbSutqRbF4WA1/OWLWdhGzVRiCPqXhBCVrzU6lsVohvZ8FkhWE7hyAo0BCGV3L+2Qy5nhYBLYt66pZC1VAzrI62LOxAC+BD0zbcU8igV/D5mK3kLkzXwh+N8b9yaCoMFvLmQbroVlxHhCyqkMox+3QplAUN+ieOSWwb3N1cWGtRnM3Z6dFZy+3npJkJSqRgYSc6R+2Cl2MPWN95CiN3/wsKvP+yFYMWwxZ6FSVoAVsxVhHQz0JV9C3AfCCv7Lk3MqZqN8JH2GkJM2J+BEFkhWyek2Rob+5x2Vy/O/IwwQwvyLHshBnmaFVv8RBNiPnLf3a1ctx5KJ2Ri20K7ux4d2QuY4dRllVS6S+ile/Q7wpoO+qsHc/m9kUrV0GtL6q5uSmrkn0yU/pqQ83tyOlr9MOeD0j0eX1mbWZib1EAbySzmakISuWXLq3duCunMgGibLP5hnDO5L166cUnwYe0M41WE0Nc+ChFkQKSQajcvM8H1hORBm+gkR+8oZbBWJiIeriOEHosLa8xWIcKDkgWrgR6uJ2Qx9VDcGB9AhIgPmh1UzEOKu5YQ2sUtzPUvFQLgtftibZS0IlxLSI6TASCLp8aOhQA+EqtYVZKDBfhdIVFgDd4NBo5wTV5Mi4VPhviXuWtwt04xwiF2aQNTcAZ+jIvfaDKXGmrgdYZx8t670ZyMdv4Pk7MIEsaO02fcYN7/Zf7mzfX5H+WZeZXgxfH6AAAAAElFTkSuQmCC";

  // ../../packages/design-system/src/tokens/fonts/dazzed-semibold.woff2
  var dazzed_semibold_default = "./badge-assets/dazzed-semibold-YFEF7RB5.woff2";

  // ../../packages/design-system/src/tokens/fonts/wix-madefor-display-latin.woff2
  var wix_madefor_display_latin_default = "./badge-assets/wix-madefor-display-latin-OA2V2T55.woff2";

  // ../../packages/design-system/src/tokens/fonts/wix-madefor-text-latin.woff2
  var wix_madefor_text_latin_default = "./badge-assets/wix-madefor-text-latin-YKSJJ765.woff2";

  // src/badge/badge-fonts.ts
  var FONT_STYLE_ID = "base44-badge-fonts";
  function ensureBadgeFonts(assetBaseUrl) {
    if (document.getElementById(FONT_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = FONT_STYLE_ID;
    style.textContent = `
    @font-face { font-family: "Base44 Badge Brand"; font-weight: 500 700; font-display: swap;
      src: url("${new URL(dazzed_semibold_default, assetBaseUrl)}") format("woff2"); }
    @font-face { font-family: "Base44 Badge Text"; font-weight: 400 800; font-display: swap;
      src: url("${new URL(wix_madefor_text_latin_default, assetBaseUrl)}") format("woff2"); }
    @font-face { font-family: "Base44 Badge Titles"; font-weight: 400 800; font-display: swap;
      src: url("${new URL(wix_madefor_display_latin_default, assetBaseUrl)}") format("woff2"); }
  `;
    document.head.appendChild(style);
  }

  // src/badge/modal-styles.ts
  var MODAL_CSS = `
  :host { all: initial; }
  *, *::before, *::after { box-sizing: border-box; }
  .overlay {
    --surface: #ffffff;
    --text: #0f0e0e;
    --text-secondary: #5d5d5d;
    --primary: #0f0e0e;
    --primary-hover: #3a3939;
    --primary-active: #5d5d5d;
    --primary-text: #fcfcfc;
    --secondary-hover: #e9e6e0;
    --secondary-active: #ddd8d2;
    --border-strong: #c9c3bc;
    --border-strong-focus: #99928b;
    --border: #ddd8d2;
    --footnote: #f5f5f4;
    --focus-ring: #3b51e5;
    --scrim: #0f0e0e4d;
    --shadow: 0 20px 30px 0 rgba(15, 14, 14, 0.1), 0 0 4px 0 rgba(15, 14, 14, 0.1);
    --font-brand: "Base44 Badge Brand", system-ui, sans-serif;
    --font-body: "Base44 Badge Text", system-ui, sans-serif;
    --font-titles: "Base44 Badge Titles", system-ui, sans-serif;

    position: fixed;
    inset: 0;
    z-index: 1000000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
    background: var(--scrim);
    backdrop-filter: blur(4px);
    font-family: var(--font-body);
    color-scheme: light;
    animation: fade-in 0.2s ease-out;
  }

  @media (prefers-color-scheme: dark) {
    .overlay {
      --surface: #161616;
      --text: #ebebeb;
      --text-secondary: #c0c0c0;
      --primary: #ebebeb;
      --primary-hover: #c0c0c0;
      --primary-active: #929292;
      --primary-text: #252424;
      --secondary-hover: #5d5a57;
      --secondary-active: #3d3c3a;
      --border-strong: #5d5a57;
      --border: #3d3c3a;
      --footnote: #1b1c1e;
      --focus-ring: #7e90f5;
      --scrim: #ffffff1a;
      --shadow: none;
      color-scheme: dark;
    }
  }

  .panel {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 512px;
    max-width: 100%;
    max-height: min(85dvh, calc(100dvh - 96px));
    overflow-y: auto; /* the whole card scrolls, so the actions stay reachable on short viewports */
    border-radius: 8px;
    background: var(--surface);
    color: var(--text);
    box-shadow: var(--shadow);
    outline: none;
    animation: scale-in 0.2s ease-out;
  }

  /* The cover is a fixed grey illustration in both themes, so the title and close on it stay dark. */
  .image { position: relative; flex-shrink: 0; width: 100%; aspect-ratio: 512 / 280; overflow: clip; background: #c4c4c4; }
  .image img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .title {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: #0f1e24;
    font-family: var(--font-brand);
    font-weight: 560;
    font-size: 34px;
    line-height: 43px;
    letter-spacing: -0.5px;
    text-align: center;
  }

  .content { display: flex; flex-direction: column; gap: 24px; padding: 28px 40px; }
  .message { display: flex; flex-direction: column; gap: 6px; text-align: center; }
  .heading { margin: 0; font: 600 20px/24px var(--font-titles); letter-spacing: -0.1px; }
  .description { margin: 0; font-size: 14px; line-height: 18px; }

  .actions { display: flex; flex-shrink: 0; justify-content: center; gap: 12px; }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 36px;
    padding: 0 16px;
    border: 1px solid transparent;
    border-radius: 6px;
    font: 460 14px/18px var(--font-body);
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 120ms, border-color 120ms;
  }
  .btn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
  .btn[aria-busy="true"] { pointer-events: none; }
  .btn-primary { border: none; background: var(--primary); color: var(--primary-text); }
  .btn-primary:active { background: var(--primary-active); }
  .btn-secondary { border-color: var(--border-strong); background: transparent; color: var(--text); }
  .btn-secondary:focus-visible { border-color: var(--border-strong-focus); }
  .btn-secondary:active { border-color: var(--border-strong-focus); background: var(--secondary-active); }
  @media (hover: hover) {
    .btn-primary:hover { background: var(--primary-hover); }
    .btn-secondary:hover { border-color: var(--border-strong-focus); background: var(--secondary-hover); }
    .close:hover { background: #0f0e0e1a; }
  }

  /* Sticky (not absolute) so it stays in view while the card scrolls; order + negative margin lay it over the image. */
  .close {
    position: sticky;
    top: 12px;
    z-index: 10;
    order: -1;
    align-self: flex-end;
    flex-shrink: 0;
    margin: 12px 12px -36px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: 9999px;
    background: transparent;
    color: #0f0e0e;
    cursor: pointer;
    transition: background-color 120ms;
  }
  .close:active { background: #0f0e0e1a; }
  .close:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
  /* A sticky close can scroll over the dark card, where the dark glyph would vanish. */
  @media (prefers-color-scheme: dark) {
    .close { background: #ffffffcc; }
    .close:hover, .close:active { background: #ffffff; }
  }

  .footnote {
    flex-shrink: 0;
    padding: 12px 40px;
    border-top: 1px solid var(--border);
    background: var(--footnote);
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
  .footnote a { color: var(--text); text-decoration: underline; }
  .footnote a:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; border-radius: 2px; }

  .spinner { animation: spin 1s linear infinite; }
  @media (max-width: 639px) {
    .overlay { align-items: flex-end; padding: 0; }
    .panel { width: 100%; max-height: 90dvh; border-radius: 12px 12px 0 0; animation-name: slide-up-in; }
    .content { padding: 24px 20px 40px; }
    .title { font-size: 28px; line-height: 32px; }
    .actions { flex-direction: column-reverse; gap: 8px; }
    .footnote { padding: 12px 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .overlay, .panel, .spinner { animation: none; }
  }

  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
  @keyframes slide-up-in { from { transform: translateY(100%); } to { transform: translateY(0); } }
  @keyframes spin { to { transform: rotate(360deg); } }
`;

  // src/badge/track.ts
  function trackBadgeEvent(platformUrl, appId, event, properties) {
    fetch(`${platformUrl}/api/apps/public/badge/${appId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(properties ? { event, properties } : { event })
    }).catch(() => {
    });
  }

  // src/badge/modal.ts
  var DismissIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true"><path d="M11.72 5.22a.75.75 0 1 1 1.06 1.06L10.06 9l2.72 2.72a.75.75 0 0 1-1.06 1.06L9 10.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L7.94 9 5.22 6.28a.75.75 0 1 1 1.06-1.06L9 7.94l2.72-2.72Z"/></svg>';
  var SpinnerIcon = '<svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>';
  var COVER_URL = "https://media.base44.com/images/public/builder-assets/badge-cover.webp";
  var FOCUSABLE = "button:not([disabled]), a[href]";
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  function modalMarkup(allowClone, coverUrl) {
    return `
    <div class="overlay">
      <div class="panel" data-testid="badge-modal" role="dialog" aria-modal="true" aria-labelledby="base44-modal-title"
        aria-describedby="base44-modal-description" tabindex="-1">
        <div class="image">
          <img src="${coverUrl}" alt="" />
          <h2 class="title" id="base44-modal-title">Built with Base44</h2>
        </div>
        <div class="content">
          <div class="message" id="base44-modal-description">
            <p class="heading">Turn ideas into working apps with Base44</p>
            <p class="description">Ready to build your own app?</p>
          </div>
          <div class="actions">
            ${allowClone ? '<button type="button" class="btn btn-secondary" id="modal-clone-app" data-testid="badge-modal-clone-app">Clone this app</button>' : ""}
            <button type="button" class="btn btn-primary" id="modal-go-to-base44" data-testid="badge-modal-go-to-base44">Go to Base44</button>
          </div>
        </div>
        <div class="footnote" id="admin-footer" data-testid="badge-modal-admin-footnote" hidden></div>
        <button type="button" class="close" id="modal-close-btn" data-testid="badge-modal-close" aria-label="Close">${DismissIcon}</button>
      </div>
    </div>
  `;
  }
  function createModal(appId, platformUrl, allowClone, assetBaseUrl) {
    ensureBadgeFonts(assetBaseUrl);
    const host = document.createElement("div");
    host.id = "base44-modal-overlay";
    host.dir = "ltr";
    host.style.cssText = "position:fixed;inset:0;z-index:1000000;display:block";
    const root = host.attachShadow({ mode: "open" });
    root.innerHTML = `<style>${MODAL_CSS}</style>${modalMarkup(allowClone, COVER_URL)}`;
    const overlay = root.querySelector(".overlay");
    const panel = root.querySelector(".panel");
    const previousFocus = document.activeElement;
    let buttonActionTaken = false;
    function close() {
      document.removeEventListener("keydown", onKeyDown, true);
      host.remove();
      previousFocus?.focus?.();
    }
    function dismiss() {
      if (buttonActionTaken) return;
      trackBadgeEvent(platformUrl, appId, "modal_closed");
      close();
    }
    function onKeyDown(e) {
      if (!host.isConnected) {
        document.removeEventListener("keydown", onKeyDown, true);
        return;
      }
      if (e.key === "Escape") {
        e.stopPropagation();
        dismiss();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = Array.from(root.querySelectorAll(FOCUSABLE)).filter((el) => !el.hidden && el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = root.activeElement;
      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) dismiss();
    });
    root.getElementById("modal-close-btn").addEventListener("click", dismiss);
    root.getElementById("modal-go-to-base44").addEventListener("click", () => {
      if (buttonActionTaken) return;
      buttonActionTaken = true;
      trackBadgeEvent(platformUrl, appId, "modal_go_to_base44");
      window.open(platformUrl, "_blank");
      close();
    });
    const cloneBtn = root.getElementById("modal-clone-app");
    cloneBtn?.addEventListener("click", () => {
      if (buttonActionTaken) return;
      buttonActionTaken = true;
      trackBadgeEvent(platformUrl, appId, "modal_clone_app");
      cloneBtn.setAttribute("aria-busy", "true");
      cloneBtn.innerHTML = `${SpinnerIcon}<span>Cloning</span>`;
      window.open(platformUrl + "/remix-app/" + appId, "_blank");
      setTimeout(close, 1e3);
    });
    document.addEventListener("keydown", onKeyDown, true);
    requestAnimationFrame(() => panel.focus());
    showAdminFooter(appId, platformUrl, root);
    return host;
  }
  function showAdminFooter(appId, platformUrl, root) {
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch(`${platformUrl}/api/apps/${appId}/entities/User/me`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => response.ok ? response.json() : null).then((data) => {
      if (data?.role !== "admin") return;
      const footer = root.getElementById("admin-footer");
      if (!footer) return;
      const settingsUrl = `${escapeHtml(platformUrl)}/apps/${escapeHtml(appId)}/editor/workspace/app-settings`;
      footer.innerHTML = `This badge is part of the app experience. Hiding the badge is available on paid plans in the <a href="${settingsUrl}" target="_blank" rel="noopener noreferrer" data-testid="badge-modal-settings-link">app settings</a>.`;
      footer.hidden = false;
    }).catch(() => {
    });
  }

  // src/badge/badge.ts
  var NEW_BRAND_SYMBOL_PNG_SRC = "https://media.base44.com/images/public/builder-assets/symbol-orange.png";
  (function() {
    "use strict";
    const XIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    function sanitizePlatformUrl(url) {
      if (!url) return null;
      try {
        const parsed = new URL(url);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
          console.warn("Base44 badge: Invalid protocol in platform URL. Only http and https are allowed.");
          return null;
        }
        return parsed.origin;
      } catch (e) {
        console.warn("Base44 badge: Invalid platform URL provided");
        return null;
      }
    }
    function sanitizeAppId(appId) {
      if (!appId) return null;
      const sanitized = appId.replace(/[^a-zA-Z0-9]/g, "");
      if (sanitized !== appId) {
        console.warn("Base44 badge: App ID contained invalid characters and was sanitized");
      }
      return sanitized || null;
    }
    function createBadgeElement(appId, platformUrl, allowClone, assetBaseUrl) {
      const badge = document.createElement("div");
      badge.id = "base44-edit-badge";
      badge.dir = "ltr";
      Object.assign(badge.style, {
        position: "fixed",
        zIndex: "999999",
        bottom: "16px",
        right: "16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "8px 12px",
        borderRadius: "6px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        transition: "box-shadow 0.2s",
        border: "1px solid #262626",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: "14px"
      });
      badge.innerHTML = `
      <img
        src="${NEW_BRAND_SYMBOL_PNG_SRC}"
        alt="base44"
        style="width: 20px; height: 20px;"
      />
      <span style="white-space: nowrap; font-size: 12px;">
        <span id="badge-content">
          <div style="display: flex; align-items: center; gap: 6px; justify-content: center; font-size: 14px;">
            <span>${allowClone ? "Edit with " : "Made with "}</span>
            <span style="margin-bottom: 2px;"><img src="${base44_text_default}" alt="Base44" height="18" width="56" /></span>
          </div>
        </span>
      </span>
      <button
        id="badge-close"
        aria-label="Close badge"
        style="
          padding: 2px;
          margin-left: 2px;
          border-radius: 9999px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        ${XIcon}
      </button>
    `;
      badge.addEventListener("mouseenter", function() {
        badge.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
      });
      badge.addEventListener("mouseleave", function() {
        badge.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      });
      const closeButton = badge.querySelector("#badge-close");
      closeButton.addEventListener("mouseenter", function(e) {
        e.target.style.backgroundColor = "#404040";
      });
      closeButton.addEventListener("mouseleave", function(e) {
        e.target.style.backgroundColor = "transparent";
      });
      closeButton.addEventListener("click", function(e) {
        e.stopPropagation();
        trackBadgeEvent(platformUrl, appId, "badge_dismissed");
        badge.remove();
      });
      badge.addEventListener("click", function() {
        trackBadgeEvent(platformUrl, appId, "badge_clicked");
        const modal = createModal(appId, platformUrl, allowClone, assetBaseUrl);
        document.body.appendChild(modal);
      });
      return badge;
    }
    const scriptTag = document.currentScript;
    function renderBadge() {
      if (!scriptTag) {
        console.warn("Base44 badge: Could not find script tag with data-app-id");
        return;
      }
      const rawAppId = scriptTag.getAttribute("data-app-id");
      const rawPlatformUrl = scriptTag.getAttribute("data-platform-url") || "https://app.base44.com";
      const allowClone = scriptTag.getAttribute("data-allow-clone") !== "false";
      const appId = sanitizeAppId(rawAppId || "");
      const platformUrl = sanitizePlatformUrl(rawPlatformUrl);
      if (!appId) {
        console.warn("Base44 badge: data-app-id attribute is required and must be valid");
        return;
      }
      if (!platformUrl) {
        console.warn("Base44 badge: data-platform-url must be a valid http or https URL");
        return;
      }
      const badge = createBadgeElement(appId, platformUrl, allowClone, new URL("/static/js/", scriptTag.src || document.baseURI).href);
      document.body.appendChild(badge);
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderBadge);
    } else {
      renderBadge();
    }
  })();
})();
//# sourceMappingURL=badge.js.map
