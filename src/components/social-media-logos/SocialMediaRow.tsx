import { FunctionComponent } from "react";

type Props = {
  extraSmall?: boolean
}

const SocialMediaRow:FunctionComponent<Props> = (props) => {
  return (
    <div className="flex gap-2">
      <div className={`flex items-center justify-center p-1 w-10 h-10 ${props.extraSmall ? 'w-6 h-6 border-2' : 'sm:w-8 sm:h-8 border-4 sm:border-0'} border-white rounded-full bg-red-400`}>
        <svg
          className={`${props.extraSmall ? 'w-3 h-3' : 'w-5 h-5 sm:w-4 sm:h-4'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="#ffffff"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </div>
      <div className={`flex items-center justify-center p-1 ${props.extraSmall ? 'w-6 h-6 border-2' : 'w-10 h-10 sm:w-8 sm:h-8 border-4 sm:border-0'} rounded-full bg-red-400`}>
        <svg
          className={`${props.extraSmall ? 'w-3 h-3' : 'w-5 h-5 sm:w-4 sm:h-4'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#ffffff"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </div>
      <div className={`flex items-center justify-center p-1 ${props.extraSmall ? 'w-6 h-6 border-2' : 'w-10 h-10 sm:w-8 sm:h-8 border-4 sm:border-0'} rounded-full bg-red-400`}>
        <svg
          className={`${props.extraSmall ? 'w-3 h-3' : 'w-5 h-5 sm:w-4 sm:h-4'}`}
          viewBox="0 0 17 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1976 4.3162C14.0788 4.25301 13.9631 4.18373 13.8511 4.10863C13.5252 3.88689 13.2264 3.62561 12.9611 3.33042C12.2974 2.54882 12.0495 1.75589 11.9582 1.20073H11.9619C11.8856 0.739916 11.9171 0.441767 11.9219 0.441767H8.89889V12.4727C8.89889 12.6342 8.89889 12.7938 8.89229 12.9516C8.89229 12.9712 8.89046 12.9893 8.88936 13.0105C8.88936 13.0192 8.88936 13.0282 8.88753 13.0373C8.88753 13.0395 8.88753 13.0418 8.88753 13.0441C8.85566 13.4757 8.72121 13.8927 8.49601 14.2584C8.27081 14.624 7.96176 14.9271 7.59604 15.1409C7.21488 15.3641 6.78378 15.4812 6.34526 15.4806C4.9368 15.4806 3.79529 14.2986 3.79529 12.8388C3.79529 11.379 4.9368 10.1969 6.34526 10.1969C6.61187 10.1967 6.87685 10.2398 7.13034 10.3249L7.13401 7.15693C6.36446 7.05462 5.58266 7.11756 4.83793 7.34179C4.0932 7.56602 3.4017 7.94667 2.80706 8.45973C2.28601 8.92567 1.84797 9.48162 1.51264 10.1026C1.38503 10.329 0.903565 11.2389 0.845261 12.7157C0.808592 13.5539 1.05317 14.4223 1.16978 14.7813V14.7888C1.24312 15.0001 1.52731 15.7214 1.99044 16.3294C2.36389 16.8171 2.80511 17.2455 3.29989 17.6008V17.5933L3.30722 17.6008C4.77069 18.6244 6.39329 18.5572 6.39329 18.5572C6.67418 18.5455 7.61511 18.5572 8.68365 18.036C9.86879 17.4582 10.5435 16.5973 10.5435 16.5973C10.9745 16.083 11.3173 15.4968 11.557 14.8639C11.8306 14.1238 11.9219 13.2362 11.9219 12.8814V6.49873C11.9586 6.52138 12.447 6.85387 12.447 6.85387C12.447 6.85387 13.1507 7.31808 14.2485 7.62038C15.0362 7.8355 16.0974 7.88079 16.0974 7.88079V4.79211C15.7256 4.83362 14.9706 4.71285 14.1976 4.3162Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default SocialMediaRow;
