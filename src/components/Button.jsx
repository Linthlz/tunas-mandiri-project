const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap'

const variants = {
  primary: 'bg-plum-900 text-white hover:bg-plum-700 shadow-sm hover:shadow-md',
  secondary: 'bg-honey-400 text-plum-950 hover:bg-honey-200',
  outline: 'border border-plum-900/20 text-plum-900 hover:border-plum-900 hover:bg-plum-50',
  ghost: 'text-plum-900 hover:bg-plum-50',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-[0.95rem]',
  lg: 'px-9 py-4 text-base',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  full = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`${base} ${variants[variant]} ${sizes[size]} ${full ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
