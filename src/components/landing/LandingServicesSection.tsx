import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H2, H3, ListItem, Separator, YGroup } from 'tamagui'
import { ChevronRight, GitCommit, Moon, Star } from '@tamagui/lucide-icons'

const LandingServicesSection = () => {
  return (<>
     <H3 style={{paddingRight:0,marginTop:60, fontSize:34,fontWeight:600, textAlign:"center",lineHeight:100,textShadow:"#000 2px 0 15px"}}>SERVICES</H3>
    <YGroup alignSelf="center" bordered width={"90%"} size="$20" separator={<Separator />}>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Custom Software Development"
        subTitle="Develop custom software solutions tailored to your clients' specific needs and requirements."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Web Application Development"
        subTitle="Design and build web-based applications for various purposes, from e-commerce sites to content management systems."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Mobile App Development"
        subTitle="Create mobile applications for iOS and Android platforms to reach a broader audience."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Full-Stack Development"
        subTitle="Provide end-to-end development services covering both front-end and back-end technologies."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="UI/UX Design"
        subTitle="Offer user interface and user experience design services to ensure a visually appealing and user-friendly product."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Database Design and Development"
        subTitle="Design, implement, and maintain databases for efficient data storage and retrieval."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Legacy System Modernization"
        subTitle="Upgrade and modernize outdated software systems to improve performance and security."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Cloud Services Integration"
        subTitle="Help clients migrate their applications to the cloud, utilizing platforms like AWS, Azure, or Google Cloud."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Software Maintenance and Support"
        subTitle="Provide ongoing maintenance, bug fixes, and technical support for software applications."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Quality Assurance and Testing"
        subTitle="Conduct thorough testing to ensure the functionality, reliability, and security of software products."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Project Management"
        subTitle="Manage software development projects, including scope definition, scheduling, and resource allocation."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Agile Development"
        subTitle="Implement agile methodologies like Scrum or Kanban to enhance project efficiency and adaptability."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Technical Consulting"
        subTitle="Offer expert advice on technology choices, architecture, and best practices."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Code Review and Auditing"
        subTitle="Assess existing codebases for quality, security, and performance, and provide recommendations for improvement."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Custom API Development"
        subTitle="Create custom APIs for data integration and communication between different software components."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="DevOps and Continuous Integration/Continuous Deployment (CI/CD)"
        subTitle="Implement and manage DevOps processes to streamline development and deployment workflows."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Security Assessment and Penetration Testing"
        subTitle="Identify and address security vulnerabilities in software applications to enhance data protection."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Documentation"
        subTitle="Create comprehensive technical documentation for software projects, including user manuals and API documentation."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Training and Workshops"
        subTitle="Provide training sessions and workshops for clients and their teams on relevant software development topics."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Software Licensing and Compliance"
        subTitle="Assist clients in understanding and complying with software licensing and intellectual property rights."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Project Estimation and Budgeting"
        subTitle="Help clients determine project budgets and estimates for resource planning."
        icon={GitCommit}
        iconAfter={ChevronRight}
      />
    </YGroup.Item>
   
  
    </YGroup>
    
    </>
  )
}

export default LandingServicesSection

const styles = StyleSheet.create({})