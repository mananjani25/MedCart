import Image from 'next/image';
import React from 'react';
import styles from './OrderSummarySidebar.module.css';

// Constants for better maintainability
const ORDER_DETAILS = {
  deliveryAddress: {
    label: 'Home',
    address: 'Singhal General store, Varun Path, Varun Nagar, JAIPUR, RAJASTHAN, 302020, India',
    expectedDelivery: '25 Dec \'25 - 27 Dec \'25',
  },
  pricing: {
    itemTotal: 4274.43,
    handlingCharges: 45,
    totalDiscount: 50,
    couponCode: 70,
    medcartCredits: 70,
    shippingFee: 12,
    amountPaid: 1999.00,
    totalSavings: 577.00,
  },
  payment: {
    method: 'UPI',
    from: 'Slice cc (XX9395)',
    txnId: '123456789012345',
    date: '29 Dec \'25 8:10 PM',
  },
};

const OrderSummarySidebar = () => {
  const formatCurrency = (amount: number) => `₹${amount.toFixed(2)}`;

  return (
    <aside className={styles.sidebar} aria-label="Order summary">
      <div className={styles.content}>
        {/* Delivery Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Delivering to</h2>
          <div className={styles.addressInfo}>
            <p className={styles.addressLabel}>{ORDER_DETAILS.deliveryAddress.label}</p>
            <p className={styles.addressText}>
              {ORDER_DETAILS.deliveryAddress.address}
            </p>
            <p className={styles.deliveryDate}>
              Expected delivery date : {ORDER_DETAILS.deliveryAddress.expectedDelivery}
            </p>
          </div>
        </section>

        {/* Order Summary Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitleBlack}>Order Summary</h2>
          
          <div className="mb-4">
            <h3 className={styles.itemsTitle}>Items</h3>
            <div className={styles.itemContainer}>
              <div className={styles.itemRow}>
                <Image 
                  src="/assets/dolo.png" 
                  alt="Dolo 500 Tablet" 
                  width={64} 
                  height={48} 
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>Dolo 500 Tablet</p>
                  <p className={styles.itemName}>Pain killer</p>
                </div>
              </div>
              <p className={styles.moreItems}>+4 More items</p>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className={styles.priceRow}>
              <span>Item total (MRP)</span>
              <span>{formatCurrency(ORDER_DETAILS.pricing.itemTotal)}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Handling charges</span>
              <span>₹{ORDER_DETAILS.pricing.handlingCharges}</span>
            </div>
            <div className={styles.priceRowGreen}>
              <span>Total Discount:</span>
              <span>-₹{ORDER_DETAILS.pricing.totalDiscount}</span>
            </div>
            <div className={styles.priceRowGreen}>
              <span>Coupon Code</span>
              <span>-₹{ORDER_DETAILS.pricing.couponCode}</span>
            </div>
            <div className={styles.priceRowGreen}>
              <span>Medcart Credits</span>
              <span>-₹{ORDER_DETAILS.pricing.medcartCredits}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Shipping fee</span>
              <span>₹{ORDER_DETAILS.pricing.shippingFee}</span>
            </div>
          </div>
        </section>

        {/* Amount Paid Section */}
        <section className={styles.section}>
          <div className={styles.amountHeader}>
            <h3 className={styles.amountLabel}>Amount paid</h3>
            <p className={styles.amountValue}>{formatCurrency(ORDER_DETAILS.pricing.amountPaid)}*</p>
          </div>
          
          <div className={styles.savingsCard}>
            <Image 
              src="/assets/curve_design.png" 
              alt="" 
              fill
              className={styles.savingsBackground}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          
            <div className={styles.savingsContent}>
              <Image 
                src="/assets/celebration.svg" 
                alt="" 
                width={16} 
                height={16} 
                className={styles.celebrationIcon}
                aria-hidden="true"
              />
              <span className={styles.savingsText}>
                You saved ₹{ORDER_DETAILS.pricing.totalSavings.toFixed(2)} on this order!
              </span>
            </div>
          </div>

          <p className={styles.disclaimer}>
            *Prices shown on the page are indicative, inclusive of all taxes and may slightly vary once the fin.... <button className={styles.disclaimerLink}>See more</button>
          </p>
        </section>

        {/* Payment Details Section */}
        <section className={styles.section}>
          <h3 className={styles.paymentTitle}>Paid via {ORDER_DETAILS.payment.method}</h3>
          <dl className={styles.paymentInfo}>
            <div>
              <dt className={styles.paymentLabel}>From : </dt>
              <dd className={styles.paymentValue}>{ORDER_DETAILS.payment.from}</dd>
            </div>
            <div>
              <dt className={styles.paymentLabel}>Txn ID : </dt>
              <dd className={styles.paymentValue}>{ORDER_DETAILS.payment.txnId}</dd>
            </div>
            <div>
              <dt className={styles.paymentLabel}>Date : </dt>
              <dd className={styles.paymentValue}>{ORDER_DETAILS.payment.date}</dd>
            </div>
          </dl>
        </section>

        {/* Action Buttons - Desktop */}
        <div className={styles.buttonsDesktop}>
          <button className={styles.buttonsPrimary} aria-label="Explore more products">
            Explore more
          </button>
          <button className={styles.buttonsSecondary} aria-label="Track your order">
            Track Order
          </button>
        </div>
      </div>

      {/* Action Buttons - Tablet */}
      <div className={styles.buttonsTablet}>
        <div className={styles.buttonsTabletContent}>
          <button className={styles.buttonsPrimary} aria-label="Explore more products">
            Explore more
          </button>
          <button className={styles.buttonsSecondary} aria-label="Track your order">
            Track Order
          </button>
        </div>
      </div>

      {/* Action Buttons - Mobile */}
      <div className={styles.buttonsMobile}>
        <div className={styles.buttonsMobileContent}>
          <button className={`${styles.buttonsPrimary} ${styles.buttonMobile}`} aria-label="Explore more products">
            Explore more
          </button>
          <button className={`${styles.buttonsSecondary} ${styles.buttonMobile}`} aria-label="Track your order">
            Track Order
          </button>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummarySidebar;