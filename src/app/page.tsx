import { HeaderWidget, FooterWidget } from "./components";
import {
  WeAreWidget, FeatureWidget, Feature2Widget,
  TestimonialWidget, LoveBubbleWidget
} from "./components/Landing";
const Home = () => {
  return <>
    <div>
      <HeaderWidget />

      {/* <section
        className="relative w-full h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('./images/hero-bg-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50" />
        <div className="relative z-10 px-6">

          <h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent"
          >Welcome to True meet</h1>
          <p className="text-2xl text-center mt-4">Your one-stop solution for all your meeting needs.</p>
          <p className="mt-4 text-lg md:text-xl text-white">
            It&apos;s better on the app.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-white ">
              Sign up
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-white ">
              Sign in
            </button>
          </div>
        </div>
      </section> */}

      <section
        className="relative w-full h-screen flex bg-linear-120 from-emerald-700 to-emerald-300 items-center justify-center text-center text-white"

      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: "url('./images/hero-bg-image.jpg')",
            backgroundImage: "url('./images/landing-section-3.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-transparent 
        to-emerald-700/80" />
        <div className="absolute inset-0 bg-opacity-50" />
        <div className="relative z-10 px-6 flex flex-col lg:flex-row w-full h-auto lg:h-screen">

          <div className="w-full lg:w-6/12 flex justify-center items-center flex-col space-y-4">
            <h1
              className="text-4xl md:text-5xl lg:text-7xl text-center max-w-lg lg:max-w-2xl lg:text-left font-extrabold bg-gradient-to-r"
            >Welcome to True meet,Ready to go on a date?</h1>

            {/* <h1
              className="text-4xl md:text-5xl lg:text-7xl text-center max-w-lg lg:max-w-2xl lg:text-left font-extrabold 
    bg-gradient-to-r from-gray-100 via-green-300 to-blue-500 
    bg-[length:200%] bg-clip-text text-transparent 
    animate-gradient-x"
            >
              Welcome to True meet, Ready to go on a date?
            </h1> */}

            <div className="mt-6 space-x-4 lg:w-[30%] flex start-0">
              {/* <button className="bg-white relative group text-black px-6 py-2 rounded-full hover:bg-emerald-500 hover:text-white cursor-pointer">
                Sign up
                <div className="absolute -top-2 opacity-0 group-hover:opacity-100 transition scale-75 group-hover:scale-100 translate-y-1 group-hover:translate-y-0  right-0  group-hover:block">
                  <svg className="size-3 transition scale-95 group-hover:scale-105 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                  </svg>
                </div>

                <div className="absolute -bottom-1 opacity-0 group-hover:opacity-100 transition scale-75 group-hover:scale-100 translate-y-1 group-hover:translate-y-0 -left-1 group-hover:block">
                  <svg className="size-2 transition scale-95 group-hover:scale-105 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                  </svg>
                </div>
              </button> */}
              <button className="bg-white relative group text-black px-6 lg:px-10 py-2 lg:py-4  rounded-full hover:bg-emerald-500 md:text-xl hover:text-white cursor-pointer">
                Sign in

                <div className="absolute -top-2 opacity-0 group-hover:opacity-100 transition scale-75 group-hover:scale-100 translate-y-1 group-hover:translate-y-0  right-0  group-hover:block">
                  <svg className="size-3 transition scale-95 group-hover:scale-105 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                  </svg>
                </div>

                <div className="absolute -bottom-1 opacity-0 group-hover:opacity-100 transition scale-75 group-hover:scale-100 translate-y-1 group-hover:translate-y-0 -left-1 group-hover:block">
                  <svg className="size-2 transition scale-95 group-hover:scale-105 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                  </svg>
                </div>

              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 relative h-[300px] lg:h-auto"

          >
            <div className="absolute left-0 lg:left-10 top-0 lg:top-40 ">
              <LoveBubbleWidget />
            </div>
            <div className="absolute  right-0 lg:right-14 top-0 lg:top-40 ">
              <LoveBubbleWidget />

            </div>
          </div>
        </div>
      </section>

      <FeatureWidget />
      <WeAreWidget />
      <Feature2Widget />
      <TestimonialWidget />
      <FooterWidget />
    </div>
  </>
}


export default Home;