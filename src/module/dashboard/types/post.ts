export interface Blog {
  id: string;
  name: string;
  date: Date;
  published: boolean;
}

export interface DataType {
  blogs: Blog[];
}