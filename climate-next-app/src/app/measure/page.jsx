'use client'
import Link from 'next/link'
import styles from '../styles/page.module.css'
import CustomCard from '../compenents/CustomCard'
import Spline from '@splinetool/react-spline'
import ThreeDCloud from '../compenents/ThreeDCloud'

export default function Measure() {
  return (

    <div>

      <div className='globe3DScene'>
        <ThreeDCloud />
      </div>

      <div class="corePageContentBlock">
        <div class="corePageContent">
            <h1>Measuring Your Carbon Footprint</h1>
            <p>Understanding your carbon footprint is the first step towards reducing your impact on the environment. In New Zealand, the average carbon footprint is approximately 7.7 metric tons of CO2 per person, while the world (OECD) average stands at 10.8 metric tons per capita.</p>
            <br />
            <h2>Why Measure Your Carbon Footprint?</h2>
            <p>Measuring your carbon footprint provides valuable insights into the environmental impact of your lifestyle choices. It helps you identify areas where you can make changes to reduce your carbon emissions and live more sustainably.</p>
            <br />
            <h2>Using a Carbon Footprint Calculator</h2>
            <p>Calculating your carbon footprint is now easier than ever, thanks to technology advancements and free carbon measurement calculators. These calculators take into account various aspects of your life, such as your energy consumption, transportation habits, and dietary choices, to estimate your carbon emissions.</p>
            <br />
            <h2>Get Started</h2>
            <p>Ready to measure your carbon footprint and take steps towards a more eco-friendly lifestyle? Use the free carbon footprint calculator provided by GenLess in collaboration with Wellington City Council and Auckland Council. This tool follows a <a href="https://www.futurefit.nz/our-carbon-calculations " target="_blank">robust methodology</a> to measure your carbon impact. <br /> <a href="https://www.futurefit.nz/questionnaire" target="_blank">Calculate your carbon emissions now</a> and learn more about how you can reduce your environmental footprint.</p>
            <br />
            <iframe src="https://www.futurefit.nz/questionnaire" width="100%" height="100%"></iframe>
            <br />
            <p>Note: The carbon footprint calculator above is a free tool provided by GenLess in collaboration with Wellington City Council and Auckland Council. It's a valuable resource for anyone looking to better understand and reduce their environmental impact.</p>
        </div>
      </div>
    </div>
    
  )
}


