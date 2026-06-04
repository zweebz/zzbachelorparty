/**
 * Tab switching and navigation UI module
 */

import { getElement, getElements, addClass, removeClass, show, hide } from '../utils/dom.js';

/**
 * Initialize tabs system
 */
export function initTabs() {
    const tabButtons = getElements('[data-tab-btn]');
    const tabPanes = getElements('[data-tab-pane]');

    tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab-btn');
            switchTab(tabId, tabButtons, tabPanes);
        });
    });
}

/**
 * Switch to specific tab
 */
export function switchTab(tabId, tabButtons = null, tabPanes = null) {
    const buttons = tabButtons || getElements('[data-tab-btn]');
    const panes = tabPanes || getElements('[data-tab-pane]');

    // Hide all panes
    panes.forEach((pane) => {
        hide(pane.id);
    });

    // Deactivate all buttons
    buttons.forEach((btn) => {
        btn.classList.remove('bg-knicks-blue', 'text-white', 'shadow-md');
        btn.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
    });

    // Activate selected tab
    const activePane = document.querySelector(`[data-tab-pane="${tabId}"]`);
    const activeBtn = document.querySelector(`[data-tab-btn="${tabId}"]`);

    if (activePane) {
        show(activePane.id);
    }

    if (activeBtn) {
        activeBtn.classList.add('bg-knicks-blue', 'text-white', 'shadow-md');
        activeBtn.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
    }

    // Callback for special handling
    return activePane;
}

/**
 * Get currently active tab
 */
export function getActiveTab() {
    const activeTabs = document.querySelectorAll('[data-tab-pane]:not(.hidden)');
    return activeTabs.length > 0 ? activeTabs[0].getAttribute('data-tab-pane') : null;
}
