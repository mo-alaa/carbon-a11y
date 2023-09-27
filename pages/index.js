import dynamic from 'next/dynamic';
import styles from './main.module.css';

const ArrowRight20 = dynamic(import('@carbon/icons-react/es/arrow--right/20.js'), { ssr: false });
const DDSCardInCard = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card-in-card/card-in-card.js'), { ssr: false });
const DDSCardInCardImage = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card-in-card/card-in-card-image.js'), { ssr: false });
// const DDSImageItem = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/image/image-item.js'), { ssr: false });
const DDSCardGroup = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group.js'), { ssr: false });
const DDSCardGroupItem = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item.js'), { ssr: false });
const DDSCardHeading = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card/card-heading.js'), { ssr: false });
const DDSCardEyebrow = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow.js'), { ssr: false });
const DDSCardCTAFooter = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer.js'), { ssr: false });
const DDSCard = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card/card.js'), { ssr: false });
const DDSCarousel = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/carousel/carousel.js'), { ssr: false });
const DDSCardFooter = dynamic(import('@carbon/ibmdotcom-web-components/es/components-react/card/card-footer'), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <DDSCardInCard href="https://example.com">
        <DDSCardInCardImage slot="image" alt="Image alt text" default-src="https://www.gstatic.com/webp/gallery/1.webp"></DDSCardInCardImage>
        <DDSCardEyebrow>Label</DDSCardEyebrow>
        <DDSCardHeading>Standard Bank Group prepares to embrace Africa’s AI opportunity</DDSCardHeading>
        <DDSCardCTAFooter>
          <ArrowRight20 slot="icon" />
        </DDSCardCTAFooter>
      </DDSCardInCard>

      <DDSCardGroup style={{ marginTop: '50px' }}>
        <DDSCardGroupItem cta-type="local" href="https://example.com">
          <DDSCardHeading>Nunc convallis lobortis</DDSCardHeading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla
            quis, consequat libero.
          </p>
          <DDSCardCTAFooter slot="footer">
            <ArrowRight20 slot="icon" />
          </DDSCardCTAFooter>
        </DDSCardGroupItem>
        <DDSCardGroupItem cta-type="local" href="https://example.com">
          <DDSCardHeading>Nunc convallis lobortis</DDSCardHeading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla
            quis, consequat libero.
          </p>
          <DDSCardCTAFooter slot="footer">
            <ArrowRight20 slot="icon" />
          </DDSCardCTAFooter>
        </DDSCardGroupItem>
      </DDSCardGroup>

      <DDSCarousel style={{ marginTop: '50px' }}>
        <DDSCard href="https://www.ibm.com/standards/carbon">
          <DDSCardHeading>Lorem ipsum dolor sit amet</DDSCardHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          <DDSCardFooter>
            <ArrowRight20 slot="icon" />
          </DDSCardFooter>
        </DDSCard>
        <DDSCard href="https://www.ibm.com/standards/carbon">
          <DDSCardHeading>Lorem ipsum dolor sit amet</DDSCardHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla
          quis, consequat libero.
          <DDSCardFooter>
            <ArrowRight20 slot="icon" />
          </DDSCardFooter>
        </DDSCard>
        <DDSCard href="https://www.ibm.com/standards/carbon">
          <DDSCardHeading>Lorem ipsum dolor sit amet</DDSCardHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla
          quis, consequat libero.
          <DDSCardFooter>
            <ArrowRight20 slot="icon" />
          </DDSCardFooter>
        </DDSCard>
        <DDSCard href="https://www.ibm.com/standards/carbon">
          <DDSCardHeading>Lorem ipsum dolor sit amet</DDSCardHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla
          quis, consequat libero.
          <DDSCardFooter>
            <ArrowRight20 slot="icon" />
          </DDSCardFooter>
        </DDSCard>
        <DDSCard href="https://www.ibm.com/standards/carbon">
          <DDSCardHeading>Lorem ipsum dolor sit amet</DDSCardHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla
          quis, consequat libero.
          <DDSCardFooter>
            <ArrowRight20 slot="icon" />
          </DDSCardFooter>
        </DDSCard>
      </DDSCarousel>
    </main>
  );
}
