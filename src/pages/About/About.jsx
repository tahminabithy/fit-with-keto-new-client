import React from "react";
import img from "../../assets/teams/team-work.jpg";
import team1 from "../../assets/teams/team1.png";
import team2 from "../../assets/teams/team2.png";
import team3 from "../../assets/teams/team3.png";
import team4 from "../../assets/teams/team4.png";
import team5 from "../../assets/teams/team5.jpeg";
export default function About() {
  const specialists = [
    {
      name: "Dr. Olivia Carter",
      expertise: "Nutrition Specialist",
      email: "olivia.carter@example.com",
      img: team1,
      experience:
        "10 years of experience in clinical nutrition and diet planning.",
    },
    {
      name: "Sophia Lee",
      expertise: "Fitness Specialist",
      email: "michael.reynolds@example.com",
      img: team2,
      experience:
        "Certified personal trainer with 8 years of experience in strength training and endurance fitness.",
    },
    {
      name: "Sophia Martinez",
      expertise: "Nutrition Specialist",
      email: "sophia.martinez@example.com",
      img: team3,
      experience:
        "Registered dietitian with 7 years of experience in weight management and meal planning.",
    },
    {
      name: "Emma Wilson",
      expertise: "Fitness Specialist",
      email: "david.thompson@example.com",
      img: team4,
      experience:
        "Professional fitness coach specializing in HIIT and functional training for over 6 years.",
    },
    {
      name: "Emily Bennett",
      expertise: "Nutrition Specialist",
      email: "emily.bennett@example.com",
      img: team5,
      experience:
        "Sports nutritionist with 5 years of experience working with athletes on performance diets.",
    },
  ];
  return (
    <div className="mx-4 my-10 md:mx-20 md:my-20">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20">
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img className=" h-full object-cover" src={img} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-2xl lg:text-4xl font-semibold text-baseColor">
            Daniella Kats
          </p>
          <p className="text-sm mt-2 mb-4 text-gray-600">
            Director, Fit With Keto
          </p>
          <p className="mt-4 text-xs lg:text-md font-light tracking-wider leading-loose ">
            Welcome to Fit with keto, our go-to platform for delicious recipes
            and inspiring lifestyle blogs! Founded in 2021, we’ve grown into a
            thriving community, serving 200 plus users who seek culinary
            inspiration and wellness tips. <br /> <br />
            Our dedicated team brings together experts from various fields to
            provide you with high-quality content on recipes, health, and
            lifestyle. Our nutrition specialists carefully curate meal plans and
            offer expert advice on maintaining a balanced diet. The gym and
            fitness coaches create workout routines and fitness guides to help
            you stay active and healthy. Our chefs and food enthusiasts develop
            and test delicious recipes to ensure they are both easy to follow
            and full of flavor. Meanwhile, our lifestyle experts provide
            insights on self-care, wellness, and productivity. Together, we are
            committed to delivering valuable content to enhance your journey
            toward a healthier and more fulfilling life.
            <br /> <br /> Our mission is to bring expert-curated recipes, health
            tips, and lifestyle insights to enhance your everyday life. Whether
            you're a food enthusiast or looking for mindful living tips
          </p>
        </div>
      </div>
      <div className=" mt-6 mt-10 lg:mt-20  lg:p-12 ">
        <p className="text-center text-3xl md:text-4xl text-baseColor border-b border-gray-400 w-fit mx-auto">
          Our Teams
        </p>

        <div className="grid cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-10 mt-6 md:mt-16 p-4">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="  p-4 shadow-md md:shadow-lg rounded-lg bg-white "
            >
              <div>
                <div className="flex justify-center items-center">
                  <img
                    className="w-30 h-30 rounded-full object-cover"
                    src={specialist.img}
                    alt=""
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-baseColor font-bold mt-2">
                    {specialist.name}
                  </p>
                  <p className="text-xs">{specialist.expertise}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {specialist.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
