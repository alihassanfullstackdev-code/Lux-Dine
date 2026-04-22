import SmoothCategories from '@/src/components/SmoothCategories';
import SectionWrapper, { SectionTitle } from '@/src/components/SectionWrapper';

export default function Categories() {
  return (
    <div className="pt-24 bg-dark">
      <SectionWrapper>
        <SectionTitle 
          subtitle="Explore" 
          title="Culinary Kingdoms" 
          align="center"
        />
        <p className="max-w-2xl mx-auto text-center text-muted mb-20 italic">
          Our menu is organized into four major realms, each representing a specific element of nature and a unique style of cooking.
        </p>
      </SectionWrapper>
      <SmoothCategories />
    </div>
  );
}
