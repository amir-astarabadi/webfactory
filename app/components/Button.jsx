export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-3 rounded-lg font-semibold transition ${className}`}
    >
      {children}
    </button>
  )
}
