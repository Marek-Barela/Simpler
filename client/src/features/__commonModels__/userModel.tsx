export type User = {
  token?: string | null;
  isAuthenticated?: boolean | null;
  isFetching?: boolean;
  user?: {
    date?: Date;
    _id?: string | null;
    name?: string;
    email?: string;
  };
};
