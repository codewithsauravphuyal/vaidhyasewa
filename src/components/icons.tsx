import { type LucideProps } from "lucide-react"

export function Logo(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <path d="m16.24 7.76 2.83-2.83" />
      <path d="M17 12h4" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M12 18v4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="M2 12h4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  )
}

export const Icons = {
  logo: Logo,
}
