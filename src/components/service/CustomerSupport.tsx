import { FC } from "react"


const CustomerSupport: FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl text-center">24-Hour Support for Coffee Technology Automation Maintenance</h1>
            <span className="text-center">Keeping your coffee operations running smoothly—day or night.</span>

            <p>At [Your Company], we know how critical it is for your coffee production systems
                 to be operational at all times. That&apos;s why our 24-Hour Support for Coffee 
                 Technology Automation Maintenance is available to ensure your operations run 
                 seamlessly. Whether you encounter an issue or need routine maintenance, our 
                 team of experts is ready to provide real-time troubleshooting and proactive 
                 service. With our support, you can minimize downtime and keep your systems 
                 performing at their best, allowing you to focus on delivering exceptional 
                 coffee to your customers.</p>

            <div>
                <h1 className="font-bold">Key Features:</h1>

                <ul className="list-disc">
                    <li>24/7 availability for real-time troubleshooting</li>
                    <li>Proactive maintenance to prevent system breakdowns</li>
                    <li>Experienced support team dedicated to your coffee operations</li>
                    <li>Quick response times to minimize downtime</li>  
                </ul>
            </div>


            <div>
                <h1>Testimonials</h1>
                <p>The 24-hour support from [Your Company] has been a game-changer for our 
                    business. Anytime we run into a technical issue, they’re there 
                    immediately to resolve it. Their team is incredibly knowledgeable, 
                    and our systems have been running flawlessly since we partnered with 
                    them.</p>
            </div>
        </div>
    )
}


export default CustomerSupport