import Link from 'next/link';
export default function Footer() {
  return (
    <div className="container mx-auto items-center my-5">
      <footer className="text-blueGray-700 transition duration-500 ease-in-out transform  rounded-lg ">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
        <Link href="/">
              <a className="">
                <svg
                  width="140"
                  height="53"
                  viewBox="0 0 169 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8031 35L13.3057 29.283H6.806L5.34271 35H0.17015L6.60182 11.2471H13.8162L20.2479 35H14.8031ZM10.209 16.1814H9.93676L7.62272 25.1653H12.523L10.209 16.1814ZM22.0722 31.0866H26.1217V21.354H22.0722V17.4405H31.1582V22.4089H31.3964C31.5552 21.7737 31.7707 21.1611 32.043 20.5713C32.3379 19.9587 32.7009 19.4256 33.1319 18.9719C33.5857 18.4955 34.1301 18.1211 34.7654 17.8489C35.4006 17.5766 36.1493 17.4405 37.0113 17.4405H38.6788V22.0686H34.9355C33.6878 22.0686 32.7463 22.4429 32.111 23.1916C31.4758 23.9176 31.1582 24.8137 31.1582 25.88V31.0866H36.9433V35H22.0722V31.0866ZM50.6781 35C48.8632 35 47.5133 34.5236 46.6285 33.5707C45.7438 32.6179 45.3014 31.4042 45.3014 29.9295V21.354H40.5372V17.4405H43.6339C44.3826 17.4405 44.9157 17.2931 45.2333 16.9981C45.5509 16.7032 45.7097 16.1587 45.7097 15.3647V11.2471H50.3378V17.4405H57.1778V21.354H50.3378V31.0866H57.1778V35H50.6781ZM69.9598 15.1945C68.8255 15.1945 68.0315 14.9677 67.5777 14.5139C67.1467 14.0375 66.9312 13.4704 66.9312 12.8124V11.8256C66.9312 11.145 67.1467 10.5778 67.5777 10.1241C68.0315 9.67034 68.8255 9.44347 69.9598 9.44347C71.0942 9.44347 71.8769 9.67034 72.3079 10.1241C72.7616 10.5778 72.9885 11.145 72.9885 11.8256V12.8124C72.9885 13.4704 72.7616 14.0375 72.3079 14.5139C71.8769 14.9677 71.0942 15.1945 69.9598 15.1945ZM61.8607 31.0866H67.4416V21.354H61.8607V17.4405H72.4781V31.0866H77.6506V35H61.8607V31.0866ZM89.1395 35.4084C87.7556 35.4084 86.5078 35.2042 85.3962 34.7958C84.3072 34.3648 83.377 33.7522 82.6057 32.9582C81.857 32.1642 81.2785 31.2 80.8702 30.0656C80.4618 28.9313 80.2576 27.6495 80.2576 26.2203C80.2576 24.791 80.4618 23.5092 80.8702 22.3749C81.2785 21.2405 81.857 20.2764 82.6057 19.4823C83.377 18.6883 84.3072 18.0871 85.3962 17.6787C86.5078 17.2477 87.7442 17.0322 89.1054 17.0322C91.0338 17.0322 92.5765 17.4292 93.7335 18.2232C94.9132 18.9946 95.8093 20.0268 96.4219 21.3199L92.5425 23.4298C92.2248 22.7492 91.8051 22.182 91.2833 21.7283C90.7842 21.2746 90.0583 21.0477 89.1054 21.0477C87.9484 21.0477 87.0523 21.388 86.4171 22.0686C85.8045 22.7265 85.4982 23.634 85.4982 24.791V27.6495C85.4982 28.8065 85.8045 29.7253 86.4171 30.4059C87.0523 31.0639 87.9711 31.3928 89.1735 31.3928C90.149 31.3928 90.909 31.166 91.4535 30.7122C92.0207 30.2585 92.4971 29.6686 92.8828 28.9427L96.6941 31.1206C96.0589 32.4137 95.1287 33.4573 93.9037 34.2513C92.7013 35.0227 91.1132 35.4084 89.1395 35.4084ZM107.979 35.4084C106.618 35.4084 105.393 35.2042 104.304 34.7958C103.215 34.3648 102.284 33.7522 101.513 32.9582C100.764 32.1642 100.186 31.2 99.7776 30.0656C99.3692 28.9313 99.165 27.6495 99.165 26.2203C99.165 24.791 99.3692 23.5092 99.7776 22.3749C100.186 21.2405 100.764 20.2764 101.513 19.4823C102.284 18.6883 103.215 18.0871 104.304 17.6787C105.393 17.2477 106.618 17.0322 107.979 17.0322C109.34 17.0322 110.565 17.2477 111.654 17.6787C112.743 18.0871 113.662 18.6883 114.41 19.4823C115.182 20.2764 115.772 21.2405 116.18 22.3749C116.588 23.5092 116.793 24.791 116.793 26.2203C116.793 27.6495 116.588 28.9313 116.18 30.0656C115.772 31.2 115.182 32.1642 114.41 32.9582C113.662 33.7522 112.743 34.3648 111.654 34.7958C110.565 35.2042 109.34 35.4084 107.979 35.4084ZM107.979 31.6651C109.113 31.6651 109.998 31.3134 110.633 30.6101C111.268 29.9068 111.586 28.9086 111.586 27.6155V24.825C111.586 23.5319 111.268 22.5337 110.633 21.8304C109.998 21.1271 109.113 20.7755 107.979 20.7755C106.844 20.7755 105.96 21.1271 105.324 21.8304C104.689 22.5337 104.372 23.5319 104.372 24.825V27.6155C104.372 28.9086 104.689 29.9068 105.324 30.6101C105.96 31.3134 106.844 31.6651 107.979 31.6651ZM127.533 35.4084C126.172 35.4084 124.946 35.2042 123.858 34.7958C122.769 34.3648 121.838 33.7522 121.067 32.9582C120.318 32.1642 119.74 31.2 119.332 30.0656C118.923 28.9313 118.719 27.6495 118.719 26.2203C118.719 24.791 118.923 23.5092 119.332 22.3749C119.74 21.2405 120.318 20.2764 121.067 19.4823C121.838 18.6883 122.769 18.0871 123.858 17.6787C124.946 17.2477 126.172 17.0322 127.533 17.0322C128.894 17.0322 130.119 17.2477 131.208 17.6787C132.297 18.0871 133.216 18.6883 133.964 19.4823C134.736 20.2764 135.326 21.2405 135.734 22.3749C136.142 23.5092 136.347 24.791 136.347 26.2203C136.347 27.6495 136.142 28.9313 135.734 30.0656C135.326 31.2 134.736 32.1642 133.964 32.9582C133.216 33.7522 132.297 34.3648 131.208 34.7958C130.119 35.2042 128.894 35.4084 127.533 35.4084ZM127.533 31.6651C128.667 31.6651 129.552 31.3134 130.187 30.6101C130.822 29.9068 131.14 28.9086 131.14 27.6155V24.825C131.14 23.5319 130.822 22.5337 130.187 21.8304C129.552 21.1271 128.667 20.7755 127.533 20.7755C126.398 20.7755 125.514 21.1271 124.878 21.8304C124.243 22.5337 123.926 23.5319 123.926 24.825V27.6155C123.926 28.9086 124.243 29.9068 124.878 30.6101C125.514 31.3134 126.398 31.6651 127.533 31.6651ZM139.192 31.0866H144.568V13.7313H139.192V9.8178H149.605V31.0866H154.982V35H139.192V31.0866Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="84.5"
                      y1="0"
                      x2="84.5"
                      y2="53"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4DB68D" />
                      <stop offset="1" stopColor="#8CC3AE" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </Link>
          
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            {/* <a
              href="#"
              className="px-4 py-1 mr-1 text-base text-dark-700 dark:text-white transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-4 py-1 mr-1 text-base text-dark-700 dark:text-white transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-1 mr-1 text-base text-dark-700 dark:text-white transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >
              Services
            </a>
            <a
              href="#"
              className="px-4 py-1 mr-1 text-base text-dark-700 dark:text-white transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >
              Now
            </a> */}
            <p className="text-center px-4 py-1 mr-1  text-xl text-dark-700 dark:text-white">Made with ❤️ by Aminat  </p>
            <p className="text-center px-4 py-1 mr-1  text-xl text-dark-700 dark:text-white">2021 </p>
            
          </nav>
          <span className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-blue-500 hover:text-black">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-blue-500 hover:text-black">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-blue-500 hover:text-black">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-blue-500 hover:text-black">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}