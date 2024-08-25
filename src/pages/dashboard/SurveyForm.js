import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitSurveyThunk } from '../../features/surveyForm/surveyThunk'; // Ensure this import is correct
import FormContainer from '../../assets/wrappers/Survey'; // Ensure this import is correct
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

function EWasteSurveyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    heardAboutEwaste: '',
    disposalMethod: '',
    participatedInProgram: '',
    upgradeFrequency: '',
    likelihoodToRecycle: '',
    motivationForRecycling: [],
    barriersToRecycling: [],
    informedAboutImpact: '',
    enoughInformation: '',
    willingToParticipate: '',
    schoolCommunitySupport: '',
    stepsToReduceEWaste: '',
    improveClassInformation: '',
    overallEffectiveness: '',
    mostImpactfulPart: '',
    additionalComments: '',
  });

  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate

  // Validation function
  const validateForm = (data) => {
    const errors = [];
  
    if (!data.fullName) errors.push('Full Name is required.');
    if (!data.age) errors.push('Age is required.');
    if (!data.gender) errors.push('Gender is required.');
    if (!data.heardAboutEwaste) errors.push('Please indicate how you heard about e-waste.');
    if (!data.disposalMethod) errors.push('Please specify your usual e-waste disposal method.');
    if (!data.participatedInProgram) errors.push('Please indicate if you have participated in any e-waste recycling programs.');
    if (!data.upgradeFrequency) errors.push('Please specify how often you upgrade your electronic devices.');
    if (!data.likelihoodToRecycle) errors.push('Please specify your likelihood to recycle e-waste.');
    if (!data.motivationForRecycling) errors.push('Please specify your motivation for recycling e-waste.');
    if (!data.barriersToRecycling) errors.push('Please specify any barriers to recycling e-waste.');
    if (!data.informedAboutImpact) errors.push('Please indicate if you are informed about the environmental impact of e-waste.');
    if (!data.enoughInformation) errors.push('Please indicate if you feel you have enough information about e-waste.');
    if (!data.willingToParticipate) errors.push('Please specify if you are willing to participate in e-waste recycling programs.');
    if (!data.schoolCommunitySupport) errors.push('Please indicate if you think your school/community supports e-waste recycling.');
    if (!data.stepsToReduceEWaste) errors.push('Please specify what steps you take to reduce e-waste.');
    if (!data.improveClassInformation) errors.push('Please indicate how you think class information on e-waste can be improved.');
    if (!data.overallEffectiveness) errors.push('Please rate the overall effectiveness of e-waste recycling efforts.');
    if (!data.mostImpactfulPart) errors.push('Please specify the most impactful part of the e-waste recycling program for you.');
  
    // Add more validation rules as needed based on the fields in your form
  
    return errors;
  };

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter((v) => v !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData); // Debugging statement

    // Validate form data
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      // Show toast notification for validation errors
      validationErrors.forEach((error) => toast.error(error));
      return; // Stop further execution if there are validation errors
    }

    // Dispatch the thunk if validation passes
    dispatch(submitSurveyThunk(formData))
      .unwrap()
      .then((response) => {
        console.log('Survey submitted successfully:', response);
        toast.success('Survey submitted successfully!'); // Show success message
        navigate('/'); // Redirect to home page
      })
      .catch((error) => {
        console.error('Failed to submit survey:', error);
        const errorMessage = error.message || 'Failed to submit survey. Please try again.';
        toast.error(errorMessage); // Show error message from backend
      });
  };

  return (
    <FormContainer>
      <h1>E-Waste Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <p>Had you heard about e-waste before attending this class?</p>
          <label>
            <input type="radio" name="heardAboutEwaste" value="Yes, I knew a lot about it" onChange={handleChange} />
            Yes, I knew a lot about it
          </label>
          <label>
            <input type="radio" name="heardAboutEwaste" value="Yes, but I knew only a little" onChange={handleChange} />
            Yes, but I knew only a little
          </label>
          <label>
            <input type="radio" name="heardAboutEwaste" value="No, I had never heard of it" onChange={handleChange} />
            No, I had never heard of it
          </label>
        </div>
        <div>
          <p>How do you currently dispose of old electronic devices?</p>
          <label>
            <input type="radio" name="disposalMethod" value="Throw them in the trash" onChange={handleChange} />
            Throw them in the trash
          </label>
          <label>
            <input type="radio" name="disposalMethod" value="Store them at home" onChange={handleChange} />
            Store them at home
          </label>
          <label>
            <input type="radio" name="disposalMethod" value="Recycle" onChange={handleChange} />
            Recycle
          </label>
          <label>
            <input type="radio" name="disposalMethod" value="Donate or sell them" onChange={handleChange} />
            Donate or sell them
          </label>
        </div>
        <div>
          <p>Have you ever participated in an e-waste recycling program before this class?</p>
          <label>
            <input type="radio" name="participatedInProgram" value="Yes" onChange={handleChange} />
            Yes
          </label>
          <label>
            <input type="radio" name="participatedInProgram" value="No" onChange={handleChange} />
            No
          </label>
        </div>
        <div>
          <p>How often do you upgrade to new electronic devices?</p>
          <label>
            <input type="radio" name="upgradeFrequency" value="Every year" onChange={handleChange} />
            Every year
          </label>
          <label>
            <input type="radio" name="upgradeFrequency" value="Every 2-3 years" onChange={handleChange} />
            Every 2-3 years
          </label>
          <label>
            <input type="radio" name="upgradeFrequency" value="Only when necessary" onChange={handleChange} />
            Only when necessary
          </label>
          <label>
            <input type="radio" name="upgradeFrequency" value="Rarely or never" onChange={handleChange} />
            Rarely or never
          </label>
        </div>
        <div>
          <p>How likely are you to recycle your old electronic devices after attending this class?</p>
          <label>
            <input type="radio" name="likelihoodToRecycle" value="Very likely" onChange={handleChange} />
            Very likely
          </label>
          <label>
            <input type="radio" name="likelihoodToRecycle" value="Somewhat likely" onChange={handleChange} />
            Somewhat likely
          </label>
          <label>
            <input type="radio" name="likelihoodToRecycle" value="Neutral" onChange={handleChange} />
            Neutral
          </label>
          <label>
            <input type="radio" name="likelihoodToRecycle" value="Unlikely" onChange={handleChange} />
            Unlikely
          </label>
        </div>
        <div>
          <p>What motivates you most to properly recycle e-waste? (Select up to 2)</p>
          <label>
            <input type="checkbox" name="motivationForRecycling" value="Protecting the environment" onChange={handleChange} />
            Protecting the environment
          </label>
          <label>
            <input type="checkbox" name="motivationForRecycling" value="Financial incentives (e.g., cashback, discounts)" onChange={handleChange} />
            Financial incentives (e.g., cashback, discounts)
          </label>
          <label>
            <input type="checkbox" name="motivationForRecycling" value="Reducing clutter at home" onChange={handleChange} />
            Reducing clutter at home
          </label>
          <label>
            <input type="checkbox" name="motivationForRecycling" value="Encouragement from family/friends" onChange={handleChange} />
            Encouragement from family/friends
          </label>
        </div>
        <div>
          <p>What barriers, if any, prevent you from recycling e-waste? (Select all that apply)</p>
          <label>
            <input type="checkbox" name="barriersToRecycling" value="Lack of information about where to recycle" onChange={handleChange} />
            Lack of information about where to recycle
          </label>
          <label>
            <input type="checkbox" name="barriersToRecycling" value="Inconvenient recycling locations" onChange={handleChange} />
            Inconvenient recycling locations
          </label>
          <label>
            <input type="checkbox" name="barriersToRecycling" value="Lack of time" onChange={handleChange} />
            Lack of time
          </label>
          <label>
            <input type="checkbox" name="barriersToRecycling" value="Cost of recycling" onChange={handleChange} />
            Cost of recycling
          </label>
        </div>
        <div>
          <p>Do you feel informed about the impact of e-waste on the environment and human health?</p>
          <label>
            <input type="radio" name="informedAboutImpact" value="Yes, I feel informed" onChange={handleChange} />
            Yes, I feel informed
          </label>
          <label>
            <input type="radio" name="informedAboutImpact" value="No, I need more information" onChange={handleChange} />
            No, I need more information
          </label>
        </div>
        <div>
          <p>Do you have enough information about how to properly recycle e-waste?</p>
          <label>
            <input type="radio" name="enoughInformation" value="Yes" onChange={handleChange} />
            Yes
          </label>
          <label>
            <input type="radio" name="enoughInformation" value="No" onChange={handleChange} />
            No
          </label>
        </div>
        <div>
          <p>Are you willing to participate in e-waste recycling programs in your community?</p>
          <label>
            <input type="radio" name="willingToParticipate" value="Yes" onChange={handleChange} />
            Yes
          </label>
          <label>
            <input type="radio" name="willingToParticipate" value="No" onChange={handleChange} />
            No
          </label>
        </div>
        <div>
          <p>Does your school or community offer support or resources for e-waste recycling?</p>
          <label>
            <input type="radio" name="schoolCommunitySupport" value="Yes" onChange={handleChange} />
            Yes
          </label>
          <label>
            <input type="radio" name="schoolCommunitySupport" value="No" onChange={handleChange} />
            No
          </label>
        </div>
        <div>
          <label>What steps do you think are necessary to reduce e-waste in your community?</label>
          <textarea name="stepsToReduceEWaste" value={formData.stepsToReduceEWaste} onChange={handleChange} />
        </div>
        <div>
          <label>What improvements would you suggest for the e-waste recycling program in your class?</label>
          <textarea name="improveClassInformation" value={formData.improveClassInformation} onChange={handleChange} />
        </div>
        <div>
          <label>Overall, how effective was the e-waste class in increasing your knowledge and awareness?</label>
          <textarea name="overallEffectiveness" value={formData.overallEffectiveness} onChange={handleChange} />
        </div>
        <div>
          <label>What part of the e-waste class did you find most impactful?</label>
          <textarea name="mostImpactfulPart" value={formData.mostImpactfulPart} onChange={handleChange} />
        </div>
        <div>
          <label>Additional Comments:</label>
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
        </div>
        <button type="submit">Submit Survey</button>
      </form>
    </FormContainer>
  );
}

export default EWasteSurveyForm;
