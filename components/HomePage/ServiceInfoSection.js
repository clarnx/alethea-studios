import ServiceDetails from "./ServiceDetails";
import styles from "../../styles/Home.module.css";

const ServiceInfoSection = () => {
    return (
        <div>
            <ServiceDetails
                title="Logos & Branding"
                subTitle="Let Us Handle Everything"
                image={styles.service_section_1__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        It’s no surprise that the best businesses have the best
                        branding. Your brand is more than logo design and fonts,
                        it’s your personality and the whole experience of doing
                        business with you – so it should be crafty! We can
                        manage every component of your brand, from your logo,
                        social media and website to a full brand identity.
                    </span>
                }
            />
            <ServiceDetails
                title="Print Design & Marketing"
                subTitle="Results You’ll Love"
                image={styles.service_section_2__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        The internet didn’t kill print, it just made it a lot
                        more interesting. Brochures, posters, billboards, and
                        print ads have a massive audience and unrivaled
                        accessibility. The team knows how to make your print
                        marketing more aesthetically appealing, putting the
                        punch in your print. We will work with you to ensure
                        your print designs make the exact right impact with the
                        exact right people
                    </span>
                }
            />

            <ServiceDetails
                title="Website Design"
                subTitle="We Do It Right"
                image={styles.service_section_3__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        Your website isn’t just an information source. It’s the
                        main point of contact between your business and your
                        market, first impressions can make or break your
                        marketing, so when it’s managed properly it can be a
                        primary driver for your business to reach new markets
                        and generate more income.
                        <br />
                        <br />
                        We craft designs and develop websites that work for you
                        in communicating ideally with your audience. We have the
                        solutions and skills that will give you the help you
                        need.
                    </span>
                }
            />

            <ServiceDetails
                title="Social Media Management & Marketing  / Advertising"
                subTitle="Why Limit Yourself To The Sky, While You Can Have The Universe"
                image={styles.service_section_4__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        Our team is made up of award-winning designers,
                        developers, and Internet marketers. For us, it’s not
                        just a job — it’s a driving passion. And that passion
                        has led to some of the best work on the Internet. Trust
                        our proven track record to maximize your visibility
                        online. Set your business up for long-term success.
                    </span>
                }
            />

            <ServiceDetails
                title="2D & 3D Animation, Motion Graphic, Video Production"
                subTitle="We Bring Your Imaginations Alive "
                image={styles.service_section_5__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        We specialize in creating 3D Animation Videos and still
                        images using industry-standard software such as Autodesk
                        3ds Max, V-Ray, Redshift, Photoshop and After Effects,
                        etc. We are experienced and more importantly know how to
                        visualize your ideas better than anybody else.
                    </span>
                }
            />

            <ServiceDetails
                title="Web & Mobile Application Development"
                subTitle="The Future Of Online Is In Mobile Phones"
                image={styles.service_section_6__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        At Alethea Studios, we won&rsquo;t waste your time
                        because we have fully stacked developers for all your
                        mobile App needs.
                        <br />
                        Quoted by Tomi Ahonen,consultant, and speaker, “I think
                        the biggest change, and the one we’re already starting
                        to see take shape, is that globally the majority of
                        internet usage will be done via a mobile device and for
                        most people the mobile web will be their primary – if
                        not their only – way of experiencing the internet.”
                    </span>
                }
            />

            <ServiceDetails
                title="TickTok Ads"
                subTitle="What Is The Target Demographic of Tiktok Ads For Your Business?"
                image={styles.service_section_7__bg}
                bottomBorderColor="1px solid #385d7c"
                description={
                    <span>
                        Tiktok is on top where people are spending their time as
                        compared to Other Social Media platforms. So Advertising
                        on Tiktok is a Great Step now. TikTok is the future of
                        advertising. We help set up Campaigns that drive great
                        (and huge!) results. So Tik Tok ads can boost your
                        business much faster.
                    </span>
                }
            />

            <ServiceDetails
                title="NFT's"
                subTitle="Already Made And Unique NFT's"
                image={styles.service_section_8__bg}
                description={
                    <span>
                        NFT’s are changing the way we trade, execute contracts,
                        hold investments and transfer value.. if your an artist
                        am still not using Non Fungible Token (NFT’s), you could
                        potentially loss millions
                    </span>
                }
            />
        </div>
    );
};

export default ServiceInfoSection;
