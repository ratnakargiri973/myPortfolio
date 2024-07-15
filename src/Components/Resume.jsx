import './Resume.css'
import MyResume from '../assets/RatnakarResume.jpg'
import ResumeDoc from '../assets/RatnakarGiri.pdf'
function Resume(){

    const handleDownload = () => {
        const url = ResumeDoc;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'RatnakarGiri.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <>
        <div className="resumeContainer text-gray-100">
            <h1 className='font-bold text-4xl'>Here is my resume...</h1>
         <img src={MyResume} alt="" />
        <button onClick={handleDownload}>Download</button>
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
export default Resume;