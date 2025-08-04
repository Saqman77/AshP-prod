'use client';
import React from "react";
import styles from "./contactBar.module.scss";
import Image from "next/image";

interface IContactBarProps {
  companyEmail: string;
  companyPhone: string;
}

const ContactBar = ({ companyEmail, companyPhone }: IContactBarProps) => {
  // Copy email to clipboard handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyEmail);
  };

  return (
    <div className={styles.contactBar}>
      {/* Email Section */}
      <div className={styles.emailSection}>
        <span className={styles.emailIcon}>
          <Image
            width={100}
            height={100}
            src={"/contact/EnvelopeSimple.svg"}
            alt=""
          />
        </span>
        <span>{companyEmail}</span>
      </div>
      {/* Copy Button */}
      <button
        className={styles.copyButton}
        onClick={handleCopyEmail}
        aria-label="Copy email address"
      >
        {/* TODO: Add copy icon here */}
        <span>
          <Image width={100} height={100} src={"/contact/copy.svg"} alt="" />
        </span>
      </button>
      {/* Phone Section */}
      {companyPhone && (
        <div className={styles.phoneSection}>
          <span className={styles.phoneIcon}>
            <Image
              width={100}
              height={100}
              src={"/contact/cbPhone.svg"}
              alt=""
            />
          </span>
          <span>{companyPhone}</span>
        </div>
      )}
    </div>
  );
};

export default ContactBar;
