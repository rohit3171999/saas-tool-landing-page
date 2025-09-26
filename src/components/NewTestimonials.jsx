/*
* Creating another testimonial section for saas tool landing page
* */
export default function NewTestimonials({name, designation, review, imageURL}) {

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">

                {/* Testimonial Card */}
                <figure className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            className="h-56 w-full object-cover md:h-full md:w-56"
                            src={imageURL}
                            alt={name}

                        />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <blockquote className="text-xl md:text-2xl font-medium text-gray-800">
                            <p>{review}</p>
                        </blockquote>
                        <figcaption className="mt-6">
                            <div className="font-semibold text-gray-900">{name}</div>
                            <div className="text-gray-500">{designation}</div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
}