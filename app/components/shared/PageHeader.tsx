import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = '/images/hero-background.jpg'
}: PageHeaderProps) {
  return (
    <section className="relative bg-purple-900 text-white py-20">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={backgroundImage}
          alt="Background pattern"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-3xl mx-auto text-purple-100">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
