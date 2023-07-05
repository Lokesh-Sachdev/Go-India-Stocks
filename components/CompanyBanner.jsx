import companiesData from "@utils/componiesData"

const CompanyBanner = () => {
  return (
    <>
    <h3 className='sm:block hidden text-2xl text-red-600 uppercase font-bold mr-auto'>
       Featured Companies
    </h3>
    <div className=" w-full flex overflow-hidden gap-2 mb-2">
        {companiesData.map((company, index) => (
            <div
                className="flex items-center w-[120px]" 
                key={index}>
                <img src={company.imageUrl} alt="company" />
            </div>
        ))}
    </div>
    </>
  )
}

export default CompanyBanner