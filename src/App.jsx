import './App.css';

function App() {
  return (
    <div className='bg-white md:rounded-3xl md:p-8 mx-auto md:mt-24 max-w-3xl md:mb-24'>
      <img
        src='./image-omelette.jpeg'
        alt='omelette image'
        className='object-cover md:rounded-2xl mx-auto mb-3'
      />
      <div className='pt-0 p-8 md:p-0'>
        <h1 className='font-serif text-4xl font-medium py-6'>
          Simple Omelette Recipe
        </h1>
        <p className='font-outfit mb-8'>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <Prep />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}

function Prep() {
  return (
    <div className='bg-rose-white rounded-xl p-5 leading-8 mb-4'>
      <h3 className='text-xl text-dark-raspberry font-semibold mt-0 font-outfit pb-2'>
        Preparation time
      </h3>
      <ul className='list-disc list-inside pl-2'>
        <li>
          <span className='font-bold'>Total:</span> Approximately 10 minutes
        </li>
        <li>
          <span className='font-bold'>Preparation:</span> 5 minutes
        </li>
        <li>
          <span className='font-bold'>Cooking:</span> 5 minutes
        </li>
      </ul>
    </div>
  );
}

function Ingredients() {
  return (
    <div>
      <h2 className='custom-h2 py-4'>Ingredients</h2>
      <ul className='list-disc list-inside px-3 leading-8'>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
      <hr className='border-t my-7' />
    </div>
  );
}

function Instructions() {
  return (
    <div>
      <h2 className='custom-h2 py-4'>Instructions</h2>
      <ol className='custom-ordered-list pt-2'>
        <li className=''>
          <span className='bold-span font-bold'>Beat the eggs:</span> In a bowl,
          beat the eggs with a pinch of salt and pepper until they are well
          mixed. You can add a tablespoon of water or milk for a fluffier
          texture.
        </li>
        <li className=''>
          <span className='bold-span font-bold'>Heat the pan:</span> Place a
          non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className=''>
          <span className='bold-span font-bold'>Cook the omelette:</span> Once
          the butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li className=''>
          <span className='bold-span font-bold'>Add fillings (optional):</span>{' '}
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className=''>
          <span className='bold-span font-bold'>Fold and serve:</span> As the
          omelette continues to cook, carefully lift one edge and fold it over
          the fillings. Let it cook for another minute, then slide it onto a
          plate.
        </li>
        <li className=''>
          <span className='bold-span font-bold'>Enjoy:</span> Serve hot, with
          additional salt and pepper if needed.
        </li>
      </ol>
      <hr className='border-t my-7' />
    </div>
  );
}

function Nutrition() {
  return (
    <div>
      <h2 className='custom-h2 py-4'>Nutrition</h2>
      <p className='pb-4'>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className='min-w-full'>
        <tbody>
          <tr className='border-b-2 border-gray-200'>
            <td className='text-left py-3 pl-7'>Calories</td>
            <td className='pr-8 font-bold text-nutmeg'>277kcal</td>
          </tr>
          <tr className='border-b-2 border-gray-200'>
            <td className='text-left py-3 pl-7'>Carbs</td>
            <td className=' font-bold text-nutmeg'>0g</td>
          </tr>
          <tr className='border-b-2 border-gray-200'>
            <td className='text-left py-3 pl-7'>Protein</td>
            <td className=' font-bold text-nutmeg'>20g</td>
          </tr>
          <tr className=''>
            <td className='text-left py-3 pl-7'>Fat</td>
            <td className=' font-bold text-nutmeg'>22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

// TODO
// Fix Ingredient decimal ordered list spacing
