// Google Cloud Console -> OAuth client ID -> "Web application" client (not the Android one).
// Same value the backend verifies ID tokens against as GOOGLE_WEB_CLIENT_ID.
export const GOOGLE_WEB_CLIENT_ID =
  process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID ||
  '630400336451-8upg5qo5o4niav7nq13s63vljhhiqfgs.apps.googleusercontent.com';
