import React from "react";
import userData from "@constants/data";
import Image from "next/image";

import html from "../public/images/tech stack/html.png";
import css from "../public/images/tech stack/css.png";
import javascript from "../public/images/tech stack/javascript.png";
import react from "../public/images/tech stack/react.png";
import c from "../public/images/tech stack/c.png";
import python from "../public/images/tech stack/python.png";
import kali from "../public/images/tech stack/kali.png";
import docker from "../public/images/tech stack/docker.png";
import kubernetes from "../public/images/tech stack/kubernetes.png";
import azure from "../public/images/tech stack/azure.png";
import ansible from "../public/images/tech stack/ansible.png";
import terraform from "../public/images/tech stack/terraform.png";

export default function AboutMe() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left text-gray-500 dark:text-gray-600">
            About Me.
          </h1>
        </header>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I&#39;ll get back.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I am currently looking for a job. If my qualifications pique
                your interest, please take a moment to review{" "}
                <a
                  href="/Yassine Sebri.pdf"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  download
                >
                  CV
                </a>
                .
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <Image src={html} className="h-20 w-20 mx-4 my-4" alt="HTML" />
              <Image src={css} className="h-20 w-20 mx-4 my-4" alt="CSS" />
              <Image
                src={javascript}
                className="h-20 w-20 mx-4 my-4"
                alt="Javascript"
              />
              <Image src={react} className="h-20 w-20 mx-4 my-4" alt="React" />
              <Image src={c} className="h-20 w-20 mx-4 my-4" alt="C" />
              <Image
                src={python}
                className="h-20 w-20 mx-4 my-4"
                alt="Python"
              />
              <Image
                src={kali}
                className="h-20 w-20 mx-4 my-4"
                alt="Kali Linux"
              />
              <Image
                src={docker}
                className="h-20 w-20 mx-4 my-4"
                alt="Docker"
              />
              <Image
                src={kubernetes}
                className="h-20 w-20 mx-4 my-4"
                alt="Kubernetes"
              />
              <Image
                src={ansible}
                className="h-20 w-20 mx-4 my-4"
                alt="Ansible"
              />
              <Image
                src={terraform}
                className="h-20 w-20 mx-4 my-4"
                alt="Terraform"
              />
              <Image src={azure} className="h-20 w-20 mx-4 my-4" alt="Azure" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
