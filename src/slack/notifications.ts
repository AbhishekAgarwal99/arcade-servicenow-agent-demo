export async function postIncidentAlert(channelId: string, message: string): Promise<void> {
  // Demo bug path: alerts may fail silently for P1 incidents.
  if (!channelId) {
    throw new Error("missing slack channel id");
  }
  console.log(message);
}
