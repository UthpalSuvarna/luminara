
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Outreach Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/outreach-event-1.jpg"
            alt="Outreach Event 1"
            width={500}
            height={300}
            className="object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Community Mental Health Awareness</h2>
            <p className="text-gray-700">
              We conducted a mental health awareness program in the local community, reaching out to over 200 people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
