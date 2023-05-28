import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard1 from '../components/gallery-card1'
import GalleryCard31 from '../components/gallery-card31'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Presentation Page</title>
        <meta property="og:title" content="Presentation Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-logo">
            <img alt="image" src="/banner-600w.jpg" className="home-image" />
          </div>
          <div className="home-links-container">
            <a href="#features" className="home-link Anchor">
              Home
            </a>
            <Link to="/our-products" className="home-link01 Anchor">
              Products
            </Link>
            <span className="home-link02 Anchor">About Us</span>
            <Link to="/contact-us" className="home-link03 Anchor">
              contact Us
            </Link>
          </div>
          <div className="home-cta-container">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img alt="image" src="/default-img.svg" className="home-image1" />
              <div data-role="CloseMobileMenu" className="home-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container1">
                <a href="#features" className="home-link04 Anchor">
                  features
                </a>
                <a href="#services" className="home-link05 Anchor">
                  services
                </a>
                <span className="home-link06 Anchor">About Us</span>
                <a href="#contact" className="home-link07 Anchor">
                  contact
                </a>
              </div>
              <button className="home-cta-btn Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading">
            <span>
              Guaro (ጓሮ) creates funky, handmade furniture in Addis Ababa,
              Ethiopia.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              We believe that life is best lived in colour.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Section-Heading"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
          <span className="home-text05">
            With a focus on minimalistic ready-made furniture crafted by local
            artisans, we utilise a variety of African textiles to bring you
            unique pieces that make a statement.
          </span>
          <button className="home-cta-btn1 Anchor button">
            START BUILDING
          </button>
        </div>
        <img
          alt="image"
          src="/5173127076551962261_n-thumbnail-1500w.webp"
          className="home-image2"
        />
      </div>
      <div className="home-section-separator"></div>
      <div id="features" className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text06 Section-Heading">Tell your story</h2>
          <span className="home-text07 Section-Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-feature-card">
            <img
              alt="image"
              src="/1593146765919826588_n-thumbnail-1500w.webp"
              className="home-image3"
            />
            <span className="home-heading1 Card-Heading">Why</span>
            <span className="home-text08 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
          <div className="home-feature-card1">
            <img
              alt="image"
              src="/2187766977925466535_n-thumbnail-1500h.webp"
              className="home-image4"
            />
            <span className="home-heading2 Card-Heading">What</span>
            <span className="home-text09 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
          <div className="home-feature-card2">
            <img
              alt="image"
              src="/4018119241557092968_n-thumbnail-1500h.webp"
              className="home-image5"
            />
            <span className="home-heading3 Card-Heading">How</span>
            <span className="home-text10 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
        </div>
      </div>
      <div id="services" className="home-services">
        <div className="home-container2">
          <div className="home-gallery">
            <GalleryCard1
              image_src="/2354691492510822033_n-thumbnail-1500h.webp"
              rootClassName="rootClassName"
            ></GalleryCard1>
            <GalleryCard1
              image_src="/3491637721200664043_n-thumbnail-1500h.webp"
              rootClassName="rootClassName1"
            ></GalleryCard1>
            <GalleryCard1
              image_src="/4723528460671592420_n-thumbnail-1500w.webp"
              rootClassName="rootClassName2"
            ></GalleryCard1>
            <GalleryCard1
              image_src="/424860107690684440_n-thumbnail-1500h.webp"
              rootClassName="rootClassName3"
            ></GalleryCard1>
            <GalleryCard1
              image_src="/5499740680465084630_n-thumbnail-1500h.webp"
              rootClassName="rootClassName4"
            ></GalleryCard1>
            <GalleryCard1
              image_src="/8079856001320086661_n-thumbnail-1500w.webp"
              rootClassName="rootClassName5"
            ></GalleryCard1>
          </div>
          <div className="home-gallery-card">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="home-image6"
            />
          </div>
        </div>
        <div className="home-service-card">
          <div className="home-card-content">
            <h3 className="home-text11 BigCard-Heading">Service name</h3>
            <span className="home-text12 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button button Anchor">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card1">
          <div className="home-card-content1">
            <h3 className="home-text13 BigCard-Heading">Service name</h3>
            <span className="home-text14 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button1 Anchor button">READ MORE</button>
          </div>
        </div>
        <div className="home-container3">
          <div className="home-service-card2">
            <div className="home-card-content2">
              <h3 className="home-text15 BigCard-Heading">Service name</h3>
              <span className="home-text16 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button2 button Anchor">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery1">
        <h1 className="home-text17">Our portfolio</h1>
        <span className="home-text18">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-container4">
          <GalleryCard31
            image_src="/3491637721200664043_n-thumbnail-1500h.webp"
            rootClassName="rootClassName"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/1593146765919826588_n-thumbnail-1500w.webp"
            rootClassName="rootClassName1"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/2187766977925466535_n-thumbnail-1500h.webp"
            rootClassName="rootClassName3"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/2354691492510822033_n-thumbnail-1500h.webp"
            rootClassName="rootClassName2"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/2545387962441436453_n-thumbnail-1500h.webp"
            rootClassName="rootClassName4"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/2657617410677919513_n-thumbnail-1500w.webp"
            rootClassName="rootClassName5"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/2799726621957092616_n-thumbnail-1500h.webp"
            rootClassName="rootClassName6"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/2918313360768672757_n-thumbnail-1500h.webp"
            rootClassName="rootClassName7"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/4018119241557092968_n-thumbnail-1500h.webp"
            rootClassName="rootClassName8"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/424860107690684440_n-thumbnail-1500h.webp"
            rootClassName="rootClassName9"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/4723528460671592420_n-thumbnail-1500w.webp"
            rootClassName="rootClassName10"
          ></GalleryCard31>
          <GalleryCard31
            image_src="/8286049406852749095_n-thumbnail-1500h.webp"
            rootClassName="rootClassName11"
          ></GalleryCard31>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-stats">
        <div className="home-stat">
          <h1 className="home-text25">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="home-text28">Happy clients</span>
          <span className="home-text29">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat1">
          <h1 className="home-text30">
            <span>369</span>
          </h1>
          <span className="home-text32">Projects completed</span>
          <span className="home-text33">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat2">
          <h1 className="home-text34">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="home-text37">Hours</span>
          <span className="home-text38">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat3">
          <h1 className="home-text39">
            <span>24/7</span>
          </h1>
          <span className="home-text41">Support</span>
          <span className="home-text42">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
      <div id="contact" className="home-contact">
        <img
          alt="image"
          src="/700312513853038942_n-thumbnail-1500w.webp"
          className="home-image7"
        />
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.481909895291!2d38.82462657487746!3d9.019726889134319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b7f2ba79451%3A0x9d285af5f9667acf!2sGuaro%20Furniture!5e0!3m2!1sen!2snl!4v1685298430231!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"&gt;&lt;/iframe&gt;'
        className="home-iframe"
      ></iframe>
      <footer className="home-footer">
        <div className="home-container5">
          <div className="home-logo1">
            <img
              alt="logo"
              src="/photo_2023-04-20_21-04-25-300h.jpg"
              className="home-image8"
            />
            <span className="home-text43">
              <br></br>
              <span>Guaro Furniture</span>
              <br></br>
              <span>ጓሮ ፈርኒቸር</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="home-links-container">
            <div className="home-container6">
              <div className="home-product-container">
                <span className="home-text50">Product</span>
                <span className="home-text51">Features</span>
                <span className="home-text52">Pricing</span>
                <span className="home-text53">Tutorials</span>
                <span>Releases</span>
              </div>
              <div className="home-company-container">
                <span className="home-text55">Company</span>
                <span className="home-text56">About</span>
                <span className="home-text57">Careers</span>
                <span className="home-text58">Contact</span>
                <span>Blog</span>
              </div>
            </div>
            <div className="home-location-1">
              <span className="home-heading4">Our Location</span>
              <div className="home-adress">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span>
                  <span className="Section-Text">Salite Mehret</span>
                  <br></br>
                  <span>Tefezer Market Cener</span>
                  <br></br>
                  <span>Addis Ababa</span>
                  <br></br>
                  <span>Ethiopia</span>
                  <br></br>
                </span>
              </div>
              <div className="home-email">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="Section-Text">info@guarofurniture.com</span>
              </div>
              <div className="home-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon14"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span>
                  <a href="tel:+251 903 502641" className="home-link08">
                    +251 903 502641
                  </a>
                  <a href="tel:+251 903 502641">
                    <br className="home-text71"></br>
                  </a>
                  <a href="tel:+251 903 502641" className="home-link10">
                    +251 903 502642
                  </a>
                  <br></br>
                </span>
              </div>
              <span className="home-text73">Follow Us</span>
              <div className="home-container7">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon20"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon22"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-414.286c18.857-26.857 49.714-73.143 61.714-120 0 0 5.143-19.429 30.286-119.429 15.429 29.143 59.429 54.286 106.286 54.286 139.429 0 234.286-127.429 234.286-297.714 0-128.571-109.143-248.571-274.857-248.571-206.286 0-310.286 148-310.286 271.429 0 74.286 28.571 140.571 89.143 165.714 9.714 4 18.857 0 21.714-10.857 1.714-7.429 6.286-26.857 8.571-34.857 2.857-10.857 1.714-14.857-6.286-24-17.143-21.143-28.571-47.429-28.571-85.714 0-109.714 82.286-207.429 213.714-207.429 116.571 0 180.571 70.857 180.571 166.286 0 125.143-55.429 230.857-137.714 230.857-45.143 0-79.429-37.714-68.571-84 13.143-54.857 38.286-114.286 38.286-153.714 0-35.429-18.857-65.143-58.286-65.143-46.286 0-83.429 48-83.429 112 0 0 0 41.143 13.714 69.143-47.429 201.143-56 236.571-56 236.571-12.571 52.571-7.429 113.714-4 145.143h-104.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon24"
                >
                  <path d="M554.857 710.857v120.571c0 25.714-7.429 38.286-22.286 38.286-8.571 0-17.143-4-25.714-12.571v-172c8.571-8.571 17.143-12.571 25.714-12.571 14.857 0 22.286 13.143 22.286 38.286zM748 711.429v26.286h-51.429v-26.286c0-25.714 8.571-38.857 25.714-38.857s25.714 13.143 25.714 38.857zM196 586.857h61.143v-53.714h-178.286v53.714h60v325.143h57.143v-325.143zM360.571 912h50.857v-282.286h-50.857v216c-11.429 16-22.286 24-32.571 24-6.857 0-10.857-4-12-12-0.571-1.714-0.571-8-0.571-20v-208h-50.857v223.429c0 20 1.714 33.143 4.571 41.714 4.571 14.286 16.571 21.143 33.143 21.143 18.286 0 37.714-11.429 58.286-34.857v30.857zM605.714 827.429v-112.571c0-26.286-1.143-45.143-5.143-56.571-6.286-21.143-20.571-32-40.571-32-18.857 0-36.571 10.286-53.143 30.857v-124h-50.857v378.857h50.857v-27.429c17.143 21.143 34.857 31.429 53.143 31.429 20 0 34.286-10.857 40.571-31.429 4-12 5.143-30.857 5.143-57.143zM798.857 821.714v-7.429h-52c0 20.571-0.571 32-1.143 34.857-2.857 13.714-10.286 20.571-22.857 20.571-17.714 0-26.286-13.143-26.286-39.429v-49.714h102.286v-58.857c0-30.286-5.143-52-15.429-66.286-14.857-19.429-34.857-29.143-60.571-29.143-26.286 0-46.286 9.714-61.143 29.143-10.857 14.286-16 36-16 66.286v98.857c0 30.286 5.714 52.571 16.571 66.286 14.857 19.429 34.857 29.143 61.714 29.143s48-10.286 61.714-30.286c6.286-9.143 10.857-19.429 12-30.857 1.143-5.143 1.143-16.571 1.143-33.143zM451.429 300v-120c0-26.286-7.429-39.429-24.571-39.429-16.571 0-24.571 13.143-24.571 39.429v120c0 26.286 8 40 24.571 40 17.143 0 24.571-13.714 24.571-40zM862.286 729.143c0 65.714-0.571 136-14.857 200-10.857 45.143-47.429 78.286-91.429 82.857-105.143 12-211.429 12-317.143 12s-212 0-317.143-12c-44-4.571-81.143-37.714-91.429-82.857-14.857-64-14.857-134.286-14.857-200v0c0-66.286 0.571-136 14.857-200 10.857-45.143 47.429-78.286 92-83.429 104.571-11.429 210.857-11.429 316.571-11.429s212 0 317.143 11.429c44 5.143 81.143 38.286 91.429 83.429 14.857 64 14.857 133.714 14.857 200zM292 0h58.286l-69.143 228v154.857h-57.143v-154.857c-5.143-28-16.571-68-34.857-121.143-12.571-35.429-25.143-71.429-37.143-106.857h60.571l40.571 150.286zM503.429 190.286v100c0 30.286-5.143 53.143-16 67.429-14.286 19.429-34.286 29.143-60.571 29.143-25.714 0-45.714-9.714-60-29.143-10.857-14.857-16-37.143-16-67.429v-100c0-30.286 5.143-52.571 16-66.857 14.286-19.429 34.286-29.143 60-29.143 26.286 0 46.286 9.714 60.571 29.143 10.857 14.286 16 36.571 16 66.857zM694.857 97.714v285.143h-52v-31.429c-20.571 24-40 35.429-58.857 35.429-16.571 0-28.571-6.857-33.714-21.143-2.857-8.571-4.571-22.286-4.571-42.857v-225.143h52v209.714c0 12 0 18.857 0.571 20 1.143 8 5.143 12.571 12 12.571 10.286 0 21.143-8 32.571-24.571v-217.714h52z"></path>
                </svg>
              </div>
            </div>
            <div className="home-container8">
              <div className="home-socials"></div>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <span className="home-text74">
          © 2023 GUaro Furniture    All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Home
