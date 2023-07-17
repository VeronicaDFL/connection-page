export default function Card () {

    function FrontOfCard() {
        return (
          <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
            FRONT OF CARD
          </div>
        );
      }
    
      function BackOfCard() {
        return (
          <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
            BACK OF CARD
          </div>
        );
      }
}