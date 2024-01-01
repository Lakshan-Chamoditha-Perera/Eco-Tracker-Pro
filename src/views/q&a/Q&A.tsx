import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

interface Question {
    statement: string,
    answer: string
}

export default function Questions() {
    const questions: Question[] = [{
        statement: 'What is EcoTrack Pro?',
        answer: 'EcoTrack Pro is an innovative waste management platform designed to transform how waste is handled in public spaces across Sri Lanka. It focuses on transparency, efficiency, and sustainability.'
    }, {
        statement: 'How does EcoTrack Pro work?',
        answer: 'The platform integrates cutting-edge technology, including IoT sensors, to monitor waste bins in real-time. Users can easily schedule waste disposal services, provide feedback, and engage in sustainable waste management practices.'
    }, {
        statement: 'What are the key features?',
        answer: 'Some of the standout features include real-time bin monitoring, a user-friendly interface for service scheduling, tailored solutions for different locations, community engagement through feedback, and a strong commitment to sustainability.'
    }, {
        statement: 'Is EcoTrack Pro available in all areas of Sri Lanka?',
        answer: 'While our aim is to cover as many regions as possible, the platform might have varying availability based on location. We\'re continuously expanding to serve more communities across Sri Lanka.'
    }, {
        statement: 'How can I get involved with EcoTrack Pro?',
        answer: 'You can engage with us by providing feedback, using our services, and spreading awareness about responsible waste management. Additionally, businesses and organizations can explore partnerships or collaborations with us.'
    }, {
        statement: 'Is EcoTrack Pro environmentally friendly?',
        answer: 'Yes. EcoTrack Pro is committed to sustainability and environmental protection. Our platform is designed to reduce waste, encourage recycling, and promote a circular economy.'
    }, {
        statement: 'How can I use EcoTrack Pro?',
        answer: 'You can use EcoTrack Pro by visiting our website. You can also contact us directly for more information.'
    }];

    return (<section className={'my-[50px] px-[320px] flex flex-col items-center justify-center'}>
        <h2 className={'text-3xl mb-7  font-medium text-[#0FAF72]'}>
            FREQUENTLY ASKED QUESTIONS
        </h2>
        <Accordion variant={'splitted'} className={'w-[80%]'}>
            {questions.map((question: Question, index: number) => (
                <AccordionItem className={'m-2 p-4 rounded-[20px] bg-[#F8FBFB]'} key={index}
                               title={question.statement}>
                    {question.answer}
                </AccordionItem>))}
        </Accordion>
    </section>);
}