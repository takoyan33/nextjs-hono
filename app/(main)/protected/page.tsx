import { UserButton } from "@clerk/nextjs";

const ProtectedPage = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        protected
      </h2>
      <UserButton />
      <div className="flex items-center justify-center gap-x-2 mb-2"></div>
    </main>
  );
};

export default ProtectedPage;

