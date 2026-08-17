import { GroomingApp } from './types'

/**
 * Legacy dataset retained for compatibility with older comparison components.
 * The live homepage now uses source-linked, dated comparison data in src/App.tsx.
 * Keeping this empty prevents stale or unsupported ratings and review claims from
 * accidentally resurfacing if a legacy component is reintroduced.
 */
export const groomingApps: GroomingApp[] = []
