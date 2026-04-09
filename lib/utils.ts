/**
 * Utility functions for CBS IT Union website
 */

/**
 * Format a date string to readable format
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date (e.g., "April 25, 2026")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Combine class names conditionally
 * @param classes - Class names to combine
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
