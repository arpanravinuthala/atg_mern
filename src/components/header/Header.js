import './Header.css';
import whole from 'A:/atg_mern/src/images/whole.png';
// import search from 'A:/atg_mern/src/images/search.png';
import dropdown from 'A:/atg_mern/src/images/dropdown.jpg';
function Header(){
    return(
        <div className="navbar">
            <img className="hi" src={whole} alt=""/>
            <form>
                <input type='text' id="search" className="form-control" placeholder="Search for your favorite groups in ATG"></input>
            </form>
            <div className="navbar1">
                <p style={{color:'#2E2E2E'}}>Create account.<span style={{color:'#2F6CE5'}}> It’s free! </span></p>
                <img src={dropdown} alt='' width='24px' height='24px'/>
            </div>
         </div>
    )
}

export default Header;