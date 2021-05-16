import styled from 'styled-components';
import * as Survey from 'survey-react';
import 'survey-react/modern.css';

const SurveyDiv = styled.div``;
Survey.StylesManager.applyTheme('modern');

function SurveyComponent() {
    const json = {
        pages: [
            {
                title: 'These questions look at how well you deal with conflict ',
                questions: [
                    {
                        type: 'matrix',
                        name: 'conflict',
                        isAllRowRequired: true,
                        title: 'Please indicate if you agree or disagree with the following statements',
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
                                text: 'Do you always have to have the last word in a disagreement?',
                            },
                            {
                                value: '2',
                                text: "It is hard to see another's point of view?",
                            },
                            {
                                value: '3',
                                text: 'Do you always keep your opinion to yourself?',
                            },
                            {
                                value: '4',
                                text: 'Have you been threatened for sharing your opinion?',
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
                        title: 'Please indicate if you agree or disagree with the following statements',
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
                                text: 'When you get angry do you think of hurting yourself?',
                            },
                            {
                                value: '2',
                                text: 'Do you keep your anger bottled up inside?',
                            },
                            {
                                value: '3',
                                text: 'Do you have to scream or hit something to get your anger out?',
                            },
                            {
                                value: '4',
                                text: 'How often do you get angry?',
                            },
                            {
                                value: '5',
                                text: 'Does anyone around you take their anger out on you or the people you love?',
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
                        title: 'Please indicate if you agree or disagree with the following statements',
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
                                text: 'Do you like what you see when you look in the mirror?',
                            },
                            {
                                value: 'does what it claims',
                                text: 'Product does what it claims',
                            },
                            {
                                value: 'better then others',
                                text: 'Product is better than other products on the market',
                            },
                            {
                                value: 'easy to use',
                                text: 'Product is easy to use',
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
