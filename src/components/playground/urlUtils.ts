import LZString from 'lz-string';

/**
 * Encode source code to a URL-safe compressed string
 */
export function encodePlaygroundCode(code: string): string {
  try {
    return LZString.compressToEncodedURIComponent(code);
  } catch {
    // Fallback if compression fails
    return encodeURIComponent(btoa(encodeURIComponent(code)));
  }
}

/**
 * Decode source code from a URL parameter safely with validation
 */
export function decodePlaygroundCode(param: string): string | null {
  if (!param || typeof param !== 'string') return null;
  try {
    const decompressed = LZString.decompressFromEncodedURIComponent(param);
    if (decompressed && decompressed.trim().length > 0) {
      return decompressed;
    }
  } catch {
    // Try base64 fallback
  }

  try {
    const decoded = decodeURIComponent(atob(decodeURIComponent(param)));
    if (decoded && decoded.trim().length > 0) {
      return decoded;
    }
  } catch {
    // Return null if corrupt
  }

  return null;
}
