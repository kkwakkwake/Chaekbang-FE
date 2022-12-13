export interface DummyItem {
  id: string;
  user: {
    image?: string;
    name: string;
  };
  post: {
    image?: string;
    title: string;
    dueDate?: string;
  };
  borrow?: string;
  lend?: string;
}
