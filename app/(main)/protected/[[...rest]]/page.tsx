import { dark } from "@clerk/themes";
import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { UserProfileModal } from "@/components/modals/user-profile-modal";

const ProtectedPage = async () => {
  // const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className="flex flex-col p-0 lg:p-10">
      {/* <div className="flex items-center gap-x-2">
        <UserButton />
        <p>User ID: {userId}</p>
      </div> */}

      <ul className="flex flex-col p-0 lg-p-6">
        <li>
          User Name: {user?.firstName} {user?.lastName}
        </li>
        <li>User Email: {user?.emailAddresses?.[0].emailAddress}</li>
        <li className="flex gap-x-2">
          User image:
          <Image
            src={user?.imageUrl || ""}
            width={30}
            height={30}
            alt="User Image"
          />
        </li>
        <li className="my-4">
          <UserProfileModal
            email={user?.emailAddresses?.[0].emailAddress || ""}
          />
        </li>
      </ul>
      <UserProfile
        appearance={{
          baseTheme: dark,
          elements: {
            cardBox: {
              // boxShadow: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default ProtectedPage;
