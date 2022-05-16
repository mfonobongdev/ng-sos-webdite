import React from 'react'

import mobileHeroTwo from '../../public/assets/mobile-hero-two.jpg'

import SectionComponent from '~/components/primitives/section'
import HeadLineComponent from '~/components/primitives/headline'
import SpacerComponent from '~/components/primitives/spacer'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Link } from '@remix-run/react'
import ngSosLogo from '../../public/assets/ng-sos-logo.jpeg'
import FooterComponent from '~/components/footer'
gsap.registerPlugin(ScrollTrigger)

export default function IndexRoute() {
  let boxARef: HTMLDivElement | null = null
  let hContainer: HTMLDivElement | null = null
  let hPanel: HTMLDivElement | null = null

  React.useEffect(() => {
    gsap.to(boxARef, {
      scrollTrigger: {
        trigger: boxARef,
        start: 'top center',
        // markers: true,
        toggleActions: 'restart pause reverse pause'
      },
      x: 400,
      rotate: 360,
      duration: 3
    })
  })

  //horizontal animation
  React.useEffect(() => {
    gsap.to(hContainer, {
      // xPercent: -100 * (hPanels.length - 1),
      xPercent: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: hPanel,
        pin: true,
        scrub: 1
        // snap: 1 / (hPanels.length - 1)
        // snap: 1
        // end: () => '+=' + hContainer?.offsetWidth
      }
    })
  })

  return (
    <main>
      {/*hero*/}
      <SectionComponent fullHeightNoCentering>
        <div className={'flex flex-row items-center space-x-5 h-full'}>
          <div className={'basis-1/2'}>
            <HeadLineComponent>Full-Service Emergency Assistance</HeadLineComponent>
            <SpacerComponent medium />
            <HeadLineComponent medium>At Your Finger Tips.</HeadLineComponent>
          </div>

          <div className={'basis-1/2 h-full'}>
            <img src={mobileHeroTwo} alt={'ng sos logo'} className={'object-contain w-full'} />
          </div>
        </div>
      </SectionComponent>

      {/*second*/}
      <div className={'bg-dullOrange text-center'}>
        <SectionComponent fullHeight>
          <HeadLineComponent semi>Are You Concerned</HeadLineComponent>
          <SpacerComponent large />
          <HeadLineComponent semi>About Your Family's Safety ?</HeadLineComponent>
          <SpacerComponent large />
          <div className={'mx-auto flex items-center justify-center'}>
            <HeadLineComponent thin>Give NG-SOS A Try</HeadLineComponent>
          </div>
        </SectionComponent>
      </div>

      {/*horizontal scroll section*/}
      <div ref={(el) => (hPanel = el)} className={'min-h-screen w-screen relative pl-20'}>
        <div
          ref={(el) => (hContainer = el)}
          className={
            'fixed font-Montserrat text-red-400 text-center min-h-screen flex items-center justify-center absolute inset-0 ml-[10%] xl:px-[15%] xl:py-52 py-14 md:py-28 md:px-[10%] px-[5%]'
          }>
          <div className={'min-w-[100%]'} />
          <div className={'min-w-[100%]'} />
          <div className={'min-w-[100%]'} />

          <div className={'min-w-[60%]'}>
            <HeadLineComponent medium>What is NG-SOS ?</HeadLineComponent>
          </div>
          <div className={'min-w-[60%]'}>
            <HeadLineComponent medium>
              A full-service emergency assistance platform that alerting the closest private security, and medical response provider in your
              immediate vicinity
            </HeadLineComponent>
          </div>
          <div className={'min-w-[60%]'}>
            <HeadLineComponent medium>Available anywhere in Nigeria</HeadLineComponent>
          </div>
          <div className={'min-w-[60%]'}>
            <HeadLineComponent medium>How does it work ?</HeadLineComponent>
          </div>
          <div className={'min-w-[60%]'}>
            <HeadLineComponent medium>The NG-SOS application is linked to the GPS data on your telephone</HeadLineComponent>
          </div>
          <div className={'min-w-[60%]'}>
            <HeadLineComponent medium>
              making it easier for emergency personal to find, and assist you as quickly and efficiently as possible.
            </HeadLineComponent>
          </div>
        </div>
      </div>

      {/*app highlights*/}
      <div className={'bg-dullOrange text-center'}>
        <SectionComponent fullHeight>
          <div className={'mx-auto flex items-center justify-center'}>
            <HeadLineComponent semi>App Highlights</HeadLineComponent>
          </div>
          <SpacerComponent large />
          <div className={'grid grid-cols-3 grid-rows-2'}>
            <div className={'p-10'}>
              <HeadLineComponent medium>User Friendly</HeadLineComponent> The application is easy to use, with clearly marked buttons and
              instructions
            </div>
            <div className={'p-10'}>
              <HeadLineComponent medium>Mobile</HeadLineComponent> NG-SOS brings lifesaving assistance to you, at any time, anywhere in
              Nigeria
            </div>
            <div className={'p-10'}>
              <HeadLineComponent medium>Modular</HeadLineComponent> It is compatible with Smart, ios and Android platforms
            </div>
            <div className={'p-10'}>
              <HeadLineComponent medium>Affordable</HeadLineComponent> Small monthly fee, per person
            </div>
            <div className={'p-10'}>
              <HeadLineComponent medium>Innovative</HeadLineComponent> It essentially turns your phone into a geo- tagged emergency response
              security device
            </div>
            <div className={'p-10'}>
              <HeadLineComponent medium>Practical</HeadLineComponent> All your necessary medical data communicated to emergency personal at
              the scened
            </div>
          </div>
        </SectionComponent>
      </div>

      {/*services*/}
      <div className={'text-center'}>
        <SectionComponent fullHeight>
          <div className={'mx-auto flex items-center justify-center'}>
            <HeadLineComponent semi>Services Offered</HeadLineComponent>
          </div>
          <SpacerComponent large />
          <div className={'grid grid-cols-3 grid-rows-2'}>
            <div className={'p-14'}>
              <HeadLineComponent medium>Armed Response</HeadLineComponent>
              <SpacerComponent small />
              All agents are equipped with the necessary resources to respond to a crisis situation eg (firearms , body armor, tracking
              devices as well as cellular phones and a closed-line radio system)
            </div>
            <div className={'p-14'}>
              <HeadLineComponent medium>specialized armed Escorts</HeadLineComponent>
              <SpacerComponent small />
              We in armed and unarmed escorts depending on the client’s needs. All personnel are fully trained and are backed by a National
              ground team structure and Control Centre.
            </div>
            <div className={'p-14'}>
              <HeadLineComponent medium>Emergency Medical Response</HeadLineComponent>
              <SpacerComponent small />
              In the event of a medical emergency, an appropriate route will be undertaken to dispatch an ambulance or a rapid response
              vehicle, immediately to the scene of a medical emergency where appropriate lifesaving support will be provided where relevant
            </div>
            <div className={'p-14'}>
              <HeadLineComponent medium>Medical Transportation</HeadLineComponent>
              <SpacerComponent small />
              In the event of a Medical Emergency, we will arrange Emergency Medical Transportation by Road or Air under appropriate medical
              supervision, if necessary, to the nearest medical facility capable of providing adequate care
            </div>
            <div className={'p-14'}>
              <HeadLineComponent medium>Medical Advice and Assistance Hotline</HeadLineComponent>
              <SpacerComponent small />
              Personnel shall be available 24-hours a day to provide general medical information and advice. This is an advisory service, as
              a telephonic conversation does not permit an accurate diagnosis. security device
            </div>
            <div className={'p-14'}>
              <HeadLineComponent medium>Ambulance Service</HeadLineComponent>
              <SpacerComponent small />
              NG-SOS has tapped into the entire Nigerian footprint of Ambulance service providers and have service legal agreements in place
              with all the private ambulance service providers
            </div>
          </div>
        </SectionComponent>
      </div>

      {/*contact us*/}
      <footer className='font-Montserrat bg-dullOrange xl:px-[15%] xl:py-52 py-16 md:py-28 md:px-[10%] px-[5%] min-h-screen flex flex-col items-center justify-center'>
        <HeadLineComponent medium>
          <div className='text-center'>
            Interested?
            <br />
            <span>
              <small>Get in touch</small>
            </span>
          </div>
        </HeadLineComponent>

        {/*socials*/}
        <div className='flex justify-between mx-auto mt-14 md:w-80 w-60'>
          <EmailIcon />
          <WhatsappIcon />
          <LinkedinIcon />
          <InstagramIcon />
        </div>
      </footer>
      {/*download*/}
      <div className={'bg-lightBlue text-deepBlue'}>
        <SectionComponent fullHeight>
          <div className={'mx-auto flex flex-col items-center justify-center'}>
            <HeadLineComponent semi>Download the app</HeadLineComponent>
            <SpacerComponent small />
            <HeadLineComponent semi>to get started</HeadLineComponent>
          </div>
          <SpacerComponent large />
          <div className={'mx-auto flex justify-around'}>
            <Link to={'.'}>
              <div className={'border border-blue-700 rounded-md py-4 px-10 flex space-x-5 items-center'}>
                <svg className={'w-6 h-6 fill-blue-700'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                  <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                </svg>
                <div className={'flex flex-col'}>
                  <span>Get on</span>
                  <span>
                    <strong>App Store</strong>
                  </span>
                </div>
              </div>
            </Link>

            <Link to={'.'}>
              <div className={'border border-blue-700 rounded-md py-4 px-10 flex space-x-5 items-center'}>
                <svg className={'w-6 h-6 fill-blue-700'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                </svg>
                <div className={'flex flex-col'}>
                  <span>Get on</span>
                  <span>
                    <strong>Google Play</strong>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </SectionComponent>
      </div>

      {/*footer*/}
      <FooterComponent />
    </main>
  )
}

const WhatsappIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='whatsapp'
      className='md:w-12 md:h-12 w-10 h-10 fill-current text-red-400'
      role='img'
      viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
      />
    </svg>
  )
}

const LinkedinIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='linkedin-in'
      className='md:w-12 md:h-12 w-10 h-10 fill-current text-red-400'
      role='img'
      viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
      />
    </svg>
  )
}

const InstagramIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='instagram'
      className='md:w-12 md:h-12 w-10 h-10 fill-current text-red-400'
      role='img'
      viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
      />
    </svg>
  )
}

const EmailIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='at'
      className='md:w-12 md:h-12 w-10 h-10 fill-current text-red-400'
      role='img'
      viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z'
      />
    </svg>
  )
}
