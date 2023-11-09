export type TypeTemplate = {
  title: string | JSX.Element;
  image: string;
  content: {
    id: number;
    title: string | JSX.Element;
    items: {
      label: JSX.Element | string;
      value: string;
    }[];
  }[];
};
