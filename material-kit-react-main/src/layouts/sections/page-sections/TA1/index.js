// PageHeaders1.js
import React from 'react';
import BaseLayout from 'layouts/sections/components/BaseLayout';
import View from 'layouts/sections/components/View';
import HeaderOne1 from './components';
// import headerOneCode from '../page-headers/components/HeaderOne/code';
import TeacherAssistantDetails from '../TADetails';

function PageHeaders1() {
  const accomplishmentsData = (
    <div>
      <ul>
        <li>Thai Scholar 60, scholarship from The National Center for Genetic Engineering and Biotechnology (BIOTEC), Thailand</li>
        <li>MSU College of Natural Science Scholarships for Spring 2020, Summer 2020, Fall 2020, Spring 2021, Fall 2021</li>
        <li>L.C. Plant Mathematics Award 2020, MSU Department of Mathematics</li>
      </ul>
    </div>
  );

  const educationData = (
    <div>
      <ul>
        <li>PhD in Computational Bioscience, 2022– University of Colorado Anschutz Medical Campus</li>
        <li>B.Sc. in Computational Mathematics; Computational Math Science and Engineering, 2022, Michigan State University</li>
      </ul>
    </div>);
    const publications = (
      <div>
        <ul>
          <li>PhD in Computational Bioscience, 2022– University of Colorado Anschutz Medical Campus</li>
          <li>B.Sc. in Computational Mathematics; Computational Math Science and Engineering, 2022, Michigan State University</li>
        </ul>
      </div>
  );

  return (
    <BaseLayout
      title="Garvit Chugh"
      breadcrumb={[
        { label: '', route: '/sections/page-sections/page-headers' },
        { label: '' },
      ]}
    >
      <View title=""  height="40rem">
        <HeaderOne1 />
      </View>

      <TeacherAssistantDetails accomplishments={accomplishmentsData} education={educationData} publications={publications} />
    </BaseLayout>
  );
}

export default PageHeaders1;
