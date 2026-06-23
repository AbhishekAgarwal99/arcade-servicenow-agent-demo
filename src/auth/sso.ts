export async function handleSsoCallback(session: string): Promise<void> {
  if (!session) throw new Error("missing session after SSO callback");
}
