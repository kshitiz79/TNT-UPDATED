import React from 'react';
import { getService } from '@/data/api/Api';
import ImageDescriptionBlock from '@/components/imageDescriptionBlock/ImageDescriptionBlock';
import HeroBanner from '@/components/herobanner/HeroBanner';

// ServicePage Component
const ServicePage = async ({ params }) => {
  const { serviceId } = params;

  // Fetch service data using the serviceId
  const resp = await getService(serviceId);
  const serviceData = resp?.[0];

  // Check if serviceData is available
  if (!serviceData) {
    return <div className="text-center py-10 text-gray-600">Service Not Found</div>;
  }

  return (
    <div className='mt-6'>
      {/* Hero Section */}
      <HeroBanner 
        customClass="common-hero flex items-end pb-5" 
        title={serviceData?.training?.name} 
        mt="20" // Dynamic margin-top
      />

      {/* Image and Description Block */}
      <ImageDescriptionBlock 
        imgUrl={serviceData?.thumbnailImage}
        title={serviceData?.mainTitle} 
        description={serviceData?.description}
        isCourse={true}
      />
    </div>
  );
};

export default ServicePage;
