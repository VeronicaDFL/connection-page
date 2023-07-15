export default function Hero () {

    return (
        <section className=" mb-0 text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="scale-90 hover:scale-100 object-cover object-center rounded" alt="hero" src="/images/vero.jpg"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">VERONICA DE FELICE
              <br/>Software Engineer
            </h1>
            <p className="mb-8 leading-relaxed">I am a creative and resourceful software engineer with a successful track record of transitioning between different industries and roles. I am passionate about helping my clients achieve their goals, and I take pride in my work. Outside of work, I enjoy spending time outdoors and pursuing creative interests. I am excited about the future of software engineering, and I am confident that I can make a significant contribution to the field.</p>
            <div className="flex justify-center">
              <button className="scale-90 hover:scale-100 inline-flex text-white bg-[#701a75] border-0 py-2 px-6 focus:outline-none hover:bg-[#c026d3] rounded text-lg"><a href="https://www.bocacode.com/candidates/software-engineer/veronica-de-felice" rel="noopener noreferrer" target="_blank">Profile</a></button>
              <button className="scale-90 hover:scale-100 ml-4 inline-flex text-white bg-[#701a75] border-0 py-2 px-6 focus:outline-none hover:bg-[#c026d3] rounded text-lg"><a href="/images/Veronica_DeFelice_Resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a></button>
            </div>
            <div className="mt-5">
            <a href="https://github.com/VeronicaDFL" className="scale-90 hover:scale-100 hover:stroke-[#c026d3] ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/github.svg"height="30" width="30" alt="link to project" /></a>
            <a href="https://www.linkedin.com/in/veronicadefelice/" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/link.png"height="30" width="30" alt="link to project" /></a>
            <a href="https://main.d3qkj62q5kdmfa.amplifyapp.com/" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/connect.png"height="30" width="30" alt="link to project" /></a>
            <a href="mailto:verodefelic@gmail.com" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/email.png"height="30" width="30" alt="link to project" /></a>
            </div>
          </div>
        </div>
      </section>
    )
}