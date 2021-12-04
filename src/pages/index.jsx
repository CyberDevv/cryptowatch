import tw from 'twin.macro';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
   return <H1>CryptoWatch</H1>;
}

// Tailwind styles
const H1 = tw.h1`text-blue-800 text-3xl`;
