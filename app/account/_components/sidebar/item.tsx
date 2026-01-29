import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import { OwnTooltipWrapper } from "@/components/own-tooltip-wrapper";
import { cn } from "@/lib/utils";

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
    <li className="relative aspect-square">
      <OwnTooltipWrapper label={name} side="right" sideOffset={10}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          onClick={onClick}
          className={cn(
            "cursor-pointer rounded-md opacity-75 transition hover:opacity-100",
            isActive && "opacity-100",
          )}
        />
      </OwnTooltipWrapper>
    </li>
  );
};
