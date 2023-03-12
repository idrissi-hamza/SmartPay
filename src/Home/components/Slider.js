import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {[
        {
          id: '1',
          name: 'Danielle Lawrence',
          role: 'Chief Finance Officer',
          text: '“ Freemium responsive web design value proposition churn rate.Business-to-business low hanging fruit mass market seed money holy     grail value proposition backing funding crowdfunding influencer.       Bandwidth A/B testing paradigm shift. ”',
          logo: 'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/acme_1_0n5o1r97.svg',
        },
        {
          id: '2',
          name: 'Antoine Griezman',
          role: 'Seo Crofts',
          text: '“  responsive web design value proposition churn rate.Business-to-business low hanging fruit mass market seed money holy     grail value proposition backing funding crowdfunding influencer.       Bandwidth  testing paradigm shift. ”',
          logo: 'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/crofts-accountants_dlt5txsd.svg',
        },
        {
          id: '3',
          name: 'Modric Luka',
          role: 'Midlle entrepreneur',
          text: '“  Bandwidth A/B testing paradigm shift. Freemium responsive web design value proposition churn rate.Business-to-business low hanging fruit mass market seed money holy     grail value proposition backing funding crowdfunding influencer.       ”',
          logo: 'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/On_White_Background_dsctfpg9.svg',
        },
      ].map((testimony) => (
        <div key={testimony.id}>
          <div class="dorik-wrapper dorik-heading-5uihgmqj-wrapper ">
            <h5 class="dorik-heading dorik-heading-5uihgmqj ">
              <span>{testimony.name}</span>
            </h5>
          </div>
          <div class="dorik-wrapper dorik-heading-wuodco2e-wrapper ">
            <h5 class="dorik-heading dorik-heading-wuodco2e ">
              <span>{testimony.role}</span>
            </h5>
          </div>
          <div class="dorik-text dorik-text-fpbgyh5o ">{testimony.text}</div>
          <div class="dorik-wrapper dorik-image-0yq324ed-wrapper ">
            <img src={testimony.logo} alt='logo'/>
          </div>
        </div>
      ))}{' '}
    </Slider>
  );
}
