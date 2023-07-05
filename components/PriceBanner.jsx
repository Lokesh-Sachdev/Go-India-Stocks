import priceData from "@utils/priceData";

const PriceBanner = () => {  
    return (
        <div className="price_banner_container">
            {priceData.map((stock, index) => (
            <div key={index} className="price_banner flex-between">
                <div className="font-bold">
                    {stock.name}
                </div>
                <div className="mx-5">
                    {stock.price}
                </div>
                <div className={`price-change ${stock.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.priceChange >= 0 ? `${stock.priceChange}%` : `${stock.priceChange}%`}
                </div>
            </div>
    ))};
        </div>
    )
  };
  
  export default PriceBanner;