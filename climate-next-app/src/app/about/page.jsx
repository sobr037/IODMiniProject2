import Link from 'next/link'
import styles from '../styles/page.module.css'
import CustomCard from '../compenents/CustomCard'; 

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <p>This is the about page. Nothing to see, go <Link href="/">home</Link>.</p>
      
      {/* First Custom Card with custom content */}
      <CustomCard
        title="Word of the Day"
        subtitle="adjective"
        description="well meaning and kindly. 'a benevolent smile'"
      />

      {/* Second Custom Card with different custom content */}
      <CustomCard
        title="Another Word of the Day"
        subtitle="noun"
        description="a word of your choice. 'example sentence'"
      />
    </div>
  )
}