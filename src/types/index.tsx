export interface IProducts {
  id: string
  name: string,
  slug: string,
  line: string,
  category: string,
  ncm?: string | null | undefined;
  categoryEn?: string | null | undefined;
  categoryEs?: string | null | undefined;
  description: string,
  descriptionEn?: string | null | undefined;
  descriptionEs?: string | null | undefined;
  videoId: string,
  sticker?: {
    url: string
  } | null | undefined
  manual?: {
    url: string
  } | null | undefined,
  image: {
    url: string
  }[],
  folder?: {
    url: string;
  }[] | null | undefined
}