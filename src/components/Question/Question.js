import React from 'react';

const Question = (props) => {
    const {question, answer} = props.question;
    return (
        <div className='question'>
                <p>{question}</p>
                <span>Answer : </span>
                <code>
                    <small>
                        {answer}
                    </small>
                </code>
            </div>
    );
};

export default Question;