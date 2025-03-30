
import { CircleCheck, Target, Users, TrendingUp } from "lucide-react";

const Approach = () => {
  return (
    <section id="approach" className="section-padding tenx-navy-gradient">
      <div className="tenx-container">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-4">Our Investment Approach</h2>
          <div className="w-20 h-1 bg-tenx-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/90">
            We take a hands-on approach to partnering with Black-owned businesses, providing both capital and expertise to drive exceptional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <ApproachStep
            icon={<Target className="h-12 w-12 text-tenx-gold" />}
            title="Strategic Selection"
            description="We carefully identify businesses with strong fundamentals, innovative solutions, and exceptional leadership in underserved markets."
            number="01"
          />
          <ApproachStep
            icon={<Users className="h-12 w-12 text-tenx-gold" />}
            title="Founder Partnership"
            description="We work closely with founders, sharing our expertise while respecting their vision and understanding of their market."
            number="02"
          />
          <ApproachStep
            icon={<CircleCheck className="h-12 w-12 text-tenx-gold" />}
            title="Operational Excellence"
            description="We help streamline operations, strengthen business models, and implement best practices to maximize efficiency and profitability."
            number="03"
          />
          <ApproachStep
            icon={<TrendingUp className="h-12 w-12 text-tenx-gold" />}
            title="Scaled Growth"
            description="We leverage our network and resources to help portfolio companies expand into new markets and reach their full potential."
            number="04"
          />
        </div>
      </div>
    </section>
  );
};

interface ApproachStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}

const ApproachStep = ({ icon, title, description, number }: ApproachStepProps) => {
  return (
    <div className="relative">
      <div className="absolute -left-2 top-0 opacity-10 text-6xl font-bold font-heading">
        {number}
      </div>
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="heading-sm mb-3 text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

export default Approach;
