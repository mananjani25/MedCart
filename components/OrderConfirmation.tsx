import Image from 'next/image';
import React from 'react';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  const orderNumber = '122334455';
  
  return (
    <div className={styles.container}>
      <section className={styles.successSection} aria-labelledby="order-confirmation-title">
        <div className={styles.tickImageWrapper}>
          <Image 
            src="/assets/tick.png" 
            alt="Order confirmed successfully" 
            width={144} 
            height={144}
            className={styles.tickImage}
            priority
          />
        </div>

        <p className={styles.subHeading}>Great Job</p>

        <h1 id="order-confirmation-title" className={styles.mainHeading}>
          Your Order No. {orderNumber} is Placed
        </h1>

        <p className={styles.description}>
          We will notify you once this order gets confirmed and send your updates thereafter
        </p>

        <div className={styles.cardWrapper}>
          <div className={styles.prescriptionCard}>
            <div className={styles.cardContent}>
              <div className={styles.prescriptionImageWrapper}>
                <Image 
                  src="/assets/prescription.png" 
                  alt="Prescription review" 
                  width={104} 
                  height={112} 
                  className={styles.prescriptionImage}
                />
              </div>
              <p className={styles.cardText}>
                We&apos;re reviewing your prescription now to confirm your order
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderConfirmation;