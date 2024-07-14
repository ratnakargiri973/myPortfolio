import { useState, useEffect } from "react";
import './Home.css'
function Home({My}){
    const [type, setType] = useState(["Software Developer","Website Designer","Mern Stack Developer"]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prevIndex => (prevIndex + 1) % type.length);
        }, 2000);
    
        return () => clearInterval(interval);
      }, [type.length]);

    return (
        <>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="Home flex justify-center  flex-col items-center">
            <div className="Hello text-gray-100 flex justify-between items-center px-40" >
                <div className="main_name flex flex-col justify-center items-start gap-4 text-4xl">
                <h1 className="font-bold">👋🏻 Hey There</h1>
                <h1>I'm Ratnakar Giri</h1>
                 <h1>Willing for {type[index]}</h1>
                 </div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oj3XhFLtUShjZ_4Fc28OOu81Rgru_PhyNw&s" alt=""  className="w-96"/>
            </div>
            <div className="Introduction flex justify-between items-center px-40">
                <div className="selfIntroduction text-gray-100 flex justify-between items-start flex-col gap-4" >
                <h1 className="text-4xl font-bold">LET ME INTRODUCE MYSELF</h1>
                <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                <p>I am fluent in classics like <span className="text-cyan-400"> Java, Javascript and React </span></p>
                <p>My field of Interest's are building new  Web Technologies and Products.</p>
                <p>Whenever possible, I also apply my passion for developing products with Modern Javascript Library and Frameworks  like  <span className="text-cyan-400">React.js</span></p>
                </div>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhRE8GhGU2XXcmwm6EHxH7Iv5S360epD4vg&s" alt=""className="w-96" /> */}
                <img src="./src/assets/my.jpg" alt="" />
            </div>
            <div className="findMe  text-gray-100 flex justify-center items-center gap-4 flex-col">
                <h1 className="text-4xl  text-green-700 font-bold">CONNECT ME ON</h1>
                <p  className="text-cyan-400">Feel free to connect with me </p>
                <div className="social text-4xl flex justify-center items-center gap-8">
                <a href="https://www.linkedin.com/in/ratnakar-giri-195998244/"><i class="fa-brands fa-linkedin cursor-pointer"></i></a>
                <a href="https://github.com/ratnakargiri973"><i class="fa-brands fa-square-github cursor-pointer"></i></a>
                <a href="https://www.instagram.com/ratnakar755/"><i class="fa-brands fa-instagram cursor-pointer"></i></a>
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
        </div>
        </>
    )
}
export default Home;