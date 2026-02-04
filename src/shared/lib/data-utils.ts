/**
 * Utility functions for handling data conversions and normalizations
 */

/**
 * Converts an object or array to an array
 * @param items - Can be an array, object, or undefined
 * @returns Always returns an array
 */
export function ensureArray<T>(items: T[] | Record<string, T> | undefined): T[] {
  if (Array.isArray(items)) return items
  if (!items || typeof items !== 'object') return []
  try {
    return Object.values(items)
  } catch {
    return []
  }
}

/**
 * Converts object headers to an ordered array for ComparisonTable
 * Assumes headers object has format: { parameter, ozonation, chlorination, [optional value3Key] }
 * @param headers - Object with header strings
 * @returns Array of header strings in correct order (3 or 4 elements)
 */
export function convertHeadersObjectToArray(
  headers: Record<string, string> | string[] | undefined,
): [string, string, string] | [string, string, string, string] {
  if (!headers) return ['', '', '']

  // If already an array, return it
  if (Array.isArray(headers)) {
    return (headers.length === 4 ? headers : [headers[0] ?? '', headers[1] ?? '', headers[2] ?? '']) as
      | [string, string, string]
      | [string, string, string, string]
  }

  // Convert object to array in the expected order
  const keys = Object.keys(headers)
  const result = [headers[keys[0]] ?? '', headers[keys[1]] ?? '', headers[keys[2]] ?? '']

  if (keys[3] && headers[keys[3]]) {
    result.push(headers[keys[3]])
  }

  return result as [string, string, string] | [string, string, string, string]
}

/**
 * Converts headers to array for DataTable (handles both array and object formats)
 * @param headers - Object or array of header strings
 * @returns Array of header strings
 */
export function ensureHeadersArray(headers: Record<string, string> | string[] | undefined): string[] {
  if (!headers) return []

  // If already an array, return it
  if (Array.isArray(headers)) return headers

  // Convert object to array
  return Object.values(headers)
}

/**
 * Converts object rows to an array of row objects for ComparisonTable
 * Only handles objects and arrays of objects with parameter/value1/value2 structure
 * Ensures all required fields are present (fills empty strings if missing)
 * @param rows - Object or array of comparison row objects (properties can be optional)
 * @returns Array of row objects with required parameter/value1/value2 fields guaranteed
 */
export function convertRowsObjectToArray(
  rows:
    | Record<string, { parameter?: string; value1?: string; value2?: string; value3?: string }>
    | Array<{ parameter?: string; value1?: string; value2?: string; value3?: string }>
    | string[][]
    | undefined,
): Array<{ parameter: string; value1: string; value2: string; value3?: string }> {
  if (!rows) return []

  let rowArray: Array<{ parameter?: string; value1?: string; value2?: string; value3?: string }> = []

  // If already an array of objects, use as-is
  if (Array.isArray(rows)) {
    // If it's an array of objects (has parameter property), use it
    if (rows.length > 0 && typeof rows[0] === 'object' && 'parameter' in rows[0]) {
      rowArray = rows as Array<{ parameter?: string; value1?: string; value2?: string; value3?: string }>
    }
    // For other array formats (like string[][]), return empty
    else {
      return []
    }
  } else {
    // Convert object to array
    rowArray = Object.values(rows) as Array<{ parameter?: string; value1?: string; value2?: string; value3?: string }>
  }

  // Ensure all required fields are present as non-undefined strings
  return rowArray.map((row) => ({
    parameter: row.parameter ?? '',
    value1: row.value1 ?? '',
    value2: row.value2 ?? '',
    value3: row.value3,
  }))
}

/**
 * Converts row objects to a 2D array format for DataTable component
 * Handles objects with string/number values or already-formatted arrays
 * @param rows - Either object rows, array of arrays, or undefined
 * @returns A 2D array of (string | number)[][] format
 */
export function ensureRowsArray(
  rows:
    | (string | number)[][]
    | Array<Record<string, string | number>>
    | Record<string, { parameter?: string; value1?: string; value2?: string; value3?: string }>
    | undefined,
): (string | number)[][] {
  if (!rows) return []

  // If already an array, check what type of data it contains
  if (Array.isArray(rows)) {
    if (rows.length === 0) return []

    const firstItem = rows[0]

    // Check if it's already a 2D array (array of arrays with primitives)
    if (Array.isArray(firstItem)) {
      // It's already in the right format
      return rows as (string | number)[][]
    }

    // Check if it's an array of objects
    if (typeof firstItem === 'object' && firstItem !== null) {
      // Handle comparison table format: { parameter, value1, value2, value3 }
      if ('parameter' in firstItem) {
        return (rows as Array<{ parameter?: string; value1?: string; value2?: string; value3?: string }>).map((row) => {
          const values = [row.parameter ?? '', row.value1 ?? '', row.value2 ?? '']
          // Add value3 only if it exists
          if (row.value3) {
            values.push(row.value3)
          }
          return values
        })
      }

      // Handle simple object format: { key: value } - convert values to array
      return rows.map((row) => Object.values(row) as (string | number)[])
    }
  }

  return []
}
