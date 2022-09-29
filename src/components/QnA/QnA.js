import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import './QnA.css'

const QnA = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('qNa.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])

    return (
        <div className='q-n-a'>
            <h3>Quiz</h3>
            <p>Do you know -</p> <br />
            {
                questions.map(question => <Question
                    question={question}
                    key={question.id}
                ></Question>)
            }

        </div>
    );
};

export default QnA;