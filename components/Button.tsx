'use client'

import { toast } from "react-hot-toast";

const Button = () => {
    const clickMe=()=>{
        toast.success('My Name Is Likhon Welcome...')
    }
    return (
        <div>
            <button onClick={clickMe} className="px-3 py-2 md:ml-96 mt-10 text-white bg-blue-500 rounded-lg">Click Me </button>
            
        </div>
    );
};

export default Button;