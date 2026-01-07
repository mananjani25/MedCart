import Image from 'next/image';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.leftSection}>
            <Image 
              src="/assets/logo.svg" 
              alt="MedCart" 
              className={styles.logo}
              width={48}
              height={24}
              priority
            />
            
            <div className={styles.divider} aria-hidden="true" />
            
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryLabel}>
                <span>Delivery to</span>
              </div>
              <button 
                className={styles.deliveryLocation}
                aria-label="Change delivery location"
              >
                <span>Bengaluru, 560102</span>
                <Image 
                  src="/assets/arrow.svg" 
                  alt="" 
                  width={16} 
                  height={16}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <label htmlFor="search" className="sr-only">
                Search for Medicines or Health Products
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search for Medicines or Health Products"
                className={styles.searchInput}
                autoComplete="off"
              />
              <svg
                className={styles.searchIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <nav className={styles.rightSection} aria-label="Main navigation">
            <button className={styles.navButton} aria-label="Login to your account">
              <Image src="/assets/login.svg" alt="" width={16} height={16} aria-hidden="true" />
              <span>Login</span>
            </button>
            <button className={styles.navButton} aria-label="View shopping cart">
              <Image src="/assets/cart.svg" alt="" width={16} height={16} aria-hidden="true" />
              <span>Cart</span>
            </button>
            <button className={styles.navButton} aria-label="Register as a seller">
              <Image src="/assets/plus.svg" alt="" width={16} height={16} aria-hidden="true" />
              <span>Become a seller</span>
            </button>
            <button className={styles.menuButton} aria-label="Open menu">
              <svg 
                width="4" 
                height="16" 
                viewBox="0 0 4 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="black"/>
                <circle cx="2" cy="8" r="2" fill="black"/>
                <circle cx="2" cy="14" r="2" fill="black"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;