import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BASE_PATH } from "./constants";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// Helper function to get basePath-aware asset paths
// This ensures assets work correctly with GitHub Pages basePath
export function getAssetPath(path: string): string {
  // Remove leading slash from path if present, then join
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
}