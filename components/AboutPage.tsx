'use client'

import { ScrollAnimation } from './ScrollAnimation'

const imgSuitHeart1 = "suit_heart.png"
const imgSuitClub1 = "http://localhost:3845/assets/9e08bbd400706887ebe2d9669521db4893b1396f.png"
const imgSuitDiamond2 = "http://localhost:3845/assets/954ee3f218b83ad9d64c99e5cd6109f70fd1d3e9.png"
const imgSuitSpade2 = "http://localhost:3845/assets/0795d5c0441deded79bbff2b65c5fa6416d68519.png"

export default function AboutPage() {
  return (
    <>
     {/* Heading */}
     <section className="w-full flex items-end pt-[20px] pb-[20px]">
        <div className="w-full text-center">
          <ScrollAnimation immediate>
            <h1>
              ABOUT US
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      {/* Quick about us */}
      <section className="section-content pb-[40px]">
        <ScrollAnimation immediate delay={0.1}>
          <p style={{ fontSize: '24px', textAlign: 'left' }}>
            The Princeton Game Theory Club (PGTC) is dedicated to solving probability-, memory-, psychology-, and logic-based imperfect-information card and table games without closed mathematical solutions by developing strategies based in probability and game theory and verifying them through implementations into code.
          </p>
        </ScrollAnimation>
      </section>

    {/* Mission */}
      <section className="section-content pb-[40px]">
        <ScrollAnimation immediate delay={0.2}>
          <h2>OUR MISSION</h2>
        </ScrollAnimation>
        <ScrollAnimation immediate delay={0.3}>
          <p style={{ fontSize: '24px', textAlign: 'left' }}>
            <b>Community:</b> To foster a community built on a shared love of puzzles, strategy, and the study of game theory—and to have fun doing it!
            <br /> <br />
            <b>Learning:</b> To help students strengthen their logical reasoning and intuition, and to gain fluency with probability notation, formal proofs, and core concepts in game theory.
            <br /> <br />
            <b>Application:</b> To give students hands-on experience implementing mathematical models in code and designing efficient algorithms to test and verify game strategies.
          </p>
        </ScrollAnimation>
      </section>

      {/* What we do */}
      <section className="section-content pb-[40px]">
        <ScrollAnimation immediate delay={0.4}>
          <h2>WHAT WE DO</h2>
        </ScrollAnimation>
        <ScrollAnimation immediate delay={0.5}>
          <p style={{ fontSize: '24px', textAlign: 'left' }}>
          Cras imperdiet blandit enim, at lacinia nisl placerat eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut diam sed erat vulputate pellentesque. Suspendisse varius, erat vitae fermentum porttitor, risus nulla consectetur nulla, vel molestie purus mi ut diam. Aliquam a leo suscipit, mollis ligula ac, elementum dui. Fusce tempor turpis augue, at dignissim velit vestibulum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel fringilla leo. Pellentesque finibus velit condimentum sagittis porta. Mauris sed iaculis diam. Vivamus suscipit, sem id eleifend blandit, mauris odio faucibus lorem, vitae interdum magna felis at lacus. Duis vitae enim fringilla, maximus velit sed, mollis nibh.
          </p>
        </ScrollAnimation>
      </section>
    </>
  )
}
