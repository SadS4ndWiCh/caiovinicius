
export type ProjectImage = {
  id: string,
  url: string,
  width: string,
  height: string,
};
export interface IProject {
  createdAt: string;
  slug: string;
  name: string;
  description: string;
  icon: {
    url: string;
  }
  sourceCode: string;
  demo: string;
  images: ProjectImage[];
};

export interface IFeaturedProject {
  createdAt: string;
  id: string;
  name: string;
  description: string;
  icon: { 
    url: string
  };
}
export interface IPostDetails {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface IPost {
  title: string;
  content: string;
  tags: string[];
  coverImage: {
    url: string;
  }
  date: string;
  excerpt: string;
}
