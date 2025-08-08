import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Eye className="h-12 w-12 text-white drop-shadow-sm" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-body-text leading-relaxed">
                A future where every young person is equipped, empowered, and thriving with purpose and equal access to opportunities that shape a sustainable and inclusive future.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Target className="h-12 w-12 text-white drop-shadow-sm" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-body-text leading-relaxed">
                To empower young people, especially Africa's most marginalized, by connecting them to opportunities, resources, and supported pathways that unlock their full potential, elevate their agency, and equip them to thrive, lead, and create meaningful impact in the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
