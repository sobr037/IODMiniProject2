'use client'
import Link from 'next/link'
import styles from '../styles/page.module.css'
import Spline from '@splinetool/react-spline'
import ThreeDScene from '../compenents/ThreeDScene'
import customStyles from '../styles/home.module.css'
import CustomCard from '../compenents/CustomCard'

export default function Learn() {
  return (

    
    <div>
        <div className='globe3DScene'>
            <ThreeDScene />
        </div>

        <div className="corePageContentBlock">
            <div className="corePageContent">
                <h1>What is cilmate change?</h1>
                <h3>Climate change refers to long-term shifts in temperatures and weather patterns.</h3>
                <p>
                    Such shifts can be natural, due to changes in the sun’s activity or large volcanic eruptions. But since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil and gas.
                    Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures.
                    The main greenhouse gases that are causing climate change include carbon dioxide and methane.
                </p>
            </div>
        </div>

        <div className={customStyles.cardContainer}>
            <CustomCard
            title="Carbon Dioxide"
            subtitle="A main greenhouse gas!"
            description="Carbon dioxide (CO2) is released into the atmosphere primarily through human activities like burning fossil fuels and deforestation. It is a major driver of global warming and climate change, as it traps heat from the sun, leading to rising global temperatures and various environmental impacts."
            />

            <CustomCard
                title="Methane"
                subtitle="Another top greenhouse gas!"
                description="
                Methane is a potent greenhouse gas that primarily arises from natural sources like wetlands and human activities such as livestock farming and fossil fuel extraction. It plays a significant role in exacerbating climate change due to its high heat-trapping capabilities in the Earth's atmosphere."
            />
        </div>

        <div className="corePageContentBlock">
            <div className="corePageContent">
                <h1>So what do I focus on?</h1>
                <h3>Reducucing my Carbon emissions, or Methane emissions?</h3>
                <p>
                    Imagine that climate change is like a house on fire, and there are two main types of fuels feeding this fire: methane and carbon dioxide.
                </p>
                <br />
                <p>
                 1. <bold>Methane (CH4):</bold> This is like the fast-burning kindling wood in the fire. It's extremely effective at heating things up quickly but doesn't last very long. In the context of climate change, methane is primarily released by industries like agriculture, fossil fuel extraction, and waste management. It's potent but short-lived in the atmosphere compared to CO2, which means it has a strong, immediate warming effect but doesn't stick around for centuries.
                </p>
                <br />
                <p>
                    2. <bold>Carbon Dioxide (CO2):</bold> This is like the slower-burning logs in the fire. When released into the atmosphere, CO2 lingers for a very long time, trapping heat and gradually increasing temperatures over decades and even centuries. CO2 mainly comes from burning fossil fuels for energy, like coal, oil, and gas.
                </p>
                <br />
                <p>
                    So, if you want to help stop the house from burning down (or mitigate climate change), there are two approaches:
                </p>
                <br />
                <p>
                1. <bold>Methane:</bold> While industries are the main source of methane, it's challenging for individuals to directly control these emissions. It's more like asking someone inside the house to control the kindling wood. Instead, it's crucial to lobby for collective action and policy changes to regulate these industries and reduce their methane emissions.
                </p>
                <br />
                <p>
                2. <bold>Carbon Dioxide:</bold> You, as an individual, have more control over your CO2 emissions. Think of this as reducing the logs you put on the fire. This includes using energy-efficient appliances, driving less, using public transport or carpooling, and supporting renewable energy sources. By reducing your own CO2 emissions, you're helping to slow down the long-term warming of the planet.
                </p>
            </div>
        </div>

        <div className="corePageContentBlock">
            <h1>Methane!</h1>
        </div>

        <div className="corePageContentBlock">
            <img src="/cow.jpeg" alt="Image of a cow eating grass" className="centered-image"></img>
        </div>

        <div class="corePageContentBlock">
            <div class="corePageContent">
                <h1>Top Sources of Methane Emissions in New Zealand</h1>
                <ul>
                    <li>
                        <h4>Livestock Enteric Fermentation:</h4>
                        <p>This is the largest single source of methane in New Zealand. Enteric fermentation is the digestive process that occurs in the stomachs of ruminant animals, such as cattle, sheep, and deer. Microbes in their stomachs break down food, producing methane as a byproduct, which is then released through belching.</p>
                    </li>
                    <li>
                        <h4>Manure Management:</h4>
                        <p>Methane is also produced during the decomposition of animal manure. In New Zealand, pastoral farming is common, and the management of livestock waste can lead to methane emissions. This includes the storage and spreading of manure on fields.</p>
                    </li>
                    <li>
                        <h4>Wetlands:</h4>
                        <p>Natural wetlands are another significant source of methane emissions in New Zealand. Wetlands are areas with waterlogged soil where anaerobic (low-oxygen) conditions prevail, promoting the production of methane by microorganisms during organic matter decomposition.</p>
                    </li>
                    <li>
                        <h4>Fossil Fuel Production:</h4>
                        <p>While not as significant as agriculture, the extraction and use of fossil fuels, such as natural gas and oil, contribute to methane emissions in New Zealand. This can occur during the extraction, processing, and transportation of these fuels.</p>
                    </li>
                    <li>
                        <h4>Landfills:</h4>
                        <p>Decomposing organic waste in landfills generates methane gas. Proper landfill management, including methane capture and flaring, can help reduce emissions from this source.</p>
                    </li>
                    <li>
                        <h4>Forest Fires:</h4>
                        <p>While not a continuous source, occasional forest fires can release significant amounts of methane into the atmosphere. These emissions can vary depending on the frequency and intensity of wildfires.</p>
                    </li>
                </ul>
                <p>It's important to note that agriculture, particularly enteric fermentation from ruminant animals, is the largest contributor to methane emissions in New Zealand (48 per cent). As a result, strategies to reduce agricultural methane emissions are being researched/trialed, including changes in livestock diets, improved breeding practices, and the development of methane-inhibiting feed additives.</p>
            </div>
        </div>
        
        <div className="corePageContentBlock">
            <h1>Carbon Dioxide!</h1>
        </div>

        <div className="corePageContentBlock">
            <img src="/carbon.png" alt="Illustration of carbon reducing items including solar pannels" className="centered-image"></img>
        </div>

        <div className="corePageContentBlock">
            <div className="corePageContent">
                <h1>Carbon wasn't always bad, but we must adapt!</h1>
                <h3>Here's why</h3>
                <p>
                When we discovered fossil fuels in the ground, the path of human history changed forever. For the past 200 years, we’ve used that fuel to kickstart everything from the Industrial Revolution to modernity. Our planet has enjoyed a phase of unprecedented wealth and health because of these innovations. There has never been a better time to be alive, and the same should hold true tomorrow.
                </p>
                <br />
                <p>
                    Unfortunately, our energy use has consequences. Every step of the way, we’ve been pumping carbon into the atmosphere and gradually changing our climate. 
                </p>
                <br />
                <p>
                Before the Industrial Revolution, our air contained 280 parts per million (ppm) of carbon dioxide (CO2) on average. But new markets born from this revolution used a lot of energy, causing atmospheric CO2 rates to rise dramatically. For the first time in recorded history, our CO2 levels are above 400 ppm. This is really bad.
                </p>
                <br />
                <img src="/carbonCycle.gif" alt="Illustration of carbon reducing items including solar pannels" className="centered-image"></img>
                <br />
                <p>
                We’ve unwittingly created a reinforcing feedback loop that is causing a massive imbalance in our atmosphere. It’s leading to rising sea levels, increased drought and flooding, ocean acidification — externalities that put our survival at risk.
                </p>
            </div>
        </div>

        <div className="corePageContentBlock">
            <div className="corePageContent">
                <h1>What now?</h1>
                <p>
                    Now that we know, for the majority of Kiwis, the best way to do your bit towards Climate Change is to target our Carbon Emissions as individuals/families, how do we do that?
                </p>
                <ul>
                    <li>Step 1: Educate ourselves with factual information about Climate Change (you've come so far already) - How can we expect anyone to tackle a problem if we don't understand it?  </li>
                    <li>Step 2: Next we should measure our current emissions to get a rough idea where we're sitting - we can't measure progress if we don't have a starting point, right?</li> 
                    <li>Step 3: We can then focus on Reducing our Carbon footprints as much as possible through small (or large) changes in our day-to-day lives, like using a reuseable mug, thrifting clothing, or even walking to work on a sunny day.</li>
                    <li>Step 4: Finally, once we've reduced our emissions as much as we can, you have the option of 'Offsetting' your remaining carbon footprint, we'll cover this later!</li>
                    <li> Head on over to the<Link href="/measure">Measure</Link>tab to proceed with Step 2.</li>
                </ul>
            </div>
        </div>



    </div>
    
  )
}


