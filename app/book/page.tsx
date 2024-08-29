import React from "react";
import { HoverEffect } from "@/components/card-hover-effect";

const Bookpage = () => {
  const pricingcards = [
    {
      title: "Bronze Package",
      description:
        "Basic exterior and interior cleaning to give your car a refreshed look.",
      features: ["Exterior Wash", "Wheels & Tires", "Interior Wipe Down", "Interir Vacuum", "Windows", "Doorjams"],
      price: "$95",
      link: "https://example.com/book-bronze",
    },
    {
      title: "Gold Package",
      description:
        "One step higher than the Bronze Package that include Paint Selant.",
      features: [
        "Exterior Wash",
        "Wheels & Tires",
        "Paint Selant",
        "Interior Wipe Down",
        "Interior Vaccum",
        "Windows & Doorjams"
      ],
      price: "$150",
      link: "https://example.com/book-gold",
    },
    {
      title: "Diamond Package",
      description:
        "A complete premium package for exterior and interior detailing.",
      features: ["Exterior Wash","Claybar & Paint Selant","Wheels & Tires","Interior Vaccum", "Shampoo & Extraction","Engine Detail"],
      price: "$245",
      link: "https://example.com/book-diamond",
    },
    {
      title: "Interior Package",
      description:
        "Focused on cleaning and detailing the interior of your vehicle for a pristine look.",
      features: ["Interior Vacuum", "Carpet Shampoo & Extraction", "Seat Shampoo & Extraction","UV Protector","Doorjams","Inner Windows"],
      price: "$175",
      link: "https://example.com/book-interior",
    },
    {
      title: "RV Package",
      description:
        "Specialized detailing package tailored for RVs, covering just the exterior.",
      features: ["Exterior Wash", "Spray Ceramic Wax", "Wheels & Tires", "Roof Cleaning","Windows","Plastic Shine"],
      price: "$325",
      link: "https://example.com/book-rv",
    },
    {
      title: "CAN-AM Package",
      description:
        "Detailing package specifically designed for CAN-AM vehicles, ensuring a thorough clean and shine.",
      features: ["Exterior Wash", "Wheels & Tires", "Spray Ceramic Wax", "Interior Wipe Down", "",""],
      price: "$125",
      link: "https://example.com/book-can-am",
    },    
  ];

  return (
    <>
      <span className="mt-10 flex items-center justify-center mx-auto font-bold text-4xl">
        Book now
      </span>
      <span className="mt-10 flex items-center justify-center mx-auto font-bold text-xl text-gray-500">
        Choose from various packages below.
      </span>
      <div className="mt-10 max-w-6xl mx-auto px-8">
        <HoverEffect items={pricingcards} />
      </div>
    </>
  );
};

export default Bookpage;
