'use client'

import Image from 'next/image'
import {Card, CardContent} from '../ui/card'
import Title from '../Title'
import {Input} from '../ui/input'
import {Textarea} from '../ui/textarea'
import {Button} from '../ui/button'

export default function ContactForm() {
    return (
        <section className="py-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-10">
                {/* Sol: Görsel */}
                <div className="lg:w-1/2 w-full relative min-h-[600px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="https://peacefulqode.co.in/themes/melipona/html/images/form/form-1.jpg"
                        alt="Contact"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Sağ: Form */}
                <Card className="lg:w-1/2 w-full bg-slate-50 border-none shadow-none flex flex-col">
                    <CardContent className="flex flex-col justify-between h-full md:p-10">
                        <div>
                            <Title
                                title="Send Us A Message"
                                subTitle="Contact us"
                                description="It look in the best like readable English"
                                className="mb-8"
                            />
                            <form className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <Input
                                        id="surname"
                                        placeholder="Enter your surname"
                                    />
                                </div>

                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />

                                <Textarea
                                    id="message"
                                    placeholder="Write your message..."
                                    rows={5}
                                />

                                <div className="flex justify-end mt-4">
                                    <Button size="lg" type="submit">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
