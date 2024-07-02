import { Anton } from "next/font/google";
// import Spline from '@splinetool/react-spline/next';

const anton = Anton({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
  })


const HeroPage = () => {
    return <div className="h-[90vh] relative flex items-center justify-start p-8">
        {/* <Spline
        scene="https://prod.spline.design/Bua43sgEktGMoHU6/scene.splinecode" 
      /> */}
      <div className="w-[80%] h-[100%] overflow-hidden">
        <img style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
              }} src="https://i.pinimg.com/564x/8a/6e/ee/8a6eee0fbaf46ec17b06c30dd68c4cfd.jpg" alt="" />
      </div>
        <div className="absolute right-0">
          <div className={anton.className + " text-[120px] font-semibold uppercase"}>
              Tara <div className="inline-block origin-center rotate-90 text-right">N</div> tula
          </div>
          <div className="text-right">I just made this site for fun.</div>
        </div>
    </div>
}

export default HeroPage