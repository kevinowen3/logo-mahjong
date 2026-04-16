/* ═══════════════════════════════════════════════════
   Logo – Mahjong Solitaire with Tech Company Logos
   ═══════════════════════════════════════════════════ */

// ── 36 Logo Definitions (glossy badge + professional Simple Icons paths) ──
const LOGOS = [
  {
    id: 'adobe', name: 'Adobe',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="adobe-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cc0000"/><stop offset="100%" stop-color="#990000"/></linearGradient><linearGradient id="adobe-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="adobe-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#adobe-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#adobe-sh)"/><g filter="url(#adobe-ds)" transform="translate(26,26) scale(2)"><path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" fill="#fff"/></g></svg>`
  },

  {
    id: 'amazon', name: 'Amazon',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="amazon-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#232F3E"/><stop offset="100%" stop-color="#151d27"/></linearGradient><linearGradient id="amazon-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="amazon-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#amazon-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#amazon-sh)"/><g filter="url(#amazon-ds)" transform="translate(26,26) scale(2)"><path d="M6.61 11.802c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02z" fill="#fff"/><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13z" fill="#FF9900"/><path d="M19.527 18.829c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" fill="#FF9900"/></g></svg>`
  },

  {
    id: 'amd', name: 'AMD',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="amd-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a8a1a"/><stop offset="100%" stop-color="#0d6e0d"/></linearGradient><linearGradient id="amd-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="amd-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#amd-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#amd-sh)"/><g filter="url(#amd-ds)" transform="translate(26,26) scale(3.5)"><path d="M0 0l3.676 3.677h6.324v6.323L13.677 13.677V0zM3.676 4.284L0 7.96v5.717h5.717L9.393 10h-5.717V4.284z" fill="#fff"/></g></svg>`
  },

  {
    id: 'android', name: 'Android',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="android-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0f0f0"/><stop offset="100%" stop-color="#dcdcdc"/></linearGradient><linearGradient id="android-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="android-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#android-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#android-sh)"/><g filter="url(#android-ds)" transform="translate(8,8) scale(1.05)"><g fill="#A4C639"><line x1="30" y1="13" x2="22" y2="4" stroke="#A4C639" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="13" x2="58" y2="4" stroke="#A4C639" stroke-width="3" stroke-linecap="round"/><path d="M18 28c0-11 6-20 22-20s22 9 22 20z" /><circle cx="33" cy="20" r="2.5" fill="#fff"/><circle cx="47" cy="20" r="2.5" fill="#fff"/><rect x="18" y="30" width="44" height="28" rx="4"/><rect x="18" y="58" width="14" height="18" rx="7"/><rect x="48" y="58" width="14" height="18" rx="7"/><rect x="8" y="32" width="8" height="22" rx="4"/><rect x="64" y="32" width="8" height="22" rx="4"/></g></g></svg>`
  },

  {
    id: 'apple', name: 'Apple',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="apple-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5f5f5"/><stop offset="100%" stop-color="#e0e0e0"/></linearGradient><linearGradient id="apple-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="apple-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter><clipPath id="apl-s1"><rect x="0" y="0" width="24" height="8"/></clipPath><clipPath id="apl-s2"><rect x="0" y="8" width="24" height="3.2"/></clipPath><clipPath id="apl-s3"><rect x="0" y="11.2" width="24" height="3.2"/></clipPath><clipPath id="apl-s4"><rect x="0" y="14.4" width="24" height="3.2"/></clipPath><clipPath id="apl-s5"><rect x="0" y="17.6" width="24" height="3.2"/></clipPath><clipPath id="apl-s6"><rect x="0" y="20.8" width="24" height="3.2"/></clipPath></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#apple-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#apple-sh)"/><g filter="url(#apple-ds)" transform="translate(26,26) scale(2)"><g clip-path="url(#apl-s1)"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="#61BB46"/></g><g clip-path="url(#apl-s2)"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" fill="#FDB827"/></g><g clip-path="url(#apl-s3)"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" fill="#F5821F"/></g><g clip-path="url(#apl-s4)"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" fill="#E03A3E"/></g><g clip-path="url(#apl-s5)"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" fill="#963D97"/></g><g clip-path="url(#apl-s6)"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" fill="#1E72B7"/></g></g></svg>`
  },

  {
    id: 'att', name: 'AT\&T',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="att-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#009FDB"/><stop offset="100%" stop-color="#0070a8"/></linearGradient><linearGradient id="att-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="att-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#att-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#att-sh)"/><g filter="url(#att-ds)" transform="translate(26,26) scale(2)"><path d="M4.584 21.438a12.077 12.077 0 0 0 7.349 2.495 12 12 0 0 0 7.887-2.967c-.944.607-3.64 2.023-7.887 2.023-3.708 0-6.068-.81-7.349-1.55m8.158.606c2.966 0 6.202-.809 8.09-2.427.539-.405 1.01-1.011 1.483-1.753.27-.472.539-1.011.741-1.483-1.82 2.63-7.011 4.315-12.404 4.315-3.776 0-7.888-1.214-9.506-3.573 1.483 3.236 6 4.92 11.596 4.92m-3.236-5.257C3.37 16.787.472 13.955 0 12c0 .674.067 1.483.202 2.09.068.27.27.674.607 1.079 1.483 1.55 5.191 3.707 11.595 3.707 8.697 0 10.72-2.898 11.124-3.842.27-.674.472-1.888.472-2.967v-.674c-.607 2.292-8.022 5.394-14.494 5.394m-8.427-9.91C.742 7.55.337 8.763.202 9.37c-.067.27 0 .404.068.607.741 1.55 4.45 4.044 13.078 4.044 5.259 0 9.371-1.28 10.045-3.64.135-.404.135-.876 0-1.483-.202-.674-.472-1.483-.809-2.09.068 3.101-8.562 5.124-12.944 5.124-4.719 0-8.696-1.888-8.696-4.248.067-.337.135-.606.135-.809M19.82 3.034c.068.067.068.135.068.27 0 1.348-4.045 3.64-10.517 3.64-4.787 0-5.663-1.753-5.663-2.9 0-.404.135-.808.472-1.213-.607.607-1.146 1.147-1.686 1.82-.202.27-.337.54-.337.675 0 2.36 5.865 3.977 11.259 3.977 5.797 0 8.427-1.887 8.427-3.573 0-.606-.203-.943-.81-1.618a17.301 17.301 0 0 0-1.213-1.078m-1.753-1.281A11.794 11.794 0 0 0 11.933.067C9.64.067 7.55.674 5.73 1.82c-.539.27-.876.54-.876.877 0 1.01 2.36 2.09 6.54 2.09 4.112 0 7.348-1.214 7.348-2.36.067-.202-.203-.405-.675-.674" fill="#fff"/></g></svg>`
  },

  {
    id: 'bluetooth', name: 'Bluetooth',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="bluetooth-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0082FC"/><stop offset="100%" stop-color="#0060c0"/></linearGradient><linearGradient id="bluetooth-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="bluetooth-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#bluetooth-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#bluetooth-sh)"/><g filter="url(#bluetooth-ds)" transform="translate(26,26) scale(2)"><path d="M12 0C6.76 0 3.1484 2.4895 3.1484 12S6.76 24 12 24c5.24 0 8.8516-2.4895 8.8516-12S17.24 0 12 0zm-.7773 1.6816l6.2148 6.2149L13.334 12l4.1035 4.1035-6.2148 6.2149V14.125l-3.418 3.42-1.2422-1.2442L10.8515 12l-4.289-4.3008 1.2422-1.2441 3.418 3.4199V1.6816zm1.748 4.2442v3.9687l1.9844-1.9843-1.9844-1.9844zm0 8.1816v3.9668l1.9844-1.9844-1.9844-1.9824Z" fill="#fff"/></g></svg>`
  },

  {
    id: 'chrome', name: 'Chrome',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="chrome-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0f0f0"/><stop offset="100%" stop-color="#d8d8d8"/></linearGradient><linearGradient id="chrome-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="chrome-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#chrome-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#chrome-sh)"/><g filter="url(#chrome-ds)" transform="translate(26,26) scale(2)"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0z" fill="#EA4335"/><path d="M1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29z" fill="#34A853"/><path d="M15.273 7.636a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364z" fill="#FBBC05"/><circle cx="12" cy="12" r="4.364" fill="#4285F4"/></g></svg>`
  },

  {
    id: 'cisco', name: 'Cisco',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="cisco-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1BA0D7"/><stop offset="100%" stop-color="#1280a8"/></linearGradient><linearGradient id="cisco-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="cisco-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#cisco-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#cisco-sh)"/><g filter="url(#cisco-ds)" transform="translate(26,26) scale(2)"><path d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155" fill="#fff"/></g></svg>`
  },

  {
    id: 'bambulab', name: 'Bambu Lab',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="bambu-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2ea84a"/><stop offset="100%" stop-color="#1d8a38"/></linearGradient><linearGradient id="bambu-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="bambu-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#bambu-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#bambu-sh)"/><g filter="url(#bambu-ds)"><rect x="30" y="26" width="16" height="48" rx="1" fill="#fff"/><rect x="54" y="26" width="16" height="48" rx="1" fill="#fff"/><polygon points="30,56 46,46 46,50 30,60" fill="#1d8a38"/><polygon points="30,60 54,46 54,50 30,64" fill="#1d8a38"/></g></svg>`
  },

  {
    id: 'dropbox', name: 'Dropbox',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="dropbox-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0061FF"/><stop offset="100%" stop-color="#0048c0"/></linearGradient><linearGradient id="dropbox-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="dropbox-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#dropbox-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#dropbox-sh)"/><g filter="url(#dropbox-ds)" transform="translate(26,26) scale(2)"><path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z" fill="#fff"/></g></svg>`
  },

  {
    id: 'firefox', name: 'Firefox',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="firefox-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#20123a"/><stop offset="100%" stop-color="#15002a"/></linearGradient><linearGradient id="firefox-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".25"/><stop offset="50%" stop-color="#fff" stop-opacity=".05"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><radialGradient id="firefox-globe" cx=".5" cy=".5" r=".5"><stop offset="0%" stop-color="#FFBD4F"/><stop offset="40%" stop-color="#FF980E"/><stop offset="100%" stop-color="#FF7139"/></radialGradient><linearGradient id="firefox-fox" x1="0" y1="0" x2=".8" y2="1"><stop offset="0%" stop-color="#FFBD4F"/><stop offset="50%" stop-color="#FF980E"/><stop offset="100%" stop-color="#FF7139"/></linearGradient><filter id="firefox-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#firefox-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#firefox-sh)"/><g filter="url(#firefox-ds)" transform="translate(26,26) scale(2)"><circle cx="12" cy="12" r="11.5" fill="#3023AE" opacity=".3"/><circle cx="12" cy="12.5" r="10" fill="#1C0B4A"/><path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z" fill="url(#firefox-fox)"/></g></svg>`
  },

  {
    id: 'github', name: 'GitHub',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="github-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2b2b2b"/><stop offset="100%" stop-color="#0d0d0d"/></linearGradient><linearGradient id="github-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="github-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#github-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#github-sh)"/><g filter="url(#github-ds)" transform="translate(26,26) scale(2)"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#fff"/></g></svg>`
  },

  {
    id: 'google', name: 'Google',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="google-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e8e8e8"/></linearGradient><linearGradient id="google-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="google-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#google-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#google-sh)"/><clipPath id="google-tl"><rect x="0" y="0" width="12.48" height="12"/></clipPath><clipPath id="google-tr"><rect x="12.48" y="0" width="12" height="12"/></clipPath><clipPath id="google-bl"><rect x="0" y="12" width="12.48" height="12"/></clipPath><clipPath id="google-br"><rect x="12.48" y="12" width="12" height="12"/></clipPath><g filter="url(#google-ds)" transform="translate(26,26) scale(2)"><g clip-path="url(#google-tr)"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/></g><g clip-path="url(#google-tl)"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#EA4335"/></g><g clip-path="url(#google-bl)"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#34A853"/></g><g clip-path="url(#google-br)"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#FBBC05"/></g></g></svg>`
  },

  {
    id: 'hp', name: 'HP',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="hp-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0096D6"/><stop offset="100%" stop-color="#0070a8"/></linearGradient><linearGradient id="hp-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="hp-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#hp-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#hp-sh)"/><g filter="url(#hp-ds)" transform="translate(26,26) scale(2)"><path d="M12.0069 24h-.3572l2.459-6.7453h3.3796c.5907 0 1.2364-.4533 1.4424-1.0166l2.6652-7.3085c.4396-1.1952-.2473-2.1706-1.525-2.1706h-4.6983l-3.929 10.798-2.2255 6.127C3.929 22.434 0 17.6806 0 12.007 0 6.498 3.7092 1.8546 8.7647.4396L6.4705 6.759 2.6514 17.2547h2.5415L8.4488 8.339h1.9095l-3.2558 8.9158H9.644l3.0223-8.3251c.4396-1.1952-.2473-2.1706-1.525-2.1706h-2.143l2.459-6.7453C11.636 0 11.8145 0 11.9931 0 18.6285 0 24 5.3715 24 12.007c.0137 6.6216-5.3578 11.993-11.9931 11.993zM19.2742 8.325h-1.9096l-2.6789 7.336h1.9096l2.6789-7.336z" fill="#fff"/></g></svg>`
  },

  {
    id: 'intel', name: 'Intel',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="intel-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0071C5"/><stop offset="100%" stop-color="#005090"/></linearGradient><linearGradient id="intel-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="intel-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#intel-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#intel-sh)"/><g filter="url(#intel-ds)" transform="translate(26,26) scale(2)"><path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261zm7.073 3.814a.606.606 0 0 0-.606.606.606.606 0 0 0 .606.606.606.606 0 0 0 .606-.606.606.606 0 0 0-.606-.606zm-.008.105a.5.5 0 0 1 .002 0 .5.5 0 0 1 .5.501.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.191.191 0 0 0 .118-.056c.03-.03.05-.074.05-.136 0-.068-.02-.117-.063-.154-.037-.038-.105-.056-.185-.056zm.13.099h.154c.019 0 .037.006.056.012a.064.064 0 0 1 .037.031c.013.013.012.031.012.056a.124.124 0 0 1-.012.055.164.164 0 0 1-.037.031c-.019.006-.037.013-.056.013h-.154Z" fill="#fff"/></g></svg>`
  },

  {
    id: 'lg', name: 'LG',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="lg-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0f0f0"/><stop offset="100%" stop-color="#dcdcdc"/></linearGradient><linearGradient id="lg-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="lg-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#lg-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#lg-sh)"/><g filter="url(#lg-ds)"><circle cx="50" cy="50" r="30" fill="#E6007A"/><path d="M50 24c-14.4 0-26 11.6-26 26s11.6 26 26 26 26-11.6 26-26" fill="none" stroke="#fff" stroke-width="4.5"/><line x1="60" y1="50" x2="76" y2="50" stroke="#fff" stroke-width="4.5"/><rect x="41" y="34" width="5" height="26" fill="#fff"/><line x1="41" y1="60" x2="58" y2="60" stroke="#fff" stroke-width="5"/><circle cx="42" cy="36" r="3.5" fill="#fff"/></g></svg>`
  },

  {
    id: 'linkedin', name: 'LinkedIn',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="linkedin-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0A66C2"/><stop offset="100%" stop-color="#004898"/></linearGradient><linearGradient id="linkedin-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="linkedin-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#linkedin-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#linkedin-sh)"/><g filter="url(#linkedin-ds)" transform="translate(26,26) scale(2)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#fff"/></g></svg>`
  },

  {
    id: 'logitech', name: 'Logitech',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="logitech-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5f5f8"/><stop offset="100%" stop-color="#dddde5"/></linearGradient><linearGradient id="logitech-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".5"/><stop offset="50%" stop-color="#fff" stop-opacity=".1"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="logitech-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#logitech-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#logitech-sh)"/><g filter="url(#logitech-ds)" transform="translate(26,26) scale(2)"><path d="M12.5664 0C10.9101 0 9.352.3143 7.8887.9414c-1.4794.6271-2.766 1.483-3.8594 2.5684-1.0935 1.0854-1.9549 2.359-2.582 3.8222-.6432 1.4473-.9575 3-.9414 4.6563 0 1.6563.3142 3.2164.9414 4.6797.8537 1.9702 2.6764 4.7711 6.4414 6.3672C9.352 23.6784 10.91 24 12.5664 24v-4.9922c-.9809 0-1.8977-.1848-2.75-.5547-1.6852-.7313-2.9903-2.0167-3.7383-3.7402-.7467-1.7207-.736-3.755 0-5.4512.737-1.6981 2.0318-2.9977 3.7383-3.7383.8523-.3698 1.7691-.5546 2.75-.5546Zm.17 9.8418v4.9434h5.8124v5.8144h4.9453V9.8418Z" fill="#00B8FC"/></g></svg>`
  },

  {
    id: 'meta', name: 'Meta',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="meta-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0467DF"/><stop offset="100%" stop-color="#0348a8"/></linearGradient><linearGradient id="meta-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="meta-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#meta-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#meta-sh)"/><g filter="url(#meta-ds)" transform="translate(26,26) scale(2)"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" fill="#fff"/></g></svg>`
  },

  {
    id: 'microsoft', name: 'Microsoft',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="microsoft-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2b2b2b"/><stop offset="100%" stop-color="#111111"/></linearGradient><linearGradient id="microsoft-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="microsoft-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#microsoft-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#microsoft-sh)"/><g filter="url(#microsoft-ds)" transform="translate(26,26) scale(2)"><path d="M0 0v11.408h11.408V0z" fill="#F25022"/><path d="M12.594 0v11.408H24V0z" fill="#7FBA00"/><path d="M0 12.594V24h11.408V12.594z" fill="#00A4EF"/><path d="M12.594 12.594V24H24V12.594z" fill="#FFB900"/></g></svg>`
  },

  {
    id: 'motorola', name: 'Motorola',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="motorola-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E1140A"/><stop offset="100%" stop-color="#a80e08"/></linearGradient><linearGradient id="motorola-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="motorola-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#motorola-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#motorola-sh)"/><g filter="url(#motorola-ds)" transform="translate(26,26) scale(2)"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C24.002 5.375 18.632.002 12.007 0H12zm7.327 18.065s-.581-2.627-1.528-4.197c-.514-.857-1.308-1.553-2.368-1.532-.745 0-1.399.423-2.2 1.553-.469.77-.882 1.573-1.235 2.403 0 0-.29-.675-.63-1.343a8.038 8.038 0 0 0-.605-1.049c-.804-1.13-1.455-1.539-2.2-1.553-1.049-.021-1.854.675-2.364 1.528-.948 1.574-1.528 4.197-1.528 4.197h-.864l4.606-15.12 3.56 11.804.024.021.024-.021 3.56-11.804 4.61 15.113h-.862z" fill="#fff"/></g></svg>`
  },

  {
    id: 'netflix', name: 'Netflix',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="netflix-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a1a1a"/><stop offset="100%" stop-color="#000"/></linearGradient><linearGradient id="netflix-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".25"/><stop offset="50%" stop-color="#fff" stop-opacity=".05"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="netflix-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#netflix-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#netflix-sh)"/><g filter="url(#netflix-ds)" transform="translate(26,26) scale(2)"><path d="m5.398 0 8.348 23.602c2.346.059 4.856.398 4.856.398L10.113 0H5.398zm8.489 0v9.172l4.715 13.33V0h-4.715zM5.398 1.5V24c1.873-.225 2.81-.312 4.715-.398V14.83L5.398 1.5z" fill="#E50914"/></g></svg>`
  },

  {
    id: 'nvidia', name: 'NVIDIA',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="nvidia-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#76B900"/><stop offset="100%" stop-color="#588a00"/></linearGradient><linearGradient id="nvidia-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="nvidia-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#nvidia-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#nvidia-sh)"/><g filter="url(#nvidia-ds)" transform="translate(26,26) scale(2)"><path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z" fill="#fff"/></g></svg>`
  },

  {
    id: 'snapdragon', name: 'Snapdragon',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="snap-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8e8e8"/><stop offset="50%" stop-color="#d0d0d0"/><stop offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="snap-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".5"/><stop offset="50%" stop-color="#fff" stop-opacity=".1"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="snap-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#snap-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#snap-sh)"/><g filter="url(#snap-ds)"><circle cx="50" cy="50" r="30" fill="#e0e0e0"/><circle cx="48" cy="48" r="28" fill="#f0f0f0"/><path transform="translate(20,20) scale(2.5)" d="M12 .016h-.351c-3.223.128-6.862 2.202-7.596 5.49-.032.127-.191.127-.223 0-.16-.799-.128-1.66.096-2.394a12.645 12.645 0 0 0-1.82 2.074 6.473 6.473 0 0 0-.638 1.34c-.447 1.405-.287 3.096.702 4.245.926 1.085 2.394 1.468 3.575 2.202 1.18.703 2.202 1.66 2.68 3 .511 1.405.416 3-.127 4.373-.032.127-.223.095-.223-.064.127-2.01-.894-3.894-2.777-4.787-.99-.447-2.106-.639-3.096-1.117C1.31 13.963.16 13.133 0 12.048c0 6.574 5.362 11.936 12 11.936 6.607 0 12-5.362 12-12S18.607.016 12 .016m8.745 18.638a11.663 11.663 0 0 1-3.255 2.872s0-.032.032-.032c-.83.479-1.724.894-2.681 1.15.734-.607 3.127-2.171 3.127-6.48 0-3.191-2.01-5.33-4.276-6.382C11.107 8.569 8.33 7.93 8.33 4.675c0-1.723 1.372-3.574 3.51-3.606.128-.032.288-.032.416-.032h.127a10.827 10.827 0 0 1 7.5 3.35 10.923 10.923 0 0 1 3.096 7.66v.064c0 1.34-.255 2.65-.702 3.862v.032c-.032.096-.096.223-.128.32-.032.063-.064.127-.064.159s-.032.032-.032.064a13.475 13.475 0 0 1-1.308 2.106" fill="#E2231A"/></g></svg>`
  },

  {
    id: 'reddit', name: 'Reddit',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="reddit-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF4500"/><stop offset="100%" stop-color="#cc3800"/></linearGradient><linearGradient id="reddit-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="reddit-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#reddit-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#reddit-sh)"/><g filter="url(#reddit-ds)" transform="translate(26,26) scale(2)"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" fill="#fff"/></g></svg>`
  },

  {
    id: 'slack', name: 'Slack',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="slack-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4A154B"/><stop offset="100%" stop-color="#300e32"/></linearGradient><linearGradient id="slack-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="slack-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#slack-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#slack-sh)"/><g filter="url(#slack-ds)" transform="translate(26,26) scale(2)"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/><path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/><path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/><path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/></g></svg>`
  },

  {
    id: 'spotify', name: 'Spotify',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="spotify-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1ED760"/><stop offset="100%" stop-color="#18a848"/></linearGradient><linearGradient id="spotify-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="spotify-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#spotify-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#spotify-sh)"/><g filter="url(#spotify-ds)" transform="translate(26,26) scale(2)"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#fff"/></g></svg>`
  },

  {
    id: 'steam', name: 'Steam',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="steam-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1b2838"/><stop offset="100%" stop-color="#101c28"/></linearGradient><linearGradient id="steam-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="steam-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#steam-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#steam-sh)"/><g filter="url(#steam-ds)" transform="translate(26,26) scale(2)"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" fill="#fff"/></g></svg>`
  },

  {
    id: 'tesla', name: 'Tesla',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="tesla-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#CC0000"/><stop offset="100%" stop-color="#900000"/></linearGradient><linearGradient id="tesla-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="tesla-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#tesla-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#tesla-sh)"/><g filter="url(#tesla-ds)" transform="translate(26,26) scale(2)"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z" fill="#fff"/></g></svg>`
  },

  {
    id: 'anthropic', name: 'Anthropic',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="anthropic-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5f0eb"/><stop offset="100%" stop-color="#e8ddd0"/></linearGradient><linearGradient id="anthropic-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="anthropic-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#anthropic-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#anthropic-sh)"/><g filter="url(#anthropic-ds)" transform="translate(18,18) scale(2.667)"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" fill="#D97757"/></g></svg>`
  },

  {
    id: 'nasa', name: 'NASA',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="nasa-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0f0f0"/><stop offset="100%" stop-color="#d8d8d8"/></linearGradient><linearGradient id="nasa-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="nasa-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#nasa-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#nasa-sh)"/><g filter="url(#nasa-ds)"><circle cx="50" cy="50" r="30" fill="#0B3D91"/><circle cx="42" cy="38" r="1" fill="#fff"/><circle cx="55" cy="33" r="0.8" fill="#fff"/><circle cx="48" cy="35" r="0.6" fill="#fff"/><circle cx="38" cy="42" r="0.7" fill="#fff"/><circle cx="60" cy="40" r="0.5" fill="#fff"/><circle cx="35" cy="35" r="0.8" fill="#fff"/><circle cx="52" cy="30" r="0.5" fill="#fff"/><circle cx="44" cy="32" r="1.2" fill="#fff"/><circle cx="58" cy="36" r="0.6" fill="#fff"/><circle cx="40" cy="62" r="0.6" fill="#fff"/><circle cx="62" cy="58" r="0.7" fill="#fff"/><circle cx="56" cy="65" r="0.5" fill="#fff"/><circle cx="36" cy="58" r="0.5" fill="#fff"/><path d="M16 58Q30 42 50 38Q70 34 84 28" fill="none" stroke="#fff" stroke-width="1.2"/><path d="M14 62Q32 36 56 30Q72 26 86 22" fill="none" stroke="#fff" stroke-width="1.2"/><path d="M18 56C28 48 40 44 50 44C60 44 68 48 72 54" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M15 64L40 44L68 36L85 24" fill="#FC3D21" stroke="none"/><path d="M15 64L40 48L68 40L85 28L85 24L68 36L40 44L15 60Z" fill="#FC3D21"/><g transform="translate(26,26) scale(2)"><path d="M4.344 13.598c.075.281.195.39.407.39.22 0 .335-.132.335-.39V8.804h1.379v4.794c0 .675-.088.968-.43 1.31-.247.248-.703.439-1.278.439-.464 0-.909-.154-1.192-.438-.249-.25-.386-.505-.599-1.311l-.846-3.196c-.074-.281-.194-.39-.406-.39-.22 0-.336.132-.336.39v4.794H0v-4.794c0-.675.088-.968.43-1.31.247-.248.703-.439 1.278-.439.464 0 .909.154 1.192.438.249.25.385.505.599 1.311zM22.575 15.196l-1.591-4.98a.415.415 0 00-.06-.132.226.226 0 00-.186-.082.226.226 0 00-.185.082.414.414 0 00-.06.132l-1.591 4.98h-1.425l1.739-5.44c.09-.283.22-.524.384-.684.282-.275.614-.419 1.138-.419.525 0 .857.144 1.139.42.164.16.294.4.384.683L24 15.196h-1.425zM15.531 15.196c.903 0 1.344-.192 1.692-.538.385-.383.569-.802.569-1.427 0-.553-.202-1.064-.51-1.37-.403-.4-.903-.527-1.719-.527h-1.142c-.436 0-.61-.053-.748-.188-.094-.093-.139-.23-.139-.393 0-.168.04-.334.156-.448.103-.1.243-.147.511-.147h3.301V8.804h-3.049c-.903 0-1.343.192-1.691.538-.385.383-.57.802-.57 1.427 0 .553.203 1.064.51 1.37.404.4.904.527 1.72.527h1.141c.437 0 .61.053.748.188.095.093.14.23.14.393 0 .169-.041.335-.157.448-.102.1-.242.147-.51.147h-3.405l-1.306-4.086c-.09-.283-.22-.524-.384-.684-.282-.275-.615-.419-1.139-.419s-.857.144-1.138.42c-.165.16-.294.4-.385.683l-1.738 5.44h1.424l1.592-4.98a.415.415 0 01.06-.132.226.226 0 01.185-.082c.082 0 .142.028.186.082a.413.413 0 01.06.132l1.591 4.98h4.144z" fill="#fff"/></g></g></svg>`
  },

  {
    id: 'openai', name: 'OpenAI',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="openai-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2b2b2b"/><stop offset="100%" stop-color="#0d0d0d"/></linearGradient><linearGradient id="openai-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="openai-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#openai-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#openai-sh)"/><g filter="url(#openai-ds)" transform="translate(26,26) scale(2)"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#fff"/></g></svg>`
  },

  {
    id: 'xbox', name: 'Xbox',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="xbox-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#107C10"/><stop offset="100%" stop-color="#085808"/></linearGradient><linearGradient id="xbox-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="xbox-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#xbox-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#xbox-sh)"/><g filter="url(#xbox-ds)" transform="translate(26,26) scale(2)"><path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z" fill="#fff"/></g></svg>`
  },

  {
    id: 'youtube', name: 'YouTube',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="youtube-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF0000"/><stop offset="100%" stop-color="#cc0000"/></linearGradient><linearGradient id="youtube-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="youtube-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#youtube-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#youtube-sh)"/><g filter="url(#youtube-ds)" transform="translate(26,26) scale(2)"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#fff"/><path d="M9.545 15.568V8.432L15.818 12z" fill="#FF0000"/></g></svg>`
  },

  {
    id: 'zoom', name: 'Zoom',
    svg: `<svg viewBox="0 0 100 100"><defs><linearGradient id="zoom-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0B5CFF"/><stop offset="100%" stop-color="#0848c0"/></linearGradient><linearGradient id="zoom-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity=".4"/><stop offset="50%" stop-color="#fff" stop-opacity=".08"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="zoom-ds"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity=".3"/></filter></defs><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#zoom-bg)"/><rect x="8" y="8" width="84" height="84" rx="18" fill="url(#zoom-sh)"/><g filter="url(#zoom-ds)" transform="translate(26,26) scale(2)"><path d="M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z" fill="#fff"/></g></svg>`
  }
];


// ── Classic Turtle Layout (144 tiles) ──
// Integer grid for the main body.  4 special tiles sit at HALF-GRID
// positions (y = 3.5, between the two middle rows):
//   • left wing   x=0,   y=3.5, z=0  (turtle tail)
//   • right wing  x=13,  y=3.5, z=0  (turtle head, bottom)
//   • right wing  x=13,  y=3.5, z=1  (turtle head, stacked on top)
//   • cap tile    x=6.5, y=3.5, z=4  (single peak tile)
function generateLayout() {
  const positions = [];
  const def = [
    // Layer 0 — 84 grid tiles (no wings on the integer rows)
    { z: 0, rows: [
      { y: 0, xs: [1,2,3,4,5,6,7,8,9,10,11,12] },                    // 12
      { y: 1, xs: [3,4,5,6,7,8,9,10] },                               // 8
      { y: 2, xs: [2,3,4,5,6,7,8,9,10,11] },                          // 10
      { y: 3, xs: [1,2,3,4,5,6,7,8,9,10,11,12] },                    // 12
      { y: 4, xs: [1,2,3,4,5,6,7,8,9,10,11,12] },                    // 12
      { y: 5, xs: [2,3,4,5,6,7,8,9,10,11] },                          // 10
      { y: 6, xs: [3,4,5,6,7,8,9,10] },                               // 8
      { y: 7, xs: [1,2,3,4,5,6,7,8,9,10,11,12] },                    // 12
    ]},
    // Layer 1 — 36 grid tiles (6×6 centred)
    { z: 1, rows: [
      { y: 1, xs: [4,5,6,7,8,9] },                                    // 6
      { y: 2, xs: [4,5,6,7,8,9] },                                    // 6
      { y: 3, xs: [4,5,6,7,8,9] },                                    // 6
      { y: 4, xs: [4,5,6,7,8,9] },                                    // 6
      { y: 5, xs: [4,5,6,7,8,9] },                                    // 6
      { y: 6, xs: [4,5,6,7,8,9] },                                    // 6
    ]},
    // Layer 2 — 16 grid tiles (4×4 centred)
    { z: 2, rows: [
      { y: 2, xs: [5,6,7,8] },                                        // 4
      { y: 3, xs: [5,6,7,8] },                                        // 4
      { y: 4, xs: [5,6,7,8] },                                        // 4
      { y: 5, xs: [5,6,7,8] },                                        // 4
    ]},
    // Layer 3 — 4 grid tiles (2×2 near-peak)
    { z: 3, rows: [
      { y: 3, xs: [6,7] },                                            // 2
      { y: 4, xs: [6,7] },                                            // 2
    ]},
  ];

  def.forEach(layer => {
    layer.rows.forEach(row => {
      row.xs.forEach(x => positions.push({ x, y: row.y, z: layer.z }));
    });
  });

  // 4 special HALF-GRID tiles (between rows 3 & 4)
  positions.push({ x: 0,   y: 3.5, z: 0 });   // left wing  (tail, 1 tile)
  positions.push({ x: 13,  y: 3.5, z: 0 });   // right wing (head, tile 1)
  positions.push({ x: 14,  y: 3.5, z: 0 });   // right wing (head, tile 2 — to its right)
  positions.push({ x: 6.5, y: 3.5, z: 4 });   // cap (peak, between cols 6-7)

  return positions; // 84 + 36 + 16 + 4 + 4 = 144
}

const LAYOUT = generateLayout();

// ── Game State ──
let tiles = [];
let selectedId = null;
let undoStack = [];
let matchedPairs = 0;
let hintPair = null;      // currently displayed hint pair [uidA, uidB]
let hintIndex = 0;        // cycles through available pairs on repeated clicks

// DOM refs
const boardEl = document.getElementById('board');
const pairsEl = document.getElementById('pairsCount');
const tilesLeftEl = document.getElementById('tilesLeft');
const statusEl = document.getElementById('status');
const galleryEl = document.getElementById('gallery');
const galleryGridEl = document.getElementById('galleryGrid');
const winModal = document.getElementById('winModal');

// ── Shuffle utility ──
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Build tiles for a new game ──
function buildTiles() {
  const ids = [];
  LOGOS.forEach(logo => { for (let i = 0; i < 4; i++) ids.push(logo.id); });
  const shuffled = shuffle(ids);
  tiles = LAYOUT.map((pos, i) => ({
    uid: i,
    logoId: shuffled[i],
    x: pos.x,
    y: pos.y,
    z: pos.z,
    removed: false,
  }));
}

// ── Constants ──
const TILE_COLS = 15;    // x spans 0–14 (right head extends to x=14)
const TILE_ROWS = 8;     // y spans 0–7
const MAX_Z = 4;         // layers 0–4 (cap at z=4)
const EDGE_W = 6;        // 3D depth offset per layer (px)

// ── Free-tile computation ──
// Uses overlap covering (|dx|<1, |dy|<1) so the half-grid cap tile
// correctly covers the 2×2 integer-grid L3 peak beneath it.
function computeFree() {
  const free = {};
  const active = tiles.filter(t => !t.removed);

  active.forEach(t => {
    // Covered = any tile on a higher z whose position overlaps
    const covered = active.some(o =>
      o.z > t.z && Math.abs(o.x - t.x) < 1 && Math.abs(o.y - t.y) < 1
    );
    if (covered) { free[t.uid] = false; return; }

    // Left/right blocking: same z, overlapping y (handles half-grid wing tiles), x exactly ±1 apart
    const leftBlocked  = active.some(o => o.z === t.z && Math.abs(o.y - t.y) < 1 && o.x === t.x - 1);
    const rightBlocked = active.some(o => o.z === t.z && Math.abs(o.y - t.y) < 1 && o.x === t.x + 1);
    free[t.uid] = !leftBlocked || !rightBlocked;
  });

  return free;
}

// ── Find all matching free pairs ──
function findFreePairs() {
  const freeMap = computeFree();
  const freeTiles = tiles.filter(t => !t.removed && freeMap[t.uid]);
  const groups = {};
  freeTiles.forEach(t => {
    if (!groups[t.logoId]) groups[t.logoId] = [];
    groups[t.logoId].push(t);
  });
  const pairs = [];
  Object.values(groups).forEach(arr => {
    if (arr.length >= 2) pairs.push([arr[0], arr[1]]);
  });
  return pairs;
}

// ── Tile sizing ──
function calcTileSize() {
  // Measure actual available space by subtracting toolbar + status from viewport
  const toolbar = document.querySelector('.toolbar');
  const status  = document.querySelector('.status-bar');
  const chrome  = (toolbar ? toolbar.offsetHeight : 0) + (status ? status.offsetHeight : 0);
  const availW  = window.innerWidth - 16;
  const availH  = window.innerHeight - chrome - 16;
  const depth   = (MAX_Z + 2) * EDGE_W;

  // Height-first: fill available height with all 8 rows
  let h = Math.floor((availH - depth) / TILE_ROWS);
  let w = Math.round(h / 1.25);

  // Shrink if too wide for 14 columns
  if (TILE_COLS * w + depth > availW) {
    w = Math.floor((availW - depth) / TILE_COLS);
    h = Math.round(w * 1.25);
  }

  w = Math.max(22, w);
  h = Math.round(w * 1.25);
  return { w, h };
}

// ── Render ──
function render() {
  boardEl.innerHTML = '';
  const freeMap = computeFree();
  const { w: tileW, h: tileH } = calcTileSize();

  // Board pixel dimensions
  const depth = (MAX_Z + 2) * EDGE_W;
  const boardW = Math.ceil(TILE_COLS * tileW + depth);
  const boardH = Math.ceil(TILE_ROWS * tileH + depth);
  boardEl.style.width = boardW + 'px';
  boardEl.style.height = boardH + 'px';

  // Sort: low z first, then top→bottom, then left→right
  const sorted = tiles.filter(t => !t.removed).slice().sort((a, b) => {
    if (a.z !== b.z) return a.z - b.z;
    if (a.y !== b.y) return a.y - b.y;
    return a.x - b.x;
  });

  const logoMap = {};
  LOGOS.forEach(l => { logoMap[l.id] = l; });

  sorted.forEach(t => {
    const logo = logoMap[t.logoId];
    const isFree = freeMap[t.uid];

    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'tile';
    if (isFree) el.classList.add('free');
    else el.classList.add('blocked');
    if (t.uid === selectedId) el.classList.add('selected');
    if (hintPair && (t.uid === hintPair[0] || t.uid === hintPair[1])) el.classList.add('selected');

    el.style.width = tileW + 'px';
    el.style.height = tileH + 'px';

    const left = t.x * tileW + EDGE_W + t.z * EDGE_W;
    const top  = t.y * tileH + (MAX_Z - t.z) * EDGE_W;
    el.style.left = Math.round(left) + 'px';
    el.style.top  = Math.round(top) + 'px';
    el.style.zIndex = Math.round(t.z * 1000 + t.y * 100 + t.x * 2);

    el.setAttribute('aria-label', `${logo.name} tile`);
    el.dataset.uid = t.uid;
    el.innerHTML = `<div class="logo-icon">${logo.svg}</div>`;

    el.addEventListener('click', () => onTileClick(t.uid, isFree));
    boardEl.appendChild(el);
  });

  pairsEl.textContent = matchedPairs;
  tilesLeftEl.textContent = tiles.filter(t => !t.removed).length;
}

// ── Tile click handler ──
function onTileClick(uid, isFree) {
  if (!isFree) {
    setStatus('That tile is blocked. Choose one with a free left or right edge.');
    return;
  }

  const tile = tiles[uid];

  // If a hint pair is showing, clicking one of its tiles accepts the match
  if (hintPair) {
    if (uid === hintPair[0] || uid === hintPair[1]) {
      const a = tiles[hintPair[0]];
      const b = tiles[hintPair[1]];
      a.removed = true;
      b.removed = true;
      undoStack.push({ a: a.uid, b: b.uid });
      matchedPairs++;
      hintPair = null;
      hintIndex = 0;
      selectedId = null;
      const logo = LOGOS.find(l => l.id === a.logoId);
      setStatus(`Matched: ${logo.name}!`);
      render();

      const elA = boardEl.querySelector(`[data-uid="${a.uid}"]`);
      const elB = boardEl.querySelector(`[data-uid="${b.uid}"]`);
      if (elA) elA.classList.add('matched');
      if (elB) elB.classList.add('matched');

      checkEndConditions();
      return;
    }
    // Clicking any other tile dismisses the hint
    hintPair = null;
    hintIndex = 0;
    // Fall through to normal selection below
  }

  // Deselect if clicking the same tile
  if (selectedId === uid) {
    selectedId = null;
    setStatus('Tile deselected.');
    render();
    return;
  }

  // If another tile is already selected, attempt match
  if (selectedId !== null) {
    const other = tiles[selectedId];
    if (other.logoId === tile.logoId) {
      // Match!
      other.removed = true;
      tile.removed = true;
      undoStack.push({ a: other.uid, b: tile.uid });
      matchedPairs++;
      selectedId = null;
      const logo = LOGOS.find(l => l.id === tile.logoId);
      setStatus(`Matched: ${logo.name}!`);
      render();

      const elA = boardEl.querySelector(`[data-uid="${other.uid}"]`);
      const elB = boardEl.querySelector(`[data-uid="${tile.uid}"]`);
      if (elA) elA.classList.add('matched');
      if (elB) elB.classList.add('matched');

      checkEndConditions();
      return;
    }
    // Not a match – select the new tile instead
    selectedId = uid;
    setStatus('Different logos. Try again.');
    render();
    return;
  }

  // First selection
  selectedId = uid;
  const logo = LOGOS.find(l => l.id === tile.logoId);
  setStatus(`Selected: ${logo.name}. Now click a matching tile.`);
  render();
}

// ── End conditions ──
function checkEndConditions() {
  const remaining = tiles.filter(t => !t.removed).length;
  if (remaining === 0) {
    setTimeout(() => winModal.classList.remove('hidden'), 400);
    return;
  }
  const pairs = findFreePairs();
  if (pairs.length === 0) {
    setStatus('No more moves available. Use Shuffle or Undo.');
  }
}

// ── Hint ──
function doHint() {
  selectedId = null;
  const pairs = findFreePairs();
  if (pairs.length === 0) {
    hintPair = null;
    hintIndex = 0;
    setStatus('No matching pairs available. Try Shuffle or Undo.');
    render();
    return;
  }
  // Cycle through pairs on repeated clicks
  if (hintIndex >= pairs.length) hintIndex = 0;
  const [a, b] = pairs[hintIndex];
  hintPair = [a.uid, b.uid];
  hintIndex++;
  const logo = LOGOS.find(l => l.id === a.logoId);
  setStatus(`Hint ${hintIndex} of ${pairs.length}: ${logo.name}. Click a highlighted tile to match, or any other tile to dismiss.`);
  render();
}

// ── Undo ──
function doUndo() {
  hintPair = null; hintIndex = 0;
  if (undoStack.length === 0) {
    setStatus('Nothing to undo.');
    return;
  }
  const last = undoStack.pop();
  tiles[last.a].removed = false;
  tiles[last.b].removed = false;
  matchedPairs--;
  selectedId = null;
  setStatus('Last match undone.');
  render();
}

// ── Shuffle ──
function doShuffle() {
  hintPair = null; hintIndex = 0;
  const active = tiles.filter(t => !t.removed);
  const logoIds = shuffle(active.map(t => t.logoId));
  active.forEach((t, i) => { t.logoId = logoIds[i]; });
  selectedId = null;
  undoStack = [];
  setStatus('Tiles shuffled! New arrangements available.');
  render();
}

// ── New Game ──
function newGame() {
  hintPair = null; hintIndex = 0;
  winModal.classList.add('hidden');
  matchedPairs = 0;
  undoStack = [];
  selectedId = null;
  buildTiles();
  setStatus('New game started. Click a free tile to begin.');
  render();
}

// ── Status ──
function setStatus(msg) {
  statusEl.textContent = msg;
}

// ── Logo Gallery ──
function buildGallery() {
  galleryGridEl.innerHTML = '';
  [...LOGOS].sort((a, b) => a.name.localeCompare(b.name)).forEach(logo => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `${logo.svg}<span>${logo.name}</span>`;
    galleryGridEl.appendChild(card);
  });
}

function showGallery() {
  // Size gallery SVGs to match in-game tile logo size
  const { w, h } = calcTileSize();
  const iconW = Math.round(w * 0.76);
  const iconH = Math.round(h * 0.76);
  galleryGridEl.querySelectorAll('svg').forEach(svg => {
    svg.style.width = iconW + 'px';
    svg.style.height = iconH + 'px';
  });
  galleryEl.classList.remove('hidden');
}

function hideGallery() {
  galleryEl.classList.add('hidden');
}

// ── Event listeners ──
document.getElementById('btnNew').addEventListener('click', newGame);
document.getElementById('btnHint').addEventListener('click', doHint);
document.getElementById('btnUndo').addEventListener('click', doUndo);
document.getElementById('btnShuffle').addEventListener('click', doShuffle);
document.getElementById('btnLogos').addEventListener('click', showGallery);
document.getElementById('btnCloseGallery').addEventListener('click', hideGallery);
document.getElementById('btnNewAfterWin').addEventListener('click', newGame);

galleryEl.addEventListener('click', (e) => {
  if (e.target === galleryEl) hideGallery();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideGallery();
});

// ── Handle responsive resizing ──
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(render, 150);
});

// ── Initialize (defer so flex layout is fully computed) ──
buildGallery();
requestAnimationFrame(() => newGame());
