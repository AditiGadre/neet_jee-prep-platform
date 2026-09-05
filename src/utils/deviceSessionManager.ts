/**
 * 2-Device Concurrency Security Manager for NeetCbt Exam Test Platform
 * Limits each student account / roll number to a maximum of 2 active devices.
 */

export interface ActiveDevice {
  deviceId: string;
  deviceName: string;
  os: string;
  browser: string;
  lastActive: string;
  ipMock?: string;
}

const DEVICE_KEY_PREFIX = 'neet_device_sessions_';
const CURRENT_DEVICE_ID_KEY = 'neet_current_device_id';

/**
 * Get or create unique fingerprint ID for this browser/device
 */
export function getCurrentDeviceId(): string {
  let deviceId = localStorage.getItem(CURRENT_DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = 'dev_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    localStorage.setItem(CURRENT_DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
}

/**
 * Detect Device Name / Browser / OS
 */
export function getDeviceInfo(): { deviceName: string; os: string; browser: string } {
  const ua = navigator.userAgent;
  let os = 'Windows';
  if (/android/i.test(ua)) os = 'Android Device';
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS Device';
  else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
  else if (/linux/i.test(ua)) os = 'Linux';

  let browser = 'Chrome';
  if (/firefox/i.test(ua)) browser = 'Firefox';
  else if (/edg/i.test(ua)) browser = 'Edge';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';

  return {
    deviceName: `${os} (${browser})`,
    os,
    browser
  };
}

/**
 * Check if current device is authorized (Max 2 devices)
 */
export function checkDeviceAuthorization(userEmailOrRoll: string): {
  authorized: boolean;
  activeDevices: ActiveDevice[];
  currentDeviceId: string;
} {
  const currentDevId = getCurrentDeviceId();
  const info = getDeviceInfo();
  const storageKey = `${DEVICE_KEY_PREFIX}${userEmailOrRoll.toLowerCase()}`;

  let devices: ActiveDevice[] = [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) devices = JSON.parse(raw);
  } catch {
    devices = [];
  }

  // Check if current device is already in list
  const existingIndex = devices.findIndex(d => d.deviceId === currentDevId);
  if (existingIndex >= 0) {
    // Update last active
    devices[existingIndex].lastActive = new Date().toISOString();
    devices[existingIndex].deviceName = info.deviceName;
    localStorage.setItem(storageKey, JSON.stringify(devices));
    return { authorized: true, activeDevices: devices, currentDeviceId: currentDevId };
  }

  // If under limit of 2 devices, register this device automatically
  if (devices.length < 2) {
    const newDevice: ActiveDevice = {
      deviceId: currentDevId,
      deviceName: info.deviceName,
      os: info.os,
      browser: info.browser,
      lastActive: new Date().toISOString()
    };
    devices.push(newDevice);
    localStorage.setItem(storageKey, JSON.stringify(devices));
    return { authorized: true, activeDevices: devices, currentDeviceId: currentDevId };
  }

  // Exceeds 2 devices limit!
  return { authorized: false, activeDevices: devices, currentDeviceId: currentDevId };
}

/**
 * Deauthorize a specific device or replace with current device
 */
export function deauthorizeDevice(userEmailOrRoll: string, deviceIdToRemove: string): ActiveDevice[] {
  const storageKey = `${DEVICE_KEY_PREFIX}${userEmailOrRoll.toLowerCase()}`;
  let devices: ActiveDevice[] = [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) devices = JSON.parse(raw);
  } catch {
    devices = [];
  }

  // Remove target device
  devices = devices.filter(d => d.deviceId !== deviceIdToRemove);

  // Add current device if missing
  const currentDevId = getCurrentDeviceId();
  const info = getDeviceInfo();
  if (!devices.some(d => d.deviceId === currentDevId)) {
    devices.push({
      deviceId: currentDevId,
      deviceName: info.deviceName,
      os: info.os,
      browser: info.browser,
      lastActive: new Date().toISOString()
    });
  }

  localStorage.setItem(storageKey, JSON.stringify(devices));
  return devices;
}
