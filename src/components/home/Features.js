import * as React from "react"

export default function Features() {
    return (
        <div className="section">
            <div className="container primary-bg md:p-20 py-20 rounded-lg">
                <div className="text-white">
                    <div className="flex justify-center">
                        <div className="lg:w-1/2 text-center">
                            <h2 className="h2">Succeed with the right website for your business</h2>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 mt-20 gap-y-20 gap-x-10">
                        <div>
                            <h3 className="text-xl mb-5">Responsive web design</h3>
                            <p>Delivering the best browsing experience for your visitors on any device and modern browsers.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Easy-to-navigate website</h3>
                            <p>Ideal website structure allows your visitors to find the inforamtion they need about your business.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Revolutionary approach</h3>
                            <p>Major brands like Airbnb and Nike are building websites with jamstack for all its performance and security benefits.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Customized Admin</h3>
                            <p>A unique admin customized to your website. Take control of your content and information.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Automated backups</h3>
                            <p>No more worrying about losing information. Your website will be able to retrieve information you've saved in the past.</p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-5">Ongoing support & maintenance</h3>
                            <p>Receive new website features and updates. Don't have time to update your site? Our developers are always available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}