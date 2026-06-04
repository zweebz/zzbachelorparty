/**
 * Notification/Toast system with queue management
 */

import { getElement, show, hide, setText, append, clear } from '../utils/dom.js';
import { DEBOUNCE_TIMES } from '../constants.js';

let toastQueue = [];
let isToastDisplaying = false;

/**
 * Show toast notification
 */
export function showToast(message, duration = DEBOUNCE_TIMES.TOAST_DURATION) {
    toastQueue.push({ message, duration });
    processToastQueue();
}

/**
 * Process next toast in queue
 */
function processToastQueue() {
    if (isToastDisplaying || toastQueue.length === 0) return;

    isToastDisplaying = true;
    const { message, duration } = toastQueue.shift();

    const toastBox = getElement('toast-box');
    const toastMessage = getElement('toast-message');

    if (toastBox && toastMessage) {
        setText('toast-message', message);
        show('toast-box');

        setTimeout(() => {
            hide('toast-box');
            isToastDisplaying = false;
            processToastQueue();
        }, duration);
    }
}

/**
 * Hide current toast
 */
export function hideToast() {
    hide('toast-box');
    isToastDisplaying = false;
    toastQueue = [];
}

/**
 * Clear all queued toasts
 */
export function clearToastQueue() {
    toastQueue = [];
    hideToast();
}

/**
 * Show error toast
 */
export function showErrorToast(error) {
    showToast(`⚠️ ${error}`);
}

/**
 * Show success toast
 */
export function showSuccessToast(message) {
    showToast(`✅ ${message}`);
}

/**
 * Show warning toast
 */
export function showWarningToast(message) {
    showToast(`⚠️ ${message}`);
}

/**
 * Get current toast queue length
 */
export function getToastQueueLength() {
    return toastQueue.length;
}
