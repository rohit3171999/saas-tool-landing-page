/*
* Description: Highlight CTA again with a simple sign-up form.
* Purpose: Push visitors to register by making the process frictionless.
* */
function CallToActionSection(){
    return (
        // <section> (wrapper)
        <section id="signup" className="bg-indigo-600 py-20">
            <div className="container mx-auto px-4 text-center">
                {/*<h2> (heading: “Get Started Today – It’s Free”)*/}
                <h2 className="text-3xl md:text-4xl font-extrabold text-whitet">
                    Getting Start today- It's free
                </h2>
                <p className="text-indigo-200 mt-4 max-w-2xl mx-auto">
                    Join thousand of teams who are already boosting their productivity. No credit card required.</p>
                {/*<form> (sign-up form)*/}
                <div className="mt-8 max-w-lg mx-auto">
                    <form className="space-y-4">
                        {/*<input type="text"> (Name)*/}
                        <div>
                        <input type="text" placeholder="Enter Your Name" required className="w-full px-4 py-3 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"/>
                        </div>
                        {/*<input type="email"> (Email)*/}
                        <div>
                        <input type="email" placeholder="Youe Email" required className="w-full px-4 py-3 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"/>
                        </div>
                        {/*<input type="password"> (Password)*/}
                        <div>
                        <input type="password" placeholder="Create a password" required className="w-full px-4 py-3 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"/>
                        </div>
                        {/*<button type="submit"> (Sign-up)*/}
                        <button type="submit"
                        className="w-full bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition-colors duration-300">
                            Sign up for free
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default CallToActionSection;