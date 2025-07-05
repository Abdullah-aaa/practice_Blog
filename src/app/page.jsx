import Image from "next/image";
import styles from "./page.module.css";
// import Hero from "/hero.png";
// import Hero from '.../public/hero.png'
import Button from "@/components/Button/Button";
import { db } from "@/db/drizzle"
import { user, usersTable } from "@/db/schema"

export default async function Home() {
  const users = await db.select().from(usersTable);
  console.log(users);
  
  // const users  = await db.select().from(user)
  // console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src="/hero.png" width={500} height={500} className={styles.img} />
      </div>
    </div>
  );
}
