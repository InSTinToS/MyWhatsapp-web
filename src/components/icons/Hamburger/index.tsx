export default function Hamburger({ ...props }) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M21 13H3C2.4 13 2 12.6 2 12C2 11.4 2.4 11 3 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13ZM21 5H3C2.4 5 2 4.6 2 4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4C22 4.6 21.6 5 21 5ZM21 21H3C2.4 21 2 20.6 2 20C2 19.4 2.4 19 3 19H21C21.6 19 22 19.4 22 20C22 20.6 21.6 21 21 21Z' />
    </svg>
  )
}
