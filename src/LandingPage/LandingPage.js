import React from 'react';
import NavBar from '../Home/components/NavBar';
import FeatureCard from '../Home/components/FeatureCard';
import FeaturesSection from '../Home/components/FeaturesSection';

import TestimonySection from '../Home/components/TestimonySection';
import MoreFeaturesSection from '../Home/components/MoreFeaturesSection';
const features = [
  {
    id: '1',
    image:
      'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/accountant_z1rie3a6.svg',
    title: 'Your Special Finance Manager',
    description:
      '   Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.',
  },
  {
    id: '2',
    image:
      'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/travel_planning_v5edgf2u.svg',
    title: 'Receive Payment for Everything',
    description:
      '  Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.',
  },
];
const LandingPage = () => {
  return (
    <div>
      <NavBar />

      <section
        class="dorik-section dorik-section-oqqguct5 "
        id="features"
      >
        <div class="container">
          <div class="dorik-row-w0t3z90u  flex">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection />

      <TestimonySection />
      <MoreFeaturesSection />
    </div>
  );
};

export default LandingPage;
