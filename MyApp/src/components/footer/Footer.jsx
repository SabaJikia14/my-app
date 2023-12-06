import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <span>@all rights reserved</span>
      <div className={styles.socialNetworks}>
        <Image
        link="www.facebook.com"
          src="/1.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="facebook"
        />
        <Image
        link="www.instagram.com"
          src="/2.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="instagram"      
        />
        <Image
        link="www.twitter.com"
          src="/3.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="x"
        />
        <Image
        link="www.youtube.com"
          src="/4.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="youtube"
        />
      </div>
    </div>
  );
}

export default Footer;
