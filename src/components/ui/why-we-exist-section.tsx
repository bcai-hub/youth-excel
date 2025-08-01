import React from 'react';

const WhyWeExistSection = () => {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-foreground mb-8">
            Why We Exist
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-body-text leading-relaxed">
              Too many young people have what it takes, but not what they need. While talent is universal, access is not, especially for those in places where opportunity rarely reaches.
            </p>
            <p className="text-xl text-body-text leading-relaxed">
              YouthXcel exists to help close that gap with intention and care. We believe a young person's future shouldn't be decided by where they were born or what they've lacked.
            </p>
            <p className="text-xl text-body-text leading-relaxed font-medium">
              We're here to build a world where opportunity is within reach, where youth are equipped, seen, and supported to thrive on their own terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
