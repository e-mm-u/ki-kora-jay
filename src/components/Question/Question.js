import React from 'react';
import './Question.css'

const Question = (props) => {
    const { question, answer } = props.question;
    return (
        <div className='question'>
            <p>{question}</p>
            <span>Answer : 
                <code>
                    <small>
                        {answer}
                    </small>
                </code>
            </span>
        </div>
    );
};

export default Question;