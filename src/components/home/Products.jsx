import SingleProduct from "./SingleProduct";


const Products = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

            <div className="flex justify-center gap-2">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>
        </div>
    );
};

export default Products;