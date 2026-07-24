export function FaceLineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M128 20 C 110 40, 96 68, 98 96 C 99 112, 106 120, 112 128 C 116 134, 116 140, 112 144 C 108 148, 102 148, 100 152 C 98 156, 102 158, 106 160 C 110 162, 108 166, 104 168 C 100 170, 102 176, 108 178 C 112 180, 112 186, 106 190 C 96 198, 78 202, 64 210 C 44 222, 34 244, 40 268"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M128 20 C 148 44, 158 76, 152 108 C 148 130, 136 148, 128 164 C 120 180, 118 196, 124 212"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="122" cy="132" r="2.5" fill="currentColor" />
      <path
        d="M64 210 C 80 214, 100 212, 112 204"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
