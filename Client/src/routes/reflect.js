import Navigation from '../components/Navigation';
import Header from '../components/Header';
import CodeBlock from '../components/CodeBlock';

function Reflect() {
    return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start'> 
        <Navigation />
        <div className='w-10/12 flex flex-col justify-start items-start'>
            <Header 
            title = 'Reflect'
            />
            <section>
                <CodeBlock
                  string = {
                    `// testing a comment
  function() {return something}`
                  }
                />
            </section>
        </div>
      </div>
    );
  }
  
  export default Reflect;