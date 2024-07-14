import './Contact.css'
import { useState } from 'react';
function Contact(){
     const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
     });

     function handleChange(e){
        setFormData({...formData,[e.target.name]: e.target.value})
     }
 
     function handleSubmit(e){
        // let updateMessage = {...formData, set}
        // localStorage.setItem('formData', JSON.stringify(formData));
        console.log(formData);
        setFormData({name:'', email:'', message:''})
     }
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className='contact text-gray-100'>
            <div className='contactForm'>
                 <h1 className='font-bold text-4xl text-rose-800'>Contact Me</h1>
            <div className='form'>
            <div className='formInput'>
                   <label  className='mr-5' htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                   required/>
                    </div>

                    <div className='formInput'>
                    <label className='mr-5' htmlFor="email">Email</label>
                   <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>
                    </div>
                    <div className='formInput'>
                    <label htmlFor="email">Message</label>
                   <textarea
                   id="message"
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   rows="5"
                   required></textarea>
                    </div> 
                    <button  className='font-bold' type="submit" onClick={()=>{
                        handleSubmit();
                    }}>Send Message</button>   
                 </div>
            </div>
            <div className='socialContact'>
                    <h1 className='font-bold text-4xl'>Get in Touch</h1>
                    <p className='w-96 text-center'>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                    Simply fill the from and send me an email.</p>
                    <div className='contactIcon'>
                        <a href="https://www.linkedin.com/in/ratnakar-giri-195998244/"><i class="fa-brands fa-linkedin cursor-pointer"></i></a>
                        <a href="https://github.com/ratnakargiri973"><i class="fa-brands fa-square-github cursor-pointer"></i></a>
                        <a href="https://www.instagram.com/ratnakar755/"><i class="fa-brands fa-instagram cursor-pointer"></i></a>
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
export default Contact;