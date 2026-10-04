import re

with open('src/components/SuperUserModal.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

old = '''export async function fetchAllUnlockRequests(): Promise<StudentUnlockRequest[]> {
  const cloud = await fetchUnlockRequestsFromCloud();
  if (cloud && cloud.length > 0) return cloud;
  
  export function getStoredUnlockRequests(): StudentUnlockRequest[] {'''

new = '''export async function fetchAllUnlockRequests(): Promise<StudentUnlockRequest[]> {
  const cloud = await fetchUnlockRequestsFromCloud();
  if (cloud && cloud.length > 0) return cloud;
  return getStoredUnlockRequests();
}

export function getStoredUnlockRequests(): StudentUnlockRequest[] {'''

code = code.replace(old, new)

with open('src/components/SuperUserModal.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
