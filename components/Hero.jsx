export default function Hero () {

    return (
        <main className="min-w-fit w-screen text-gray-400 bg-gray-900 body-font">
        <div className="mx-auto ">
          <div className="p-10">
            <img className=" figure scale-100 mt-5 w-max-content  shadow-[0px_10px_200px_-50px] shadow-center shadow-[#D835DE] hover:scale-110 hover:shadow-2xl transition ease-in-out duration-500 object-cover object-center rounded " alt="hero" src="/images/vero.jpg"/>
          </div>
          <div className=" lg:flex-grow mt-5 ml-5 mr-34 p-5 pr-5 md:w-1 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-light leading-none title-font text-white">VERONICA DE FELICE</h1>
            <h2 className="leading-none text-[#D835DE]">Software Engineer</h2>
            <h3 className="font-light text-white pb-6 ">South Florida</h3>
          
            <p className="w-screen mb-8 font-light leading-relaxed">Hi There!I am a <span className=" text-[#D835DE]">Full Stack Software Engineer</span>, specialized in <span className="text-[#D835DE]">UX/UI Development</span>. My ultimate goal is to create unparalleled designs for the most seamless user experience ever. Assisting clients in achieving their goals fills me with passion, and I approach every project with immense pride and dedication. Beyond work, I enjoy spending time outdoors and pursuing creative interests. Looking ahead, I am excited about the future of software engineering and confident in my ability to make a significant contribution to this ever-evolving field.</p>
            <div className="mt-4 flex">
              <button className=" start-0 scale-90 hover:scale-100 inline-flex  text-white bg-[#D835DE] border-0 py-2 px-6 focus:outline-none hover:bg-[#F0ABFC] rounded text-lg"><a href="https://www.bocacode.com/candidates/software-engineer/veronica-de-felice" rel="noopener noreferrer" target="_blank">PORTFOLIO</a></button>
              <button className="scale-90 hover:scale-100 ml-4 inline-flex text-white bg-[rgb(216,53,222)] border-0 py-2 px-6 focus:outline-none hover:bg-[#F0ABFC] rounded text-lg"><a href="/images/Veronica_DeFelice_Resume.pdf" rel="noopener noreferrer" target="_blank">RESUME</a></button>
            </div>
          </div>
        </div>
        <div className="techstack  ">
              <h4 className="text-white font-normal pt-20 pl-11 indent-128 ">MY TECH STACK:</h4>
        </div>
        <section className="justify-center h-screen w-screen  grid-rows-12 columns-3  mx-auto pt-20 m-0 gap-12 ">

        <div className="logo mx-3">
          <img src="/images/javascript.svg" height="30" width="30"/></div>
        <div className="logo mx-3">
          <img src="/images/react.svg" height="30" width="30"/></div>
        <div className="logo mx-3">
          <img className="" src="/images/type.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/html.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/css.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/tailwind.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/figma.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img className="scale-150" src="/images/bootstrap.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/sass.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/mongodb.svg" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/fire.png" height="32" width="32"/></div>
        <div className="logo mx-4">
          <img src="/images/aws.png" height="32" width="32"/></div>
        <div className="logo mx-3">
          <img src="/images/google.png" height="32" width="38"/></div>
       </section>
      </main>
      
    )
}