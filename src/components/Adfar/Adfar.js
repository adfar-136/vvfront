import React from 'react'
import IntroSection from './IntroSection'
import ProjectsSection from './ProjectsSection'
import ContentCreationSection from './ContentCreationSection'
import Services from './Services'
import ContactSection from './ContactSection'
import ExperienceSection from './ExperienceSection'

export default function Adfar() {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <IntroSection/>
      <ExperienceSection/>
     
      <ContentCreationSection/>
      <ProjectsSection/>
      <Services/>
      <ContactSection/>
    </div>
  )
}
