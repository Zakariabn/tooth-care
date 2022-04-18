import React from "react";
import { toast } from "react-toastify";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-primary my-5">
        Blogs
      </h1>
      <div className="max-w-screen-lg md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <Blog
          title="Difference between authorization and authentication"
          desc="অথোরাইজেশন হলো একটা ইউজারের পারমিশন বা ক্ষমতা কতটুকু বের করার
        সিস্টেম । অর্থাৎ একটা অ্যাপ এ অনেক ইউজার থাকতে পারে তাদের ভেতর কেউ
        কেউ এডমিন থাকতে পারে কেউ সাধারণ ইউজার থাকতে পারে । এডমিনের এমন কিছু
        করার অনুমতি থাকতে পারে যেটা সাধারণ ইউজারের নেই । এই একটা ইউজারে
        কতটুকু ক্ষমতা বের করার সিস্টেম অথরাইজেশন। <br /> <br /> অথেন্টিকেশন
        হল ইউজারের পরিচিতি অর্থাৎ ইউজার কি সাইটের সদস্য ? নাকি না ? সে হতে
        পারে এডমিন অথবা সাধারণ সদস্য। এই সিস্টেমকে বলা হয় অথেন্টিকেশন"></Blog>

        <Blog
          title="What other services does firebase provide other than authentication?"
          desc="Firebase হল Googl এর  backend সার্ভিস প্রোভাইডার । Firebase আমাদের অনেক ধরনের সার্ভিস প্রোভাইড করে ।  তার মধ্যে আমরা ইউজার অথেন্টিকেশন একটা সার্ভিস ব্যবহার করেছি । এটা ছাড়াও ফায়ারবেজ আরো অনেকগুলো সার্ভিস প্রোভাইড করে সেগুলোর মধ্যে অন্যতম হলো Hosting, এর মাধ্যমে একটা সাইট বা অ্যাপ কে পাবলিকলি হোস্ট করা যায় । Cloud storeage এর মাধ্যমে বিভিন্ন ধরনের ডাটা ক্লাউডে রাখা যায় এবং access করা যায় । এছাড়াও রয়েছে  Cloud function, Cloud Messaging, Realtime database, Remote Config ইত্যাদি ।"></Blog>

        <Blog
          title="Why are you using firebase? What other options do you have to implement authentication?"
          desc="ফায়ারবেজ অথেন্টিকেশন আমাদের ব্যাক এন্ড server-side user Authentication সার্ভিস প্রোভাইড করে খুবই সহজ  softwer devlopment kit (SDK) এবং radimate library এর মাধ্যমে।যার মাধ্যমে আমরা অনেক সহজে একটা অ্যাপের ইউজারদেরকে authenticate করতে পারি । Firebase ছাড়াও এই ধরনের সুবিধা দিয়ে থাকে আরো কিছু প্রোভাইডার সেগুলো হলো: Auth0, MongoD, Parse, Back4App,"></Blog>
      </div>
    </div>
  );
};

export default Blogs;
