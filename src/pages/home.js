import React ,{ useEffect, useState } from "react"

const Home = ({title = "home page", list}) => {
    const [counter, setCounter] = useState(20)
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter - 1)
        },1000)
    },[counter])
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter - 1)
        },1000)
    },[])
    // useEffect(()=> {
    //     return () => {
    //         alert ('remove')
    //     }
    // })
    return(
        <>
            <div>
                <h2>{title}</h2>
                <h3>{counter}</h3>
            </div>
        </>
    )
}

export default Home