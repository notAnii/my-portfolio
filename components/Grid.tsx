import { BentoInfo } from '@/typings';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { fetchBento } from '@/utils/fetchBento';

const Grid = async () => {
  const bentoInfo: BentoInfo[] = await fetchBento();
  
  return (
    <section id="about">
        <BentoGrid>
            {bentoInfo.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
               <BentoGridItem
                key={id}
                id={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
               />
            ))}
        </BentoGrid>    
    </section>
  )
}

export default Grid