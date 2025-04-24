import { nanoid } from 'nanoid';

const userIdMappings: Record<string, string> = {};

export function hashUserId(userId: string): string | null {
  if (!userId) return null;

  if (!userIdMappings[userId]) {

    const hashedId = nanoid(10);
    userIdMappings[userId] = hashedId;
    
    try {
      const mappings = JSON.parse(sessionStorage.getItem('userIdMappings') || '{}');
      mappings[userId] = hashedId;
      sessionStorage.setItem('userIdMappings', JSON.stringify(mappings));
    } catch (error) {
      console.error('Lỗi khi lưu mapping:', error);
    }
  }
  
  return userIdMappings[userId];
}
