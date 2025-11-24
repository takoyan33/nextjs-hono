import React from "react";

type Product = {
	id: number;
	title: string;
	price: number;
	userId: number;
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
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">
				MSW Verification (Server Component)
			</h1>
			<div className="space-y-4">
				{products.map((product: Product) => (
					<div key={product.id} className="border p-4 rounded shadow">
						<h2 className="text-xl font-semibold">{product.title}</h2>
						<p className="text-gray-600">{product.price}</p>
						<p className="text-xs text-gray-400 mt-2">
							User ID: {product.userId}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
