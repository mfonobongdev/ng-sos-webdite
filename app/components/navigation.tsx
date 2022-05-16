import ngSosLogo from '~/../public/assets/ng-sos-logo.jpeg'
import { Link } from '@remix-run/react'
import HeadLineComponent from '~/components/primitives/headline'

export default function NavigationComponent() {
  return (
    <div className={'py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 right-0'}>
      <img src={ngSosLogo} alt={'ng sos logo'} className={'object-contain h-full w-40'} />

      {/*nav items*/}
      <div className={'flex space-x-10'}>
        <Link to={'.'}>
          <HeadLineComponent small>Home</HeadLineComponent>
        </Link>
        <Link to={'.'}>
          <HeadLineComponent small>Services</HeadLineComponent>
        </Link>
        <Link to={'.'}>
          <HeadLineComponent small>Contact Us</HeadLineComponent>
        </Link>
      </div>
    </div>
  )
}
