import Image from 'next/image'
import frankTitle from '../media/frank-title.png'

const About = () => {
  return (
    <>
      <div className="about flex justify-center p-10 border-2">
        <div className="flex justify-center w-1/5 m-auto">
          <Image
            src={frankTitle}
            alt="Twitter"
            height="200"
            width="200"
          />
        </div>
        <div className="w-3/5">
          <h1>Welcome!</h1>
          <p>
            Our mission here at the academy is simple: Take 10,000 of the smoothest brained apes, put them all in one location and let the mayhem ensue.
          </p>
          <p>
            The academy was founded on the principles of friendship making, crayon eating and absolute, unregulated, deplorable, degenerate behaviour. Welcome fellow apes, to the <b>Degenerate Ape Academy</b>.
          </p>
          <h1>Enrollment Fee: 6◎</h1>
          <p>Maximum student number: 10,000</p>
        </div>
      </div>
    </>
  )
}

export default About