import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import SurveyList from './SurveyList';

const StyledSurveyBrowsingSection = styled.div`
    padding: 30px 60px;
    .survey-section-header {
        padding: 0 0 10px 0;
        display: flex;
        align-items: center;

        .survey-browsing-title {
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }

        .survey-browsing-checkboxes {
            margin: 20px 0 0 50px;
            font-size: 20px;
            font-weight: 200;
        }
        .survey-filter {
            margin: 0 15px 0 10px;
            .form-check-label {
                padding: 0 0 0 5px;
            }
        }
    }
`;

function SurveyBrowsingSection() {
    return (
        <StyledSurveyBrowsingSection>
            <div className="survey-section-header">
                <h1 className="survey-browsing-title">Surveys Available</h1>
                <div
                    className="mb-3 survey-browsing-checkboxes"
                    key="inline-checkbox"
                >
                    <Form.Check
                        inline
                        label="New Surey"
                        type="checkbox"
                        id="inline-checkbox-1"
                        className="survey-filter"
                    />
                    <Form.Check
                        inline
                        label="In Progress"
                        type="checkbox"
                        id="inline-checkbox-2"
                        className="survey-filter"
                    />
                    <Form.Check
                        inline
                        label="Results Available"
                        type="checkbox"
                        id="inline-checkbox-3"
                        className="survey-filter"
                    />
                </div>
            </div>
            <div className="survey-browsing-list">
                <SurveyList />
            </div>
        </StyledSurveyBrowsingSection>
    );
}

export default SurveyBrowsingSection;
