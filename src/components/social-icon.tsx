type IconName = "email" | "github" | "linkedin" | "location";

export function SocialIcon({ name }: { name: IconName }) {
  if (name === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.1c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.72 5.39-5.3 5.68.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.5 3h-17A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 20.5 3ZM8 18H5V9h3v9ZM6.5 7.8A1.75 1.75 0 1 1 6.5 4.3a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.2-.5-2-1.5-2-1.2 0-1.8.8-1.8 2.3V18h-3V9h2.9v1.2c.6-.9 1.6-1.5 2.9-1.5 2.2 0 3.5 1.4 3.5 4.4V18Z"
        />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        />
        <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}
