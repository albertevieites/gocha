// Import image
import logo from '/drop.svg';

// Brand component styling
const Brand = () => {
  return (
    <div className='brand'>
      <img src={logo} alt="App logo" />
      <h1>Gocha</h1>
    </div>
  )
}

export default Brand;