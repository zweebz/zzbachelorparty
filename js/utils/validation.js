/**
 * Data validation utilities
 */

import { MIN_SCORE, MAX_SCORE } from '../constants.js';

/**
 * Validate score is within acceptable range
 */
export function validateScore(score) {
    const num = parseInt(score);
    if (isNaN(num)) {
        return { valid: false, error: 'Score must be a number' };
    }
    if (num < MIN_SCORE) {
        return { valid: false, error: `Score cannot be below ${MIN_SCORE}` };
    }
    if (num > MAX_SCORE) {
        return { valid: false, error: `Score cannot exceed ${MAX_SCORE}` };
    }
    return { valid: true, value: num };
}

/**
 * Validate team name exists in team list
 */
export function validateTeamName(teamName, allowedTeams) {
    if (!teamName || typeof teamName !== 'string') {
        return { valid: false, error: 'Invalid team name' };
    }
    if (!allowedTeams.includes(teamName)) {
        return { valid: false, error: `Team "${teamName}" not found` };
    }
    return { valid: true, value: teamName };
}

/**
 * Validate match key
 */
export function validateMatchKey(matchKey, validKeys) {
    if (!validKeys.includes(matchKey)) {
        return { valid: false, error: `Invalid match key: ${matchKey}` };
    }
    return { valid: true, value: matchKey };
}

/**
 * Validate team key (t1 or t2)
 */
export function validateTeamKey(teamKey, validKeys = ['t1', 't2']) {
    if (!validKeys.includes(teamKey)) {
        return { valid: false, error: `Invalid team key: ${teamKey}` };
    }
    return { valid: true, value: teamKey };
}

/**
 * Validate event ID
 */
export function validateEventId(eventId, validEventIds) {
    if (!validEventIds.includes(eventId)) {
        return { valid: false, error: `Invalid event ID: ${eventId}` };
    }
    return { valid: true, value: eventId };
}

/**
 * Validate competitor has required fields
 */
export function validateCompetitor(competitor) {
    const requiredFields = ['name', 'team', 'ratings', 'alcohol', 'nonAlcoholic'];
    for (const field of requiredFields) {
        if (!competitor[field]) {
            return { valid: false, error: `Competitor missing field: ${field}` };
        }
    }
    return { valid: true };
}

/**
 * Determine winner between two scores
 */
export function getWinner(score1, score2) {
    if (score1 === score2) {
        return null; // Tie
    }
    return score1 > score2 ? 'team1' : 'team2';
}

/**
 * Check if match has a winner
 */
export function hasWinner(score1, score2) {
    return score1 !== score2;
}
