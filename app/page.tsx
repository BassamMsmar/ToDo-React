import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/componints/productList";




export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>

      <ProductList text="hello" number={123} />
      
      </div>
    </main>
  );
}
