import classNames from 'classnames'

export default function Overlay({
  isOpen,
  onClick
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'fixed w-full h-full bg-black/20 top-0 right-0 -mr-[2000px] backdrop-blur-sm z-20 md:hidden',
        {
          '!mr-0': isOpen
        }
      )}
    />
  )
}
