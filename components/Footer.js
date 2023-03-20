import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>Copyright &copy; Yassine Sebri.</p>
          </div>
          <div className="pr-20">
            Email me at{" "}
            <a className="font-semibold" href={`mailto:${userData.email}`}>
              {userData.email}
            </a>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href={userData.socialLinks.github}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.173.546-.385 0-.19-.007-.693-.01-1.36-2.226.484-2.695-1.076-2.695-1.076-.364-.923-.888-1.167-.888-1.167-.725-.496.055-.486.055-.486.803.057 1.225.825 1.225.825.714 1.222 1.872.87 2.33.665.072-.52.278-.87.506-1.07-1.772-.2-3.634-.885-3.634-3.93 0-.867.31-1.577.824-2.134-.083-.202-.36-1.014.078-2.113 0 0 .67-.215 2.2.82a7.54 7.54 0 0 1 2-.274c.68 0 1.36.092 2 .274 1.53-1.035 2.198-.82 2.198-.82.44 1.099.162 1.911.08 2.113.514.557.823 1.267.823 2.134 0 3.052-1.864 3.727-3.644 3.922.286.245.54.728.54 1.472 0 1.062-.01 1.917-.01 2.176 0 .214.145.462.55.384C13.712 14.53 16 11.535 16 8c0-4.418-3.582-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
