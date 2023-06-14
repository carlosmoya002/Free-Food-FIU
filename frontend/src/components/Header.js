import freeFoodLogo from '../assets/freeFood.jpg';

function Header()
{
  return(
    <div className="header-top">
      <img src={freeFoodLogo} alt="Logo" className="logo" />
      <h1 className="header2">Free Food FIU</h1>
    </div>
  );
}
export default Header;