'use client'

import { toast } from "react-hot-toast";

const ButtonLikhon = () => {
    const clickSubmit=()=>{
        toast.success('Its me Likhon')
    }

    return (
        <div>
            <h1>This is from Likhon</h1>

            <button onClick={clickSubmit} className="px-3 py-2 md:ml-96 mt-20 bg-red-400 text-white">Click Me </button>
            
        </div>
    );
};

export default ButtonLikhon;