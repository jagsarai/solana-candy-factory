import { MenuIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import frankTitlePic from '../media/frank-title.png'

const Navbar = () => {
  const onBtnTap = (num:any) => {
    return (
      <>
        <h1>{num}</h1>
      </>
    )
  }
  return (
    <>
    <header>
      <div className="p-3 flex flex-row">
        <div className="flex m-auto w-1/3">
            {/* <div style={{border: "2px solid", borderRadius:'50%'}}> */}
              <Image
                src={frankTitlePic}
                alt="Frankenstien"
                height="45"
                width="50"
                
              />
            {/* </div> */}
        </div>
        <div className="flex m-auto w-2/3">
          
        </div>
        <div className="w-1/3 flex flex-row-reverse m-auto">          
          <div className="p-1">
            <button onClick={() => onBtnTap(5)}>
              <MenuIcon height="40" width="40"></MenuIcon>
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar