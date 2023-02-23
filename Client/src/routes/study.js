import Header from '../components/Header';
import DecksStudyDash from '../components/DecksStudyDash';

function Study() {
  return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Study'
            />
            <section>
                Study Body Here
                <DecksStudyDash />
            </section>
        </div>
    );
  }
  
  export default Study;