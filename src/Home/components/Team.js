import React from 'react';
const team = [
  {
    id: '1',
    name: 'Randy Jensen',
    image:
      'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/team-1_vv63k2p6.png',
    role: 'Co-Founder & CEO',
  },
  {
    id: '2',
    name: 'Deborah Brewer',
    image:
      'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/team-2_o3lmlvac.png',
    role: 'Co-Founder & CTO',
  },
  {
    id: '3',
    name: 'Cemil Özkan',
    image:
      'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/team-3_gz03lwm9.png',
    role: 'Lead Developer',
  },
  {
    id: '4',
    name: 'Richard Harris',
    image:
      'https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/team-4_fig66f5e.png',
    role: 'Marketing Officer',
  },
];
const TeamMember = ({ member }) => {
  return (
    <div class="col-lg-1/4 col-md-1/2 ">
      <div class="column-inner dorik-column-0addolgu  1/4">
        <div class="dorik-wrapper dorik-image-jrhhjr5t-wrapper ">
          <img
            src={member.image}
            alt={member.name}
            class="dorik-image-jrhhjr5t "
          />
        </div>
        <div class="dorik-wrapper dorik-heading-xiulpxkr-wrapper ">
          <h6 class="dorik-heading dorik-heading-xiulpxkr ">
            <span>{member.name}</span>
          </h6>
        </div>
        <div class="dorik-text dorik-text-duo8of1a ">{member.role}</div>
      </div>
    </div>
  );
};
const Team = () => {
  return (
    <section
      class="dorik-section dorik-section-is7xmlpb "
      id="team"
    >
      <div class="container">
        <div class="dorik-row-wuolpk6s  flex">
          <div class="col-lg-1/1 ">
            <div class="column-inner dorik-column-u2yoccyk  1/1">
              <div class="dorik-wrapper dorik-heading-fu06nhyq-wrapper ">
                <h6 class="dorik-heading dorik-heading-fu06nhyq ">
                  <span>The Team</span>
                </h6>
              </div>
              <div class="dorik-wrapper dorik-heading-tkr6vjiv-wrapper ">
                <h2 class="dorik-heading dorik-heading-tkr6vjiv ">
                  <span>Built by Experienced Team</span>
                </h2>
              </div>
              <div class="dorik-text dorik-text-lzknwxzh ">
                Funding branding user experience business-to-business bandwidth
                social proof startup value proposition A/B testing focus supply
                chain crowdfunding.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="dorik-row-de5eg33a  flex">
          {team.map((member) => (
            <TeamMember
              member={member}
              key={member.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
