import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    >
        <img
          alt={"altered"}
          src={"KA_ARKASTER.webp"}
          className="absolute w-full h-full object-cover"
        />

        <div className={clsx(
        'w-full h-full opacity-50',
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}>

        </div>

      </div>
  )
}

export function GradientBackground() {
  return (
    <div className="mx-auto">
      <img
        alt={"altered"}
        src={"KA_BEYOND_THE_GATES.webp"}
        className="absolute w-full h-full object-cover"
      />

      
    </div>
  )
}
