import React from 'react';
import Image from 'next/image';
import "./ImageDescriptionBlock.scss";
import HTMLReactParser from 'html-react-parser';

const ImageDescriptionBlock = ({ imgUrl, subTitle, title, descriptionOne, descriptionTwo, cssClass, changeOrder, isCourse }) => {
    return (
        <div className={`description-image-section pb-3 ${cssClass}`}>
            <div className='container mx-auto pt-5'>
               

                <div className='grid grid-cols-1 lg:grid-cols-2 my-6'>
                    {!changeOrder ? (
                        <>
                            <div className='img-wrapper w-full pr-5 lg:py-4'>
                                <Image className="m-auto" alt={title} src={imgUrl} fill={isCourse ? true : false} />
                            </div>
                            <div className='text-wrapper flex flex-col justify-center p-3'>
                                {title && <h2 className='text-black'>{title}</h2>}
                                {subTitle && <p className='my-3'>{subTitle}</p>}
                                {descriptionOne && (
                                    <div className='description'>
                                        <img src="/assets/description-logoOne.jpg" className="pr-4 object-contain " alt='logo' />
                                        {HTMLReactParser(descriptionOne)}
                                    </div>
                                )}
                                {descriptionTwo && (
                                    <div className='description'>
                                        <img src="/assets/description-logo2.jpg" className="pr-4 object-contain " alt='logo' />
                                        {HTMLReactParser(descriptionTwo)}
                                    </div>
                                )}






                                
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='text-wrapper flex flex-col justify-center p-3'>
                                {subTitle && <p>{subTitle}</p>}
                                {title && <h2>{title}</h2>}
                                {descriptionOne && <p className='description'>{HTMLReactParser(descriptionOne)}</p>}
                            </div>
                            <div className='img-wrapper'>
                                <Image alt={title} src={imgUrl} fill={isCourse ? true : false} />
                            </div>
                        </>
                    )}
                </div>

                <div className='md:flex lg:flex justify-between mb-6 space-y-6 md:space-y-0'>
                    <img src="/assets/fa-brands_hooli.png" alt='holli'  className='md:m-3 m-auto object-contain '/>
                    <img src="/assets/fa-brands_lyft.png" alt='holli'  className='md:m-3 m-auto object-contain'/>
                    <img src="/assets/fa-brands_pied-piper-hat.png" alt='pied-piper-logo'  className='md:m-3 m-auto object-contain' />
                    <img src="/assets/fa-brands_stripe.png" alt='stripe-logo'  className='md:m-3 m-auto object-contain'/>
                    <img src="/assets/fa-brands_aws.png" alt='aws-logo'  className='md:m-3 m-auto object-contain'/>
                    <img src="/assets/fa-brands_reddit-alien.png" alt='reddit-alien-logo'  className='md:m-3 m-auto py-3  object-contain'/>


                </div>
            </div>
        </div>
    );
};

export default ImageDescriptionBlock;
