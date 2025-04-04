export type Comment = {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
  depth?: number;
};
