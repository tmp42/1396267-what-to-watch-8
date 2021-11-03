export type UserProfile = {
  id: number;
  name: string;
};

export type Comments = {
  id: number;
  user: UserProfile;
  rating: number;
  comment: string;
  date: string;
};
