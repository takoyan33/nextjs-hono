const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="item-center flex h-full w-full justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
