export async function postIncidentAlert(channelId: string, message: string): Promise<void> {
  if (!channelId) throw new Error("missing slack channel id");
  console.log(message);
}
