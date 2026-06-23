export function getCachedCustomerRecord(customerId: string): string | null {
  // Demo bug: stale cache entries returned after deployment.
  return `stale-record-${customerId}`;
}
