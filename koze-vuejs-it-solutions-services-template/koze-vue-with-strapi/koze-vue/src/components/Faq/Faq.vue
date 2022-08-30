<template>
    <div class="faq-area ptb-100">
        <div 
            class="container"
            v-if="faqs !== null"
        >
            <div class="section-title">
                <span>{{faqs.subtitle}}</span>
                <h2>{{faqs.heading}}</h2>
            </div>

            <div class="faq-accordion">
                <accordion>
                    <accordion-item
                        v-for="faq in faqs.faqAccordion"
                        :key="faq.id"
                    >
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                {{faq.title}}
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>{{faq.desc}}</p>
                        </template>
                    </accordion-item>
                </accordion>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    },
    data (){
        return {
            faqs: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/faq?populate=*')
        const { data: {attributes} } = response.data
        this.faqs = attributes
    },
}
</script>