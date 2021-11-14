export type UserProfile = {
  id: number;
  name: string;
};

export type Comment = {
  id: number;
  user: UserProfile;
  rating: number;
  comment: string;
  date: Date;
};
