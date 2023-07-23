export default function Hero () {

    return (
        <section className="object-cover lg:h-screen md:h-screen text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className=" figure shadow-[0px_0px_200px_-50px] shadow-center shadow-[#D835DE] scale-90 hover:scale-100 hover:shadow-2xl transition ease-in-out duration-500 object-cover object-center rounded " alt="hero" src="/images/vero.jpg"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">VERONICA DE FELICE
              <br/>Software Engineer
            </h1>
            <p className="mb-8 leading-relaxed">Hi There!I am a Full Stack Software Engineer, specialized in UX/UI Development. My ultimate goal is to create unparalleled designs for the most seamless user experience ever. Assisting clients in achieving their goals fills me with passion, and I approach every project with immense pride and dedication. Beyond work, I enjoy spending time outdoors and pursuing creative interests. Looking ahead, I am excited about the future of software engineering and confident in my ability to make a significant contribution to this ever-evolving field.</p>
            <div className="flex justify-center">
              <button className="scale-90 hover:scale-100 inline-flex  text-white bg-[#D835DE] border-0 py-2 px-6 focus:outline-none hover:bg-[#F0ABFC] rounded text-lg"><a href="https://www.bocacode.com/candidates/software-engineer/veronica-de-felice" rel="noopener noreferrer" target="_blank">Profile</a></button>
              <button className="scale-90 hover:scale-100 ml-4 inline-flex text-white bg-[#D835DE] border-0 py-2 px-6 focus:outline-none hover:bg-[#F0ABFC] rounded text-lg"><a href="/images/Veronica_DeFelice_Resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></button>
            </div>
            
          </div>
        </div>
      </section>
    )
}