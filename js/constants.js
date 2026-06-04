/**
 * Constants and configuration for ZZ Bachelor Cup 2026
 */

// Firebase configuration
export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAd97W7fjRXHqtljXPdkzs4xRMiSePRvs4",
    authDomain: "zzbachelorcup.firebaseapp.com",
    projectId: "zzbachelorcup",
    storageBucket: "zzbachelorcup.firebasestorage.app",
    messagingSenderId: "1093392238882",
    appId: "1:1093392238882:web:8a1403a3edd58ffc39fd7b",
    measurementId: "G-D3CFZQM9B8"
};

// Event definitions
export const EVENTS = [
    { id: 'pool', name: 'Pool (8-Ball)', icon: '🎱', weight: 1, key: 'Pool (8-Ball) 🎱' },
    { id: 'air_hockey', name: 'Air Hockey', icon: '🥏', weight: 1, key: 'Air Hockey 🥏' },
    { id: 'foosball', name: 'Foosball', icon: '⚽', weight: 1, key: 'Foosball ⚽' },
    { id: 'darts', name: 'Darts', icon: '🎯', weight: 1, key: 'Darts 🎯' },
    { id: 'volleyball', name: 'Volleyball', icon: '🏐', weight: 1.5, key: 'Volleyball 🏐' },
    { id: 'beer_pong', name: 'Beer Pong', icon: '🍺', weight: 1, key: 'Beer Pong 🍺' },
    { id: 'flip_cup', name: 'Flip Cup', icon: '🥤', weight: 1, key: 'Flip Cup 🥤' },
    { id: 'cannonball', name: 'Cannonball Contest', icon: '💣', weight: 1, key: 'Cannonball Contest 💣' },
    { id: 'cornhole', name: 'Cornhole', icon: '🌽', weight: 1, key: 'Cornhole 🌽' },
    { id: 'smash', name: 'Super Smash Bros.', icon: '🎮', weight: 1, key: 'Super Smash Bros. 🎮' }
];

// Competitor roster data
export const COMPETITORS = [
    // The OGs
    {
        name: "Evan Edgar",
        team: "The OGs",
        hydration: "🌊 Fluid Dynamics Specialist: I came here to drink, not to think.",
        ratings: { pool: 5, air_hockey: 3, foosball: 4, darts: 5, volleyball: 5, beer_pong: 5, flip_cup: 5, cannonball: 3, cornhole: 5, smash: 2 },
        smash: "Casual",
        alcohol: ["Light Beers", "IPAs & Craft Beers", "Imported Beers", "Stouts / Wheats", "Tequila", "Whiskey, Bourbon", "Rum", "Gin", "Canned Iced Teas"],
        nonAlcoholic: ["Energy Drinks", "Lemon-Lime Sodas", "Ginger Ale", "Sports Hydration", "Coffee & Cold Brew"],
        dietary: "Salah, Alex, Sam F: No Pork. Explicit request for Oreos."
    },
    {
        name: "Alex McKeen",
        team: "The OGs",
        hydration: "Steady Sipper: Pacing myself nicely to stay in optimal playing shape.",
        ratings: { pool: 3, air_hockey: 3, foosball: 3, darts: 3, volleyball: 3, beer_pong: 3, flip_cup: 3, cannonball: 3, cornhole: 3, smash: 3 },
        smash: "Comfortable",
        alcohol: ["Light Beers", "Imported Beers"],
        nonAlcoholic: ["Lemon-Lime Sodas", "Sports Hydration"],
        dietary: "No Pork."
    },
    {
        name: "Salah Balawi",
        team: "The OGs",
        hydration: "Dedicated Athlete: Zero alcohol. 100% focused on holding the hardware.",
        ratings: { pool: 2, air_hockey: 3, foosball: 3, darts: 2, volleyball: 3, beer_pong: 3, flip_cup: 3, cannonball: 2, cornhole: 3, smash: 2 },
        smash: "Casual",
        alcohol: ["None (Sober Sniper)"],
        nonAlcoholic: ["Sports Hydration", "Lemon-Lime Sodas", "Ginger Ale"],
        dietary: "No Pork. Mandatory request for Oreos at the store."
    },
    // The Harts
    {
        name: "Puto",
        team: "The Harts",
        hydration: "Social Drinker: Drinks in hand, big vibes, enjoying the team matches.",
        ratings: { pool: 4, air_hockey: 4, foosball: 3, darts: 4, volleyball: 3, beer_pong: 4, flip_cup: 3, cannonball: 3, cornhole: 4, smash: 4 },
        smash: "Pro",
        alcohol: ["Light Beers", "Tequila", "Canned Cocktails"],
        nonAlcoholic: ["Sports Hydration", "Lemon-Lime Sodas"],
        dietary: "None."
    },
    {
        name: "Stephan",
        team: "The Harts",
        hydration: "Social Drinker: Savoring cocktails but here to sweep categories.",
        ratings: { pool: 3, air_hockey: 3, foosball: 4, darts: 3, volleyball: 3, beer_pong: 3, flip_cup: 4, cannonball: 3, cornhole: 3, smash: 3 },
        smash: "Comfortable",
        alcohol: ["Light Beers", "Seltzers"],
        nonAlcoholic: ["Ginger Ale", "Sports Hydration"],
        dietary: "Lactose Intolerant / Absolutely No Cilantro."
    },
    {
        name: "Sharmari",
        team: "The Harts",
        hydration: "Steady Sipper: Focused on dynamic bracket performance.",
        ratings: { pool: 3, air_hockey: 3, foosball: 3, darts: 3, volleyball: 3, beer_pong: 3, flip_cup: 3, cannonball: 3, cornhole: 3, smash: 2 },
        smash: "Casual",
        alcohol: ["Light Beers", "Imported Beers"],
        nonAlcoholic: ["Sports Hydration"],
        dietary: "None."
    },
    // The Brunsons
    {
        name: "Big Stacks",
        team: "The Brunsons",
        hydration: "🌊 Fluid Dynamics Specialist: I came here to drink, not to think.",
        ratings: { pool: 4, air_hockey: 4, foosball: 3, darts: 3, volleyball: 3, beer_pong: 4, flip_cup: 4, cannonball: 3, cornhole: 4, smash: 3 },
        smash: "Comfortable",
        alcohol: ["Light Beers", "Tequila", "Gin", "Seltzers"],
        nonAlcoholic: ["Sports Hydration", "Coffee & Cold Brew"],
        dietary: "None."
    },
    {
        name: "Zach Zweibel",
        team: "The Brunsons",
        hydration: "Steady Sipper: Pacing himself elegantly through the high-stakes matchups.",
        ratings: { pool: 3, air_hockey: 4, foosball: 4, darts: 4, volleyball: 3, beer_pong: 4, flip_cup: 4, cannonball: 2, cornhole: 4, smash: 3 },
        smash: "Comfortable",
        alcohol: ["Light Beers", "Seltzers"],
        nonAlcoholic: ["Sports Hydration"],
        dietary: "None."
    },
    {
        name: "Josh",
        team: "The Brunsons",
        hydration: "Steady Sipper: Pacing myself nicely for optimal coordination.",
        ratings: { pool: 3, air_hockey: 3, foosball: 3, darts: 3, volleyball: 3, beer_pong: 3, flip_cup: 3, cannonball: 3, cornhole: 3, smash: 3 },
        smash: "Comfortable",
        alcohol: ["Light Beers", "IPAs & Craft Beers"],
        nonAlcoholic: ["Sports Hydration"],
        dietary: "None."
    },
    // The KATs
    {
        name: "David",
        team: "The KATs",
        hydration: "Social Drinker: Enjoys the celebration matches.",
        ratings: { pool: 3, air_hockey: 3, foosball: 3, darts: 3, volleyball: 3, beer_pong: 3, flip_cup: 3, cannonball: 2, cornhole: 3, smash: 1 },
        smash: "Novice",
        alcohol: ["Ciders", "Imported Beers"],
        nonAlcoholic: ["Sports Hydration"],
        dietary: "Keeps Kosher / Jewish Dietary Standards."
    },
    {
        name: "Sam Fregly",
        team: "The KATs",
        hydration: "Dedicated Athlete: Zero alcohol. 100% focused on controllers.",
        ratings: { pool: 3, air_hockey: 3, foosball: 3, darts: 3, volleyball: 4, beer_pong: 3, flip_cup: 4, cannonball: 3, cornhole: 3, smash: 4 },
        smash: "Pro",
        alcohol: ["None (Sober Sniper)"],
        nonAlcoholic: ["0-Proof / Non-Alcoholic Beers", "Sports Hydration", "Coffee & Cold Brew"],
        dietary: "No Pork. Requested NA Beers at the store."
    },
    {
        name: "Chris Owens",
        team: "The KATs",
        hydration: "Social Drinker: Keeps it balanced and fires up under pressure.",
        ratings: { pool: 3, air_hockey: 3, foosball: 3, darts: 3, volleyball: 3, beer_pong: 4, flip_cup: 4, cannonball: 3, cornhole: 4, smash: 4 },
        smash: "Pro",
        alcohol: ["Light Beers", "Seltzers"],
        nonAlcoholic: ["Sports Hydration"],
        dietary: "None."
    }
];

// Team metadata
export const TEAM_METADATA = {
    "The OGs": { color: "border-orange-500 text-orange-400", badgeBg: "bg-orange-500/10 text-orange-400", hex: "#f97316" },
    "The Harts": { color: "border-blue-500 text-blue-400", badgeBg: "bg-blue-500/10 text-blue-400", hex: "#3b82f6" },
    "The Brunsons": { color: "border-green-500 text-green-400", badgeBg: "bg-green-500/10 text-green-400", hex: "#22c55e" },
    "The KATs": { color: "border-purple-500 text-purple-400", badgeBg: "bg-purple-500/10 text-purple-400", hex: "#a855f7" }
};

// UI constants
export const TEAM_NAMES = ["The OGs", "The Harts", "The Brunsons", "The KATs"];

export const MATCH_KEYS = {
    SEMIFINAL_1: 'sf1',
    SEMIFINAL_2: 'sf2',
    THIRD_PLACE: 'third',
    FINALS: 'finals'
};

export const TEAM_KEYS = {
    TEAM_1: 't1',
    TEAM_2: 't2'
};

// Score validation
export const MIN_SCORE = 0;
export const MAX_SCORE = 1000;

// UI debounce timings (in ms)
export const DEBOUNCE_TIMES = {
    BRACKET_REDRAW: 100,
    RESIZE_HANDLER: 150,
    TOAST_DURATION: 3000
};
