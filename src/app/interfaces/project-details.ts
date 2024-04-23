export interface ProjectDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  features: {
    title: string;
    expanded: boolean;
    description: string;
  }[];
  techs: string[];
  urlText: string;
  url: string;
}
[];
