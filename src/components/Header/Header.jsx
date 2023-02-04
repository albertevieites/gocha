import logo from '/drop.svg';

function Header() {
  return (
    <div className='header__container'>
      <img src={logo} alt="App logo" />
      <h1>Gotcha</h1>
    </div>
  )
}

export default Header;