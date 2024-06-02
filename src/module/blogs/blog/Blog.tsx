import { TracingBeam } from "../../common/components/motion/tracing-beam/tracing-beam";

const Blog = () => {
  const DataMap: { [index: string]: string } = {
    "image-url-0": "/imgs/dummer.png",
    "text-head-1": "Research Your Destination",
    "text-para-1":
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
    "text-para-2":
      "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
    "text-para-3":
      "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.",
    "text-para-5":
      "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
    "text-para-6":
      "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.",
    "text-para-7":
      "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
    "text-para-8":
      "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.",
  };

  const generateJsx = (key: string, data: string) => {
    const dataKey = key.split("-");
    const fieldKey = `${dataKey[0]}-${dataKey[1]}`;
    const keyToComponents: { [index: string]: React.ReactNode } = {
      "image-url": (
        <picture>
          <img src={data} alt="cover" />
        </picture>
      ),
      "text-para": <p className="text-xl leading-8 py-6">{data}</p>,
      "text-head": (
        <p className="text-2xl pt-4 font-semibold text-head-dark dark:text-head-primary">
          {data}
        </p>
      ),
    };
    return keyToComponents[fieldKey];
  };

  return (
    <div className="">
      <TracingBeam>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {Object.keys(DataMap).map((key) => generateJsx(key, DataMap[key]))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Blog;
