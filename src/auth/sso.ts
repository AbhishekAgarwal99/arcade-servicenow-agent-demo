export async function handleSsoCallback(session: string): Promise<void> {
  // Demo bug: blank screen after redirect when callback state is missing.
  if (!session) {
    throw new Error("missing session after SSO callback");
  }
}
