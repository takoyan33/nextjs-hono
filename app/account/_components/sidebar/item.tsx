import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import { OwnTooltipWrapper } from "@/components/own-tooltip-wrapper";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <li className="aspect-square relative">
      <OwnTooltipWrapper label={name} side="right" sideOffset={10}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </OwnTooltipWrapper>
    </li>
  );
};
