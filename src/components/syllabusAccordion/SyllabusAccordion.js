import { initFlowbite } from 'flowbite';
import './SyllabusAccordion.scss'
import React, { useEffect } from 'react';
import { Accordion } from 'flowbite-react';
import HTMLReactParser from 'html-react-parser';

const SyllabusAccordion = ({itemArray}) => {
    useEffect(()=>{
        initFlowbite()
    },[])
    return (
        <div className='w-full'>
            <h3>Our Syllabus</h3>
            <Accordion className='accordion-career-wrapper' alwaysOpen={true}>
                {itemArray && itemArray.map((item, index) => (
                    <Accordion.Panel key={index} >
                        <Accordion.Title className='accordion-title py-2 px-3 focus:ring-0'>{item.name}</Accordion.Title>
                        <Accordion.Content className='py-2 px-5 accordion-body'>
                            {HTMLReactParser(item.content)}
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    );
};

export default SyllabusAccordion;