"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((org) => (
        <Item
          key={org.organization.id}
          id={org.organization.id}
          name={org.organization.name}
          imageUrl={org.organization.imageUrl}
        />
      ))}
    </ul>
  );
};
