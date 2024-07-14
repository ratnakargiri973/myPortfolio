import './About.css'
// import My from './src/assets/my.jpg'
function About(){
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="About px-20">
            <div className='aboutMe'>
                <div className='mySelf text-gray-100'>
                    <h1 className='font-bold text-6xl'>Know Who I'M</h1>
                    <div className='flex justify-center items-start flex-col'>
                    <p><span className='text-2xl font-bold'>Hi Everyone</span> , I am Ratnakar Giri from Odisha, India.</p>
                    <p>I am student at GEEKSTER.</p>
                    <p>I have completed MCA at CIT, Bangalore</p>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4'>
                    <p>Apart from coding, some other activities that I love to do:</p>
                    
                       <ul className='pl-8'>
                        <li><i class="fa-solid fa-hand-point-right"></i>  Playing Games</li>
                        <li><i class="fa-solid fa-hand-point-right"></i>  Reading Books</li>
                        <li><i class="fa-solid fa-hand-point-right"></i>  Travelling</li>
                       </ul>
                       </div>
                       <p className='text-center flex flex-col'>"Always Focus On the process, <br /> best outcomes autometically will come." <span className='pl-48'>-Ratnakar Giri</span></p>
                </div>
                <img src="./src/assets/my.jpg" alt="" />
            </div>
            <div className='TechnicalSkills text-gray-100'>
            <h1 className='font-bold text-4xl'>Technical Skills</h1>
            <div className='skillIcon'>
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-git"></i>
            <i class="fa-solid fa-database"></i>
            </div>
            </div>
            <div className='Tools text-gray-100'>
                <h1 className='font-bold text-4xl'>Tools I use</h1>
            <div className='toolsImg'>
              <button><img src="./src/assets/NB.png" alt="" /></button>
              <button><img src="./src/assets/VS.png" alt="" /></button>
              <button> <img src="./src/assets/Vercel.png" alt="" /></button>
              <button> <img src="./src/assets/GitBash.png" alt="" /></button>
              </div>
            </div>
        </div>
        <div className="Footer text-gray-100 flex justify-around items-center">
                <p>Designed and Developed by Ratnakar Giri</p>
                <p>Copyright © 2024 RG</p>
                <div className="social flex justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/ratnakar-giri-195998244/"><i class="fa-brands fa-linkedin cursor-pointer"></i></a>
                <a href="https://github.com/ratnakargiri973"><i class="fa-brands fa-square-github cursor-pointer"></i></a>
                <a href="https://www.instagram.com/ratnakar755/"><i class="fa-brands fa-instagram cursor-pointer"></i></a>
                </div>
            </div>
        </>
    )
}
export default About;