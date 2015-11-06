/* FACTORY */

'use strict';

angular.module('factory', [])

.factory('$data', function() {
    var data = {};

    data.items = [
        {
            title: 'WHAT',
            sub: 'but... what is it?',
            one: 'Dan would say:',
            two: '"Interaction Design is about behaviour, how things work. I push a button on my mobile phone, and something happens. Defining what happens when a person uses a product or a service is what interaction designers do."',
            three: ' ~ Dan Saffer',
            four: 'Gillian would put it this way:',
            five: '"If i were to sum up Interaction Design in a sentence, I would say that its about shaping our everyday life through digital artifacts - for work, for play, and for entertainment."',
            six: ' ~ Gillian Crampton Smith',
            seven: 'Chris would define it as such:',
            eight: '"the exchange of information between two or more active participants, an iterative process of listening, thinking, and speaking between two or more actors"',
            nine: ' ~ Chris Crawford'
        },
        {
            title: 'WHO',
            sub: 'in which we uncover who really does interaction design?',
            one: 'Who does Interaction Design? Good question. I would argue that we all do it - designers of all sorts. Some of it is conscious, some of it unconscious.',
            two: 'In fact, Interaction Design is made up from several different disciplines itself... so the people that work in IxD come from very diverse backgrounds!',
            three: 'Just take a look at this picture:',
            four: 'Or this one:',
            five: '... or this one:'
        },
        {
            title: 'HOW',
            sub: 'just another design process',
            one: 'Pose or uncover Design Problem',
            two: 'Test',
            three: 'Ethnographic Research',
            four: 'Test',
            five: 'Wireframes!',
            six: 'Test',
            seven: 'User (Personas | Stories | Flows | Scenarios | Task Models|etc)',
            eight: 'Te-- ... you get the picture'
        },
        {
            title: 'DESIGN',
            sub: 'is it just about making it look pretty?',
            one: 'We still Design with Grids.',
            two: 'We still pay attention to Visual Hierarchy.',
            three: 'We still follow the same Typographic rules.',
            four: 'But now we have things like States & Animation',
            five: 'But now we have things like Context.',
            six: 'But now we have things like Fitts Law.',
        },
        {
            title: '-UI',
            sub: 'alphabet soup',
        },
        {
            title: 'INPUTS',
            sub: 'how do i turn this thing on?',
            one: 'switch',
            two: 'button',
            three: 'radio button',
            four: 'dial'
        },
        {
            title: 'EXAMPLES',
            sub: 'show me the money',
            one: 'switch',
            two: 'button',
            three: 'radio button',
            four: 'dial'
        },
        {
            title: 'QUESTIONS',
            sub: 'you may ask yourself',
            one: 'What is that beautiful house?',
            two: 'Where does that highway go?',
            three: 'How do I craft this experience?',
            four: 'How can I get my users to dance?'
        },
    ];

    return data;
});
