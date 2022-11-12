import React from 'react';
import './Ques.css'
const Ques = () => {
    return (
        <div className='question-container'>
            <div>
                <h5>How does react work</h5>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h5>How was diffrent props and state</h5>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h5>Where use the useffect and by the another uses the useeffect</h5>
                <p>You can have multiple useEffects in your code and this is completely fine! As hooks docs say, you should separate concerns. Multiple hooks rule also applies to useState - you can have multiple useState in one component to separate different part of the state, you don't have to build one complicated state object</p>
            </div>
        </div>
    );
};

export default Ques;