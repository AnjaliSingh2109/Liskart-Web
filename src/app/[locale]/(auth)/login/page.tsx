"use client";

import Button from "react-bootstrap/Button";

import { useAppDispatch } from "@customHooks/useTypedDispatch";
import { save } from "@redux/slices/authSlice";
import styles from './login.module.scss';
import {valid} from './typeDefs';
import { Link } from "@/navigation";
import SegmentCont from '@components/core/SegmentCont';
import Image from "next/image";
import logo from './logo.png';


const Login = () => {
    const dispatch = useAppDispatch();

    const handleLogin = async () => {
        // try {
        //     // enable loader here
        //     const res = await login({
        //         email: "email",
        //         password: "password",
        //     });

        //     if (res.data.data.accessToken) {
        //         const encryptedAccessToken = CryptoJS.AES.encrypt(
        //             res.data.data?.accessToken,
        //             String(process.env.APP_SECRET)
        //         ).toString();

        //         res.data.data.accessToken = encryptedAccessToken;
        //     }

        //     dispatch(save(res?.data?.data));
        // } catch (error) {
        //     console.log("error", error);
        // } finally {
        //     // disable loader here
        // }
    };
    return (
        <div>
            <div className={styles.main}>
            <div className={styles.cont}>
        <h3 className={styles.loginHeader}>Welcome to LISKART</h3>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="phone"></label>
            <input type="number"  id="phone" name="phone" placeholder="  Phone" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="otp"></label>
            <input type="number" id="otp" name="otp" placeholder="  Otp" required />
          </div>
          <button type="submit" className="btn-success">LOGIN</button>
        </form>
        <p className={styles.text}>
          Don't have an account? <Link href="/register" style={{color:"green"}}>Register</Link>
        </p>
        </div>
        </div>
        <SegmentCont/>
        </div>
    );
};

export default Login;
