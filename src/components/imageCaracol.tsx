import Image from 'next/image'
import frankContent from '../media/frank-content.png'



const ImageCarasol = () => {
  return (
    <>
      <div className="flex justify-center pt-5">
        <div>
            <Image
              src={frankContent}
              alt="Twitter"
              height="400"
              width="400"
            />
        </div>  
        <div>
            <Image
              src={frankContent}
              alt="Twitter"
              height="400"
              width="400"
            />
        </div>  
        <div>
            <Image
              src={frankContent}
              alt="Twitter"
              height="400"
              width="400"
            />
        </div>  
      </div>  
    </>
  )
}

export default ImageCarasol