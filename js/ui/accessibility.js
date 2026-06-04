/**
 * Accessibility utilities for ARIA labels and semantic enhancements
 */

import { setAttribute, getAttribute } from '../utils/dom.js';

/**
 * Set ARIA label on element
 */
export function setAriaLabel(selector, label) {
    setAttribute(selector, 'aria-label', label);
}

/**
 * Set ARIA description on element
 */
export function setAriaDescription(selector, description) {
    setAttribute(selector, 'aria-describedby', description);
}

/**
 * Set ARIA hidden
 */
export function setAriaHidden(selector, hidden = true) {
    setAttribute(selector, 'aria-hidden', hidden ? 'true' : 'false');
}

/**
 * Set ARIA role
 */
export function setAriaRole(selector, role) {
    setAttribute(selector, 'role', role);
}

/**
 * Set ARIA pressed state for toggle buttons
 */
export function setAriaPressed(selector, pressed = false) {
    setAttribute(selector, 'aria-pressed', pressed ? 'true' : 'false');
}

/**
 * Set ARIA expanded state for collapsible elements
 */
export function setAriaExpanded(selector, expanded = false) {
    setAttribute(selector, 'aria-expanded', expanded ? 'true' : 'false');
}

/**
 * Enhance button for accessibility
 */
export function enhanceButton(selector, label) {
    setAriaLabel(selector, label);
    setAttribute(selector, 'role', 'button');
}

/**
 * Add keyboard support to button-like elements
 */
export function addKeyboardSupport(selector, callback) {
    const el = document.getElementById(selector) || document.querySelector(selector);
    if (!el) return;

    el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            callback();
        }
    });
}

/**
 * Set focus management for modals
 */
export function setModalFocus(modalSelector, focusableSelectors = []) {
    const modal = document.getElementById(modalSelector) || document.querySelector(modalSelector);
    if (!modal) return;

    const focusables = focusableSelectors.length > 0
        ? focusableSelectors.map(s => document.getElementById(s) || document.querySelector(s)).filter(Boolean)
        : modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

    if (focusables.length === 0) return;

    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });

    firstFocusable.focus();
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message, priority = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

/**
 * Add skip to main content link
 */
export function createSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only';
    document.body.insertBefore(skipLink, document.body.firstChild);
}
