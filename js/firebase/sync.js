/**
 * Firebase Firestore real-time sync operations
 */

import { 
    doc, 
    setDoc, 
    getDoc, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { 
    signInAnonymously, 
    signInWithCustomToken, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestoreDb, getFirebaseAuth } from './config.js';
import { showErrorToast } from '../ui/notifications.js';

const appId = typeof __app_id !== 'undefined' ? __app_id : 'zzbachelorcup';
const STATE_COLLECTION = 'state';

/**
 * Initialize Firebase authentication
 */
export async function initFirebaseAuth() {
    const auth = getFirebaseAuth();
    
    try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
        } else {
            await signInAnonymously(auth);
        }
        return true;
    } catch (err) {
        console.error("Firebase Auth initialization failed:", err);
        showErrorToast("Authentication failed");
        return false;
    }
}

/**
 * Watch auth state changes
 */
export function watchAuthState(callback) {
    const auth = getFirebaseAuth();
    onAuthStateChanged(auth, callback);
}

/**
 * Get Firestore document reference
 */
function getDocRef(docPath) {
    const db = getFirestoreDb();
    const pathArray = ['artifacts', appId, 'public', 'data', STATE_COLLECTION, ...docPath];
    return doc(db, ...pathArray);
}

/**
 * Set up real-time listener for competitors
 */
export function listenToCompetitors(callback, errorCallback) {
    try {
        const competitorsRef = getDocRef(['competitors']);
        
        return onSnapshot(competitorsRef, (snap) => {
            if (snap.exists()) {
                callback(snap.data().list || []);
            } else {
                callback([]);
            }
        }, (error) => {
            console.error("Competitors listener error:", error);
            if (errorCallback) errorCallback(error);
        });
    } catch (err) {
        console.error("Failed to setup competitors listener:", err);
        if (errorCallback) errorCallback(err);
    }
}

/**
 * Set up real-time listener for event scores
 */
export function listenToEventScores(callback, errorCallback) {
    try {
        const eventScoresRef = getDocRef(['eventScores']);
        
        return onSnapshot(eventScoresRef, (snap) => {
            if (snap.exists()) {
                callback(snap.data().scores || {});
            } else {
                callback({});
            }
        }, (error) => {
            console.error("Event scores listener error:", error);
            if (errorCallback) errorCallback(error);
        });
    } catch (err) {
        console.error("Failed to setup event scores listener:", err);
        if (errorCallback) errorCallback(err);
    }
}

/**
 * Save competitors to Firestore
 */
export async function saveCompetitors(competitorsList) {
    try {
        const competitorsRef = getDocRef(['competitors']);
        await setDoc(competitorsRef, { list: competitorsList });
        return true;
    } catch (err) {
        console.error("Error saving competitors:", err);
        showErrorToast("Failed to save competitors data");
        return false;
    }
}

/**
 * Save event scores to Firestore
 */
export async function saveEventScores(scoresData) {
    try {
        const eventScoresRef = getDocRef(['eventScores']);
        await setDoc(eventScoresRef, { scores: scoresData });
        return true;
    } catch (err) {
        console.error("Error saving event scores:", err);
        showErrorToast("Failed to save event scores");
        return false;
    }
}

/**
 * Fetch competitors once
 */
export async function fetchCompetitors() {
    try {
        const competitorsRef = getDocRef(['competitors']);
        const snap = await getDoc(competitorsRef);
        return snap.exists() ? snap.data().list || [] : [];
    } catch (err) {
        console.error("Error fetching competitors:", err);
        return [];
    }
}

/**
 * Fetch event scores once
 */
export async function fetchEventScores() {
    try {
        const eventScoresRef = getDocRef(['eventScores']);
        const snap = await getDoc(eventScoresRef);
        return snap.exists() ? snap.data().scores || {} : {};
    } catch (err) {
        console.error("Error fetching event scores:", err);
        return {};
    }
}

/**
 * Seed initial state in Firestore
 */
export async function seedInitialState(competitorsList, eventScoresData) {
    try {
        const competitorsRef = getDocRef(['competitors']);
        const eventScoresRef = getDocRef(['eventScores']);

        await Promise.all([
            setDoc(competitorsRef, { list: competitorsList }),
            setDoc(eventScoresRef, { scores: eventScoresData })
        ]);

        return true;
    } catch (err) {
        console.error("Error seeding initial state:", err);
        return false;
    }
}
