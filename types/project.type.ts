interface IProjectDetailDataImage {
  src: string;
  alt: string;
}

interface IProjectDetailDataLink {
  href: string;
  target?: string;
  text: string;
}

interface IProjectDetailDataVideo {
  src: string;
  alt: string;
  controls: boolean;
  loop: boolean;
  muted: boolean;
  autoplay: boolean;
}

interface IImageGridItem {
  src: string;
  alt: string;
  cap?: string;
}

interface IBibliographyItem {
  authors: string;
  year: string;
  title: string;
  site: string;
  publisher: string;
  href: string;
}

interface IProjectDetail {
  type: string;
  columns?: number;
  data:
    | string
    | IProjectDetailDataImage
    | IProjectDetailDataLink
    | IProjectDetailDataVideo
    | Array<string>
    | Array<IBibliographyItem>
    | Array<IImageGridItem>;
}

interface IProject {
  id: string;
  name: string;
  cover: string;
  title: string;
  route: string;
  date: string;
  wip?: boolean;
  detail: IProjectDetail[];
}

export type {
  IProject,
  IProjectDetail,
  IProjectDetailDataImage,
  IProjectDetailDataLink,
  IProjectDetailDataVideo,
  IImageGridItem,
  IBibliographyItem,
};
