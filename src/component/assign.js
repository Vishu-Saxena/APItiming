import React, { useState } from 'react'
import "../App.css";

const Assign = () => {
    const [t1 , setT1] = useState();
    const [t2 , setT2] = useState();
    const [t3 , setT3] = useState();
    const [t4 , setT4] = useState();
    const [t5 , setT5] = useState();
    const [t6 , setT6] = useState();
    const [t7 , setT7] = useState();
    const [t8 , setT8] = useState();
    const [t9 , setT9] = useState();
    const [t10 , setT10] = useState();
    const [t11 , setT11] = useState();
    const [t12 , setT12] = useState();
    const [t13 , setT13] = useState();
    const [t14 , setT14] = useState();
    const [t15 , setT15] = useState();
    const [t16 , setT16] = useState();

    // const url1 = "https://jsonplaceholder.typicode.com/photos";
    const func1 = async(url) =>{
        setT1(new Date().toLocaleTimeString());
        const response = await fetch(url);
        setT2(new Date().toLocaleTimeString());  
        setT3(new Date().toLocaleTimeString());  
        const data = await response.json();
        setT4(new Date().toLocaleTimeString());
    }
    const func2 = async(url) =>{
        setT5(new Date().toLocaleTimeString());
        const response = await fetch(url);
        setT6(new Date().toLocaleTimeString()); 
        setT7(new Date().toLocaleTimeString()); 
        const data = await response.json();
        setT8(new Date().toLocaleTimeString());    
    }
    const func3 = async(url) =>{
        setT9(new Date().toLocaleTimeString());
        const response = await fetch(url);
        setT10(new Date().toLocaleTimeString());
        setT11(new Date().toLocaleTimeString());
        const data = await response.json();
        setT12(new Date().toLocaleTimeString());    
    }
    const func4 = async(url) =>{
        setT13(new Date().toLocaleTimeString());
        const response = await fetch(url);
        setT14(new Date().toLocaleTimeString()); 
        setT15(new Date().toLocaleTimeString()); 
        const data = await response.json();
        setT16(new Date().toLocaleTimeString());    
    }

    const [time , setTIme] = useState(new Date().toLocaleTimeString());
    const updateTime = ()=>{
      setTIme(new Date().toLocaleTimeString());
    }

    setInterval(updateTime , 1000);

    return (
    <>
      <div className="main">
        <div className="body mt-3">
            <div className="row mt-3 mb-4">
                <div className="col-12">
                    <h2>Test App</h2>
                </div>
            </div>
            <div className="row rw">
                <div className="col-sm-4 py-3 text-center br">
                    <p>Start : <span> {t1} </span></p>
                    <p>end : <span> {t2} </span></p>
                    <p>Start save : <span> {t3} </span></p>
                    <p>End save : <span> {t4} </span></p>
                </div>
                <div className="col-sm-4 py-3 text-center br">
                    <p>Start : <span> {t5} </span></p>
                    <p>end : <span> {t6} </span></p>
                    <p>Start save : <span> {t7} </span></p>
                    <p>End save : <span> {t8} </span></p>
                </div>
            </div>
            <div className="row rw">
                <div className="col-sm-4 py-3 text-center br">
                    <p>Start : <span> {t9} </span></p>
                    <p>end : <span> {t10} </span></p>
                    <p>Start save : <span> {t11} </span></p>
                    <p>End save : <span>  {t12} </span></p>
                </div>
                <div className="col-sm-4 py-3 text-center br">
                    <p>Start : <span> {t13} </span></p>
                    <p>end : <span> {t14} </span></p>
                    <p>Start save : <span> {t15} </span></p>
                    <p>End save : <span> {t16} </span></p>
                </div>
                <div className="row rw my-2">
                  <div className="col-4 rw">
                    <button type="button" class="btn btn-outline-light" onClick={()=>func1("https://jsonplaceholder.typicode.com/photos")} >Button1</button>
                  </div>
                  <div className="col-4 rw">
                    <button type="button" class="btn btn-outline-light" onClick={()=>func2("https://jsonplaceholder.typicode.com/comments")}>Button2</button>
                  </div>

                </div>

                <div className="row rw">
                  <div className="col-4 rw">
                    <button type="button" class="btn btn-outline-light" onClick={()=>func3("https://jsonplaceholder.typicode.com/todo")} >Button3</button>
                  </div>
                  <div className="col-4 rw">
                    <button type="button" class="btn btn-outline-light" onClick={()=>func4("https://jsonplaceholder.typicode.com/posts")} >Button4</button>
                  </div>
                  
                </div>

                <div className="row rw my-4">
                  <div className="col-4 text-center br">
                    <label> {time} </label>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Assign
