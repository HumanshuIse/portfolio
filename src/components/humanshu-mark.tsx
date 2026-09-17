export function HumanshuMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1152 640"
      aria-hidden
      {...props}
    >
      {/* H — Medium-Bold (thickness 152px) */}
      <path
        fill="currentColor"
        d="
          M152 0H0v640h152Z
          M512 0H360v640h152Z
          M152 244h208v152H152Z
        "
      />

      {/* I — Medium-Bold (thickness 152px), offset x=640 */}
      <path
        fill="currentColor"
        d="
          M640 0h512v152H640Z
          M820 152h152v336H820Z
          M640 488h512v152H640Z
        "
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1152 640"><path fill="currentColor" d="M152 0H0v640h152ZM512 0H360v640h152ZM152 244h208v152H152Z"/><path fill="currentColor" d="M640 0h512v152H640ZM820 152h152v336H820ZM640 488h512v152H640Z"/></svg>`
}