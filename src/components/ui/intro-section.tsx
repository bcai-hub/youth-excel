import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { Users, Globe, Heart } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            Who We Are
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unlocking potential through 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> equitable access</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              YouthXcel is a youth empowerment organization helping young people, especially Africa's most marginalized, 
              unlock their potential and thrive through equitable access to opportunity. We believe that with the right 
              support, every young person can lead, innovate, and shape a better future for themselves and their communities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We connect youth to life-changing opportunities, skills, mentorship, and supported pathways that equip them 
              to grow with purpose, confidence, and agency. From education, skills, employment and career to leadership and 
              innovation, we are bridging the gap between talent and access.
            </p>
          </div>
          
          <Card className="bg-gradient-card border-0 shadow-glow">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Spotlighting Untapped Voices</h4>
                    <p className="text-sm text-muted-foreground">
                      Investing in solutions that matter and building systems where no young person is left behind.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Global Outlook, Local Roots</h4>
                    <p className="text-sm text-muted-foreground">
                      Rooted in Africa with a global perspective, reimagining what it means to invest in youth.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Centering Their Stories</h4>
                    <p className="text-sm text-muted-foreground">
                      Centering youth realities, stories, and strengths while amplifying what's possible.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              What We Do – At a Glance
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We work at the intersection of access, equity, and opportunity, connecting young people to the tools, 
              spaces, and pathways they need to move forward.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-3">🔗 Real Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  We link them to real opportunities that open doors.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-3">🛠️ Real Skills</h4>
                <p className="text-sm text-muted-foreground">
                  We connect them to pathways to gain real skills to prepare for life and dignified work.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-3">📢 Platforms to Share</h4>
                <p className="text-sm text-muted-foreground">
                  We offer platforms to share their ideas, change-making journeys and lived experiences.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-3">🚀 Leadership Growth</h4>
                <p className="text-sm text-muted-foreground">
                  We provide the tools and support to grow their leadership and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;