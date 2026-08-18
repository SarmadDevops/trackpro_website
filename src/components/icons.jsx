// Lightweight inline icon set (stroke-based). size via className.
const base = "none";
const common = { fill: base, stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };

export const IconPin = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>);
export const IconTruck = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M3 6h11v9H3z" /><path d="M14 9h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>);
export const IconRoute = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8 6h6a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8" /></svg>);
export const IconShield = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>);
export const IconWrench = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M14 6a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-3 3-3-3 3-3Z" /></svg>);
export const IconChart = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>);
export const IconSearch = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>);
export const IconBell = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>);
export const IconSpeed = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M12 14a8 8 0 1 1 8-8" /><path d="M12 14 16 9" /><path d="M4 20a8 8 0 0 1 16 0" /></svg>);
export const IconDollar = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>);
export const IconChat = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></svg>);
export const IconArrow = (p) => (<svg viewBox="0 0 24 24" {...common} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const IconPlay = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}><path d="M8 5v14l11-7z" /></svg>);
export const IconStar = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.3 3.2L7 14.2 2 9.4l7-.9L12 2Z" /></svg>);
