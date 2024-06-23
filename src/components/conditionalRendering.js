function DisplayMessage() {

   const currentDay = new Date().getDay();
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   console.log(daysOfWeek[currentDay]);

   const message = (currentDay === 0 || currentDay === 6) ? "Time to rest" : "Time to work";
   const imageSrc = (currentDay === 0 || currentDay === 6) ? require('../assets/resting-white.png') : require('../assets/working-white.png');
   return (
      <div>
         <p style={{ fontSize: "30px", textTransform: "uppercase" }} className='main-heading flex items-center justify-center'>day of the week</p><br />
         <p className="flex flex-col justify-center items-center">
            <h1 className="flex justify-center items-center text-2xl pb-2">Today is&nbsp; <span className='font-bold'>{daysOfWeek[currentDay]}</span></h1>
            <h1 className='text-xl'>{message}</h1>
            <img className='pt-4 w-35' src={imageSrc} alt={message} />
         </p>

         <p className='text-sm text-center italic mt-24 opacity-50'>Things I learnt:
                <ul>
                    <li>- conditional rendering</li>
                    <li>- importing images</li>
                </ul>
            </p>
      </div>
   );
}

export default DisplayMessage;