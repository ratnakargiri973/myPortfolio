import './Nav.css'
import ApnaLink from './ApnaLink'
function Nav(obj){
    return (
        <>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
         <div className="Nav flex justify-between items-center px-20 h-16">
            <h1 className="text-5xl font-bold text-blue-800">RG</h1>
            <div className="navItems flex justify-center items-center gap-16 pr-32">
                <ul className="flex justify-center items-center font-bold gap-5 text-gray-100">
                    <li><ApnaLink href="/">Home</ApnaLink></li>
                    <li> <ApnaLink href="/About">About</ApnaLink></li>
                    <li> <ApnaLink href="/Project">Projects</ApnaLink></li>
                    <li> <ApnaLink href="/Resume">Resume</ApnaLink></li>
                    <li> <ApnaLink href="/Contact">Contact</ApnaLink></li>
                </ul>
                <a href='https://github.com/ratnakargiri973/myPortfolio' className='font-bold flex justify-center items-center gap-2 py-2 px-4 bg-red-950 text-sky-300'><i class="fa-solid fa-code-branch"></i><i class="fa-solid fa-star"></i></a>
            </div>
         </div>
        </>
    )
}
 export default Nav;