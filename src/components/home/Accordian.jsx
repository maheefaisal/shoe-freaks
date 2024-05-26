const Accordian = () => {
  return (
    <>
      <div className="py-6">
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Q: What sizes are available for your shoes?
          </div>
          <div className="collapse-content">
            <p>A: We offer a wide range of sizes from US 5 to US 13 for men and US 4 to US 12 for women. Please check the product page for specific availability as it may vary by style.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Q: Do you offer half sizes?
          </div>
          <div className="collapse-content">
            <p>A: Yes, many of our shoe styles are available in half sizes. Please refer to the size dropdown on the product page for exact availability.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Q: How do I know which size to order?
          </div>
          <div className="collapse-content">
            <p>A: We recommend using our size guide, available on each product page. If you're between sizes, consider the type of shoe and how you plan to wear it (e.g., with thick socks or for activities requiring a snug fit).</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
