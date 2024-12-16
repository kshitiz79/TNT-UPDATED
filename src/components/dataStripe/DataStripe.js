import React from 'react';

const DataStripe = ({dataArray}) => {
    if (!dataArray || dataArray.length == 0) return <></>
    return (
        <div className='data-display-banner  py-6'>
            <div className='container mx-auto my-6'>
                <div className='w-full flex justify-center flex-col items-center my-6'>
                    <h2 className='text-[1.4rem] md:text-5xl'>Designing Better Experience</h2>
                    <div className='text-gray-600 lg:w-[55%] w-4/5 text-center text-sm'>TnT Techies Guide specializes in advanced training, consulting, and technology solutions, empowering individuals and organizations with cutting-edge knowledge and practical skills across diverse tech domains. Our tailored programs ensure proficiency in emerging innovations, enabling clients to excel in today’s fast-paced digital landscape. Committed to excellence, we are the premier choice for transformative tech guidance and strategic solutions. </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    {dataArray && dataArray.map((item,index)=>(
                        <div className='flex flex-col items-center lg:mb-0 mb-5 lg:shadow-none mx-2 shadow-md m-auto' key={index}>
                            {console.log("url",item.url)}
             
                            <h3 className='text-center'>  {item.value}</h3>
                            <h3 className='text-gray-600 font-bold'>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataStripe;