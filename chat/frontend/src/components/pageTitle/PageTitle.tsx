import { PageTitleType } from "../../types/Types";

const PageTitle = ({ title }: PageTitleType) => {
  return (
    <h2 className="text-white text-center text-xl md:text-2xl lg:md:text-3xl mb-5 pt-5">
      {title}
    </h2>
  );
};
export default PageTitle;
