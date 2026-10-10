'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './contactForm.module.scss';
import content from './contactFormContent';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormspark } from "@formspark/use-formspark";
import Image from 'next/image';
import Script from 'next/script';

interface IContactFormProps {
  sendButtonText: string;
  name: {
    label?: string;
    placeholderText?: string;
  };
  email: {
    label?: string;
    placeholderText?: string;
  };
  message: {
    label?: string;
    placeholderText?: string;
  };
  phone: {
    label?: string;
    placeholderText?: string;
  };
}


// import FORMSPARK_FORM_ID from .env
const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || '';

const RECAPTCHA_SITE_KEY = '6LcIx-gtAAAAAOYi6kHo4phMwOXFUU2p9F31lFwq';

type RecaptchaApi = {
  ready: (callback: () => void) => void;
  render: (container: HTMLElement, options: {
    sitekey: string;
    size: 'normal' | 'compact';
    callback: (token: string) => void;
    'expired-callback': () => void;
    'error-callback': () => void;
  }) => number;
  getResponse: (widgetId: number) => string;
  reset: (widgetId: number) => void;
};

const getRecaptcha = () =>
  (window as Window & { grecaptcha?: RecaptchaApi }).grecaptcha;

const ContactForm = ({ sendButtonText, name, email, message, phone}: IContactFormProps) => {
   const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [captchaReady, setCaptchaReady] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const captchaContainer = useRef<HTMLDivElement>(null);
  const captchaWidget = useRef<number | null>(null);
  const sending = useRef(false);

  useEffect(() => {
    const recaptcha = getRecaptcha();
    const container = captchaContainer.current;
    if (!captchaReady || !recaptcha || !container) return;

    let active = true;
    recaptcha.ready(() => {
      if (!active) return;
      captchaWidget.current = recaptcha.render(container, {
        sitekey: RECAPTCHA_SITE_KEY,
        size: window.matchMedia('(max-width: 400px)').matches ? 'compact' : 'normal',
        callback: (token) => {
          if (!active) return;
          setCaptchaToken(token);
          setCaptchaError('');
        },
        'expired-callback': () => {
          if (!active) return;
          setCaptchaToken('');
          setCaptchaError('Verification expired. Please complete reCAPTCHA again.');
        },
        'error-callback': () => {
          if (!active) return;
          setCaptchaToken('');
          setCaptchaError('Verification failed. Please check your connection and try again.');
        },
      });
    });

    return () => {
      active = false;
      if (captchaWidget.current !== null) recaptcha.reset(captchaWidget.current);
      captchaWidget.current = null;
      container.replaceChildren();
    };
  }, [captchaReady]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setForm({ ...form, number: value || '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending.current || submitting || success || error || isFormIncomplete) return;

    const recaptcha = getRecaptcha();
    const token = captchaWidget.current !== null
      ? recaptcha?.getResponse(captchaWidget.current)
      : '';
    if (!token) {
      setCaptchaToken('');
      setCaptchaError('Please complete reCAPTCHA before sending your message.');
      return;
    }

    sending.current = true;
    try {
      await submit({ ...form, 'g-recaptcha-response': token });
      // if successful
      setSuccess(true);
      setError(false);
      setForm({ name: '', email: '', number: '', message: '' });
    } catch (e) {
      // if failed
      setError(true);
      setSuccess(false);
      console.error(e);
    } finally {
      sending.current = false;
      setCaptchaToken('');
      if (captchaWidget.current !== null) recaptcha?.reset(captchaWidget.current);
    }
  };



  const handleRetry = () => {
    setError(false);
    setSuccess(false);
    setForm({ name: '', email: '', number: '', message: '' });
  };

  const isFormIncomplete = !form.name || !form.email || !form.number || !form.message;

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <Script
        id="contact-recaptcha"
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setCaptchaReady(true)}
        onError={() => {
          setCaptchaToken('');
          setCaptchaError('Unable to load reCAPTCHA. Please check your connection and reload the page.');
        }}
      />
      {(success || error) && (
        <div style={{textAlign: 'center', padding: '12px 0 24px 0'}}>
          {success && (
            <div className={styles.successMessage}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', margin: '0 auto 8px'}}>
                <circle cx="12" cy="12" r="12" fill="#7B6DDB"/>
                <path d="M7 13.5L11 17L17 9.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{fontSize: '1.1rem', color: '#7B6DDB', fontWeight: 600}}>Sent successfully</div>
            </div>
          )}
          {error && (
            <div className={styles.errorMessage}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', margin: '0 auto 8px'}}>
                <circle cx="12" cy="12" r="12" fill="#E57373"/>
                <path d="M8 8L16 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M16 8L8 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div style={{fontSize: '1.1rem', color: '#E57373', fontWeight: 600, marginBottom: 8}}>Failed to send. Please try again.</div>
              <button onClick={handleRetry} type="button" style={{padding: '6px 18px', fontSize: '1rem', background: '#E57373', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer'}}>Try Again</button>
            </div>
          )}
        </div>
      )}
      <div className={styles.topRow}>
        <span className={styles.fromLabel}>{content.fromLabel}</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder={name?.placeholderText && name.placeholderText}
          value={form.name}
          onChange={handleChange}
          disabled={success || error}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder={email?.placeholderText && email.placeholderText}
          value={form.email}
          onChange={handleChange}
          disabled={success || error}
        />
        <PhoneInput
          className={styles.input}
          placeholder={phone?.placeholderText && phone.placeholderText}
          value={form.number}
          onChange={handlePhoneChange}
          disabled={success || error}
          defaultCountry="US"
        />
      </div>
      <div className={styles.messageSection}>
        <label className={styles.messageLabel}>{message?.label && message.label}</label>
        <textarea
          className={styles.textarea}
          name="message"
          placeholder={message?.placeholderText && message.placeholderText}
          value={form.message}
          onChange={handleChange}
          disabled={success || error}
        />
      </div>
      <div className={styles.captchaSection} hidden={success || error}>
        <div ref={captchaContainer} />
        {captchaError && <p className={styles.captchaError} role="alert">{captchaError}</p>}
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.sendButton} type="submit" disabled={submitting || success || error || isFormIncomplete || !captchaToken}>
          {sendButtonText && sendButtonText}
          <div className={styles.arrow}><Image width={100} height={100} src={"/buttons/right-arrow.svg"} alt="" /></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
