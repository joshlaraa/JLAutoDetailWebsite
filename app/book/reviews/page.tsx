import React from 'react'
import { StarIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReviewsPage() {
    const reviews = [
        {
            id: 1,
            name: 'Alice Johnson',
            avatar: '/placeholder.svg?height=40&width=40',
            rating: 5,
            comment:
                'LPD is my go to for washes. They are phenomenal and have great attention to detail and all of the guys working there are so friendly and nice.',
            date: '2024-08-15',
        },
        {
            id: 2,
            name: 'Bob Smith',
            avatar: '/placeholder.svg?height=40&width=40',
            rating: 5,
            comment:
                "I got the complete detail and I am blown away at how clean my car is! I had stains on my seats and hadn't had it properly cleaned in over a year. Looks brand new, worth the money! Couldn't be happier! Thank you!",
            date: '2024-08-01',
        },
        {
            id: 3,
            name: 'Carol White',
            avatar: '/placeholder.svg?height=40&width=40',
            rating: 5,
            comment:
                "I can't recommend this place enough. They always do amazing work and their attention to detail is second to none. I've had my car hand washed at multiple other places locally and none even come close to the job that LPD does. I really appreciate the fact that they take the time to get every nook and cranny of my wheels clean, so that I don't have to go home and touch them up myself afterwards, like I had to do before with other places.",
            date: '2024-07-20',
        },
        {
            id: 3,
            name: 'John Doe',
            avatar: '/placeholder.svg?height=40&width=40',
            rating: 5,
            comment:
                'Great hand wash! Drove in from Arizona for a car show and this was our first stop. They did a fantastic job with our Audi RS3 and I would highly recommend!',
            date: '2024-07-07',
        },
    ]

    return (
        <section className="">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="flex items-center justify-center text-4xl font-bold text-black capitalize dark:text-white">
                    Reviews
                </h1>
                <span className="mt-2 flex items-center justify-center mx-auto font-bold text-xl text-gray-500">
                    Take a look at what our customers have to say.
                </span>
                <div className="mt-10 grid gap-6">
                    {reviews.map((review) => (
                        <Card key={review.id} className="bg-white shadow-lg">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar>
                                    <AvatarImage
                                        src={review.avatar}
                                        alt={review.name}
                                    />
                                    <AvatarFallback>
                                        {review.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-xl font-semibold text-black">
                                        {review.name}
                                    </CardTitle>
                                    <p className="text-sm text-gray-500">
                                        {review.date}
                                    </p>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i < review.rating
                                                    ? 'text-[#219ebc] fill-[#219ebc]'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-black">{review.comment}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
