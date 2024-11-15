import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function StatusWindow() {
    const location = useLocation();
    const { userData } = location.state || {};
    const [loss, setLoss] = useState(0);
    
    return( 
        <>
            <div className=" bg-white w-fit h-fit fixed top-20 right-10 rounded-lg p-10 shadow-md">
                <div className=" flex flex-col text-xl font-bold ">
                    <p>Win : {userData.scores}</p>
                    <p>Loss: {loss} </p>
                </div>

            </div>
        </>
    )
}

export default StatusWindow;