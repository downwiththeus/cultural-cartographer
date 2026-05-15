import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { MovieRecord } from "./green";

const STORE_PATH = join(process.cwd(), "data/generated/user-movies.json");

export function loadUserMovies(): MovieRecord[] {
  if (!existsSync(STORE_PATH)) return [];
  try {
    return JSON.parse(readFileSync(STORE_PATH, "utf-8")) as MovieRecord[];
  } catch {
    return [];
  }
}

export function saveUserMovie(record: MovieRecord): void {
  // Best-effort local persistence. This is a no-op in serverless environments
  // where the filesystem is read-only (e.g. Vercel Functions). The scrape
  // response is still returned to the client regardless of whether this
  // succeeds.
  try {
    const movies = loadUserMovies();
    const idx = movies.findIndex((m) => m.slug === record.slug);
    if (idx >= 0) {
      movies[idx] = record;
    } else {
      movies.push(record);
    }
    writeFileSync(STORE_PATH, JSON.stringify(movies, null, 2));
  } catch {
    // Silently ignore — persistence is unavailable in this environment.
  }
}
