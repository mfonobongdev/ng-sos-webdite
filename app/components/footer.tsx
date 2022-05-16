import SectionComponent from '~/components/primitives/section'
import ngSosLogo from '../../public/assets/ng-sos-logo.jpeg'
import ParagraphComponent from '~/components/primitives/paragraph'
import HeadLineComponent from '~/components/primitives/headline'

export default function FooterComponent() {
  return (
    <SectionComponent>
      <div className='grid md:grid-cols-6 grid-cols-2 md:grid-rows-1 gap-8 md:gap-0 grid-rows-2 w-full place-content-start grid-flow-row'>
        <div className='flex flex-col space-y-4 col-start-1 col-end-2'>
          <div className='cursor-pointer'>
            <div className='flex items-center'>
              <div className='relative w-full h-16'>
                <img src={ngSosLogo} alt={'ng sos logo'} className={'object-contain h-full w-40'} />
              </div>
            </div>
          </div>

          <ParagraphComponent>© 2022 NG-SOS</ParagraphComponent>
        </div>
        <div className='block md:hidden'>{''}</div>
        <div className='flex flex-col space-y-4 md:col-start-5 md:col-end-6'>
          <div className='font-bold'>Links</div>
          <HeadLineComponent small>
            <div className='cursor-pointer'>Home</div>
          </HeadLineComponent>
          <HeadLineComponent small>
            <div className='cursor-pointer'>About Us</div>
          </HeadLineComponent>
          <HeadLineComponent small>
            <div className='cursor-pointer'>Our Team</div>
          </HeadLineComponent>
          <HeadLineComponent small>
            <div className='cursor-pointer'>Our Services</div>
          </HeadLineComponent>
          <HeadLineComponent small>
            <div className='cursor-pointer'>FAQ</div>
          </HeadLineComponent>
        </div>
        <div className='flex flex-col space-y-4 md:col-start-6 md:col-end-7 overflow-clip'>
          <div className='font-bold'>Contact Us</div>
          <ParagraphComponent>sales@m2m-nigeria.com</ParagraphComponent>
          <ParagraphComponent>+234 (1) 236 6367</ParagraphComponent>
          <ParagraphComponent>6th Floor, Landmark Tower, 5B Water Corporation Road Victoria Island, Lagos.</ParagraphComponent>
        </div>
      </div>
    </SectionComponent>
  )
}
