export interface ProjectFeature {
  title: string;
  expanded: boolean;
  description: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  features: ProjectFeature[];
  techs?: string[];
  urlText?: string;
  url?: string;
}
