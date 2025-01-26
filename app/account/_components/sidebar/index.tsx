import { List } from "./list";
import { NewOrgButton } from "./new-org-button";

export const Sidebar = () => {
  return (
    <div className="h-full w-[60px] ">
      <List />
      <NewOrgButton />
    </div>
  );
};
