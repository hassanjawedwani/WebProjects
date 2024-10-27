import flipCart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
import shoe from '../assets/shoe_image.png'

const Hero = () => {
  return (
    <div className="h-[calc(100vh-72px)] max-w-6xl mx-auto flex items-center">
      <div className="w-1/2 flex flex-col gap-9">
        <h1 className="uppercase font-extrabold text-[108px] leading-[102px]">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-base font-semibold text-[#5A5959] max-w-[400px]">
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="flex gap-10">
          <button className="red-btn">
            Shop Now
          </button>
          <button className="outline-btn">
            Category
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-inter font-light text-base text-[#5A5959]">Also Available On</p>
          <div className="flex gap-4">
            <img src={flipCart} alt='flipcart icon' className='h-8 w-8'/>
            <img src={amazon} alt='amazonn icon'  className='h-8 w-8'/>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
        <img src={shoe} alt="nike shoe image" className="w-full" />
      </div>
    </div>
  )
}

export default Hero