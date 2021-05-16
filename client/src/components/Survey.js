import styled from 'styled-components';
import * as Survey from 'survey-react';
import 'survey-react/modern.css';

const SurveyDiv = styled.div``;
Survey.StylesManager.applyTheme('modern');

function SurveyComponent() {
    const json = {
        pages: [
            {
                title: 'Hello, tell us a bit about yourself ',
                questions: [
                    {
                        type: 'dropdown',
                        name: 'state',
                        title: 'What state do you live in?',
                        isRequired: true,
                        colCount: 0,
                        choices: ['None', 'Ford'],
                    },
                    {
                        type: 'dropdown',
                        name: 'city',
                        title: 'What city do you live in?',
                        isRequired: true,
                        colCount: 0,
                        choices: ['None', 'Ford'],
                    },
                    {
                        name: 'school name',
                        type: 'text',
                        title: 'What is the name of your school? ',
                        placeHolder: 'Your School',
                        isRequired: true,
                    },
                    {
                        type: 'dropdown',
                        name: 'grade',
                        title: 'What grade are you in?',
                        isRequired: true,
                        colCount: 0,
                        choices: [
                            '6th',
                            '7th',
                            '8th',
                            '9th',
                            '10th',
                            '11th',
                            '12th',
                            'adult',
                        ],
                    },
                ],
            },
            {
                title:
                    'These questions look at how well you deal with conflict ',
                questions: [
                    {
                        type: 'matrix',
                        name: 'conflict',
                        isAllRowRequired: true,
                        title:
                            'Please indicate if you agree or disagree with the following statements',
                        columns: [
                            { value: 1, text: 'Strongly Disagree' },
                            { value: 2, text: 'Disagree' },
                            { value: 3, text: 'Neutral' },
                            { value: 4, text: 'Agree' },
                            { value: 5, text: 'Strongly Agree' },
                        ],
                        rows: [
                            {
                                value: '1',
                                text:
                                    'Do you always have to have the last word in a disagreement?',
                            },
                            {
                                value: '2',
                                text:
                                    "It is hard to see another's point of view?",
                            },
                            {
                                value: '3',
                                text:
                                    'Do you always keep your opinion to yourself?',
                            },
                            {
                                value: '4',
                                text:
                                    'Have you been threatened for sharing your opinion?',
                            },
                            {
                                value: '5',
                                text: 'Are you uncomfortable around conflict?',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'These questions deal with anger ',
                questions: [
                    {
                        type: 'matrix',
                        name: 'anger',
                        isAllRowRequired: true,
                        title:
                            'Please indicate if you agree or disagree with the following statements',
                        columns: [
                            { value: 1, text: 'Strongly Disagree' },
                            { value: 2, text: 'Disagree' },
                            { value: 3, text: 'Neutral' },
                            { value: 4, text: 'Agree' },
                            { value: 5, text: 'Strongly Agree' },
                        ],
                        rows: [
                            {
                                value: '1',
                                text:
                                    'When you get angry do you think of hurting yourself?',
                            },
                            {
                                value: '2',
                                text:
                                    'Do you keep your anger bottled up inside?',
                            },
                            {
                                value: '3',
                                text:
                                    'Do you have to scream or hit something to get your anger out?',
                            },
                            {
                                value: '4',
                                text: 'How often do you get angry?',
                            },
                            {
                                value: '5',
                                text:
                                    'Does anyone around you take their anger out on you or the people you love?',
                            },
                        ],
                    },
                ],
            },
            {
                title: ' These questions deal with your self-esteem',
                questions: [
                    {
                        type: 'matrix',
                        name: 'self-esteem',
                        isAllRowRequired: true,
                        title:
                            'Please indicate if you agree or disagree with the following statements',
                        columns: [
                            { value: 1, text: 'Strongly Disagree' },
                            { value: 2, text: 'Disagree' },
                            { value: 3, text: 'Neutral' },
                            { value: 4, text: 'Agree' },
                            { value: 5, text: 'Strongly Agree' },
                        ],
                        rows: [
                            {
                                value: '1',
                                text:
                                    'Do you like what you see when you look in the mirror?',
                            },
                            {
                                value: '2',
                                text:
                                    'Do you remain friends with people that call you names or treat you badly?',
                            },
                            {
                                value: '3',
                                text:
                                    'Do you compare yourself to friends and people around you?',
                            },
                            {
                                value: '4',
                                text:
                                    'Do people you love the most talk negative to you or put you down?',
                            },
                            {
                                value: '5',
                                text: 'Do you always focus on your weaknesses?',
                            },
                        ],
                    },
                ],
            },
        ],
    };
    const survey = new Survey.Model(json);
    return (
        <SurveyDiv>
            <Survey.Survey model={survey} />
        </SurveyDiv>
    );
}

export default SurveyComponent;
