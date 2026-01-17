
import { Clock, CookingPot, Share2, UserRound } from 'lucide-react'
import './App.css'

function App() {
  
  return (
    <>
    

      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className='flex justify-between items-center p-4'>
        <div className='flex gap-8 items-center'>
          <div className='font-bold text-2xl'>FreshEats</div>
          <div className='flex gap-5'>
            <p>Recipes</p>
            <p>Blog</p>
            <p>About</p>
          </div>

        </div>
        <div>
          <input type="text" placeholder='Search recipes...' className='border px-3 py-1 rounded-full' / >

        </div>
      </div>

        
        <div className="flex gap-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNklsnZWj0DFtwkWiZDfgxDZkvIKpgrO1mcg&s"
            alt="recipe"
            className="w-64 h-64 rounded-xl object-cover"
          />

          <div className='flex flex-col items-start pl-5'>
            <p className="text-green-600 font-semibold text-xs uppercase tracking-widest">
              Dinner . 25 Minutes
            </p>

            <h1 className="text-3xl font-bold  flex flex-col items-start ">
              Avocado & Basil 
            </h1>
            <h1 className="text-3xl font-bold  flex flex-col items-start ">
              Pesto Pasto 
            </h1>

            <p className="text-gray-600 mt-3 max-w-md">
              A creamy, vibrant pasta dish ready in just 25 minutes. </p>
              <p className="text-gray-600 mt-3 max-w-md">Packed with healthy fats and fresh herbs.it's prefect for a</p>
              <p className="text-gray-600 mt-3 max-w-md">quick . wholesome weekight dinner.</p>

           

            <div className="flex items-center gap-15 mt-5">
              <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600">
                Print Recipe
              </button>

              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <Share2 size={18} /> Share
              </button>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-3 text-center mt-10 border rounded-lg py-4">
          <div className='flex items-center mx-auto'>
            <Clock className=" text-green-600" />
            <div>
            <p className="font-semibold ">Prep Time</p>
            <p className="text-gray-600">10 mins</p>
            </div>
          </div>

          <div className='flex items-center mx-auto'>
            <Clock className="mx-auto text-green-600" />
            <div>
            <p className="font-semibold mt-1">Cook Time</p>
            <p className="text-gray-600">15 mins</p>
            </div>
          </div>

          <div className='flex items-center mx-auto'>
            <CookingPot className="mx-auto text-green-600" />
            <div>
            <p className="font-semibold mt-1">Yields</p>
            <p className="text-gray-600">4 Servings</p>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-6 mt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className=''>
              <div className='bg-white rounded-2xl p-6 shadow '>
                <h2 className='text-lg font-bold mb-4 flex items-center gap-6'>Ingredients</h2>
                <ul className='space-y-3 text-gray-700 flex flex-col items-start mt-6 '>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>2 cups </span>fresh basil leaves</li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>1/2 cups</span> parmesan cheese,grated </li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>1/3 cups</span> pine nuts(optional) </li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>2 cloves</span>garlic , peeled </li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>1/2 cups</span> extra virgin olive oil</li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>2</span> ripe avocados, pitted and peeled</li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>1 lb</span> pasta of  choice (spaghetti or fusilli) </li>
                  <li><input type="checkbox" className='mr-3'/><span className='font-bold'>1 tbsp</span> lemon juice</li>
                  
                </ul>
              </div>
              <div className='mt-10 border rounded-lg py-4 pr-3  '>
                <h3 className='font-bold mb-4 '>Nutrition Facts</h3>
                <div className='grid grid-cols-2 gap-y-3 text-sm text-gray-600 bg-white'>
                  <span>Calories</span><span className='text-right'>485</span>
                  <span>Total Fat</span><span className='text-right'>28g</span>
                  <span>Saturated Fat</span><span className='text-right'>4g</span>
                  <span>Carbohydrates</span><span className='text-right'>52g</span>
                  <span>Protein</span><span className='text-right'>12g</span>
                  <span>fiber</span><span className='text-right'>8g</span>
                </div>

              </div>

            </div>
            <div className='bg-white rounded-2xl p-6 shadow'>
            <h2 className='text-lg font-bold mb-4 flex items-center gap-2'>Instructions</h2>
            <div className='flex gap-4 mb-8'>
              <span className='w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold p-4'>1</span>
              <div className='flex flex-col items-start'>
              <h4 className='font-semibold'>Prepare the Pasta</h4>
              <p className='text-gray-500 text-sm mt-1'>Bring a large pot of salted water to a boil. Add the 
              pasta and cook according to package instructions until al dente. <span className='text-bold'>Important:</span>Reserve 1/2 cup of the
              pasta cooking water before draining.
              </p>
              </div>
            </div>

            <div className='flex gap-4 mb-8'>
              <span className='w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold p-4'>1</span>
              <div className='flex flex-col items-start'>
              <h4 className='font-semibold'>Blend the Pasto Base</h4>
              <p className='text-gray-500 text-sm mt-1'>Bring a large pot of salted water to a boil. Add the 
              pasta and cook according to package instructions until al dente. <span className='text-bold'>Important:</span>Reserve 1/2 cup of the
              pasta cooking water before draining.
              </p>
              </div>
            </div>

            <div className='flex gap-4 mb-8'>
              <span className='w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold p-4'>1</span>
              <div className='flex flex-col items-start'>
              <h4 className='font-semibold'>Add Avocado & Oil</h4>
              <p className='text-gray-500 text-sm mt-1'>Bring a large pot of salted water to a boil. Add the 
              pasta and cook according to package instructions until al dente. <span className='text-bold'>Important:</span>Reserve 1/2 cup of the
              pasta cooking water before draining.
              </p>
              </div>
            </div>

            <div className='flex gap-4 mb-8'>
              <span className='w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold p-4'>1</span>
              <div className='flex flex-col items-start'>
              <h4 className='font-semibold'>Combine & Serve</h4>
              <p className='text-gray-500 text-sm mt-1'>Bring a large pot of salted water to a boil. Add the 
              pasta and cook according to package instructions until al dente. <span className='text-bold'>Important:</span>Reserve 1/2 cup of the
              pasta cooking water before draining.
              </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-md border-l-4 border-green-500 mt-6">
              <span className="w-4 h-4 bg-green-500 rounded-full mt-1"></span>
              <div>
                <h4 className="font-bold text-sm mb-1">CHEF’S TIP</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Toasting the pine nuts in a dry pan for 2-3 minutes before blending brings out a deeper, nuttier flavor that contrasts beautifully with the fresh basil.
                </p>
              </div>
            </div>
            

            </div>
          </div>

        </div>

        

      </div>
   
     
    </>
  )
}

export default App
