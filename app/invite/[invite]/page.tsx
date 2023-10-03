"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home({ params }: { params: { invite: string } }) {
  const data = params.invite.split("%2B%2B%2B");
  const invitorName = data[0].replace("_", " ");
  const inviteeName = data[1].replace("_", " ");

  /**useEffect(() => {
    setTimeout(() => {
      window.location.assign("https://apps.apple.com/app/6468271439");
    }, 3000);
  }, []);*/

  return (
    <main className="bg-zinc-900 text-white h-screen w-screen">
      <div className="py-3 flex bg-zinc-800 items-center">
        <Image
          src="/logo.png"
          width={68}
          height={68}
          className="mx-3 rounded-3xl"
          alt="logo"
        />
        <div>
          <p className="font-bold">Nerve - Get money</p>
          <p className="">Available on the App Store</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <motion.div
          animate={{ marginTop: 0 }}
          transition={{ duration: 2 }}
          className="bg-white fixed mt-[200px] text-black w-[300px] min-width-222 flex flex-col items-center rounded-xl"
        >
          <Image
            src="/ticket-logo.png"
            width={90}
            height={45}
            alt="logo"
            className="mt-5"
          />
          <div className="bg-zinc-900 z-2000 absolute top-20 left-2 -ml-5 rounded-full w-5 h-5" />
          <div className="bg-zinc-900 z-2000 absolute top-20 right-2 -mr-5 rounded-full w-5 h-5" />
          <p className="capitalize font-bold text-xl text-center mt-10 mb-20">
            {inviteeName}
          </p>
        </motion.div>
        <p className="text-xl fixed top-[300px] bg-zinc-900 w-[400px] text-center z-2000 shadow-inner pt-5 pb-[200px]">
          <b className="capitalize">{invitorName}</b> invited you to Nerve
        </p>
      </div>
      <div className="fixed w-full bottom-0 flex flex-col items-center">
        <button className="text-xl bg-red-500 font-bold rounded-full py-4 px-20">
          Open app
        </button>
        <p className="uppercase my-3 tracking-widest text-xs text-center">
          Expires in 1 hour
        </p>
      </div>
    </main>
  );
}
