export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IAuthor {
  name: string;
  email: string;
}

export interface IComment {
  email: string;
  body: string;
}
