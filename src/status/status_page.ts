export function getVpnHealthStatus(): "healthy" | "degraded" | "down" {
  // Demo bug: status page can report healthy while users cannot connect.
  return "healthy";
}
