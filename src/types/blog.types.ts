export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  status: string;
  category: {
    id: string;
    name: string;
    description: string;
    status: string;
  };
  tags: [
    {
      id: string;
      name: string;
      status: string;
    }
  ];
}
