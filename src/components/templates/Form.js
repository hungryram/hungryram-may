import * as React from 'react'
import { useState } from 'react'
import { FaSpinner } from '@react-icons/all-files/fa/FaSpinner'
import { navigate } from 'gatsby'

export default function Form() {

    const [sending, setSending] = useState('Idle')


    const handleSubmit = async (e) => {
        setSending('Sending')
        e.preventDefault()
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.emailAddress.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/postmark'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const submit = await fetch(endpoint, options)
        const res = await submit.json()
        if (res.ErrorCode === 0) {
            setSending('Sent')
            console.log('Sent:', res)
            navigate('/thank-you')
        }
        else {
            setSending('Error')
            console.log('Error:', res)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 p-2 bg-[#e9eff6] w-full"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 p-2 bg-[#e9eff6] w-full"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="emailAddress"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 p-2 bg-[#e9eff6] w-full"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                className="mt-1 p-2 bg-[#e9eff6] w-full"
                            />
                        </div>


                        <div className="mt-1 col-span-6">
                            <textarea
                                id="about"
                                name="message"
                                rows={6}
                                className="mt-1 py-2 bg-[#e9eff6] w-full p-2"
                                placeholder="Your message, please include details about your business"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                    <p className="m-5 text-sm text-black">By submitting the form with your information above you are agreeing to our Terms and Conditions and Privacy Policy</p>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="primary-button px-20"
                    >
                        {sending === 'Idle' ?
                            'Submit'
                            : sending === 'Sending' ?
                                <FaSpinner className="animate-spin mx-auto text-xl" />
                                : sending === 'Sent' ?
                                    'Sent'
                                    : 'Error'
                        }
                    </button>
                </div>
            </div>
        </form>
    )
}
