export const EMAIL = 'hello@yasd.io';
export const DEVELOPER = 'YASD';
export const BASE = import.meta.env.BASE_URL;
// The private app repo's workflow publishes pure-scan.apk as a release asset of this repo.
export const DOWNLOAD_URL =
  'https://github.com/matthiasrondenet/pure-scan-landing/releases/latest/download/pure-scan.apk';
export const PRIVACY_URL = `${BASE}privacy/`;

// Closed test on Google Play. Fill both once the closed track exists (Play Console: Testers
// tab for the opt-in link, plus the open-join Google Group added to the track). The test
// block stays hidden while either is empty.
export const TEST_GROUP_URL = '' as string;
export const TEST_OPTIN_URL = '' as string;
