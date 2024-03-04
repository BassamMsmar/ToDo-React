'use client';

import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/componints/productList";
import Link from "next/link";
import { useEffect, useState } from "react";




export default function Home() {


  let hideProductPist = true
  let text = "hello"
  let number = 123    


  const [counter, setCounter] = useState(0)
  const [success, setSuccess] = useState(false)
  console.log(success)

  const handleClick = () =>{
    setCounter(counter + 1)
    if (counter === 10){
      setSuccess(true)
    }
  }

  useEffect(() => {
    console.log("Event is true")
  }, [success])

  useEffect(() => {
    console.log("counter is " + counter)
  }, [counter])


  return (
    <main className={styles.main} >
      <div>
        <h1>Conter : {counter}</h1>
        <button type="button" onClick={handleClick}>Click</button>
      </div>
      
      <div className={styles.center}>
      {hideProductPist && <ProductList text={text} number={number} />}
      </div>
      <a href="/about">About</a>
      <Link href="/about">About</Link>
    </main>
  );
}
