// Base path for GitHub Pages deployment
export const REPO_BASE = "/portfolio";

// Check if we're in production
export const isProd = process.env.NODE_ENV === "production" || process.env.CI === "true";

// Get the base path (empty for development, /portfolio for production)
export const BASE_PATH = isProd ? REPO_BASE : "";
