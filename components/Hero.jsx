export default function Hero () {

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="hero" src="/images/vero.jpg"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">VERONICA DE FELICE
              <br className="hidden lg:inline-block"/>Software Engineer
            </h1>
            <p className="mb-8 leading-relaxed">I am a creative and resourceful software engineer with a successful track record of transitioning between different industries and roles. I am passionate about helping my clients achieve their goals, and I take pride in my work. Outside of work, I enjoy spending time outdoors and pursuing creative interests. I am excited about the future of software engineering, and I am confident that I can make a significant contribution to the field.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    )
}