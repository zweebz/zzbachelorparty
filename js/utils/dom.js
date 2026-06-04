/**
 * DOM manipulation utilities
 */

/**
 * Query selector wrapper with error handling
 */
export function getElement(selector) {
    const el = document.getElementById(selector) || document.querySelector(selector);
    if (!el) {
        console.warn(`Element not found: ${selector}`);
    }
    return el;
}

/**
 * Query all elements
 */
export function getElements(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Set text content safely
 */
export function setText(selector, text) {
    const el = getElement(selector);
    if (el) {
        el.textContent = text;
    }
}

/**
 * Set HTML content safely
 */
export function setHTML(selector, html) {
    const el = getElement(selector);
    if (el) {
        el.innerHTML = html;
    }
}

/**
 * Add class to element
 */
export function addClass(selector, className) {
    const el = getElement(selector);
    if (el) {
        el.classList.add(className);
    }
}

/**
 * Remove class from element
 */
export function removeClass(selector, className) {
    const el = getElement(selector);
    if (el) {
        el.classList.remove(className);
    }
}

/**
 * Toggle class on element
 */
export function toggleClass(selector, className) {
    const el = getElement(selector);
    if (el) {
        el.classList.toggle(className);
    }
}

/**
 * Add event listener
 */
export function addEventListener(selector, event, callback) {
    const el = getElement(selector);
    if (el) {
        el.addEventListener(event, callback);
    }
}

/**
 * Add click event listener
 */
export function onClick(selector, callback) {
    addEventListener(selector, 'click', callback);
}

/**
 * Set attribute
 */
export function setAttribute(selector, attr, value) {
    const el = getElement(selector);
    if (el) {
        el.setAttribute(attr, value);
    }
}

/**
 * Get attribute
 */
export function getAttribute(selector, attr) {
    const el = getElement(selector);
    return el ? el.getAttribute(attr) : null;
}

/**
 * Set value on input elements
 */
export function setValue(selector, value) {
    const el = getElement(selector);
    if (el) {
        el.value = value;
    }
}

/**
 * Get value from input elements
 */
export function getValue(selector) {
    const el = getElement(selector);
    return el ? el.value : null;
}

/**
 * Show element
 */
export function show(selector) {
    removeClass(selector, 'hidden');
}

/**
 * Hide element
 */
export function hide(selector) {
    addClass(selector, 'hidden');
}

/**
 * Toggle visibility
 */
export function toggleVisibility(selector) {
    toggleClass(selector, 'hidden');
}

/**
 * Clear element content
 */
export function clear(selector) {
    setHTML(selector, '');
}

/**
 * Create element with classes
 */
export function createElement(tag, classes = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (classes) {
        el.className = classes;
    }
    if (innerHTML) {
        el.innerHTML = innerHTML;
    }
    return el;
}

/**
 * Append child to parent
 */
export function append(parentSelector, child) {
    const parent = getElement(parentSelector);
    if (parent) {
        if (typeof child === 'string') {
            parent.insertAdjacentHTML('beforeend', child);
        } else {
            parent.appendChild(child);
        }
    }
}

/**
 * Get bounding rectangle of element
 */
export function getBounds(selector) {
    const el = getElement(selector);
    return el ? el.getBoundingClientRect() : null;
}

/**
 * Check if element has class
 */
export function hasClass(selector, className) {
    const el = getElement(selector);
    return el ? el.classList.contains(className) : false;
}
