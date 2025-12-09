export function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} ブログアプリ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
