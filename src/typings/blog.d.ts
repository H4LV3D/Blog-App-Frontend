export type Blog = {
  title: string;
  episode?: string;
  description?: string;
  duration?: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};

export type BlogUser = {
  _id?: string;
  avatarId?: string | number | null;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  emailVerified?: string;
};

export type newBlog = {
  title: string;
  content: string;
  image: string;
  author: BlogUser;
  [key: string]: any;
};
