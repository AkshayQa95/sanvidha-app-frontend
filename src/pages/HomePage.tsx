import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/downloadapp.png";
const HomePage= () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
        Sanvidha should be priority
        </h1>
        <span className="text-xl">Manage all work is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img src={landingImage}/>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
               <span className="font-bold text-3xl tracking-tighter">
                Now Managing you Projects will be easer
               </span>
               <span>
                Download
               </span>
               <img src={appDownloadImage} className="w-32 h-auto"/>
          </div>
        </div>
    </div>
  )
}

export default HomePage;