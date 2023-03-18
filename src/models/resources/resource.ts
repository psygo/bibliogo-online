interface _Resource {
  title: string;
  subtitle?: string;
  externalLinks?: readonly URL[];
}
type Resource = Readonly<_Resource>;
export default Resource;
