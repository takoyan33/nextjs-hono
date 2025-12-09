type Product = {
  id: number;
  title: string;
  price: number;
};

export const ProductListContainer = async () => {
  const products = await fetch("http://localhost:3000/products/", {
    cache: "no-store",
  });
  const data = await products.json();

  return <ProductListPresentation products={data} />;
};

export const ProductListPresentation = ({
  products,
}: {
  products: Product[];
}) => {
  return (
    <div className="space-y-4">
      {products.map((product: Product) => (
        <div key={product.id} className="rounded border p-4 shadow">
          <h2 className="font-semibold text-xl">{product.title}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};
