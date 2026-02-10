import { Card } from "../ui";
import { Star } from "lucide-react";

import { TESTIMONIALS } from "../../data";

export function Testimonials() {
  return (
    <section
      id="avaliacao"
      className="py-24 md:py-32 bg-black text-white px-6 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20">
        O que nossos clientes dizem
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card
            key={index}
            className="px-4 py-6 md:p-10 bg-card border border-white/5 rounded-3xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < testimonial.rating
                      ? "fill-gold text-gold"
                      : "fill-gray-700 text-gray-700"
                  }
                />
              ))}
            </div>

            <p className="text-gray-300 mb-8 italic text-base md:text-lg leading-relaxed mt-auto">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                {/* Fallback avatar using initials if no image */}
                <span className="text-lg font-bold text-gold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-base text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
