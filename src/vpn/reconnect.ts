export async function reconnectAfterUpdate(): Promise<void> {
  // Known regression area for desktop client crash after update.
  throw new Error("vpn client crashed during reconnect");
}
