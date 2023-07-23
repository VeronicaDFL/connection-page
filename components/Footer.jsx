export default function Footer () {

    return (
    <footer className="text-center flex items-center justify-center w-full  fixed bottom-0 text-gray-400 bg-gray-900 body-font">
     <div className="container justify-center px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
      <p className=" text-center text-gray-400 ">© 2023 Veronica De Felice
      </p>
      <div className="mt-5 mb-4">
            <a href="https://github.com/VeronicaDFL" className="pl-4 scale-90 hover:scale-100 animate-pulse ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/github.svg"height="30" width="30" alt="link to project" /></a>
            <a href="https://www.linkedin.com/in/veronicadefelice/" className="scale-90 hover:scale-100  animate-pulse ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/link.png"height="30" width="30" alt="link to project" /></a>
            <a href="https://main.d3qkj62q5kdmfa.amplifyapp.com/" className="scale-90 hover:scale-100  animate-pulse  ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/connect.png"height="30" width="30" alt="link to project" /></a>
            <a href="mailto:verodefelic@gmail.com" className="scale-90 hover:scale-100  animate-pulse ml-3 text-titanium-500 inline-flex " target="_blank" rel="noreferrer"><img src="/images/email.png"height="30" width="30" alt="link to project" /></a>
            </div>
     </div>
  </footer>
    )
}