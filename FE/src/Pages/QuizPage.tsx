import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../Components/ui/card"

import Question from "../Components/Question";
import { useState } from "react";
import { Progress } from "../Components/ui/progress";
import { Label } from "../Components/ui/label";
import { Separator } from "../Components/ui/separator";
import AnimatedNumbers from "react-animated-numbers"
import { Link } from "react-router-dom";
import { Button } from "../Components/ui/button";
import Navbar from "@/Components/Navbar";
import { getDatabase, ref, set } from "firebase/database";
import { useLocation } from "react-router-dom";
import { get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { encodeEmail } from "@/lib/utils"; // Add this import

function QuizPage () {
    const navigate = useNavigate();
    const location = useLocation();
    const { userData } = location.state || {};
    console.log('userData:', userData);
    const [question,setQuestion] = useState(1);
    const [answers,setAnswers] = useState([]);
    const [quizdone,setQuizdone] = useState(false);
    const [score,setScore] = useState(0);
    const [scores, setScores] = useState(0);
    const quiz = [
        {text:'Despite the heavy rain, the hikers remained __________ and continued their journey.',options:['Resilient','Hesitant','Exhausted','Defeated'],answer:'Resilient'},
        {text:'The artists work was praised for its __________ attention to detail and vibrant use of color',options:['Superficial','Meticulous','Haphazard','Simplistic'],answer:'Meticulous'},
        {text:'The CEO’s decision to expand the company into international markets was both bold and __________.',options:['Reckless','Strategic','Spontaneous','Ambiguous'],answer:'Strategic'},
        {text:'The novel’s ending was so __________ that readers were left debating its meaning for years.',options:['Predictable','Boring','Ambiguous','Clear'],answer:'Ambiguous'},
    ];
    const saveAnswer = (e,q) => {
        let newAnswers = answers;
        newAnswers.push({
            question:q, answer:e
        });
        setAnswers(newAnswers);
        if(e){setScore(score + 1)}
        if(question < quiz.length){
            setQuestion(question + 1);
        }
        if(question == quiz.length){
            setQuizdone(true);
        }
    }
    const saveScoreToFirebase = (nilai) => {
        if (!userData || !userData.email) {
            console.error("User data is missing");
            return;
        }
        const db = getDatabase();
        const userRef = ref(db, 'users/' + encodeEmail(userData.email));
        set(userRef, {
          scores: nilai,
        }).then(() => {
          console.log("Score saved successfully!");
        }).catch((error) => {
          console.error("Error saving score: ", error);
        });
      };
    const handleSubmitButton = () => {
        alert('Your score is ' + score);
        saveScoreToFirebase(score);
        navigate('/', { state: { userData } });
    }
    return (
        <>
            <Navbar />
            <div className="bg-blue-500">
                <div className="h-screen flex flex-col items-center justify-start">
                    <h1 className="text-white text-4xl font-bold mb-8 mt-40">
                        Quiz App
                    </h1>
            <Card>
            <CardHeader>
                {!quizdone && <div>
                <Progress className='h-[2px] mb-5 opacity-50' value={question * 100 / quiz.length} />
                <CardTitle className='text-sm'>Question {question}/{quiz.length}</CardTitle>
                </div>}
            </CardHeader>
            <CardContent>
                <div className='w-[400px]'>
                    {!quizdone && quiz.map((x,i) => {
                        if((i + 1) == question){
                            return <Question key={i} data={x} save={(e)=>saveAnswer(e,(i+1))}></Question>
                        }
                    })}
                    {quizdone && <div className='flex flex-col items-center'>
                        <Label className='text-3xl'>Quiz Result</Label>
                        <Separator className="my-2" />
                        <span className='text-2xl'>{score}/{quiz.length} Questions are correct !</span>
                        <AnimatedNumbers
                            transitions={(index) => ({
                                type: "spring",
                                duration: index + 0.1,
                            })}
                            animateToNumber={score * 100}
                            fontStyle={{
                                fontSize: 60,
                            }}
                        />
                        
                        <span className='text-2xl'>Points</span>
                        
                            <Button className='mt-5 z-50' onClick={handleSubmitButton}>Back to Home</Button>
                        
                    </div>
                    }
                </div>
            </CardContent>
            </Card>
        </div>
        </div>
        </>
    );
}

export default QuizPage;