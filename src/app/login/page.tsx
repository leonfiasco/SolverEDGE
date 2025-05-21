import React from "react";
import { HeroText, HeroImage, SectionHeading } from "../components";
import { LOGIN } from "@/utils/images"; // You'll need to add this image
import styles from "./styles.module.scss";

export const metadata = {
  title: "Login | SolverEDGE",
  description: "Access your SolverEDGE account",
};

const Login = () => {
  return (
    <main className={styles.login}>
      <section className={styles.heroSection}>
        <HeroText
          firstUnderLine={"Welcome Back"}
          isSubText
          subText={
            "Sign in to continue your problem-solving journey and access personalized training"
          }
        />
        <div className={styles.heroImageContainer}>
          <HeroImage
            image={LOGIN}
            imgDescription="Login illustration"
            withSvg
            variant="login"
          />
        </div>
      </section>

      <section className={styles.loginFormSection}>
        <SectionHeading title={"Account Login"} star />
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className={styles.formOptions}>
            <div className={styles.rememberMe}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>

          <div className={styles.signupPrompt}>
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
