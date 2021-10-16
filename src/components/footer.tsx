import Image from 'next/image'
import twitterPic from '../media/twitter.png'
import discordPic from '../media/discord.png'

const Footer = () => {
  return (
  <>
    <footer>
      <div className="flex flex-col justify-center h-full">
        <div className="flex justify-center pt-2">
          Created by some random dudes
        </div>
        <div className="flex justify-center pt-2">
          All Rights Reserved 2021
        </div>
        <div className="flex justify-center space-x-10 p-2">
          <button>
            <Image
            src={twitterPic}
            alt="Twitter"
            height="30"
            width="35"
            />
          </button>
          <button>
            <Image
            src={discordPic}
            alt="Twitter"
            height="30"
            width="35"
            />
          </button>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer