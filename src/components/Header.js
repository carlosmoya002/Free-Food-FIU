import freeFoodLogo from '../assets/newLogo.png';

function Header()
{
  return(
    <div className="header-top">
      <img src={freeFoodLogo} alt="Logo" className="logo" />
    </div>
  );
}
export default Header;