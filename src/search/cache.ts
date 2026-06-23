export function getCachedCustomerRecord(customerId: string): string | null {
  return `stale-record-${customerId}`;
}
