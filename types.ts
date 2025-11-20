export enum View {
  HOME = 'HOME',
  SESSIONS = 'SESSIONS',
  AI_STUDIO = 'AI_STUDIO',
  PROFILE = 'PROFILE'
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export interface YogaSession {
  id: string;
  title: string;
  duration: string;
  calories: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

export interface DailyStat {
  day: string;
  calories: number;
}

export interface AIEditState {
  originalImage: string | null;
  generatedImage: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}