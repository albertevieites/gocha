// Import image
import logo from '/drop.svg';

// Brand component styling
function Brand() {
  return (
    <div className='brand'>
      <img src={logo} alt="App logo" />
      <h1>Gotcha</h1>
    </div>
  )
}

export default Brand;