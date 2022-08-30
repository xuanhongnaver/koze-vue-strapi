<template>
    <div class="faq-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span>FAQ</span>
                <h2>Frequently Ask Questions</h2>
            </div>

            <div class="faq-accordion">
                <accordion>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                Why Are Consultants Important?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                What is The Purpose of a Consultant?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                What Attracts You To The Role of a Consultant?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                What Are The Advantages of Being a Consultant?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                Is Consulting a Good Career?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <button class="accordion-button">
                                How is Working in Consulting?
                            </button>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh felis tortor viverra pulvinar nibh tincidunt pellentesque dolor. Sem lectus magna metus sit felis, ipsum, et. Auctor tellus id nunc nibh felis aliquam.</p>
                        </template>
                    </accordion-item>
                </accordion>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    }
}
</script>