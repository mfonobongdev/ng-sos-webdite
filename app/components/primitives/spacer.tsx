import cx from 'clsx'

type spacerProps = {
  small?: boolean
  medium?: boolean
  large?: boolean
}

export default function SpacerComponent({ small, medium, large }: spacerProps) {
  return <div className={cx({ 'my-[10px]': small, 'my-[40px]': medium, 'my-[65px]': large, 'my-[20px]': !small && !medium && !large })} />
}
