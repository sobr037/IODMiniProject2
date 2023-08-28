'use client'
import Link from 'next/link'
import styles from './styles/page.module.css'
import customStyles from './styles/home.module.css'
import CustomCard from './compenents/CustomCard'
import Spline from '@splinetool/react-spline'
import ThreeDTown from './compenents/ThreeDTown'

export default function Home() {
  return (
    
    <div className={`${styles.About} ${customStyles.aboutContainer}`}>

      <div className="centered-container">
          <iframe src='https://my.spline.design/cottagecopy-7a069b42866f590250e642bba93f3a2b/' frameborder='0' width='100%' height='100%'></iframe>
      </div>

      <div className={customStyles.cardContainer}>
        <CustomCard
          title="Climate Change"
          subtitle="noun"
          description="a change in global or regional climate patterns. attributed largely to the increased levels of atmospheric carbon dioxide produced by the use of fossil fuels."
        />

        <CustomCard
          title="Mate"
          subtitle="noun"
          description="a term used for an Assistant, Helper, or Friend, commonly used in the United Kingdom, Ireland, Australia, & New Zealand."
        />
      </div>

      <div className="corePageContentBlock">
        <div className="corePageContent">
          <h2>We get it...</h2>
          <h2>Climate Change can be confusing!</h2>
          <h3>So we created Cli-mate, a free tool to help Kiwis better understand Climate Change.</h3>
          <h4>Consider this guide to be your (friendly) mate in Understanding, Measuring, Reducing, & Offsetting your carbon emissions.</h4>
        </div>
      </div>

    </div>
  );
}
