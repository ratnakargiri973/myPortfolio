
import './project.css'
function Project(){
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className='projectContainer text-gray-100'>
        <h1 className='text-4xl font-bold'>My Recent Project Works</h1>

        <div className='projectCards'>
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJX7PNhvo3f7QeOXUNSdQ6Es6yV3SvjbXPoA&s" alt="" />
            <h2 className='text-2xl font-bold'>Meditation Webpage</h2>
            <p className='px-2'>In this website, chatbot techniques, different types of meditation techniques are available. Music and Video system is also available.</p>
            <div className='Btn'>
                 <a href="https://github.com/ratnakargiri973/Meditation"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="https://ratnakargiri973.github.io/Meditation/">Demo</a>
            </div>
        </div>

        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqu-L9svtZNR_1kW5ZWwTSlgCgLElwpoNuw&s" alt="" />
            <h2 className='text-2xl font-bold'>Gemini AI</h2>
            <p className='px-2'>Gemini AI plays a vital role in the cybersecurity landscape by providing proactive threat intelligence and fraud prevention services. </p>
            <div className='Btn'>
                 <a href="https://github.com/ratnakargiri973/gemini"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="https://ratnakargiri973.github.io/gemini/">Demo</a>
            </div>
        </div>


        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXkjbsNH5wQR-FGRfCQrkePmtQCsN_2qoeg&s" alt="" />
            <h2 className='text-2xl font-bold'>Pokemon Project</h2>
            <p className='px-2'>The Pokemon search project will involve creating a web application where users can search for information about Pokemon creatures.</p>
            <div className='Btn'>
                 <a href="https://github.com/ratnakargiri973/pokemon"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="https://ratnakargiri973.github.io/pokemon/">Demo</a>
            </div>
        </div>


        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9ygLM2gMyitaDozDvJ0DrJd49lzGEDWzYw&s" alt="" />
            <h2 className='text-2xl font-bold'>Password Generator</h2>
            <p className='px-2'>It will generate random passwords based on user-selected criteria, such as password length and character types (uppercase, lowercase, numbers, and special characters).</p>
            <div className='Btn'>
                 <a href="https://github.com/ratnakargiri973/PasswordGenerator"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="password-generator-delta-bay.vercel.app">Demo</a>
            </div>
        </div>


        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-3VzbalX2oP46PVdqkhvx2QWLHNPAeCung&s" alt="" />
            <h2 className='text-2xl font-bold'>Study Planner</h2>
            <p className='px-2'>Design a component or view to display a visual representation of the study schedule, such as a calendar view or timeline.</p>
            <div className='Btn'>
                 <a href="https://github.com/ratnakargiri973/studyPlanner"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="study-planner-beta.vercel.app">Demo</a>
            </div>
        </div>


        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4a970aqfjCysxqSRVrlhsbkv96GyDlADJQ&s" alt="" />
            <h2 className='text-2xl font-bold'>Cart Management</h2>
            <p className='px-2'>The cart management project where users can add products to a shopping cart, update quantities, remove items, calculate totals, and simulate a checkout process.</p>
            <div className='Btn'>
                 <a href="https://github.com/ratnakargiri973/cartManagement"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="cart-management-six.vercel.app">Demo</a>
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
        </div>
        </>
    )
}
export default Project;