// Shared scroll-position store used by Layout (save/restore) and Header
// (clear on same-category reload). Keeping it in a separate module lets
// both components access the same Map without prop drilling.

export const scrollPositions = new Map<string, number>();

/** Remove the saved scroll position for a path so the next load starts at top. */
export function clearScrollPosition(pathname: string): void {
  scrollPositions.delete(pathname);
}
