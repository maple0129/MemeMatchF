import "../assets/css/landing.css"

function Landing() {
  return (
    <div className="relative w-full flex justify-center bg-maincolor">
        <div className="block1 absolute -top-32 left-20 skew-x-12 hidden lg:block"></div>
        <div className="block2 absolute bottom-0 right-20 skew-x-12 hidden lg:block"></div>
        <div className="block3 absolute -top-32 left-0 rounded-full z-[5] w-full lg:w-[537px]"></div>
        <div className="w-container flex justify-center items-center z-10">
            <section className="py-20 md:py-40">
                <div className="px-5 space-y-10 w-full md:w-landing ">
                    <div className="flex justify-center w-full"><span className="bg-blue-100 text-blue-600 tracking-widest uppercase rounded-full px-4 py-2 text-xs font-bold leading-5">$MMM - FIND&nbsp;AND&nbsp;BUY&nbsp;MEMES&nbsp;YOU&nbsp;LOVE</span></div>
                    <h1 className="text-gray-100 tracking-tighter mt-0 mb-0 text-6xl font-bold leading-tight text-center">My ❤️ Meme Match 🚀</h1>
                    <p className="text-xl leading-relaxed text-center text-gray-300">You need to know someone that knows someone to buy the $MMM token. Chad VIPS only. Join our telegram to learn mow</p>
                    <div className="flex flex-wrap p-5 justify-center md:space-x-10 ">
                      <button className="mt-2 bg-blue-500 rounded-full w-48 h-12 transition duration-75 flex justify-center items-center space-x-1 hover:bg-blue-400">
                        <svg
                          className="w-6 h-6 text-white fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512">
                          <path
                            d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                          ></path>
                        </svg>
                        <span className=" text-white font-bold text-lg lg:text-xl">
                          Telegram
                        </span>
                      </button>
                      <button className="border-2 mt-2  border-blue-500 rounded-full w-48 h-12 transition duration-75 text-blue-600 bg-white hover:bg-blue-400 hover:text-white">
                        <span className=" font-bold text-lg lg:text-xl">Learn more</span>
                      </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default Landing;